import axios from 'axios';
import { useForm } from "react-hook-form";
import React from 'react';

interface IFormInputs {
  Name: string
  Email: string
  Telno: number
  CompName: string
  Budget: string
  Service: string
  Message: string
}


function ContactPage() {
  const { register,formState: { errors }, handleSubmit } = useForm<IFormInputs>();
  const onSubmit = (data, e) => {
    axios({
      method: "POST", 
      url:"https://fillmore-media-server.herokuapp.com/send", 
      data: data,
    }).then((response)=>{
      if (response.data.status === 'success'){ 
        alert("Message Sent."); 
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
    e.target.reset();
  };
 
  return (
    <div className="pb-6 md:pb-12">
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Contact Us</h1>
      <div>
      <p>If you have any further enquires about Fillmore XR,<br/>fill the form below or click the button to arrange a video call.</p>
     </div></section>
    
      <div className="max-w-xl mx-auto prose prose-blue">
  <form onSubmit={handleSubmit(onSubmit)} className="contact-sty">
  <input name="Name" placeholder="Name:" id="Name" {...register("Name", { required: true,maxLength: 30 })} /><br/>
  {errors.Name && "Full name is required"}<br/>
      <input name="Email" placeholder="Email:" id="Email" {...register("Email", { required: true })} /><br/>
      {errors.Email && "Email is required"}<br/>
      <input name="Telno" placeholder="Tel No:" id="Telno" {...register("Telno", { required: true,maxLength: 20 })} /><br/>
  {errors.Telno && "Telephone Number is required"}<br/>
      <input name="CompName" placeholder="Company Name:"  id="CompName" {...register("CompName", { required: true })} /><br/>
      {errors.CompName && "Company name is required"}<br/>
      <select name="Budget" id="Budget"  {...register("Budget", { required: true })}>
      <option value="">Select Budget</option>
        <option value="0-500">£0-£500</option>
        <option value="500-5000">£500 - £5000</option>
        <option value="5000 +">£5000 +</option>
      </select><br/>
      {errors.Budget && "Budget is required"}<br/>
      <select name="Service" id="Service" {...register("Service", { required: true })}>
      <option value="">Selected Service</option>
        <option value="Apps">Apps</option>
        <option value="Filters">AR Filters</option>
        <option value="3D">3D Modelling</option>
        <option value="Banners">Banners</option>
      </select><br/>
      {errors.Service && "Picking a service is required"}<br/>
      <br/>

      <textarea name="Message" placeholder="Message:" id="Message" rows={4} {...register("Message", { maxLength: 60 })} /><br/>
  <br/>
      <input type="submit" value="SEND" className="example_f"/>
    </form>
</div> 
    </div>
  );
}

export default ContactPage;
