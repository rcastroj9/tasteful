import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({ label, placeholder, controlId, type = "text", required = true, pattern }) => {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label className='font-normal text__14 text-Mblack'>{label}<span className='text-[#ED544E]'>*</span></Form.Label>
            <Form.Control 
                type={type} 
                placeholder={placeholder} 
                className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' 
                required={required}
                pattern={pattern}
            />
        </Form.Group>
    );
};

export default FormField; 