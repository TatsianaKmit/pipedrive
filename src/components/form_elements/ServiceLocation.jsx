import React from 'react'
import { Card, TextInput, Select } from '@gravity-ui/uikit'

export const ServiceLocation = ({ style, formik }) => {
    return (
        <div className='pipeform_card'>
            <Card style={style} view="raised" type="container" size="l">
                <h2>Service location</h2>
                <TextInput placeholder='Address'
                    type="text"
                    value={formik.values.city}
                    id="city"
                    errorMessage={formik.errors.city || ""}
                    validationState={formik.errors.city ? "invalid" : undefined}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <TextInput placeholder='City' type="text"
                    value={formik.values.address}
                    id="address"
                    errorMessage={formik.errors.address || ""}
                    validationState={formik.errors.address ? "invalid" : undefined}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <TextInput placeholder='State' type="text"
                    value={formik.values.state}
                    id="state"
                    errorMessage={formik.errors.state || ""}
                    validationState={formik.errors.state ? "invalid" : undefined}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <div className='two_inputs'>
                    <TextInput placeholder='Zip code'
                        type="text"
                        value={formik.values.zipCode}
                        id="zipCode"
                        errorMessage={formik.errors.zipCode || ""}
                        validationState={formik.errors.zipCode ? "invalid" : undefined}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    <Select filterable={true}
                        multiple={false}
                        width={'100%'}
                        placeholder='Area'
                        value={formik.values.area}
                        id="area"
                        errorMessage={formik.errors.area || ""}
                        validationState={formik.errors.area ? "invalid" : undefined}
                        onUpdate={(selectedOption) => formik.setFieldValue('area', selectedOption)}
                        onBlur={formik.handleBlur}>
                        <Select.Option value="Option 1">Option 1</Select.Option>
                        <Select.Option value="Option 3">Option 3</Select.Option>
                        <Select.Option value="Option 4">Option 4</Select.Option>
                    </Select>
                </div>
            </Card>
        </div>
    )
}
