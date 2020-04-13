import React from 'react';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';

const ValidatedLoginForm = () => (
    <Formik
        initialValues = {{ email: '', password: '' }}
        onSubmit = {( values, { setSubmitting }) => {
            console.log("Submittin");
        }} 
        validate = { values => {
            let errors = {};

            if(!values.email) {
                errors.email = "Required field";
            }
            else if (!EmailValidator.validate(values.email)) {
                errors.email = "Invalid e-mail address";
            }

            const passwordRegex = /(?= *[0-9])/;

            if(!values.password) {
                errors.password = "Required field";
            }
            else if (values.password.length < 4) {
                errors.password = "Password must be 8 characters long";
            }
            else if (!passwordRegex.test(values.password)) {
                errors.password = "Invalid Password. Must contain a number";
            }
            return errors;
        }}
    >
        {
           props => {
               const { 
                values, 
                touched, 
                errors, 
                isSubmitting, 
                handleChange, 
                handleBlur, 
                handleSubmit 
            } = props;
            return (
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter email" 
                            value= {values.email} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            className={errors.email && touched.email && "error" }
                        />
                        {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter password"
                            value= {values.password} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password && "error"}
                        />
                        {errors.password && touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        disabled = {isSubmitting}
                        className="btn btn-primary btn-block" 
                        onClick={this.handleSubmit}
                    >Submit</button>

                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            );
        }} 
    </Formik>
);

export default ValidatedLoginForm