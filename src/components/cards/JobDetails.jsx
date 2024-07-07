import React from 'react'
import { TextInput, Select } from '@gravity-ui/uikit'

export const JobDetails = ({ formik }) => {
  return (
    <div className='form__card'>
      <div className='card__wrapper'>
        <h2>Job details</h2>
        <div className='card__inputs'>
          <Select filterable={true}
            multiple={false}
            width={'100%'}
            placeholder='Job type'
            value={formik.values.jobType}
            id="jobType"
            errorMessage={formik.errors.jobType || ""}
            validationState={formik.errors.jobType ? "invalid" : undefined}
            onUpdate={(selectedOption) => formik.setFieldValue('jobType', selectedOption)}
            onBlur={formik.handleBlur}>
            <Select.Option value="Option 1">Option 1</Select.Option>
            <Select.Option value="Option 3">Option 3</Select.Option>
            <Select.Option value="Option 4">Option 4</Select.Option>
          </Select>
          <Select filterable={true}
            multiple={false}
            width={'100%'}
            placeholder='Job source'
            value={formik.values.jobSource}
            id="jobSource"
            errorMessage={formik.errors.jobSource || ""}
            validationState={formik.errors.jobSource ? "invalid" : undefined}
            onUpdate={(selectedOption) => formik.setFieldValue('jobSource', selectedOption)}
            onBlur={formik.handleBlur}
          >
            <Select.Option value="Option 1">Option 1</Select.Option>
            <Select.Option value="Option 3">Option 3</Select.Option>
            <Select.Option value="Option 4">Option 4</Select.Option>
          </Select>
        </div>
        <TextInput placeholder='Job description (optional)' size='xl' />
      </div>
    </div>
  )
}
