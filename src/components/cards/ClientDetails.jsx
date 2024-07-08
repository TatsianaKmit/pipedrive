import React from 'react'
import InputMask from "react-input-mask";
import { TextInput } from '@gravity-ui/uikit'

export const ClientDetails = ({ formik }) => {
    return (
        <div className='form__card'>
            <div className='card__wrapper'>
                <h2>Client details</h2>
                <div className='card__inputs'>
                    <TextInput placeholder='First name'
                        type="text"
                        value={formik.values.firstName}
                        id="firstName"
                        errorMessage={formik.errors.firstName || ""}
                        validationState={formik.errors.firstName ? "invalid" : undefined}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    <TextInput placeholder='Last name'
                        type="text"
                        value={formik.values.lastName}
                        id="lastName"
                        errorMessage={formik.errors.lastName || ""}
                        validationState={formik.errors.lastName ? "invalid" : undefined}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                </div>
                <InputMask mask="(999) 999-9999" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    {() => (
                        <TextInput
                            placeholder='Phone: (777) 777-7777'
                            type="text"
                            value={formik.phone}
                            id="phone"
                            errorMessage={formik.errors.phone || ""}
                            validationState={formik.errors.phone ? "invalid" : undefined}
                            onChange={formik.handleChange}

                        />
                    )}
                </InputMask>
                <TextInput placeholder='Email: email@example.com'
                    type="text"
                    value={formik.values.email}
                    id="email"
                    errorMessage={formik.errors.email || ""}
                    validationState={formik.errors.email ? "invalid" : undefined}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
            </div>
        </div>
    )
}
