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


const PayCredit = () => {
    return (
        <div>
            <Form 
                title = "Pay a Credit"
                description = "Let the person you owe know that you have paid them or e-transfered them by submitting a ‘pay a credit’ confirmation. Note: your credit record will be removed once they confirm they have received your money."
                submit = "Submit Confirmation"
            />
        </div>
    )
}

export default PayCredit;







