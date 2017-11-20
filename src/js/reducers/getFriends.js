const initialState = {
  user: null,
  friend: null
}

export default (state = {}, action) => {
  switch (action.type){
    case "GET_FRIENDS_PENDING":
      return state;
    case "GET_FRIENDS_FULFILLED":
      return {
        user: [...action.payload.data]
      };
    case "GET_FRIEND_PENDING":
      return state;
    case "GET_FRIEND_FULFILLED":
      return {
        friend: [action.payload.data]
      };
    case "PUT_DATE_PENDING":
        return state;
    case "PUT_DATE_FULFILLED":
        return        {
          friend: [action.payload.data]
        };


    default:
      return state;
  }
}
