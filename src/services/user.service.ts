import * as data from "../models/user.model";
import { User } from "../models/user.model";

export const getUsers = (page: number, limit: number) => {
  const start = (page - 1) * limit;
  const end = start + limit;

  return data.users.slice(start, end);
};

export const getUserById = (id: number) => {
  return data.users.find((user) => user.id === id);
};

export const createUser = (name: string, email: string) => {
  const maxId = data.users.reduce((max, user) => Math.max(max, user.id), 0);
  const newUser: User = {
    id: maxId + 1,
    name,
    email
  };

  data.users.push(newUser);
  return newUser;
};

export const updateUser = (id: number, name?: string, email?: string) => {
  const user = data.users.find((item) => item.id === id);

  if (!user) {
    return null;
  }

  if (name !== undefined) {
    user.name = name;
  }

  if (email !== undefined) {
    user.email = email;
  }

  return user;
};

export const deleteUser = (id: number) => {
  const index = data.users.findIndex((user) => user.id === id);

  if (index === -1) {
    return null;
  }

  const [removedUser] = data.users.splice(index, 1);
  return removedUser;
};
