const initialStateCustomer = {
  fullname: "",
  nationalID: "",
  createdAt: "",
};

//Reducer (Customer)
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullname: action.payLoad };

    default:
      return state;
  }
}

//Action Creators (Customer)
export function createCustomer(fullname, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullname,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullname) {
  return { type: "customer/updateName", payLoad: fullname };
}
