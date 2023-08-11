import { useState } from 'react';
import ProsExample from './ProsExample'

function List(){
    const [blogs, setBlogs] = useState([
        {title: 'title', body: 'kamina hota hai', id: 1},
        {title: 'Dal batti', body: 'Achi lagti hai', id: 2},
        {title: 'title', body: 'Kharab hai', id: 3}
    ]);
    return(
        <div className="list">
            <h1>List</h1>
            <ProsExample blogs={blogs}/>     
            <ProsExample blogs={blogs.filter((blog) => blog.title == "title")}/>     
        </div>
    );
}
export default List