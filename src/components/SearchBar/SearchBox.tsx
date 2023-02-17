import React from 'react';
import { Form, InputGroup, Container,Button,DropdownButton,Dropdown } from 'react-bootstrap';

const DropdownOptions = [
    "Action1",
    "Action2",
    "Action3",
]

function SearchBox(){
    const [search,setSearch] = React.useState('');
    const [dropdown,setDropdown] = React.useState(DropdownOptions[0]);

    return (
        <Container style={{marginTop: '1.5rem'}}>
            <InputGroup className="mb-10">
                <Button variant="outline-secondary">
                    Button
                </Button>
                <DropdownButton
                    variant="outline-secondary"
                    title={dropdown}>
                        {DropdownOptions.map(opt => 
                        <Dropdown.Item onClick={(event) => setDropdown(opt)}>{opt}
                        </Dropdown.Item>)}
                </DropdownButton>
                <Form.Control
                    placeholder=''
                    onChange={event => setSearch(event.target.value)}
                ></Form.Control>
            </InputGroup>
        </Container>
    )
}

export default SearchBox;