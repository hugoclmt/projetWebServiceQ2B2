import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
return (
    <Alert variant="danger">
    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    <p>
        impossible to find this page!
    </p>
    <Link to="/">Go to the home page</Link>
    </Alert>
);
}

export default NotFoundPage;