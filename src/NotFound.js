import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="notfound">
            <h2>Error</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to homepage...</Link>
        </div>
    );
}
 
export default NotFound;