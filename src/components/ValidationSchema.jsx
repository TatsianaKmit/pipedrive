import * as Yup from "yup";

export const Validation = Yup.object().shape({
    firstName: Yup.string().required("Enter First name"),
    lastName: Yup.string().required("Enter Last name"),
    phone: Yup.string()
        .matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Please use the following phone format: (777) 777-7777")
        .required("Enter phone number"),
    // email: Yup.string()
    // .matches(/^(([^<>()\[]\.,;:\s@"]+(.[^<>()\[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/, "Please use the following e-mail format: email@example.com"),
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
        .required("Enter Zip code"),
    area: Yup.array()
        .required("Select Area"),
    startDate: Yup.string()
        .required("Select Start date"),
    startTime: Yup.string()
        .required("Select Start time"),
    endTime: Yup.string()
        .required("Select End time"),
    technician: Yup.array()
        .required("Select Technician")
});