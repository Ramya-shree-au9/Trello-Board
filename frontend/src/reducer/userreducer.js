  export default function userdetails(state={}, action) {
    switch (action.type) {
      case "REGISTER":
        return { ...state, Rdata: action.payload };
      case "LOGIN":
        return { ...state, Ldata: action.payload };
        case 'ALLUSERS':
          return{...state, allusers:action.payload}
       
  
      default:
        return state;
    }
  }