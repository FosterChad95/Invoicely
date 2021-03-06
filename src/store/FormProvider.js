import React, { useReducer } from "react";

const defaultFormState = {
  items: [],
};

export const FormContext = React.createContext({
  items: [],
  saveDraft: () => {},
  send: () => {},
  discard: () => {},
  deleteItem: () => {},
  addItem: () => {},
});

const formReducer = (state, action) => {
  if (action.type === "SEND") {
  }
  if (action.type === "ADD") {
    const newItems = [...state.items].concat({ ...action.item, id: action.id });

    return {
      items: newItems,
    };
  }
  if (action.type === "DELETE") {
    const filteredItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: filteredItems,
    };
  }

  return defaultFormState;
};

const FormContextProvider = (props) => {
  const [formState, dispatchAction] = useReducer(formReducer, defaultFormState);

  const addItemHandler = (item, id) => {
    dispatchAction({
      type: "ADD",
      item,
      id,
    });
  };

  const deleteItemHandler = (id) => {
    console.log(id);
    dispatchAction({
      type: "DELETE",
      id,
    });
  };

  const formContextValue = {
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    items: formState.items,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
