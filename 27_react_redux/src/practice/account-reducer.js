const initialState = 0;
const DEPOSIT = 'account/deposit';
const WITHDRAW = 'account/withdraw';

export const deposit = (money) => {
  return { type: DEPOSIT, money: money };
};

export const withdraw = (money) => {
  return { type: WITHDRAW, money: money };
};

export const accountReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action.money);
  switch (action.type) {
    case DEPOSIT:
      return state + Number(action.money);
    case WITHDRAW:
      return state - Number(action.money);
    default:
      return state;
  }
  return state;
};
