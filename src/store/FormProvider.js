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
  addItem: (name, qty, price, total) => {},
});

const formReducer = (state, action) => {};

const FormContextProvider = (props) => {
  const [formState, dispatchAction] = useReducer(formReducer, defaultFormState);

  const formContextValue = {};

  return (
    <FormContext.Provider value={formContextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
