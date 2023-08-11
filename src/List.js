import { useState, useEffect } from 'react';
import ProsExample from './ProsExample'

function List(){
    // get the blogs data from json server
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isResNotFound, setIsResNotFound] = useState(false);

    // run everytime when somethings render
    useEffect(() => {
        // to generate an error modify below url
        setTimeout(() => { fetch("http://localhost:8000/blogs")
        .then(res => {
            if(!res.ok){
                setIsResNotFound(true);
                setIsPending(false);
                throw Error('resourse not found');
            }
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
            setIsResNotFound(false);
        })
        .catch(err => {
                console.log(err.message);
            })}    , 1000)
        }, []);

    return (
        <div className="list">
            <h1>List</h1>
            {isResNotFound && <div>Resourse not found</div>}
            {isPending && <div>Loading.....</div>}
            {blogs && <ProsExample blogs={blogs}/>}
        </div>
    );
}
export default List