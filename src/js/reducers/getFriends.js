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

// IM NOT SURE THAT friendRequestsArr IS UPDATING IN
// REDUCER BUT IT IS ON THE SERVER
    case "PUT_FRIEND_REQUEST_ARRAY_PENDING":
      return state;
    case "PUT_FRIEND_REQUEST_ARRAY_FULFILLED":
    console.log('putFriendRequestArray', action.payload.data);
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
