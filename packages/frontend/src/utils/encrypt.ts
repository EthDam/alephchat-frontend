import dynamic from "next/dynamic";

// const JSEncrypt = dynamic(
//     () => import("jsencrypt").then((mod) => mod.JSEncrypt),
//     {ssr: false, suspense: true}
// );


// import {JSEncrypt} from "jsencrypt";


export interface KeyPair {
    privateKey: string,
    publicKey: string
}

export const generateKeyPair = async (): Promise<KeyPair> => {
    const JSEncrypt = (await import("jsencrypt")).default;

    // Start our encryptor.
    const encrypt = new JSEncrypt();

    // Generate a RSA key pair using the `JSEncrypt` library.
    const crypt = new JSEncrypt({default_key_size: `2048`});
    const PublicPrivateKey = {
        PublicKey: crypt.getPublicKey(),
        PrivateKey: crypt.getPrivateKey()
    };

    return {
        privateKey: PublicPrivateKey.PrivateKey,
        publicKey: PublicPrivateKey.PublicKey
    }

}

export const encryptRSA = async (key: string, message: string) => {
    const JSEncrypt = (await import("jsencrypt")).default;
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(key);
    return encrypt.encrypt(message);
}

export const decryptRSA = async (key: string, cipherText: string) => {
    const JSEncrypt = (await import("jsencrypt")).default;
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(key);
    return decrypt.decrypt(cipherText);
}