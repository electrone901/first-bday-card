const HDWalletProvider = require('@truffle/hdwallet-provider')
// const mnemonic = process.env.MNEMONIC.toString().trim()
const mnemonic =
  'black humble social live thing wheat fruit wrist february rough clap orphan'
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    develop: {
      host: '127.0.0.1',
      port: 7545,
      chainId: 1337,
      network_id: 1337,
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    compilers: {
      solc: {
        version: '^0.6.12', // Fetch exact version from solc-bin (default: truffle's version)
        // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        // settings: {
        //   // See the solidity docs for advice about optimization and evmVersion
        //   optimizer: {
        //     enabled: false,
        //     runs: 200,
        //   },
        //   evmVersion: 'byzantium',
        // },
      },
    },
  },
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  //   enabled: true,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db",
  //     },
  //   },
  // },
}
