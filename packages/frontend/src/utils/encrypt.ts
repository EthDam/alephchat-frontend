import dynamic from "next/dynamic";

const JSEncrypt = dynamic(
    () => import("jsencrypt").then((mod) => mod.JSEncrypt),
    {ssr: false}
);

// import {JSEncrypt} from "jsencrypt";


export interface KeyPair {
    privateKey: string,
    publicKey: string
}

export const generateKeyPair = (): KeyPair => {

    // Start our encryptor.
    const encrypt = new JSEncrypt();

    // Generate a RSA key pair using the `JSEncrypt` library.
    const crypt = new JSEncrypt({default_key_size: 2048});
    const PublicPrivateKey = {
        PublicKey: crypt.getPublicKey(),
        PrivateKey: crypt.getPrivateKey()
    };

    return {
        privateKey: PublicPrivateKey.PrivateKey,
        publicKey: PublicPrivateKey.PublicKey
    }

}

export const encryptRSA = (key: string, message: string) => {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(key);
    return encrypt.encrypt(message);
}

export const decryptRSA = (key: string, cipherText: string) => {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(key);
    return decrypt.decrypt(cipherText);
}