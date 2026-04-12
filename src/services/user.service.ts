import * as data from "../models/user.model";

export const getUsers = (page: number, limit: number) => {
  const start = (page - 1) * limit;
  const end = start + limit;

  return data.users.slice(start, end);
};