import {NextPage} from "next";
import React from "react";
import WalletConnector from "@components/web3/WalletConnector";
import {useInkathon} from "@scio-labs/use-inkathon";
import ChatMainView from "@components/chat/ChatMainView";

export const ChatPage: NextPage = () => {
    const {api, activeAccount, isConnected, activeSigner} = useInkathon()


    return (
        <>
            <header id="header" className="alt">
                <span className="logo"><img src="/images/logo.png" alt=""/></span>
                <h1>ALEPH CHAT </h1>
                <p>Online chat based on Aleph blockchain. Easy to use, fully secured messages.</p>
            </header>
            <ChatMainView/>
            {!isConnected && <WalletConnector/>}
            {!!isConnected && <ChatMainView/>}
        </>
    )

}

export default ChatPage;