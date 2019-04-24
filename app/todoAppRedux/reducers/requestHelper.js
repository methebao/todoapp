function requestHelper(actionName, func) {
  if (typeof actionName !== "string") {
    throw new Error("actionName must be a string");
  }
  if (typeof func !== "function") {
    throw new Error("func must be a function");
  }
  const actionRequest = actionName + "_REQUEST";
  const actionSuccess = actionName + "_SUCCESS";
  const actionFailure = actionName + "_FAILURE";

  const initialState = {
    data: null,
    isLoading: false,
    error: null
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionRequest:
        return {
          ...state,
          islLoading: true
        };
      case actionSuccess:
        return {
          ...state,
          isLoading: false,
          data: action.data !== undefined ? action.data : null
        };
      case actionFailure:
        return {
          ...state,
          isLoading: false,
          error: action.error
        };
      default:
        return state;
    }
  };

  const action = function() {
    const args = arguments;
    return dispatch => {
      dispatch({
        type: actionRequest
      });
      try {
        const result = func.apply(null, args);
        // It's a promise
        if (typeof result.then === "function") {
          result
            .then(data =>
              dispatch({
                type: actionSuccess,
                data
              })
            )
            .catch(error =>
              dispatch({
                type: actionFailure,
                error
              })
            );
        } else {
          dispatch({
            type: actionSuccess,
            data: result
          });
        }
      } catch (error) {
        dispatch({
          type: actionFailure,
          error
        });
      }
    };
  };

  return {
    action,
    actionTypes: {
      request: actionRequest,
      success: actionSuccess,
      failure: actionFailure
    },
    reducer
  };
}
