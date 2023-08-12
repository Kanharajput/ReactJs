import {useState} from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("blog added")
            setIsPending(false)
        })
    }       

    return (
        <div className="user-input">
            <form onSubmit={handleSubmit}>
                <h2>Add a new Blog</h2>
                <label htmlFor="title">Enter the title</label>
                <input name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label htmlFor="body">Content here</label>
                <textarea name="body" rows="5" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                {!isPending && <button type="submit" className="sub-btn">Add</button>}
                {isPending && <button type="submit" className="sub-btn">Add....</button>}
            </form>
            {title}
            {body}
        </div>
    );
}

export default Create;