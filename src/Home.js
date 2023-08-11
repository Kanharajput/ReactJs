import {useState} from 'react';

function Home(){
    // handling the events
    const handleClick = () => {
        console.log("congratulations! you clicked the button in a right way")
    }
    // parameter functions are not directly inserted in onClick function
    const handleClickAgain = (name,e) => {
        console.log(name + " Enough, I can't congratulate you anymore")
    }

    // useState to change name when clicked
    // default value of name is Kanha
    const [name, setName] = useState('Kanha');

    // useState function, name changed after click
    const changeName = () => {
        setName('Krishna');
    }

    return (
        <div className="Home">
            <h1>Home</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain("kanha",e)}>Hug me</button>

            {name}
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}

export default Home;