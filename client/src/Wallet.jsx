import server from "./server";
import {secp256k1} from 'ethereum-cryptography/secp256k1'
import {toHex} from 'ethereum-cryptography/utils'

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {
    const pk = evt.target.value;
    setPrivateKey(pk);
    const pkAddress = toHex(secp256k1.getPublicKey(pk))
    setAddress(pkAddress);
    if (pkAddress) {
      const {
        data: { balance },
      } = await server.get(`balance/${pkAddress}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Set private key" value={privateKey} onChange={onChange}></input>
      </label>

      <div className="balance">Address: {address}</div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
