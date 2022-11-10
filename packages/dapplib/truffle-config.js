require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth script coach grid kiwi sure spy'; 
let testAccounts = [
"0xdfd38b086d22aa7ec35ab0a6889e8bd81750aa5652b05e07912b37e8a5bad74c",
"0x9fdd1d17c47cfb318090c63111a92efc8b7854fc87116754365d331ae130af5f",
"0xf63e594bbe22e7e921f3ad25caf3111462395efb9ebfaa65c401e4441d920b1a",
"0x733340485d6018018e2cac627faeb9c28c28094a04479d2eca81046704ae24e9",
"0x0d7c673fa20c096e9a53664a61e5c1f32fa0e4a47c21cc24f0913e0834c2db24",
"0x0f2f99b1e4ac8bd792bf92acc61842436f962ee4508e3d79ee27b474fdf0f167",
"0x27ba45b97477077cc00066f6e37a8e2b3540c4d4fe8698be1f50947a2d5e12b8",
"0xb526ebfb9d711e963b79391f5f1c1cb554b6c70b7f07e948195a8793c738eaa6",
"0x3b3ed29757fbf3f9fdd717ddeb97e010f92deed8db96acbfa6dfa84c1db06bd1",
"0xb28f6ca9340fa4cc2d9899a587745327be70c2e5c9ad1b36ef27b221553bfce3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

