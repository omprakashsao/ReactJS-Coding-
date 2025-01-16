const IntialState = {count: 0}

function ReducerFunction(state, action){
  switch (action.type) {
      case "Increment":  return {count: state.count + 1}
          
      case "Decrement": return {count: state.count -1}
          
      case "IncrementByAmount": return {count: state.count + action.payload}
          
      case "DecrementByAmount": return {count: state.count - action.payload}

      case "reset": return {count: 0}
          
      default: return state;
  }
}

export {IntialState, ReducerFunction}

