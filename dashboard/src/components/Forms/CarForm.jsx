import { Formik, Field, Form, useFormik } from "formik";
import ReactDom from "react-dom";
import React, { useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import * as Yup from "yup";
import "./Form.css";

export const CarForm = () => {
  const submitForm = (values) => {};
  const uploadFileChange = (info) => {
    console.log(info);
    setUpdateList(false);
    if (info) {
      setUpdateList(true);
    }
  };
  const uploadFileSelect = (file) => {
    console.log(`changed ${file}`);
  };
  const { handleSubmit, errors, touched, getFieldProps, handleChange } =
    useFormik({
      initialValues: {
        licensePlate: "",
        brand: "",
        image: "",
        status: "valid",
        active: "valid",
        price: 0,
        description: "",
        fuelConsumption: "",
        location: "",
        colour: "",
        discount: 0,
        doors: 0,
        line: "",
        category: "",
        fuelType: "gasoline",
        typeOfBox: "HandBook",
      },
      validationSchema: Yup.object({
        licensePlate: Yup.string()
          .min(3, "Min. 3 characters")
          .max(10, "Max. 10 characters")
          .required("Required"),
        brand: Yup.string()
          .min(3, "Min. 3 characters")
          .max(15, "Max. 15 characters")
          .required("Required"),
        image: Yup.string().required("Required"),
        status: Yup.string(),
        active: Yup.string(),
        price: Yup.number()
          .positive("Price must be greater than zero")
          .required("Required"),
        description: Yup.string()
          .min(30, "Min. 3 characters")
          .max(500, "Max. 15 characters")
          .required("Required"),
        fuelConsumption: Yup.string()
          .min(3, "Min. 3 characters")
          .max(15, "Max. 15 characters")
          .required("Required"),
        location: Yup.string()
          .min(10, "Min. 3 characters")
          .max(200, "Max. 15 characters")
          .required("Required"),
        colour: Yup.string()
          .min(3, "Min. 3 characters")
          .max(18, "Max. 15 characters")
          .required("Required"),
        discount: Yup.number()
          .min(0, "Min. 3 characters")
          .max(3, "Max. 15 characters"),
        doors: Yup.number()
          .positive("Doors must be greater than zero")
          .required("Required"),
        line: Yup.string()
          .min(2, "Min. 3 characters")
          .max(50, "Max. 15 characters")
          .required("Required"),
        category: Yup.string()
          .min(3, "Min. 3 characters")
          .max(15, "Max. 15 characters")
          .required("Required"),
        fuelType: Yup.string(),
        typeOfBox: Yup.string(),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div>
      <div className="formCar">
        <Formik>
          <Form noValidate onSubmit={handleSubmit}>
            <b>FORM TO CREATE A NEW CAR</b>
            <hr />
            <Field
              name="licensePlate"
              type="text"
              placeholder="License Plate"
              onChange={handleChange}
              {...getFieldProps("licensePlate")}
              className={`${touched.licensePlate && errors.licensePlate}`}
            />
            {touched.licensePlate && errors.licensePlate && (
              <span className="error">{errors.licensePlate}</span>
            )}
            <hr />
            <Field
              name="brand"
              type="text"
              placeholder="Brand"
              onChange={handleChange}
              {...getFieldProps("brand")}
              className={`${touched.brand && errors.brand}`}
            />
            {touched.brand && errors.brand && (
              <span className="error">{errors.brand}</span>
            )}
            <hr />
            <b>Image</b>
            <Widget
              publicKey={"365750c83b2c5c083491"}
              id="file"
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
              <b>Active </b>
              <label>
                <input
                  type="radio"
                  {...getFieldProps("active")}
                  checked={getFieldProps("active").value === "valid"}
                  value="valid"
                />
                Valid
              </label>
              <label>
                <input
                  type="radio"
                  {...getFieldProps("active")}
                  checked={getFieldProps("active").value === "invalid"}
                  value="invalid"
                />
                Invalid
              </label>
            </div>
            <hr />
            <b>Price</b>
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
            <Field
              name="fuelConsumption"
              type="text"
              placeholder="Fuel Comsuption"
              onChange={handleChange}
              {...getFieldProps("fuelConsumption")}
              className={`${touched.fuelConsumption && errors.fuelConsumption}`}
            />
            {touched.fuelConsumption && errors.fuelConsumption && (
              <span className="error">{errors.fuelConsumption}</span>
            )}
            <hr />
            <Field
              name="location"
              type="text"
              placeholder="Location"
              onChange={handleChange}
              {...getFieldProps("location")}
              className={`${touched.location && errors.location}`}
            />
            {touched.location && errors.location && (
              <span className="error">{errors.location}</span>
            )}
            <hr />
            <Field
              name="colour"
              type="text"
              placeholder="Colour"
              onChange={handleChange}
              {...getFieldProps("colour")}
              className={`${touched.colour && errors.colour}`}
            />
            {touched.colour && errors.colour && (
              <span className="error">{errors.colour}</span>
            )}
            <hr />
            <b>Discount</b>
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
            <hr />
            <b>Doors</b>
            <Field
              name="doors"
              type="number"
              min="0"
              max="5"
              placeholder="Doors"
              onChange={handleChange}
              {...getFieldProps("doors")}
              className={`${touched.doors && errors.description}`}
            />
            {touched.doors && errors.doors && (
              <span className="error">{errors.doors}</span>
            )}
            <hr />
            <Field
              name="line"
              type="text"
              placeholder="Line"
              onChange={handleChange}
              {...getFieldProps("line")}
              className={`${touched.line && errors.line}`}
            />
            {touched.line && errors.line && (
              <span className="error">{errors.line}</span>
            )}
            <hr />
            <Field
              name="category"
              type="text"
              placeholder="Category"
              onChange={handleChange}
              {...getFieldProps("category")}
              className={`${touched.category && errors.category}`}
            />
            {touched.category && errors.category && (
              <span className="error">{errors.category}</span>
            )}
            <hr />
            <div>
              <b>Type Of Fuel </b>
              <select id="rolTF" {...getFieldProps("fuelType")}>
                <option default value="admin">
                  Gasoline
                </option>
                <option value="user">Electric</option>
                <option value="super">Gas</option>
                <option value="super">Hybrid</option>
              </select>
            </div>
            <hr />
            <div>
              <b>Type Of Box </b>
              <select id="rolTB" {...getFieldProps("typeOfBox")}>
                <option value="admin">Automatic</option>
                <option autoFocus value="user">
                  Handbook
                </option>
                <option value="super">Semiautomatic</option>
              </select>
            </div>
            <hr />
            <button type="submit">CREATE CAR</button>
            <hr />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
