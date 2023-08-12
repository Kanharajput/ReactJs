import {useState} from 'react';

const Create = () => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <div className="user-input">
            <form>
                <h2>Add a new Blog</h2>
                <label for="title">Enter the title</label>
                <input name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label for="body">Content here</label>
                <textarea name="body" rows="5" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button type="submit">Add</button>
            </form>
            {title}
            {body}
        </div>
    );
}

export default Create;