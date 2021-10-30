<template>
<form class="container mt-5">
  <h3>Tạo giao dịch</h3>
  <div class="form-group mb-4">
    <label>*Your account address</label>
    <input type="text" class="form-control" placeholder="Enter your account address" v-model="myAccount">
  </div>
  <div class="form-group mb-4">
    <label>*Client account address</label>
    <input type="text" class="form-control" placeholder="Enter client account address" v-model="clientAccount">
  </div>
  <div class="form-group mb-4">
    <label>*Private key</label>
    <input type="password" class="form-control" placeholder="Paste private key here" v-model="privateKey">
  </div>
  <div class="form-group mb-4">
    <label>*Your shipment id</label>
    <input type="text" class="form-control" placeholder="Enter shipment id" v-model="shipmentId">
  </div>
  
  <div class="spinner-border text-secondary d-inline-block" role="status" v-if="isSending" >
    <span class="sr-only">Loading...</span>
  </div>
  <button v-if="!isSending" @click.prevent="createContract">Send</button>
  <button v-if="isSending" disabled>Validating...</button>
  
  <div v-if="successTransaction">You can see transaction detail here: <a :href="`https://ropsten.etherscan.io/tx/${successTransaction}`">link</a></div>
</form>
</template>

<script>
import { simpleStorage } from "../abi/abi";
import Web3 from "web3";

  export default {
    name: 'Test',
    data() {
      return {
        myAccount: '',
        clientAccount: '',
        privateKey: '',
        shipmentId: '',
        isSending: false,
        successTransaction: '',
      };
    },
    methods: {
      createContract: async function () {
        this.isSending = true;
        this.successTransaction = "";
        const address = this.clientAccount;
        const shipmentId = this.shipmentId;
        const abi = simpleStorage;
        const infuraKey = "7c198036440346ab8eb3a8d389eef596";
        const provider = new Web3.providers.WebsocketProvider(
            `wss://ropsten.infura.io/ws/v3/${infuraKey}`
        );
        const web3 = new Web3(provider);

        // Add account from private key
        try {
          
          web3.eth.accounts.wallet.create(0, this.myAccount);

          const pk = this.privateKey;
          const account = web3.eth.accounts.privateKeyToAccount(pk);
          web3.eth.accounts.wallet.add(account);

          // Setup contract
          const contract = new web3.eth.Contract(abi, address);

          // async function run() {
          const word = shipmentId;
          const from = web3.eth.accounts.wallet[0].address;

          const nonce = await web3.eth.getTransactionCount(from, "pending");
          let gas = await contract.methods
          .addWord(word)
          .estimateGas({ from, gas: "1000", value: "1000" });

          gas = Math.round(gas * 1.5);

          try {
            const result = await contract.methods.addWord(word).send({
              gas,
              from,
              nonce,
              value: "1000"
            });
            console.log("success", result);
            this.isSending = false;
            alert('send success');
            this.successTransaction = result.transactionHash;
          } catch (e) {
            alert('send failed');
            this.isSending = false;
          }
        } catch (error) {
          this.isSending = false;
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  box-shadow: 1px 1px 8px -4px rgba(0, 0, 0, 0.71);
  border-radius: 25px;
  padding: 40px 40px 20px;
  color: #151875;
}
.form-group {
  transition: 0.3s;
  text-align: left;
  label {
    transition: 0.4s;
  }
  input {
    border-radius: 15px;
    padding: 10px 20px;
    color: #151875;
    outline: none;
    &:hover {
      border:1px solid #6389cb;
    }
  }
  &:hover label {
    transform: scale(1.02);
  }
}
button {
    width: 20%;
    padding: 12px;
    font-size: 1.15rem;
    border-radius: 15px;
    border: 1px solid #6389cb;
    background-color: #abc5f1;
    color: #151875;
    margin: 8px auto;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      background-color: #6389cb;
      color: white;
    }
  }
</style>