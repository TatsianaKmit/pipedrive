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

            const pipedriveData = {
                title: "Deal Title",
                creator_user_id: 1,
                owner_id: 1,
                value: 200,
                person_id: 1,
                org_id: 1,
                stage_id: 1,
                pipeline_id: 1,
                currency: "USD",
                add_time: new Date().toISOString(),
                update_time: new Date().toISOString(),
                stage_change_time: new Date().toISOString(),
                status: "open",
                is_deleted: false,
                probability: 90,
                lost_reason: "Lost Reason",
                visible_to: 7,
                close_time: null,
                won_time: null,
                lost_time: null,
                local_won_date: null,
                local_lost_date: null,
                local_close_date: null,
                expected_close_date: null,
                label_ids: [],
                origin: "ManuallyCreated",
                origin_id: null,
                channel: 52,
                channel_id: null,
                acv: 120,
                arr: 120,
                mrr: 10,
                custom_fields: {}
            };


            try {
                const result = await PostServices(pipedriveData);
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