export default (state, action) => {
    switch(action.type) {
      case 'GET_COMPONENTS':
        return {
          ...state,
          loading: false,
          components: action.payload
        }
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          components: state.components.filter(transaction => transaction._id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          components: [...state.components, action.payload]
        }
      case 'COMPONENT_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }