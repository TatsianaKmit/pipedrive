import React, { useState, useEffect } from 'react'
import PostServices from '../services/POST'
import { useFormik } from 'formik'
import { Validation } from './ValidationSchema';
import { ClientDetails, JobDetails, Scheduled, ServiceLocation } from './cards/index'

export const Form = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = () => {
        setFormSubmitted(true);
        formik.handleSubmit();
    }

    const handleSaveInfo = () => {
        localStorage.setItem(formik.values, JSON.stringify(formik.values));
    };

    const formik = useFormik({
        initialValues: {
            phone: "",
            email: "",
            firstName: "",
            lastName: "",
            jobType: "",
            jobSource: "",
            description: "",
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
                formik.resetForm();
                localStorage.removeItem(formik.values);
            } catch (error) {
                console.error(error);
            }
        },
    })

    useEffect(() => {
        const formData = JSON.parse(localStorage.getItem(formik.values));
        if (formData) {
            formik.setValues(formData);
        }
    }, []);

    return (
        <>
            <div className='form__container'>
                <div className='form__wrapper'>
                    <ClientDetails formik={formik} />
                    <JobDetails formik={formik} />
                    <ServiceLocation formik={formik} />
                    <Scheduled formik={formik} />
                    {formSubmitted ? (
                        <button className="form__button" onClick={handleSubmit}>
                            Request is sent
                        </button>
                    ) : (
                        <button className="form__button" onClick={handleSubmit}>
                            Create job
                        </button>
                    )}
                    <button className="form__button" onClick={handleSaveInfo}>
                        Save info
                    </button>
                </div >
            </div>
        </>
    )
}