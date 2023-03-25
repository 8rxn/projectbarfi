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
    chainId: CHAIN.POLYGON_MUMBAI_TESTNET,
    rpcUrl:
      "https://fragrant-greatest-sky.matic-testnet.discover.quiknode.pro/51a324530a248242144de9b79fc28e6f2272e30d/",
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
