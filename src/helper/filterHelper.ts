/* eslint-disable @typescript-eslint/no-explicit-any */

import { Query } from "mongoose";
import IQueryObj from "../types/IQueryObj";

export const filterHelper = <T>(model: Query<T[], T>, query: IQueryObj) => {
    const excludeFields = ['page', 'limit', 'sortBy', 'sortOrder', 'minPrice', 'maxPrice'];
    const queryObj:any = { ...query };

    if (queryObj.level) {
        queryObj['details.level'] = queryObj.level;
        delete queryObj.level;
    }
    excludeFields.forEach(el => delete queryObj[el as keyof IQueryObj]);
    
    const result = model.find(queryObj);
    return result;
}