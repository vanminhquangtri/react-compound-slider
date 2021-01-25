import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

function HookForm() {
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange"
  });
  const onSubmit = data => {
    console.log('data :>> ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        placeholder="Bill"
        ref={register({
          required: "this is a required",
          maxLength: {
            value: 2,
            message: "Max length is 2"
          }
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        placeholder="Luo"
        ref={register({
          required: "this is required",
          minLength: {
            value: 2,
            message: "Min length is 2"
          }
        })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="bluebill1049@hotmail.com"
        type="text"
        ref={register({
          required: "this is required",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input type="submit" />
    </form>
  );
}

export default HookForm
