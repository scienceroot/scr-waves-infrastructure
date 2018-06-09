(function () {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://scienceblock.org',
        title: 'Scienceroot/Waves Testnet Explorer',
        blockchainName: 'Testnet',
        nodes: [
            {url: 'https://scienceblock.org', maintainer: 'Scienceroot', showAsLink: true},
        ],
        faucet: {
            url: 'https://testnode1.wavesnodes.com/faucet',
            captchaKey: '6Le9hSgUAAAAAAtIe04SrgDy23PsBZOazfb-li66'
        },
        peerExplorer: {
            url: 'https://wavesexplorer.com',
            title: 'MAINNET Explorer'
        },
        wallet: {
            url: 'https://testnet.waveswallet.io',
            title: 'Wallet'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'devel', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'T',
        INITIAL_NONCE: 0
    });
})();
