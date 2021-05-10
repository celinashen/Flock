import React from 'react';
import '../pages/App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Form from '../components/Form';
import MenuBar from '../components/MenuBar'

//COMPONENTS MUST START WITH UPPERCASE

{/* <form>
                <h1>Issue a Debit</h1>
                <label>Amount</label>
                <input placeholder = "How much they owe" />
            </form> */}


const IssueDebit = () => {
    return (
        <div>
            <MenuBar/>
            <Form 
                title = "Issue a Receivable"
                description = "Let someone know that they owe you money by submitting a ‘Issue a Debit’ record. Once they pay you back, they will send you a confirmation that they have paid you, and you can confirm the transaction (confirmations found in the inbox)."
                submit = "Submit Request"
            />
        </div>
    )
}





export default IssueDebit;







