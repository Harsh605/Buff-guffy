import React from 'react'
// import { , RainbowKitProvider, connectorsForWallets, darkTheme} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { connectorsForWallets,RainbowKitProvider,useConnectModal } from '@rainbow-me/rainbowkit';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getDefaultWallets,darkTheme } from '@rainbow-me/rainbowkit';

const { chains, publicClient } = configureChains(
    [polygon, polygonMumbai],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})

const WagmiUtils = () => {
  // const { openConnectModal } = useConnectModal();
  return (
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider
        modalSize="compact"
        theme={darkTheme({
          accentColor: "#394bf2",
          accentColorForeground: "white",
          borderRadius: "medium",
          fontStack: "rounded",
          overlayBlur: "small",
      })}
        chains={chains}
    >
       {/* <button onClick={openConnectModal}>Home</button> */}
       <ConnectButton/>
    </RainbowKitProvider>
</WagmiConfig>
  )
}

export default WagmiUtils

// import React from 'react'

// const WagmiUtils = () => {
//   return (
//     <div>WagmiUtils</div>
//   )
// }

// export default WagmiUtils


