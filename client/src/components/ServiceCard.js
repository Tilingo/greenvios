import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class ServiceCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem', margin: '20px 0' }}>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
