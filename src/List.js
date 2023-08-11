import { useState, useEffect } from 'react';
import ProsExample from './ProsExample'

function List(){
    // get the blogs data from json server
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // run everytime when somethings render
    useEffect(() => {
        setTimeout(() => {fetch("http://localhost:8000/blogs")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
        })},1000)
    }, []);

    return( 
        <div className="list">
            <h1>List</h1>
            {isPending && <div>Loading.....</div>}
            {blogs && <ProsExample blogs={blogs}/>}
        </div>
    );
}
export default List