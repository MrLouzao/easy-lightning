const {ImplementationEnum} = require('./model/implementationEnum');
const {LndWrapper} = require('./lnd/lndWrapper');


class LightningFacade {

    constructor(config){
        this.rpcServerUrl = `http://${config.node.host}:${config.node.port}`;
        console.log("Trying to stablish connection with... ", this.rpcServerUrl);
        this.serverInstance = this.getNodeInstance(config.node.implementation);
    }


    /**
     * Obtain the node handler instance depending on selected implementation
     * @param {} implementation 
     */
    getNodeInstance(implementation){
        if(ImplementationEnum.LND == implementation){
            console.log("LND implementation selected")
            return new LndWrapper();
        }
        else {
            throw Error(`Implementation ${implementation} not exists or integration is not implemented yet`);
        }
    }


    getAllChannels(){
        throw Error("Not implemented yet exception");
    }


    getPendingChannels(){
        throw Error("Not implemented yet exception");
    }


    createChannels(){
        throw Error("Not implemented yet exception");
    }


    closeChannel(){
        throw Error("Not implemented yet exception");
    }


    getAllInvoices(){
        throw Error("Not implemented yet exception");
    }


    getInvoiceById(invoiceId){
        throw Error("Not implemented yet exception");
    }


    createInvoice(){
        throw Error("Not implemented yet exception");
    }

}

module.exports = LightningFacade;