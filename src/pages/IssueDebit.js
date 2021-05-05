import React from 'react';
import '../pages/App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//COMPONENTS MUST START WITH UPPERCASE




const IssueDebit = () => {
    return (
        <div>
            <form>
                <h1>Issue a Debit</h1>
                <label>Amount</label>
                <input placeholder = "How much they owe" />
            </form>
        </div>
    )
}





export default IssueDebit;







