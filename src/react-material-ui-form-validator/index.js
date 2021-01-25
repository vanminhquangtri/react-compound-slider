import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// export default class MyForm extends React.Component {

//     state = {
//         email: '',
//     }

//     handleChange = (event) => {
//         const email = event.target.value;
//         this.setState({ email });
//     }

//     handleSubmit = () => {
//         // your submit logic
//     }

//     render() {
//         const { email } = this.state;
//         return (
//             <ValidatorForm
//                 ref="form"
//                 onSubmit={this.handleSubmit}
//                 onError={errors => console.log(errors)}
//             >
//                 <TextValidator
//                     label="Email"
//                     onChange={this.handleChange}
//                     name="email"
//                     value={email}
//                     validators={['required', 'isEmail']}
//                     errorMessages={['this field is required', 'email is not valid']}
//                 />
//                 <button type="submit">Submit</button>
//             </ValidatorForm>
//         );
//     }
// }

const MyForm = () => {
    const [data, setData] = useState({
        email: '',
    })

    const { email } = data

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        return true
    }

    return (
        <ValidatorForm
            ref="form"
            onSubmit={handleSubmit}
            onError={errors => console.log(errors)}
        >
            <TextValidator
                label="Email"
                onChange={handleChange}
                name="email"
                value={email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
            />
            <button type="submit">Submit</button>
        </ValidatorForm>
    )
}

export default MyForm