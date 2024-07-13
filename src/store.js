const { act } = require("react");

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case "account/requestLoan":
      return { ...state, loan: action.payload };

    case "account/payBackLoan":
      return {
        ...state,
        laon: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
};
