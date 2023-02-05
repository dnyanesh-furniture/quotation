import React from "react";

// set the defaults
const FurnitureContext = React.createContext({
  quoteItems: [],
  setQuoteItems: () => {}
});

export default FurnitureContext;
