import UserActionTypes from './user.types'
const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
      case UserActionTypes.SIGN_IN_FAILURE:
      case UserActionTypes.SIGN_OUT_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
        return {
          ...state,
          error: action.payload
        }
      case UserActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          error: null
        }

    default:
     return state;
  }

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch(action.type) {
//     case UserActionTypes.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: action.payload
//       }
//     default:
//      return state;
//   }
}

export default userReducer;
