//@ts-nocheck
import {contractQuery, contractTx, decodeOutput, useInkathon, useRegisteredContract} from "@scio-labs/use-inkathon";
import {ContractIds} from "@deployments/deployments";
import {encryptRSA, generateKeyPair} from "@utils/encrypt";
import {derivePublicKeyFromAddress} from "@utils/publicKey";

export const useContract = () => {
    const {api, activeAccount, isConnected, activeSigner} = useInkathon()
    const {contract, address: contractAddress} = useRegisteredContract(ContractIds.Chat)


    const initChat = async (receiver: any, initialMessage: string) => {

        let keyPair = generateKeyPair();

        let cipher = encryptRSA(keyPair.publicKey, initialMessage);

        console.log('cipher', cipher);

        const receiverKeyCipher = encryptRSA(derivePublicKeyFromAddress(receiver), keyPair.privateKey);

        console.log('receiverKeyCipher', receiverKeyCipher)

        const senderKeyCipher = encryptRSA(derivePublicKeyFromAddress(activeAccount?.address || ''), keyPair.privateKey)

        console.log('senderKeyCipher', senderKeyCipher)

        await contractTx(api, activeAccount?.address, contract, "initChat", {gasLimit: 391236812800}, [{
            "participants": [
                activeAccount?.address,
                receiver
            ],
            "initMessage": {
                "author": activeAccount?.address,
                "message": cipher
            },
            "encryptedCypher": [
                senderKeyCipher, // Encrypt with own public key
                receiverKeyCipher || '' // Encrypt with receiver public key
            ]
        }])
    }
    const sendMessage = () => {



    }

    const readMessages = async () => {
        if (!contract || !api) return
        const result = await contractQuery(api, '', contract, 'getUserChats', {}, ["5HTReokLvsdaykEV4ZdPSEimhxAuMhPzsfj2HBngcw3LDLhh"])
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
