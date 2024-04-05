import { Todo, TodoState } from '../../types/interface';

const initialState: TodoState = {
  list: [
    { id: 0, text: '리액트 공부하기', done: false },
    { id: 1, text: '운동하기', done: false },
    { id: 2, text: '저녁 먹기', done: false },
  ],
};

const CREATE = 'todo/NEW' as const; // as const > CREATE type이 "todo/NEW" (사용 안 해도 차이 없음)
const DONE = 'todo/DONE' as const;

interface Create {
  type: typeof CREATE;
  payload: { id: number; text: string };
}

interface Done {
  type: typeof DONE;
  id: number;
}

type Action = Create | Done;

let count = initialState.list.length;
initialState['nextID'] = count;

export const create = (payload: { id: number; text: string }) => ({ type: CREATE, payload });
export const done = (id: number) => ({ type: DONE, id });

export function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === '') return state;
      return {
        ...state,
        list: state.list.concat({ id: action.payload.id, text: action.payload.text, done: false }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((li) => {
          if (li.id === action.id) {
            return { ...li, done: true };
          } else {
            return li;
          }
        }),
      };
    default:
      return state;
  }
}
