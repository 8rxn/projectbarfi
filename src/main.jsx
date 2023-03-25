import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, CHAIN } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import "./index.css";

const appAddress = "xar_test_424ee9f5647103607d891d487c73c9f794188a2d";
const auth = new AuthProvider(`${appAddress}`, {
  network: "testnet",
  position: "right",
  theme: "dark",
  alwaysVisible: false,
  chainConfig: {
    chainId: CHAIN.ETHEREUM_GOERLI ,
    rpcUrl: 'https://eth-goerli.g.alchemy.com/v2/mzbwFJs7hwpG5epgv_VYc1r46QzPtrh4',
    },
});

async function initialise() {
  await auth.init();
  console.log("initialise");
}
initialise();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvideAuth provider={auth}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProvideAuth>
  </React.StrictMode>
);
