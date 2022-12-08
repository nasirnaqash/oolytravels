// create a context for the Factory state
import React from "react";

export const FactoryContext = React.createContext({
  enquiryDetails: null,
  // add more items here

  setEnquiryDetails: () => null,
  // add more functions here
});

// create a provider for the Factory context
const FactoryProvider = ({ children }) => {
  // state for the Factory context
  const [enquiryDetails, setEnquiryDetails] = React.useState(null);
  // add more states here

  // return the provider
  return (
    <FactoryContext.Provider
      value={{
        enquiryDetails,

        setEnquiryDetails,
        // add more functions here
      }}
    >
      {children}
    </FactoryContext.Provider>
  );
};

// export the provider
export default FactoryProvider;

// custom hook to use the Factory context
export const useFactory = () => React.useContext(FactoryContext);
