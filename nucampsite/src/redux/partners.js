import * as ActionTypes from "./ActionTypes";

export const Partners = (state = { errMess: null, partners:[], isLoading:true}, action) => {
    
  switch (action.type) {
      case ActionTypes.ADD_PARTNERS:
          return {...state, errMess: null, partners: action.payload, isLoading: false};

      case ActionTypes.PARTNERS_FAILED:
          return {...state, errMess: action.payload, isLoading: false};
          

      case ActionTypes.PARTNERS_LOADING:
          return {...state, isLoading: true, errMess: null, partners: []};
      default:
        return state;
    }
};