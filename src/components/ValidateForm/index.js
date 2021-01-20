import Formsy from 'formsy-react';
import React, { useState } from 'react';
import MyInput from './MyInput';

const ValidatedForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: ''
    })
    const updateFormData = (pro, value) => {
        setFormData(() => {
            return {
                ...formData, [pro]: value
            }
        })
    }
    console.log('updateFormData :>> ', updateFormData);
    return (
        <Formsy>
            <MyInput name="email" validations={{
                isEmail: true,
                maxLength: 10,
            }} 
            validationErrors={{
                isEmail: 'You have to type valid email',
                maxLength: 'You can not type in more than 50 characters',
            }}
            required updateFormData={updateFormData}/>
            <MyInput name="name" 
            validations="minLength:1" required
            validationErrors={{isAlpha: "Please fill in your name"}}
            validationError="Please fill in your name"
            updateFormData={updateFormData}/>
            
            <button type="submit"> Submit </button>
        </Formsy>
    );
};

export default ValidatedForm;