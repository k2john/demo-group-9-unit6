export interface User {
  id: number;
  name: string;
  email: string;
}

export const users: User[] = [
  { id: 1, name: "John Doe", email: "john@gmail.com" },
  { id: 2, name: "Jane Smith", email: "jane@gmail.com" },
  { id: 3, name: "Mike Ross", email: "mike@gmail.com" },
  { id: 4, name: "Rachel Zane", email: "rachel@gmail.com" },
  { id: 5, name: "Harvey Specter", email: "harvey@gmail.com" },
  { id: 6, name: "Louis Litt", email: "louis@gmail.com" },
  { id: 7, name: "Donna Paulsen", email: "donna@gmail.com" },
  { id: 8, name: "Jessica Pearson", email: "jessica@gmail.com" },
  { id: 9, name: "Alex Williams", email: "alex@gmail.com" },
  { id: 10, name: "Chris Evans", email: "chris@gmail.com" }
];