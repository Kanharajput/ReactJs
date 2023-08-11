import { useState, useEffect } from 'react';
import ProsExample from './ProsExample'

function List(){
    // get the blogs data from json server
    const [blogs, setBlogs] = useState(null);

    // run everytime when somethings render
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data)
        });
    }, []);

    return( 
        <div className="list">
            <h1>List</h1>
            {blogs && <ProsExample blogs={blogs}/>}
        </div>
    );
}
export default List