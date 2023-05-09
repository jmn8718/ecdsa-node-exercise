const { secp256k1 } = require('ethereum-cryptography/secp256k1') 
const { toHex } = require('ethereum-cryptography/utils') 

const generateKeys = () => {
  const privateKey = secp256k1.utils.randomPrivateKey()
  const publicKey = secp256k1.getPublicKey(privateKey)

  console.log({
    privateKey: toHex(privateKey),
    publicKey: toHex(publicKey)
  })
}

generateKeys()