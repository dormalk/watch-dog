import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Avatar from '../../commons/Avatar';
import {AiFillStar} from 'react-icons/ai'
import './CardInfo.css'
import { CONTACT_NOW } from '../../utils/consts';

class CardInfoParams {
    avatar?: string;
    starts?: number;
    title?: string;
    body?: string;
}

function CardInfo(params: CardInfoParams) {
  return (
    <Col>
        <Card className='card-info'>
            <Card.Header className='d-flex'>
                <Col className='d-flex justify-content-start align-self-center'>
                    <Avatar src={params.avatar!} 
                                size={35}
                                style={{marginLeft: '0.6rem'}}/>
                    <h4>{params.title}</h4>
                </Col>
                <Col>
                    {Array.from({ length: params.starts! }).map((_, idx) => (
                        <AiFillStar className='star'/>
                    ))}
                </Col>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Text className='text-left'>
                            {params.body}
                        </Card.Text>
                    </Col>
                    <Col className='align-self-center'>
                        <Button variant='success'>{CONTACT_NOW}</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Col>
  );
}

export default CardInfo;