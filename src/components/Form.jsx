import React, { useState } from 'react'
import PostServices from '../services/POST'
import { Button } from '@gravity-ui/uikit'
import { useFormik } from 'formik'
import { Validation } from './ValidationSchema';
import { ClientDetails, JobDetails, Scheduled, ServiceLocation } from './cards/index'

export const Form = () => {
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
        validationSchema: Validation,
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

    return (
        <>
            <div className='form__container'>
                <div className='form__wrapper'>
                    <ClientDetails formik={formik} />
                    <JobDetails formik={formik} />
                    <ServiceLocation formik={formik} />
                    <Scheduled formik={formik} />
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
                </div >
            </div>
        </>
    )
}