import React from 'react';
import { Form } from 'react-bootstrap';
import { FORM_CONTENT } from '../../config/constants';

const FormCheckList = () => {
    return (
        <Form.Group className="mb-3" controlId="dynamics">
            <Form.Label className='font-normal text__14 text-Mblack'>
                {FORM_CONTENT.teamDynamics.title} <span className='text-[#ED544E]'>*</span>
            </Form.Label>
            <p className='text__14 text-[#A3A3A3]'>{FORM_CONTENT.teamDynamics.subtitle}</p>
            <div className="space-y-4">
                {FORM_CONTENT.teamDynamics.options.map((dynamic) => (
                    <div key={dynamic.id} className="p-4 bg-[#FAFAFA] rounded-[20px]">
                        <Form.Check
                            type="checkbox"
                            id={dynamic.id}
                            label={
                                <div>
                                    <span className="font-medium">{dynamic.title}</span>
                                    <ul className="list-disc ml-6 mt-2 text-sm text-[#525252]">
                                        {dynamic.activities.map((activity, index) => (
                                            <li key={index}>{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                            }
                            className="mb-0"
                        />
                    </div>
                ))}
            </div>
        </Form.Group>
    );
};

export default FormCheckList; 