export default function tododetails(state={}, action) {
    switch (action.type) {
      case "TODODATA":
        return { ...state, tododata: action.payload };
      
      default:
        return state;
    }
  }