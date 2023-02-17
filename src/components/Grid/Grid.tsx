import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardInfo from '../CardInfo/CardInfo';
import { Users } from '../../utils/mocks/users';

function Grid() {
  return (
    <Container className='mb-5' style={{marginTop: '2rem'}}>
        <Row xs={1} className="g-4">
          {
            Users.map((user,idx) =>
              <CardInfo   avatar='assets/placeholder_325_160.svg'
              starts={5}
              title={user.fullName}
              body={user.description}/>
            )
          }
        </Row>
    </Container>
  );
}

export default Grid;