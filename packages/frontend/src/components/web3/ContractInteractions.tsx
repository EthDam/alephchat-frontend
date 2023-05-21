import {FC} from "react";
import {useInkathon, useRegisteredContract,} from '@scio-labs/use-inkathon'
import {ContractIds} from "@deployments/deployments";

export const ContractInteractions: FC = () => {
    const {api, activeAccount, isConnected, activeSigner} = useInkathon()
    const {contract, address: contractAddress} = useRegisteredContract(ContractIds.Chat)

    return <></>;

}


export default ContractInteractions;