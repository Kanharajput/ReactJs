import ProsExample from './ProsExample'
import useFetch from './useFetch';

function List(){
    const { data:blogs, isPending, isResNotFound } = useFetch("http://localhost:8000/blogs")
    return (
        <div className="list">
            <h1>List</h1>
            {isResNotFound && <div>Resourse not found</div>}
            {isPending && <div>Loading.....</div>}
            {blogs && <ProsExample blogs={blogs}/>}
        </div>
    );
}
export default List;