import { useWeb3 } from "@/components/provider";
import { useAccount } from "@/components/hooks/web3/useAccount";
import Link from "next/link";
import Button from "../Button/Button";

export default function Navbar() {
  const { connect, isWeb3Loaded, isLoading } = useWeb3();
  const { account } = useAccount();
  return (
    <section>
      <div className="relative pt-6 px-2 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex sm:flex-row flex-col gap-5 sm:gap-0 items-center  w-full justify-between">
            <div>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/marketplace"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Marketplace
              </Link>
            </div>
            <div>
              <a
                href="#"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Wishlist
              </a>
              {isLoading ? (
                <Button disabled>Loading...</Button>
              ) : isWeb3Loaded ? (
                account.data ? (
                  <Button
                    hoverable={false}
                    variant="red"
                    className={"cursor-default"}
                  >
                    {`${account.data.slice(0, 4)}...${account.data.slice(-4)} ${
                      account.isAdmin ? "Admin" : ""
                    }`}
                  </Button>
                ) : (
                  <Button onClick={connect}>Connect Wallet</Button>
                )
              ) : (
                <a href="https://metamask.io/download/" target={"blank"}>
                  <Button>Install Metamask</Button>
                </a>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
