import {Link} from 'react-router-dom';

function ProsExample({blogs}){

    return(
        <div className="display-items">
            <h1>ProsExample, getting data from List</h1>
            {blogs.map((blog) => (
                <Link to={`/blog-detail/${blog.id}`}>
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ProsExample;