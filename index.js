const {getConfiguration} = require('./config/config');
const LightningFacade = require('./src/lightningFacade');


// Read from config file
const config = getConfiguration();
let lightningNode = new LightningFacade(config);


console.log(`
               ,/
             ,'/
           ,' /
         ,'  /_____,
       .'____    ,'    EASY LIGHTNING - Running ${config.node.implementation} node
            /  ,'
           / ,'
          /,'
         /'
`);


// Get the node info
lightningNode.getNodeInfo();