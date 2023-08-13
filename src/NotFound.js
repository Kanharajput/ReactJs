import {Link} from 'react-router-dom';

const NotFound = () => {
    return(
        <div className="404-error">
            <h2>Page not found</h2>
            <p>Go back to <Link to="/">Home</Link></p>
        </div>
    );
}

export default NotFound;