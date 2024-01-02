import { Types } from "mongoose";

export interface ITags {
  name: string;
  isDeleted: boolean;
}

export interface IDetails {
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
}

export interface ICourse {
  title: string;
  instructor: string;
  categoryId: Types.ObjectId;
  price: number;
  tags: ITags[];
  startDate: Date;
  endDate: Date;
  language: string;
  provider: string;
  durationInWeeks?: number;
  details: IDetails;
}