import React, { useState } from 'react'
import PostServices from '../services/POST'
import { Button } from '@gravity-ui/uikit'
import { useFormik } from 'formik'
import { PipeValidationSchema } from './ValidationSchema';
import { ClientDetails } from './form_elements/ClientDetails';
import { JobDetails } from './form_elements/JobDetails';
import { ServiceLocation } from './form_elements/ServiceLocation';
import { Scheduled } from './form_elements/Scheduled';

export const PipeForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = () => {
        setFormSubmitted(true);
        formik.handleSubmit();
    }

    const formik = useFormik({
        initialValues: {
            phone: "",
            email: "",
            firstName: "",
            lastName: "",
            jobType: "",
            jobSource: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            area: "",
            startDate: "",
            startTime: "",
            endTime: "",
            technician: ""
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: PipeValidationSchema,
        onSubmit: async (values) => {
            try {
                const result = await PostServices(values);
                console.log('values', values);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        },
    })



    const style = {
        width: '300px',
        height: '250px',
        padding: '10px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    }

    return (
        <>
            <div className='pipeform_wrapper'>
                <ClientDetails style={style} formik={formik} />
                <JobDetails style={style} formik={formik} />
                <ServiceLocation style={style} formik={formik} />
                <Scheduled style={style} formik={formik} />
            </div >
            <div className='pipeform_wrapper_buttons'>
                {formSubmitted ? (
                    <Button onClick={handleSubmit}>
                        Request is sent
                    </Button>
                ) : (
                    <Button onClick={handleSubmit}>
                        Create job
                    </Button>
                )}
                <Button>
                    Save info
                </Button>
            </div>
        </>
    )
}