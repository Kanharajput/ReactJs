import { useState } from 'react';
import ProsExample from './ProsExample'

function List(){
    const [blogs, setBlogs] = useState([
        {title: 'title', body: 'kamina hota hai', id: 1},
        {title: 'Dal batti', body: 'Achi lagti hai', id: 2},
        {title: 'title', body: 'Kharab hai', id: 3}
    ]);

    const handleDelete = (id) => {
        const new_blogs = blogs.filter(blog => blog.id !== id);
        setBlogs(new_blogs);
    }

    return(
        <div className="list">  
            <h1>List</h1>
            <ProsExample blogs={blogs} handleDelete={handleDelete} />     
        </div>
    );
}
export default List