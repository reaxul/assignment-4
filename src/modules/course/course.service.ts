import { getQuery } from "../../helper/queryHelper";
import IQueryObj from "../../types/IQueryObj";
import { ICourse } from "./course.interface";
import { Course } from "./course.model";
import mongoose from "mongoose";

const createCourseIntoDB = async (payload: ICourse): Promise<ICourse> => {
    const result = await Course.create(payload);
    return result;
};

const getAllCourseFromDB = async (query: IQueryObj): Promise<ICourse[]> => {
    const result = await getQuery(Course.find(), query);
    return result;
};

const updateCourseIntoDB = async (id: string, payload: Partial<ICourse>): Promise<ICourse | null> => {
    const { tags, details, ...rest } = payload;
    const modifiedPayload: Record<string, unknown> = { ...rest };
    if (tags && tags.length) {
        const newTags = tags.filter((tag) => !tag.isDeleted);
        await Course.findByIdAndUpdate(id, { $addToSet: { tags: { $each: newTags } } });
    }

    const removeTags = tags?.filter((tag) => tag.isDeleted).map((tag) => tag.name);

    await Course.findByIdAndUpdate(id, { $pull: { tags: { name: { $in: removeTags } } } });

    if (details && Object.keys(details).length) {
        for (const [key, value] of Object.entries(details)) {
            modifiedPayload[`details.${key}`] = value;
        }

    }
    const result = await Course.findByIdAndUpdate(id, modifiedPayload, { new: true, runValidators: true });
    return result;
}

const getCourseWithReviews = async (courseId: string) => {
    const result = await Course.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(courseId) } },
        {
            $lookup: {
                from: "reviews",
                localField: "_id",
                foreignField: "courseId",
                as: "reviews",
            },
        },
    ]);
    return result;
}

const getBestCourseFromDB = async () => {
    const result = await Course.aggregate([
        // first stage
        {
            $lookup: {
                from: "reviews",
                localField: "_id",
                foreignField: "courseId",
                as: "reviews",
            },
        },

        // second stage
        {
            $addFields: {
                averageRating: { $avg: "$reviews.rating" },
                reviewCount: { $size: "$reviews" },
            },
        },

        // third stage
        {
            $sort: {
                averageRating: -1, reviewCount: -1,
            },
        },

        // fourth stage
        {
            $limit: 1,
        },

        // fifth stage
        {
            $project: {
                reviews: false,
            },
        },
    ]);

    return result;
};


export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    updateCourseIntoDB,
    getCourseWithReviews,
    getBestCourseFromDB,
}