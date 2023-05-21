import {env} from '@config/environment'
import {SubstrateDeployment} from '@scio-labs/use-inkathon'

export enum ContractIds {
    Greeter = 'greeter',
    Chat = 'alephchat'
}

export const getDeployments = async (): Promise<SubstrateDeployment[]> => {
    const networks = env.supportedChains
    console.log('networks', networks);
    const deployments = networks
        .map(async (network) => [
            {
                contractId: ContractIds.Chat,
                networkId: network,
                abi: await import(`@inkathon/contracts/deployments/alephchat/metadata.json`),
                address: '5Gn1niBgL2U47KHNCyCyC4yJv5DFPnq3bogBZu9EPpwLtYoS'
            },
        ])
        .reduce(async (acc, curr) => [...(await acc), ...(await curr)], [] as any)
    return deployments
}

export default getDeployments;