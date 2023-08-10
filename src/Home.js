function Home(){
    // handling the events
    const handleClick = () => {
        console.log("congratulations! you clicked the button in a right way")
    }
    // parameter functions are not directly inserted in onClick function
    const handleClickAgain = (name,e) => {
        console.log(name + " Enough, I can't congratulate you anymore")
    }

    return (
        <div className="Home">
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain("kanha",e)}>Hug me</button>
        </div>
    );
}

export default Home;