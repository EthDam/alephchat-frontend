import {toHexString} from "@utils/hash";
import {decodeAddress} from "@polkadot/util-crypto";

export const derivePublicKeyFromAddress = (address: string) => {
    return toHexString(decodeAddress(address));
}
