import { Task } from "../../models";

export const mockTasks: Task[] = [
  { id: "1", title: "Task 1", description: "Description 1" },
  {
    id: "2",
    title: "Task 2",
    description:
      "Description 2asdfadsfasdfasdfasdfasdfasdfasdfadsfadsfadsfasdfadsfadsfasdfasdfasdfasdfasdfasdfasdfasdfasdfadsfasdfadsfasdf",
  },
  { id: "3", title: "Task 3", description: "Description 3", done: true },
];
