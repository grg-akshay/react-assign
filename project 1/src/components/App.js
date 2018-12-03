import React, {Component} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/App.css';
import Search from './Search';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            existingList: [1006, 1002, 1004, 1000] 
        }
    }

    render() {
        return (
            <div className="App">
                <div className="title">Searchify !</div>
                <div className="search-container">
                    <Search existingList={this.state.existingList}/>
                </div>
            </div>
        );
    }
}

export default App;