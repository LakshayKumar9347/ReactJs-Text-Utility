import React from 'react'

export default function ReactMain(props) {
    return (


        <div>
            <header className="App-header">
                <img src={props.logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>

    )
}
