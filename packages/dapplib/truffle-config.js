require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin clinic bottom transfer'; 
let testAccounts = [
"0xfcf517d8f7473f90692d011e2fc3afa1f395e3d61b337fd01884f8892c2127a4",
"0x5a0184c83dcbf661f3b73211a9375096fec2a892acff8fef01eb220779395dbe",
"0x896e6f463408f861134e02e44bc0590e077d016648f7effc0f65d4ef94cc8d9c",
"0x8a04e1aee65fc958cd0797c85963d1bf3ce6683c786976560402fcd0d429bd33",
"0x855965e4a75970bbe937912ef3b9b0a703034ea714bb655855b163367bdd0c10",
"0x9403e43de003c5a0ff75ee3218568ef0e4584e432317f2baff5cc73d9ce26514",
"0x0493ba155edddedd1d4731b4af2fa7ce83fb47c2aba45db8adb42b9592979f2e",
"0xe0ba9cef1d8468017c5932cc6f0a84359a39fa6988767a12c1fc591d4dddc22d",
"0x7d83b8d014ac97d43d44907eb0e4c2d1b8b23a850974ddb61dcd6db171d5fce5",
"0x1b3cff88a0d4290cb24c02255b72ec8e5da4903c984300f314bfc96a43d4c539"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


