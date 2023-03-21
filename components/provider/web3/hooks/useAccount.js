import { useEffect } from "react";
import useSwr from "swr"; //something like react query

const adminAddresses = {
  "0x92af6e65f1c1150c2ed96279340123b5cc3f038049ea4a3a9e53e2054dea54b7": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...swrResponse } = useSwr(
    () => {
      return web3 ? "web3/accounts" : null;
    },
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    account: {
      data,
      isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...swrResponse,
    },
  };
};
