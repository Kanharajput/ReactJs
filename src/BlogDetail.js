import {useParams} from 'react-router-dom';
import useFetch from './useFetch.js';
import {useNavigate} from 'react-router-dom'

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isPending, isResNotFound } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate();

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=> {
            navigate('/list');
        })
    }

    return (
        <div className="blog">
            {isPending && <div>Loading.....</div>}
            {isResNotFound && <div>Resource not found</div>}
            {blog && (
                <article>
                    <h1>Blog</h1>
                    <h2>id - {blog.id}</h2>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetail;