import React, { useState, useReducer } from "react";

const defaultFormState = {
  fromAddress: "",
  fromCity: "",
  fromPost: "",
  fromCountry: "",
  toName: "",
  toEmail: "",
  toAddress: "",
  toCity: "",
  toPost: "",
  toCountry: "",
  invoiceDate: "",
  paymentTerms: 1,
  projectDescription: "",
  items: [],
};

export const FormContext = React.createContext({
  fromAddress: "",
  fromCity: "",
  fromPost: "",
  fromCountry: "",
  toName: "",
  toEmail: "",
  toAddress: "",
  toCity: "",
  toPost: "",
  toCountry: "",
  invoiceDate: "",
  paymentTerms: "",
  projectDescription: "",
  items: [
    {
      name: "",
      qty: null,
      price: null,
      total: null,
    },
  ],
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
  }

  return defaultFormState;
};

const FormContextProvider = (props) => {
  const [formState, dispatchAction] = useReducer(formReducer, defaultFormState);

  const addItemHandler = (event) => {};

  const formContextValue = {
    addItem: addItemHandler,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
