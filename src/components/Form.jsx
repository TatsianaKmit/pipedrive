import React, { useState, useEffect } from 'react'
import PostServices from '../services/POST'
import { useFormik } from 'formik'
import { Validation } from './ValidationSchema';
import { ClientDetails, JobDetails, Scheduled, ServiceLocation } from './cards/index'

export const Form = () => {
    const [formSaved, setFormSaved] = useState(false)
    const [requestSent, setRequestSent] = useState(false)

    const handleSubmit = () => {
        formik.validateForm().then((errors) => {
            if (Object.keys(errors).length === 0) {
                setRequestSent(true);
            }
            formik.handleSubmit()
        });
    }

    const handleSaveInfo = () => {
        localStorage.setItem(formik.values, JSON.stringify(formik.values));
        setFormSaved(true)
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
                    <div className='form__buttons'>
                        {requestSent ? (
                            <button className="form__button" onClick={handleSubmit}>
                                Request is sent
                            </button>
                        ) : (
                            <button className="form__button" onClick={handleSubmit}>
                                Create request
                            </button>
                        )}
                        {formSaved ? (
                            <button className="form__button" onClick={handleSaveInfo}>
                                Saved
                            </button>
                        ) : (
                            <button className="form__button" onClick={handleSaveInfo}>
                                Save info
                            </button>
                        )}
                    </div>
                </div >
            </div>
        </>
    )
}