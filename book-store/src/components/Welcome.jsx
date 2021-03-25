import { Jumbotron, Container } from 'react-bootstrap';

function Welcome() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Welcome</h1>
                <p>This is my first react app.</p>
            </Container>
        </Jumbotron>
    );
}

export default Welcome