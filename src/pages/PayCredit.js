import React from 'react';
import '../pages/App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import PayableForm from '../components/ReceivableForm';
import MenuBar from '../components/MenuBar'

//COMPONENTS MUST START WITH UPPERCASE

{/* <form>
                <h1>Issue a Debit</h1>
                <label>Amount</label>
                <input placeholder = "How much they owe" />
            </form> */}


const PayCredit = () => {
    return (
        <div>
            <PayableForm 
                title = "Issue a Payable"
                description = "Let the person you owe know that they owe you by submitting an 'Issue a Payable' confirmation. Note: your credit record will be removed once they confirm they have received your money."
                text = "Who do you owe?"
                submit = "Submit Confirmation"
            />
        </div>
    )
}

export default PayCredit;







