import {contractQuery, contractTx, decodeOutput, useInkathon, useRegisteredContract} from "@scio-labs/use-inkathon";
import {ContractIds} from "@deployments/deployments";

export const useContract = () => {
    const {api, activeAccount, isConnected, activeSigner} = useInkathon()
    const {contract, address: contractAddress} = useRegisteredContract(ContractIds.Chat)


    const initChat = async (receiver: any) => {
        await contractTx(api, activeAccount?.address, contract, "initChat", {}, [{
            "participants": [
                activeAccount?.address,
                receiver
            ],
            "initMessage": {
                "author": activeAccount?.address,
                "message": "msgtest"
            },
            "encryptedCypher": [
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
            ]
        }])
    }
    const sendMessage = () => {
    }

    const readMessages = async () => {
        if (!contract || !api) return
        const result = await contractQuery(api, '', contract, 'getUserChats', {}, ["5FWPLMLAUmfSM48HrvkYhX2Phmih4zNtCWd2mXtF7xgAedVn"])
        const {output, isError, decodedOutput} = decodeOutput(result, contract, 'getUserChats')
        // if (isError) throw new Error(decodedOutput)
        if (isError) {
            console.warn("Could not read contract data")
        }
        console.log('output', output);
        console.log('messages', output);
    }

    return [initChat, sendMessage, readMessages];

}