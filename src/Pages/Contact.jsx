import React from 'react'
import { Title } from '../components/Title'
import { FormInput } from '../components/formInput'
import { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const Contact = ({ contact }) => {
    const [ formInfo, setFormInfo ] = useState({
        userName: '',
        userEmail: '',
        message: ''
    })

    const form = useRef()

    useEffect(() => {
        document.title ='| Contact Me'
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInfo(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_x2a1gjg', 
            'template_9ppnaid', 
            form.current, 
            'ASVytyTtjXwDVCOSs')
          .then((result) => {
              console.log(result.text);
              window.location.reload(true)
              alert('Message Sent!')

              formInfo.userName = '';
              formInfo.userEmail = '';
              formInfo.message = '';

          }, (error) => {
              console.log(error.text);
          });
      };
    

    return (
        <section ref={contact} className='flex flex-col gap-8 items-center pb-8 bg-bg-primary pt-44 min-h-screen px-4'>
            <Title>Contact Me</Title>
            <div className='flex flex-col gap-4 w-full items-center max-w-xl'>
                <div className='flex flex-col sm:flex-row w-full px-4'>
                    <div className='flex flex-col items-center sm:border-r sm:border-slate-400 sm:w-1/3'>
                        <p className='sm:text-lg'>Contact Number</p>
                        <p className='text-md font-bold'>+27 813853172</p>
                    </div>
                    <div className='flex flex-col items-center sm:w-2/3'>
                        <p className='sm:text-lg'>Email</p>
                        <p className='font-bold'>danielmpho.dev@gmail.com</p>
                    </div>
                </div>
                <form
                    className='w-full px-4'
                    onSubmit={sendEmail}
                    ref={form}
                >
                    <FormInput
                        type='text'
                        placeholder='Enter Your Name . . .'
                        name='userName'
                        value={formInfo.userName}
                        onChange={handleChange}
                    />
                    <FormInput
                        type='email'
                        placeholder='Enter Your Email . . .'
                        name='userEmail'
                        value={formInfo.userEmail}
                        onChange={handleChange}
                    />
                    <textarea 
                        name="message" 
                        id="message" rows="10" 
                        placeholder='Write A Message . . .'
                        className='w-full rounded p-2 focus:outline-none'
                        value={formInfo.message}
                        onChange={handleChange}
                    />
                    <button className='bg-primary text-slate-50 font-semibold px-4 py-2 rounded-md hover:bg-slate-500 focus:bg-slate-400 mt-2'>Send</button>
                </form>
            </div>
        </section>
    )
}
