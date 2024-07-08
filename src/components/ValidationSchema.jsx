import * as Yup from "yup";

export const Validation = Yup.object().shape({
    firstName: Yup.string().required("Enter First name"),
    lastName: Yup.string().required("Enter Last name"),
    phone: Yup.string()
        .matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Please use the following phone format: (777) 777-7777")
        .required("Enter phone number"),
    email: Yup.string()
        .email("Please use the following e-mail format: email@example.com")
        .required("Enter E-mail"),
    jobType: Yup.array()
        .required("Select Job Type"),
    jobSource: Yup.array()
        .required("Select Job Source"),
    address: Yup.string()
        .required("Enter Address"),
    city: Yup.string()
        .required("Enter City"),
    state: Yup.string()
        .required("Enter State"),
    zipCode: Yup.string()
        .matches(/^[0-9]+$/, "Zip Code must contain only numbers")
        .required("Enter Zip Code"),
    area: Yup.array()
        .required("Select Area"),
    startDate: Yup.string()
        .required("Select Start Date"),
    startTime: Yup.string()
        .required("Select Start Time"),
    endTime: Yup.string()
        .required("Select End Time"),
    technician: Yup.array()
        .required("Select Technician")
});