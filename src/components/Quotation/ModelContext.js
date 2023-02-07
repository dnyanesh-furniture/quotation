import React from "react";

// set the defaults
const ModelContext = React.createContext({
    modalShow: false,
    setModalShow : () => {}
});

export default ModelContext;
