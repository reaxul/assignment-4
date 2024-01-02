import { Query } from "mongoose";
import { filterHelper } from "./filterHelper"
import IQueryObj from "../types/IQueryObj";
import { paginateHelper } from "./paginateHelper";
import { sortHelper } from "./sortHelper";
import { priceFilterHelper } from "./priceFilterHelper";

export const getQuery = <T>(model: Query<T[], T>, query: IQueryObj) => {
    const filteredData = filterHelper(model, query);
    const paginatedData = paginateHelper(filteredData, query);
    const sortedData = sortHelper(paginatedData, query);
    const filteredPrice = priceFilterHelper(sortedData, query);
    return filteredPrice;
    
}