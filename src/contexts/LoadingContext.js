import React, { createContext, useContext, useState } from "react";
import Loading from "../components/Loading";

const LoadingContext = createContext();

export const LoadingContextProvider = ({ children, value }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (value) => setIsLoading(value);

  const values = {
    handleLoading,
  };

  return (
    <LoadingContext.Provider value={values}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  return context;
};
