import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import List from './List';
import {leftmost, rightmost} from '../utils/binarySearch';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countList: {},
            sortedList: [],
            value:''
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let arr = this.props.existingList;
        arr.sort((a, b) => a - b);
        this.setState({sortedList: arr});
        // now exisiting array is sorted
        let countObject = arr.reduce(function (allNumber, number) {
            if (number in allNumber) {
                allNumber[number]++;
            } else {
                allNumber[number] = 1;
            }
            return allNumber;
        }, {});

        this.setState({countList: countObject}); //now it has sorted count of occurences of every number in an array
    }

    notify = (id) => toast(id);

    handleKeyPress(evt) {
        if(evt.key!=='Enter'){

            var theEvent = evt || window.event;
            var key ;
            // Handle paste
            if (theEvent.type === 'paste') {
                key = evt.clipboardData.getData('text/plain');
            } else {
            // Handle key press
                key= theEvent.keyCode || theEvent.which;
                key = String.fromCharCode(key);
                
            }
            var regex = /[0-9]|\.|-/;
            if( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
            else{
                let value=evt.target.value+key;
                this.setState({value})
            }
            
        }
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        let exisitingObj = this.state.countList;
        let val = this.state.value;
        if (!val.includes('-')) {
            if (val in exisitingObj) {
                //this says number is duplicate
                if(this.state.countList[val]===0){
                    this.notify(`${val} is already skipped`);
                }
                else{
                    this.notify(`${val} is duplicate, so skipped`);
                    this.setState((state) => {
                        let count = state.countList;
                        count[val] -= 1;
                        return {
                            ...state,
                            countList: count
                        }
                    })

                }
                

               
            }
        } else {
            //contains - ie. range
            val = val.split('-');
            if (!(parseFloat(val[0]) < this.state.sortedList[0] && parseFloat(val[1]) < this.state.sortedList[0])) {
                let l = leftmost(this.state.sortedList, parseFloat(val[0]), 0, this.state.sortedList.length - 1);
                let r = rightmost(this.state.sortedList, parseFloat(val[1]), 0, this.state.sortedList.length - 1);

                if (l >= 0 && r >= 0) {
                    for (let i = l; i <= r; i++) {
                        let current = this.state.sortedList[i];
                        if (exisitingObj[current] > 0) {
                            this.notify(`${current} is duplicate, so skipped`);

                            this.setState((state) => {
                                let count = state.countList;
                                count[current] -= 1;
                                return {
                                    ...state,
                                    countList: count
                                }
                            })
                        }
                        else{
                            this.notify(`${current} is already skipped!`);
                        }
                    }
                }
            }
        }
        this.setState({value:''});
    }

    render() {
        return (
            <div>
                <div className="search-container">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.value}
                            onKeyPress={this.handleKeyPress}
                            className='search'
                            placeholder='Enter single ID, multiple ID or range of ID'/>
                    </form>
                </div>
                <ToastContainer/>
                <List
                    existingList={this.props.existingList}
                    filteredList={this.state.countList}/>
            </div>
        )
    }
}

Search.defaultProps = {
    existingList: [1006, 1002, 1004, 1000] //we are getting the list from some API suppose and passed down to this component as props
}

export default Search;