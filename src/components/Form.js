import React from 'react';
import '../pages/App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Typography from '@material-ui/core/Typography';

//COMPONENTS MUST START WITH UPPERCASE

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '' };
    }
     
    handleChange = event => {
        this.setState({ username: event.target.value });
    };

    render(){
        return (
            <div>
                <Typography>Issue a Debit</Typography>
                <React.Fragment>
                    <form>
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    </form>

                    <h3>Your username is: {this.state.username}</h3>
                </React.Fragment>
            </div>
        )
    }
}


export default Form;







