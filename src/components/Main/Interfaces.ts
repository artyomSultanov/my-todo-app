export interface ITodo {
  label: string;
  done: boolean;
}

export interface ITasks {
  id: string;
  todos: ITodo[];
}
