import { createContext, useContext, useEffect, useMemo, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { setupHooks } from "./hooks/setupHooks";

const Web3Context = createContext(null);

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    isLoading: true,
  });
  //loading provider
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api((prev) => ({
          ...prev,
          provider,
          web3,
          isLoading: false,
        }));
      } else {
        setWeb3Api((prev) => ({ ...prev, isLoading: false }));
        console.log("Please install metamask");
      }
    };
    loadProvider();
  }, []);
  //to improve performance-----------------
  const _web3Api = useMemo(() => {
    const { web3, provider } = web3Api;
    return {
      ...web3Api,
      isWeb3Loaded: web3 !== null,
      getHooks: () => setupHooks(web3),
      //connecting the wallet
      connect: provider
        ? async () => {
            try {
              await provider.request({
                method: "eth_requestAccounts",
              });
            } catch {
              console.log("Cannot retrieve account");
            }
          }
        : () => {
            console.log("Cannot connect to metamask, reload browser please");
          },
    };
  }, [web3Api]);

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
export function useHooks(cb) {
  const { getHooks } = useWeb3();
  return cb(getHooks());
}
