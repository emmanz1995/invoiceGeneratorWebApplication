import React from 'react';
import CustomTextField from './CustomTextField';
import CustomTextArea from "./CustomTextArea";
import ProductAndPrices from "./ProductAndPriceListing";
import FinalPrice from "./FinalPrice";

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sellerName : '',
            sellerAddress : '',
            customerName : '',
            customerAddress : '',
            invoiceDescription : '',
            termsAndConditions : '',
            itemsListing : [
                {description : 'Green skirt', price: 250},
                {description : 'Red skirt', price: 350},
                {description : 'Blue skirt', price: 450}
            ]
        }
        this.textFieldsHandler = this.textFieldsHandler.bind(this);
    }

    textFieldsHandler( event ){

        if(event.target.name === 'termsAndConditions') {

            this.setState({
                termsAndConditions : event.target.value
            });

            console.log('Terms And Conditions ' + this.state.termsAndConditions)

        }

        if(event.target.name === 'invoiceDescription') {

            this.setState({
                invoiceDescription : event.target.value
            });

            console.log('Invoice Description ' + this.state.invoiceDescription);

        }

        if(event.target.name === 'sellerName'){

            this.setState({
                sellerName : event.target.value
            });

            console.log('Seller Name: '+ this.state.sellerName );

        }

        if(event.target.name === 'sellerAddress'){

            this.setState({
                sellerAddress : event.target.value
            });

            console.log('Seller Address: '+ this.state.sellerAddress );

        }

        if(event.target.name === 'customerName'){

            this.setState({
                customerName : event.target.value
            });

            console.log('Customer Name: '+ this.state.customerName );

        }

        if(event.target.name === 'customerAddress'){

            this.setState({
                customerAddress : event.target.value
            });

            console.log('Customer Address: '+ this.state.customerAddress );

        }

    }

    render() {
        return(
            <div>
                <CustomTextArea
                    label='Invoice Description'
                    name='invoiceDescription'
                    val={this.state.invoiceDescription}
                    inputHandler={this.textFieldsHandler}
                />
                <CustomTextField
                    customId='seller-name'
                    label="seller's name"
                    placeholder='Type in the name...'
                    name='sellerName'
                    val={this.state.sellerName}
                    inputHandler={this.textFieldsHandler}
                    text='Enter the full name'
                />
                <CustomTextField
                    customId='seller-address'
                    label="seller's address"
                    placeholder='Type in the address...'
                    name='sellerAddress'
                    val={this.state.sellerAddress}
                    inputHandler={this.textFieldsHandler}
                    text='Enter the full address'
                />
                <CustomTextField
                    customId='customer-name'
                    label="Customer's name"
                    placeholder='Type in the name...'
                    name='customerName'
                    val={this.state.customerName}
                    inputHandler={this.textFieldsHandler}
                    text='Enter the full name'
                />
                <CustomTextField
                    customId='customer-address'
                    label="customer's address"
                    placeholder='Type in the address...'
                    name='customerAddress'
                    val={this.state.customerAddress}
                    inputHandler={this.textFieldsHandler}
                    text='Enter the full address'
                />
                <ProductAndPrices
                    itemsListing={this.state.itemsListing}
                />
                <FinalPrice
                    itemsListing={this.state.itemsListing}
                />
                <CustomTextArea
                    label="Terms and Conditions"
                    name="termsAndConditions"
                    val={this.state.termsAndConditions}
                    inputHandler={this.textFieldsHandler}
                />
            </div>
        );
    }
}
