const initialState = {
  user: null,
  friend: null
}



export default (state = {}, action) => {
  switch (action.type){
    case "GET_FRIENDS_PENDING":
      return state;
    case "GET_FRIENDS_FULFILLED":
    // I JUST ADDED THE INITIAL STATE AND CONVERTED TO AN OBJECT, NOT ARRAY
    // FIX IT IN FRIENDS COMPONENTS!!
      return {
        user: [...action.payload.data]
      };
    case "GET_FRIEND_PENDING":
      return state;
    case "GET_FRIEND_FULFILLED":
    console.log('getFriend reducer', action.payload.data);
      return {
        friend: [action.payload.data]
      };
    case "PUT_DATE_PENDING":
        return state;
    case "PUT_DATE_FULFILLED":
    console.log("reducer: PutDate - PUT", action.payload.data);
        // return [...action.payload.data];
        return        {
          friend: [action.payload.data]
        };


    default:
      return state;
  }
}
