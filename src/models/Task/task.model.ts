export type TaskId = number | string;

export interface Task {
  id?: TaskId;
  title: string;
  description?: string;
  done?: boolean;
}
