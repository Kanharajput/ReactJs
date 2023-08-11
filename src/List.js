import { useState } from 'react';
import ProsExample from './ProsExample'

function List(){
    const [blogs, setBlogs] = useState([
        {title: 'Kanha ka dost', body: 'kamina hota hai', id: 1},
        {title: 'Dal batti', body: 'Achi lagti hai', id: 2},
        {title: 'Mera pet', body: 'Kharab hai', id: 3}
    ]);
    return(
        <div className="list">
            <h1>List</h1>
            <ProsExample blogs={blogs}/>    
        </div>
    );
}
export default List