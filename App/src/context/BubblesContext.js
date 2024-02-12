import React from "react";

export const BubblesContext = React.createContext({
    products:[],
    oneProduct: () => {},
    bundles: [],
    oneBundle: () => {},
    cart:[]
});