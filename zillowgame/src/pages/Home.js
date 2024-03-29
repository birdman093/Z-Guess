import './Home.css';

function Home() {
    return(
        <div>
            <h1>Welcome To Z-Guess!</h1>
            <img className = "home-icon" src="/z-guess-dark.png" alt = "z-guess"></img>
            <h2>Where users can try to beat the Zestimate®</h2>
            <br></br>
            <div className="home">
                <h3>How to Play</h3>
                <ol className="howtoplay">
                    <li>Login from Account Tab. DB Admin must add you to the system.</li>
                    <li>Review and Add Properties from Properties Tab</li>
                        <ul>
                            <li>Submit selling price estimates of different properties</li>
                            <li>Live Score: Watch score change based on the final sale price</li>
                            <li>Scoring: Points for each guess made based on "closeness"</li>
                        </ul>
                    <li>Bonus: Create a spotify playlist by inserting 5 spotify links to keep you entertained!</li>
                </ol>
            </div>
            <br></br>
            <div className = "home">
                <h3>About Z-Guess</h3>
                <p className='about'>
                    Z-Guess was created to learn React.js and RapidAPI Zillow.com API while building a project for CS 361: Software Development
                    I at Oregon State University. For more info about the author check out <a href= "https://www.feathers-codes.com" target = "_blank" rel="noreferrer">Feathers-Codes</a>
                </p>
            </div>
        </div>
    )
}

export default Home;