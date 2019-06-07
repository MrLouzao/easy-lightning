const InvoiceState = require('./invoiceState');

class Invoice {

    constructor(amount, destination, description){
        this.amount = amount;
        this.destination = destination;
        this.description = description;
        this.state = InvoiceState.CREATED;
    }

}


module.exports = Invoice;