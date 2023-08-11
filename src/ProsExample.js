function ProsExample({blogs}){

    return(
        <div className="display-items">
            <h1>ProsExample, getting data from List</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}

export default ProsExample;