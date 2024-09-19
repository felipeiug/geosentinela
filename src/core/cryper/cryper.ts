import CryptoES from 'crypto-es';


// Crypto
function encrypt(text: string): string {
    const crypted = CryptoES.AES.encrypt(text, process.env.REACT_APP_SECRET_KEY_CRYPTO??"A").toString();
    return crypted;
}

function decrypt(text: string): string {
    const decrypted = CryptoES.AES.decrypt(text, process.env.REACT_APP_SECRET_KEY_CRYPTO??"A").toString(CryptoES.enc.Utf8);
    return decrypted;
}

const Cryper = {
    encrypt,
    decrypt,
};

export { Cryper };