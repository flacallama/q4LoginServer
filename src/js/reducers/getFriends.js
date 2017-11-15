export default (state = [], action) => {
  switch (action.type){
    case "GET_FRIENDS_PENDING":
      return state;
    case "GET_FRIENDS_FULFILLED":
    // console.log('getfriends reducer', action.payload.data);
      return [...action.payload.data];
    default:
      return state;
  }
}
