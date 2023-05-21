import {NextPage} from "next";
import React from "react";
import WalletConnector from "@components/web3/WalletConnector";
import {useInkathon} from "@scio-labs/use-inkathon";
import ChatMainView from "@components/chat/ChatMainView";
import ChatFixedHeader from "@components/chat/ChatFixedHeader";

export const ChatPage: NextPage = () => {
    const {api, activeAccount, isConnected, activeSigner} = useInkathon()

    return (
        <>
            <ChatFixedHeader/>
            {/*<ChatMainView/>*/}
            <WalletConnector/>
            {/*{!isConnected && <WalletConnector/>}*/}
            {!!isConnected && <ChatMainView/>}
        </>
    )

}

export default ChatPage;