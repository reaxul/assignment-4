import { Query } from "mongoose";
import IQueryObj from "../types/IQueryObj";

export const priceFilterHelper = <T>(model: Query<T[], T>, query: IQueryObj) => {
    if (query.minPrice || query.maxPrice) {
        const minPrice = Number(query.minPrice) || 0;
        const maxPrice = Number(query.maxPrice) || 100000;
        model = model.find({ price: { $gte: minPrice, $lte: maxPrice } });
    }
    return model;
}