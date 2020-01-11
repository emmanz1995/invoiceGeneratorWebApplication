// dependenices
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

// routes
router.get('/all',(request, response )=>{

    invoiceModel.find((err, docs)=>{
        if(err){
            console.log('ERROR '+ err);
            response.status(500).json({message:'Problems when reading the information'})
        }else{
            //everything is working
            console.log('All the invoices were found.');
            response.status(200).json(docs);
        }
    });

});

router.get('/:invoiceId', (request, response)=>{
    invoiceModel.findOne({
        _id : request.params.invoiceId
    },(err, invoice )=>{
        if(err){
            //something went wrong
            console.log('ERROR'+ err);
            response.status(500).json({message:'Problems when reading the invoice'});
        }else{
            // everything is working
            console.log('The invoice was found.');
            response.status(200).json(invoice);
        }
    });
});


// exporting the contents of this file
module.exports = router;