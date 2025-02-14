import { getPublicKey } from '@noble/secp256k1';

export function getPublicKeyFromPrivateKey(privateKey: Uint8Array) {
  return getPublicKey(privateKey);
}
