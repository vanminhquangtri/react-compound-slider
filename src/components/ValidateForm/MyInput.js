import { withFormsy } from 'formsy-react';
import React from 'react';

const MyInput = (props) => {
    const { setValue, errorMessage, value, updateFormData, name } = props
    return (
        <div>
            <input onChange={(e) => {setValue(e.target.value); updateFormData(name, e.target.value)}} value={value || ''} />
            <span>{errorMessage}</span>
        </div>
    );
};

export default withFormsy(MyInput);
