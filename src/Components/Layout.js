import React from 'react';
import CustomTextField from './CustomTextField';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sellerName : '',
            sellerAddress : '',
            customerName : '',
            customerAddress : ''
        }
        this.textFieldsHandler = this.textFieldsHandler.bind(this);
    }

    textFieldsHandler( event ){

        if(event.target.name === 'sellerName'){

            this.setState({
                sellerName : event.target.value
            });
    
            console.log('Seller Name: '+ this.state.val );

        }

        if(event.target.name === 'sellerAddress'){

            this.setState({
                sellerAddress : event.target.value
            });
    
            console.log('Seller Address: '+ this.state.val );
            
        }

        if(event.target.name === 'customerName'){
            
            this.setState({
                customerName : event.target.value
            });

            console.log('Customer Name: '+ this.state.val );

        }

        if(event.target.name === 'customerAddress'){

            this.setState({
                customerAddress : event.target.value
            });
    
            console.log('Customer Address: '+ this.state.val );
            
        }
        
    }

    render() {
        return(
            <div>
        <CustomTextField
            customId='seller-name'
            label="seller's name"
            placeholder='Type in the name...'
            name='sellerName'
            val={this.state.sellerName}
            inputHandler={this.textFieldsHandler}
            text='Enter the full name'/>
        <CustomTextField
            customId='seller-address'
            label="seller's address"
            placeholder='Type in the address...'
            name='sellerAddress'
            val={this.state.sellerAddress}
            inputHandler={this.textFieldsHandler}
            text='Enter the full address'/>
        <CustomTextField
            customId='customer-name'
            label="Customer's name"
            placeholder='Type in the name...'
            name='customerName'
            val={this.state.customerName}
            inputHandler={this.textFieldsHandler}
            text='Enter the full name'/>
        <CustomTextField
            customId='customer-address'
            label="customer's address"
            placeholder='Type in the address...'
            name='customerAddress'
            val={this.state.customerAddress}
            inputHandler={this.textFieldsHandler}
            text='Enter the full address'/>
            </div>
        
        );

    }
}