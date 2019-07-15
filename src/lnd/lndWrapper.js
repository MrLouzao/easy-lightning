const grpc = require('grpc');
const PROTO_PATH = './src/lnd/rpc/rpc.proto';
var protoLoader = require('@grpc/proto-loader');


/**
 * LND implementation adapter
 */
class LndWrapper {

    constructor(rpcUrl){
        console.log('--- Lighthing LND node wrapper!!!');
        var proto = grpc.loadPackageDefinition(
            protoLoader.loadSync("./src/lnd/rpc/rpc.proto", {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
              })
        );
        // Create one client per service
        this.walletUnlockerClient = new proto.lnrpc.WalletUnlocker(
            rpcUrl, grpc.credentials.createInsecure()
        );
        this.lightningClient = new proto.lnrpc.Lightning(
            rpcUrl, grpc.credentials.createInsecure()
        );
    }


    getNodeInfo() {
        console.log("Obtaining all node info");
        const emptyObject = {};
        this.lightningClient.GetInfo(emptyObject, (err, res) => {
            if(err) console.error(err);
            else console.log(res);
        });
    }


    getAllChannels(){
        console.log("No channels for LND implementation");
        // Flag 1: active only
        this.lightningClient.ListChannels(1);
    }

    // TODO implement rest of methods from unimplemented facade methods

}


module.exports = {
    LndWrapper,
}