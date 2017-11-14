// export default (state = [333], action) => {
//   switch (action.type){
//     case "TEST":
//     console.log("redux test working", state);
//       return [...state, action.payload]
//     default:
//         return state;
//   }
// }



export default (state = [], action) => {
  switch (action.type){
    case "LOGIN_PENDING":
      return state;
    case "LOGIN_FULFILLED":
      console.log('reducer login', action.payload.data[0]);
      return [action.payload.data[0]];



//     case "ADD_GIFTEE_PENDING":
//       return state;
//     case "ADD_GIFTEE_FULFILLED":
//       return [...action.payload.data]
//     case "DELETE_GIFTEE_PENDING":
//     console.log('reducer delete pending', action.payload);
//       return state;
//     case "DELETE_GIFTEE_FULFILLED":
//       console.log('reducer delete fulfille', action.payload);
//       return [...action.payload.data]
    default:
      return state;
  }
}
