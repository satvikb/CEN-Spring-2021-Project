//https://medium.com/weekly-webtips/simple-react-contact-form-without-back-end-9fa06eff52d9
import React from 'react';
import Button from 'react-bootstrap/Button'

import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

var emailjsconfig = {
    SERVICE_ID:"service_gzmteol",
    TEMPLATE_ID:"template_4bxa6ui",
    USER_ID:"user_7Uk8lo7mQEOjGT0akUZGe"
}


const ContactForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();


  const toastifySuccess = () => {
    console.log("TOAST");
    toast.success('E-mail sent!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      };
      await emailjs.send(
        emailjsconfig.SERVICE_ID,
        emailjsconfig.TEMPLATE_ID,
        templateParams,
        emailjsconfig.USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'>

        <div className="ContactUsImage">
          <div className="BannerTitle">
            <h1 className="BannerTitleText">Contact Us</h1>
          </div>
        </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm' style={{marginBottom:40}}>
              
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} >
                {/* Row 1 of form */}
                <div className='row formRow' style={{marginBottom:15}}>
                  <div className='col-6'>
                    <input
                      type='text'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>

                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow' style={{marginBottom:20}}>
                  <div className='col'>
                    <input
                      type='text'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>

                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow' style={{marginBottom:50}}>
                  <div className='col'>
                    <textarea
                      rows={3}
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
                <Button className='submit-btn' type='submit' variant='primary' style={{marginBottom:80}}>
                  Submit
                </Button>
              </form>
              <ToastContainer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
