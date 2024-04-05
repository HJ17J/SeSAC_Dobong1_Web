export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// export interface Action {
//   id: number;
//   type: string;
//   payload: Todo;
// }

export interface TodoState {
  list: Todo[];
  nextID?: number;
}

export interface ReduxState {
  todo: TodoState;
}
