import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data);
  
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input {...register("Name")} placeholder="Name" />
        <textarea {...register("Message")} placeholder="Message" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form