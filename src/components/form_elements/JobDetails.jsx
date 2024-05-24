import React from 'react'
import { Card, TextInput, Select } from '@gravity-ui/uikit'

export const JobDetails = ({ style, formik }) => {
  return (
    <div className='pipeform_card'>
      <Card style={style} view="raised" type="container" size="l">
        <h2>Job details</h2>
        <div className='two_inputs'>
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
      </Card>
    </div>
  )
}
