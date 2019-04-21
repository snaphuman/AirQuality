# Air Quality Aepp

## Prerequsites

* Git
* Node + NPM
* Docker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

Go to the browser and navigate to http://localhost:8080

## Inialize Æternity node

### Start Docker unit service
```
sudo systemctl start docker

```

### Install Forgae globally
```
npm install -g forgae

```

### You should be in the project directory
```
cd AirQuality

```

### Start Aeternity node
```
forgae node
```

### Save owner (Miner) keypairs. Yow will use it later for wallet configuration

```
Miner ------------------------------------------------------------
public key: ak_2mwRmUeYmfuW93ti9HMSUJzCk1EYcQEfikVSzgo6k2VghsWhgU
private key: bb9f0b01c8c9553cfbaf7ef81a50f977b1326801ebf7294d1c2cbccdedf27476e9bbf604e611b5460a3b3999e9771b6f60417d73ce7c5519e12f7e127a1225ca
Wallet's balance is 197000000000000000000 
```

## Manage AirQuality Contract

### Compile contract
```
forgae compile -n testnet

```
### Deploy to testnet
```
forgae deploy -n tesnet 
```

### Verify the deployed contract
```
forgae history 
```
it will return somethig like this:

```
┌───────────────┬──────────────────────────────────────────────────────┐
│ Event Time    │ 21 Apr, 00:04:31                                     │
├───────────────┼──────────────────────────────────────────────────────┤
│ Executor      │ Deployer                                             │
├───────────────┼──────────────────────────────────────────────────────┤
│ Name or Label │ AirQuality                                           │
├───────────────┼──────────────────────────────────────────────────────┤
│ Tx Hash       │ th_JPQ16Wh6UWEgbxCuE1wq5PuMFcUhr5n1xyndHuXJiM7awiXSz │
├───────────────┼──────────────────────────────────────────────────────┤
│ Status        │ Success                                              │
├───────────────┼──────────────────────────────────────────────────────┤
│ Gas Price     │ 1000000000                                           │
├───────────────┼──────────────────────────────────────────────────────┤
│ Gas Used      │ 2899                                                 │
├───────────────┼──────────────────────────────────────────────────────┤
│ Result        │ ct_KXuGX4wVCEp8cjgS1hZNGgPUuyMj6xbDobMDvVBh3J4VmC9oK │
└───────────────┴──────────────────────────────────────────────────────┘
```
Copy the transaction hash and go to https://testnet.explorer.aepps.com

Paste it in the input search and verify the information.

### Customize configuration

Open the setting.js file located in src directory and change the values: contractAddress, account.pub and account.priv 

As this config is pointing to the testnet endpoint, you dont ned to have the local node running (this will save your machine resources).

```
forgae node --stop
```
