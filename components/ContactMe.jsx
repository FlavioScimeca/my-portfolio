import React, { useRef } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3o08iwa',
        'template_nimtwwi',
        form.current,
        'XOJqSX6XdVRtI6APE'
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success('Email inviata.', {
            style: {
              border: '1px solid #ffed00',
              padding: '16px',
              color: '#2e3232',
            },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <Toaster />
      <h3 className="top-12 absolute uppercase tracking-[15px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-12">
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-v h-7 w-7 animate-pulse" />
            <p className="text-xl">+39 3899006978</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-v h-7 w-7 animate-pulse" />
            <p className="text-xl">flavioscimeca3@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-v h-7 w-7 animate-pulse" />
            <p className="text-xl">Agrigento</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-fit mx-auto h-fit"
        >
          <div className="space-x-2 flex">
            <input
              name="user_name"
              placeholder="name"
              className="contactInput w-1/2"
              type="text"
            />
            <input
              name="user_email"
              placeholder="email"
              className="contactInput w-1/2"
              type="email"
            />
          </div>

          <input
            name="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            name="message"
            placeholder="Message"
            className="contactInput max-h-28 min-h-20"
          />
          <button
            type="submit"
            value="Send"
            className="bg-green-700 py-5 px-10 rounded-md text-black font-semibold"
          >
            Invia
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
