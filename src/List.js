import { useState } from 'react';

function List(){
    const [blogs, setBlogs] = useState([
        {title: 'Kanha ka dost', body: 'kamina hota hai', id: 1},
        {title: 'Dal batti', body: 'Achi lagti hai', id: 2},
        {title: 'Mera pet', body: 'Kharab hai', id: 3}
    ]);

    return (
        <div className="list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> 
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}
export default List