const ChannelState = require('./channelState');


class Channel {

    constructor(owner, amount){
        this.owner = owner;
        this.amount = amount;
        this.state = ChannelState.PENDING;
    }

}


module.exports = Channel;