import { Query } from "mongoose";
import IQueryObj from "../types/IQueryObj";

export const sortHelper = <T>(model: Query<T[], T>, query: IQueryObj) => {
    if (query.sortBy && query.sortOrder) {
        const sortBy = query.sortBy;
        const sortOrder = query.sortOrder || "asc";
        const sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
        model.sort(sortStr);
    } else {
        model.sort({ createdAt: 'desc' });
    }
    return model;
};