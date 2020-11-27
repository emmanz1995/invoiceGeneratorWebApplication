import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class FinalPrice extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const items = this.props.itemsListing;
        let finalPrice = 0;
        {items.map((product, index)=>{
            finalPrice = finalPrice + product.price;
        })}
        return(
            <Container>
                <Row>
                    <Col>
                        <h4>${finalPrice}</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}
