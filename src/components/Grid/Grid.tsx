import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardInfo from '../CardInfo/CardInfo';

function Grid() {
  return (
    <Container className='mb-5' style={{marginTop: '2rem'}}>
        <Row xs={1} className="g-4">
            {Array.from({ length: 15 }).map((_, idx) => (
                <CardInfo   avatar='assets/placeholder_325_160.svg'
                            starts={5}
                            title='Card Name'
                            body="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."/>
            ))}
        </Row>
    </Container>
  );
}

export default Grid;