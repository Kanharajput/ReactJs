import {useState, useEffect} from 'react'

const useFetch = (url) => {
    // get the blogs data from json server
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isResNotFound, setIsResNotFound] = useState(false);

    // run everytime when somethings render
    useEffect(() => {
        // to generate an error modify below url
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
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
            })
        }, 1000)
    },[url]);

    return (
        {data, isPending, isResNotFound}
    );
} 

export default useFetch;