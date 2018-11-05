class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button> what should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <ol> 
                    <li> Options are here </li>
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button> Add + </button>
            </div>
        );
    }
}

const jsx = ( 
    <div> 
        <Header/>
        <Action />
        <Options />
        <AddOption/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));