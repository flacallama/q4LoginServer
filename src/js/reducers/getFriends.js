const initialState = {
  user: null,
  friend: null,
  friendsReqArr: [],
  friendsArr: []
}

export default (state = initialState, action) => {
  console.log('in getFriends reducer');
  switch (action.type){
    case "GET_FRIENDS_PENDING":
      return state;
    case "GET_FRIENDS_FULFILLED":
      return  {...state, user: action.payload.data};



    case "GET_FRIEND_PENDING":
      return state;
    case "GET_FRIEND_FULFILLED":
    // console.log('reducer GET_FRIEND', action.payload.data);
      return  {...state, friend: action.payload.data};

// IM NOT SURE THAT friendRequestsArr IS UPDATING IN
// REDUCER BUT IT IS ON THE SERVER
    case "PUT_FRIEND_REQUEST_ARRAY_PENDING":
      return state;
    case "PUT_FRIEND_REQUEST_ARRAY_FULFILLED":
    // console.log('putFriendRequestArray', action.payload.data);
      return  {...state, friend: action.payload.data};



    case "PUT_FRIENDS_ARRAY_PENDING":
      return state;
    case "PUT_FRIENDS_ARRAY_FULFILLED":
    // console.log('putFriendsArray', action.payload.data);
      return  {...state, friend: action.payload.data};




    case "PUT_DATE_PENDING":
        return state;
    case "PUT_DATE_FULFILLED":
        return {
          ...state,
          friend: action.payload.data
        };


    case "FRIENDS_REQ_ARR_STATE":
    console.log('FRIENDS_REQ_ARR_STATE', action.payload);
      return  {...state, friendsReqArr: action.payload};

    case "FRIENDS_ARR_STATE":
    console.log('FRIENDS_ARR_STATE', action.payload);
      return  {...state, friendsArr: action.payload};


    default:
      return state;
  }
}
