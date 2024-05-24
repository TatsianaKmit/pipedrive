import React from 'react'
import InputMask from "react-input-mask";
import { Card, TextInput } from '@gravity-ui/uikit'

export const ClientDetails = ({ style, formik }) => {
    return (
        <div className='pipeform_card'>
            <Card style={style} view="raised" type="container" size="l">
                <h2>Client details</h2>
                <div className='two_inputs'>
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
                        value={formik.valueslastName}
                        id="lastName"
                        errorMessage={formik.errors.lastName || ""}
                        validationState={formik.errors.lastName ? "invalid" : undefined}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                </div>
                <InputMask mask="(999) 999-9999" value={formik.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    {() => (
                        <TextInput
                            placeholder='Phone'
                            type="text"
                            value={formik.phone}
                            id="phone"
                            errorMessage={formik.errors.phone || ""}
                            validationState={formik.errors.phone ? "invalid" : undefined}
                            onChange={formik.handleChange}

                        />
                    )}
                </InputMask>
                <TextInput placeholder='Email (optional)'
                    type="text"
                    value={formik.email}
                    id="email"
                    errorMessage={formik.errors.email || ""}
                    validationState={formik.errors.email ? "invalid" : undefined}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
            </Card>
        </div>
    )
}
