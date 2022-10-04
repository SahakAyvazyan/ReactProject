import React from 'react';
import { useController } from 'react-hook-form';
import './Input.css'

const Input = ({control,name,type,placeholder}) => {
    const {field} = useController({
        name,
        control
    })

    return (
        <div>
            <input className='inp' {...field} type={type} placeholder={placeholder} required={true}/>
        </div>
    );
}

export default Input;
