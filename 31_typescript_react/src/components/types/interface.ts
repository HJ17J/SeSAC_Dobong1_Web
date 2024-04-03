export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface GTodo<T> {
  id: number;
  text: T; // string | number | boolean
  done: boolean;
}

export interface Post {
  id: number;
  userid: number;
  body: string;
  title: string;
}
