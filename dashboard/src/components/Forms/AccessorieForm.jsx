import { Formik, Field, Form, useFormik } from "formik";
import ReactDom from "react-dom";
import React, { useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import * as Yup from "yup";
import "./Form.css";

export const AccessorieForm = () => {
  const submitForm = (values) => {};
  const uploadFileChange = (info) => {
    console.log(info);
  };
  const uploadFileSelect = (file) => {
    console.log(`changed ${file}`);
  };
  const { handleSubmit, errors, touched, getFieldProps, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        price: 0,
        description: "",
        image: "",
        status: "valid",
        discount: 0,
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .min(3, "Min. 3 characters")
          .max(50, "Max. 50 characters")
          .required("Required"),
        price: Yup.number()
          .positive("Price must be greater than zero")
          .required("Required"),
        description: Yup.string()
          .min(10, "Min. 10 characters")
          .max(300, "Max. 300 characters")
          .required("Required"),
        image: Yup.string().required("Required"),
        status: Yup.string(),
        discount: Yup.string()
          .min(0, "Min. 3 characters")
          .max(3, "Max. 15 characters"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div>
      <div className="form">
        <Formik>
          <Form noValidate onSubmit={handleSubmit}>
            <b>Create New Accesorie</b>
            <hr />
            <Field
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              {...getFieldProps("name")}
              className={`${touched.name && errors.name}`}
            />
            {touched.name && errors.name && (
              <span className="error">{errors.name}</span>
            )}
            <hr />
            <Field
              name="price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              placeholder="Price"
              onChange={handleChange}
              {...getFieldProps("price")}
              className={`${touched.price && errors.price}`}
            />
            {touched.price && errors.price && (
              <span className="error">{errors.price}</span>
            )}
            <hr />
            <Field
              name="description"
              type="text"
              placeholder="Description"
              onChange={handleChange}
              {...getFieldProps("description")}
              className={`${touched.description && errors.description}`}
            />
            {touched.description && errors.description && (
              <span className="error">{errors.description}</span>
            )}
            <hr />
            <b>Image</b>
            <Widget
              publicKey={"31565ad8e1a6027b4914"}
              name="image"
              clearable
              onChange={(info) => uploadFileChange(info)}
              onFileSelect={(file) => uploadFileSelect(file)}
              {...getFieldProps("image")}
              className={`${touched.image && errors.image}`}
            />
            {touched.image && errors.image && (
              <span className="error">{errors.image}</span>
            )}
            <hr />
            <div>
              <b>Status </b>
              <label>
                <input
                  type="radio"
                  {...getFieldProps("status")}
                  checked={getFieldProps("status").value === "valid"}
                  value="valid"
                />
                Valid
              </label>
              <label>
                <input
                  type="radio"
                  {...getFieldProps("status")}
                  checked={getFieldProps("status").value === "invalid"}
                  value="invalid"
                />
                Invalid
              </label>
            </div>
            <hr />
            <div>
              <b>Discount </b>
              <Field
                name="discount"
                type="number"
                min="0"
                max="100"
                placeholder="Discount"
                onChange={handleChange}
                {...getFieldProps("discount")}
                className={`${touched.discount && errors.discount}`}
              />
              {touched.discount && errors.discount && (
                <span className="error">{errors.discount}</span>
              )}
            </div>
            <hr />
            <button type="submit">Create car</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
