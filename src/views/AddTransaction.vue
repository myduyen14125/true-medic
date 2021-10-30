<template>
<form class="container mt-5">
  <div class="form-group mb-3">
    <label>Your account address</label>
    <input type="text" class="form-control" placeholder="Enter your account address" v-model="myAccount">
  </div>
  <div class="form-group mb-3">
    <label>Client account address</label>
    <input type="text" class="form-control" placeholder="Enter client account address" v-model="clientAccount">
  </div>
  <div class="form-group mb-3">
    <label>Private key</label>
    <input type="password" class="form-control" placeholder="Paste private key here" v-model="privateKey">
  </div>
  <div class="form-group mb-3">
    <label>Your shipment id</label>
    <input type="text" class="form-control" placeholder="Enter shipment id" v-model="shipmentId">
  </div>
  
  <div class="spinner-border text-secondary d-inline-block" role="status" v-if="isSending" >
    <span class="sr-only">Loading...</span>
  </div>
  <button class="btn btn-primary" v-if="!isSending" @click.prevent="createContract">Send</button>
  <button class="btn btn-primary" v-if="isSending" disabled>Validating...</button>
  
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

<style>

</style>