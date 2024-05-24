import React from 'react'
import { Card, Select } from '@gravity-ui/uikit'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export const Scheduled = ({ style, formik }) => {
    return (
        <div className='pipeform_card'>
            <Card style={style} view="raised" type="container" size="l">
                <h2>Scheduled</h2>
                <DatePicker
                    placeholderText='Start date'
                    className="form-control"
                    selected={formik.values.startDate}
                    showIcon
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48"
                        >
                            <mask id="ipSApplication0">
                                <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                                    <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                                    <path
                                        fill="#fff"
                                        d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                    ></path>
                                </g>
                            </mask>
                            <path
                                fill="currentColor"
                                d="M0 0h48v48H0z"
                                mask="url(#ipSApplication0)"
                            ></path>
                        </svg>
                    }
                    dateFormat="mm/dd/yyyy"
                    id='startDate'
                    onChange={(date) => {
                        formik.setFieldValue('startDate', date);

                    }}
                />
                {formik.errors.startDate ? <div className='error'>{formik.errors.startDate}</div> : null}
                <div className='date-pickers'>
                    <div className='date-picker'>
                        <DatePicker
                            placeholderText='Start time'
                            selected={formik.values.startTime}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            id='startTime'
                            onChange={(date) => {
                                formik.setFieldValue('startTime', date);
                            }}
                        />
                        {formik.errors.startTime ? <div className='error'>{formik.errors.startTime}</div> : null}
                    </div>
                    <div className='date-picker'>
                        <DatePicker
                            placeholderText='End time'
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            id='endTime'
                            selected={formik.values.endTime}
                            onChange={(date) => {
                                formik.setFieldValue('endTime', date);
                            }}
                        />
                        {formik.errors.endTime ? <div className='error'>{formik.errors.endTime}</div> : null}
                    </div>
                </div>
                <Select filterable={true}
                    multiple={false}
                    width={'100%'}
                    placeholder='Select technician'
                    value={formik.values.technician}
                    id="technician"
                    errorMessage={formik.errors.technician || ""}
                    validationState={formik.errors.technician ? "invalid" : undefined}
                    onUpdate={(selectedOption) => formik.setFieldValue('technician', selectedOption)}
                    onBlur={formik.handleBlur}>
                    <Select.Option value="Option 1">Option 1</Select.Option>
                    <Select.Option value="Option 2">Option 3</Select.Option>
                    <Select.Option value="Option 3">Option 4</Select.Option>
                </Select>
            </Card>
        </div >
    )
}
