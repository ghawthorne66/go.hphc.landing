import React, { Component } from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import {  navigate } from "gatsby"

const ContactSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is Required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is Required"),
  phone: Yup.string().required("Please Enter Your Phone Number"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  address: Yup.string().required("Please Enter Your Address"),
  city: Yup.string().required("Please Enter Your City"),
  postalcode: Yup.string().required("Please Enter Your Postal Code"),
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class WaterHeaterForm extends Component {
  handleSubmit = values => {
    // alert(JSON.stringify(values))
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Water Heater Contact Form", values }),
    })
      .then(() => {
        console.log("Your message submitted Successfully!")
        navigate("water-heater-thank-you")
      })
      .catch(error => alert(error))

    console.log("submitted values :::::>", values)
  }

  render() {
    return (
      <Formik
        initialValues={{
          "bot-field": "",
          "form-name": "water-heater-page-form",
          fname: "",
          lname: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          postalcode: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={this.handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form
            name="water-heater-page-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="water-heater-page-form"
            />

            <div className="form-body">
              <div className="form-group">
                <Field
                  type="text"
                  className={
                    errors.fname && touched.fname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="fname"
                  placeholder="First Name "
                />
                {errors.fname && touched.fname ? (
                  <div className="invalid-feedback">{errors.fname}</div>
                ) : null}
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  className={
                    errors.lname && touched.lname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="lname"
                  placeholder="Last Name "
                />
                {errors.lname && touched.lname ? (
                  <div className="invalid-feedback">{errors.lname}</div>
                ) : null}
              </div>

              <div className="form-group">
                <Field
                  type="email"
                  className={
                    errors.email && touched.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="email"
                  placeholder="Email  "
                />
                {errors.email && touched.email ? (
                  <div className="invalid-feedback">{errors.email}</div>
                ) : null}
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  className={
                    errors.phone && touched.phone
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="phone"
                  placeholder="Phone Number"
                />
                {errors.phone && touched.phone ? (
                  <div className="invalid-feedback">{errors.phone}</div>
                ) : null}
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  className={
                    errors.address && touched.address
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="address"
                  placeholder="Street Address"
                />
                {errors.address && touched.address ? (
                  <div className="invalid-feedback">{errors.address}</div>
                ) : null}
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  className={
                    errors.city && touched.city
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="city"
                  placeholder="City"
                />
                {errors.city && touched.city ? (
                  <div className="invalid-feedback">{errors.city}</div>
                ) : null}
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  className={
                    errors.postalcode && touched.postalcode
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="postalcode"
                  placeholder="Postal Code"
                />
                {errors.postalcode && touched.postalcode ? (
                  <div className="invalid-feedback">{errors.postalcode}</div>
                ) : null}
              </div>

              <div className="sub-btn">
                <button
                  type="submit"
                  className="btn"
                  role="button"
                  disabled={isSubmitting}
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}

export default WaterHeaterForm