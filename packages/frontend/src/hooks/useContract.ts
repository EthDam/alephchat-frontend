//@ts-nocheck
import {contractQuery, contractTx, decodeOutput, useInkathon, useRegisteredContract} from "@scio-labs/use-inkathon";
import {ContractIds} from "@deployments/deployments";
import {encryptRSA, generateKeyPair} from "@utils/encrypt";
import {derivePublicKeyFromAddress} from "@utils/publicKey";

export const useContract = () => {
    const {api, activeAccount, isConnected, activeSigner} = useInkathon()
    const {contract, address: contractAddress} = useRegisteredContract(ContractIds.Chat)


    const initChat = async (receiver: any, initialMessage: string) => {

        // let msg = "Test message :)";

        let keyPair = generateKeyPair();

        let cipher = encryptRSA(keyPair.publicKey, initialMessage);

        // let dec = decryptRSA(keyPair.privateKey, cipher || '');

        console.log('cipher', cipher);

        const receiverKeyCipher = encryptRSA(derivePublicKeyFromAddress(receiver), keyPair.privateKey);

        console.log('receiverKeyCipher',receiverKeyCipher)

        await contractTx(api, activeAccount?.address, contract, "initChat", {}, [{
            "participants": [
                activeAccount?.address,
                receiver
            ],
            "initMessage": {
                "author": activeAccount?.address,
                "message": cipher
            },
            "encryptedCypher": [
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", // Encrypt with own public key
                receiverKeyCipher || '' // Encrypt with receiver public key
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
