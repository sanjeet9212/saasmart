import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './InputForm.css';

function InputForm() {

    const [userInput, setUserInput] = useState({
        name:'',
        email:''
    });

    const [userList, setUserList] = useState([]);
    const {name, email} = userInput;

    const handleInput = (e) => {
        setUserInput({...userInput, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name!=='' && email!==''){
            const newData = {...userInput};
            setUserList([...userList, newData]);
        }
        else{
            alert('Enter Valid Input')
        }

        setUserInput({
            name:'',
            email:''
        })
    };

    return (
        <div className='home-page'>
            <Form action='' className='home-page-form' onSubmit={handleSubmit}>
                <h1>Enter your Details</h1>
                <FormGroup className='form-group'>
                    <Label for="name">Name:</Label>
                    <Input type="text" name="name" id="name" 
                    value={userInput.name}
                    onChange={handleInput}
                    placeholder="Enter your Name" />
                </FormGroup>
                <FormGroup className='form-group'>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" 
                    value={userInput.email}
                    onChange={handleInput}
                    placeholder="Enter your Email Address" />
                </FormGroup>
                <div className='submit-button'>
                    <Button>Submit</Button>
                </div>   
            </Form>

            <div className='get-details'>
                {
                    userList.map((curr) => {
                        const {name, email} = curr;
                        return(
                            <div className='show-data'>
                                <h4>Name: {name}</h4>
                                <h4>Email: {email}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InputForm
