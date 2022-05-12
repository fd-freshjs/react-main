import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './RegisterForm.css';

const regiterSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required().matches(/^[\w]*$/),
  password: yup.string().required(),
  confPassword: yup.string().required().oneOf([yup.ref("password")]),
});

function RegisterForm () {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confPassword: '',
  };

  const handleSubmit = (data, formikBag) => {
    // reset form
    formikBag.resetForm();

    // do smth
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validate
      validationSchema={regiterSchema}
    >
      {
        (settings) => {
          const { errors } = settings;

          return (
            <Form>
              <label className="inputWrapper">
                <Field className={errors.name ? "error" : ""} name="name" placeholder="Name" />
                <ErrorMessage className="errorLabel" name="name" component="div" />
              </label>

              <Field className={errors.email ? "error" : ""} name="email" placeholder="Email" />
              <ErrorMessage name="email"  component="div" />

              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password"  component="div" />

              <Field type="password" name="confPassword" placeholder="Confirm password" />
              <ErrorMessage name="confPassword"  component="div" />

              <button type="submit">Send</button>
            </Form>
          );
        }
      }
    </Formik>
  );
}

export default RegisterForm;
