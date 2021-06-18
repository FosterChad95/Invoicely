import { useReducer, useCallback } from "react";

const initialState = {
  error: null,
  loading: true,
  data: null,
};

const reducer = (state, action) => {
  if (action.type === "ERROR") {
    return {
      error: action.errorMessage,
      loading: false,
      data: null,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      error: null,
      loading: false,
      data: action.data,
    };
  }

  if (action.type === "LOADING") {
    return {
      error: null,
      loading: true,
      data: null,
    };
  }

  return state;
};

const useRequest = (requestDataFunction) => {
  const [requestState, dispatch] = useReducer(reducer, initialState);

  const requestSent = useCallback(
    async function (requestData) {
      dispatch({ type: "LOADING" });
      try {
        const responsedata = await requestDataFunction(requestData);
        dispatch({ type: "SUCCESS", data: responsedata });
      } catch (err) {
        dispatch({
          type: "ERROR",
          errorMessage: err.message || "Something went wrong",
        });
      }
    },
    [requestDataFunction]
  );

  return {
    requestSent,
    ...requestState,
  };
};

export default useRequest;
