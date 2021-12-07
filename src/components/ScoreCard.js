import React, {Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class ScoreCard extends Component {
    render() {
        const { 
            user_name, 
            user_question, 
            user_answer, 
            score,
            avatar
        } = this.props
        
        return (
            <Col>
                <Card border='success'>
                    <Card.Img variant='top' src="" />
                    <Card.Body>
                        <Card.Title>
                            <img src={avatar} alt={user_name} className="avatar" />
                            {user_name}
                        </Card.Title>
                        <Row xs={2} md={2} className="g-4">
                            <Card.Body>
                                <Card.Text>
                                    Answerd questions: {user_answer}
                                </Card.Text>
                                <Card.Text>
                                    Created questions: {user_question}
                                </Card.Text>
                            </Card.Body>
                            
                            <Card.Body>
                                <Card.Title>Score</Card.Title>
                                {score}
                            </Card.Body>

                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            
        )
    }
}


export default ScoreCard