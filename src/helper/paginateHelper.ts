import { Query } from "mongoose";
import IQueryObj from "../types/IQueryObj";

export const paginateHelper = <T>(model: Query<T[], T>, query: IQueryObj) => {
    if (query.page || query.limit) {
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 10;
        const skip = (page - 1) * limit;
        model = model.skip(skip).limit(limit);
    } else {
        model = model.skip(0).limit(10);
    }
    return model;
}