import "./contact.css";

import { useContext, useRef, useState } from "react";

import emailjs from '@emailjs/browser';

import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z6rpse7",
        "template_0f2cq5t",
        formRef.current,
        "user_E7e1UIJE3t4MaAkWs49gt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        fill: darkMode && "#fff",
      }} className="c-icon" viewBox="0 0 99.72 100.62"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M5.93,19.25a13.29,13.29,0,0,0-1.16,1.44C1.51,23.58-1.07,29.93.45,37.75a78.07,78.07,0,0,0,69.39,62.77c.74.07,1.48.1,2.21.1a20.43,20.43,0,0,0,10.64-2.79,15.87,15.87,0,0,0,3.79-3.06l3-3.27a15.58,15.58,0,0,0-1.1-22l-5-4.5a15.54,15.54,0,0,0-22,1.1l-2.95,3.26a15.53,15.53,0,0,0-2.75,4.27A55,55,0,0,1,28.3,48.6a15.42,15.42,0,0,0,5.68-4l3-3.26a15.57,15.57,0,0,0-1.1-22l-5-4.5a15.57,15.57,0,0,0-22,1.1Zm5.91-.59a11.56,11.56,0,0,1,16.33-.81l5,4.5A11.57,11.57,0,0,1,34,38.68L31,41.94h0a11.58,11.58,0,0,1-5.24,3.31l-.89.27a2,2,0,0,0-1.22,2.81l.42.84A59.08,59.08,0,0,0,55.34,77.84l.77.31a2,2,0,0,0,1.58-.05,2,2,0,0,0,1.05-1.18l.26-.78a11.55,11.55,0,0,1,2.39-4.07l3-3.26A11.54,11.54,0,0,1,80.66,68l5,4.5a11.57,11.57,0,0,1,.82,16.33l-2.95,3.27a11.85,11.85,0,0,1-2.87,2.3A17.11,17.11,0,0,1,70.2,96.54,74.07,74.07,0,0,1,4.37,37c-1.3-6.73,1.15-11.68,3.12-13.36l.18-.18.14-.15c.05-.07.11-.13.16-.21a11.42,11.42,0,0,1,.92-1.16Z"/><path class="cls-1" d="M99.72,47.51A47.56,47.56,0,0,0,52.22,0a4.16,4.16,0,1,0,0,8.32A39.23,39.23,0,0,1,91.4,47.51a4.16,4.16,0,1,0,8.32,0Zm-4.16,2.16a2.16,2.16,0,0,1-2.16-2.16A41.23,41.23,0,0,0,52.22,6.32a2.16,2.16,0,1,1,0-4.32,45.55,45.55,0,0,1,45.5,45.51A2.16,2.16,0,0,1,95.56,49.67Z"/><path class="cls-1" d="M51.71,15.47a4.16,4.16,0,0,0,0,8.32A24.26,24.26,0,0,1,75.93,48a4.16,4.16,0,1,0,8.32,0A32.58,32.58,0,0,0,51.71,15.47ZM80.09,50.18A2.16,2.16,0,0,1,77.93,48,26.26,26.26,0,0,0,51.71,21.79a2.16,2.16,0,0,1,0-4.32A30.58,30.58,0,0,1,82.25,48,2.16,2.16,0,0,1,80.09,50.18Z"/></g></g></svg>
              +54 11 33452515
            </div>
            <div className="c-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        fill: darkMode && "#fff",
      }} className="c-icon" viewBox="0 0 97.13 109.55"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M2,46.57a9,9,0,0,0-2,5.65v48.11a9,9,0,0,0,9,9h1.22l.22.22.22-.22H86.47l.22.22.22-.22h1.22a9,9,0,0,0,9-9V52.22a9,9,0,0,0-2-5.65,2.47,2.47,0,0,0-.7-1.73L50.26.67a2.49,2.49,0,0,0-3.39,0L2.7,44.84A2.39,2.39,0,0,0,2,46.57Zm12.66,58.76L37.23,82.76l9.64,9.64a2.4,2.4,0,0,0,3.39,0l9.64-9.64,22.57,22.57ZM21.9,62V45.22H76v16L48.56,88.68Zm71.23-9.8v48.11a5,5,0,0,1-4,4.9L63.28,79.38,92.61,50.05A5,5,0,0,1,93.13,52.22ZM48.56,5.75,89.35,46.54,78.9,57V43.78a1.43,1.43,0,0,0-1.44-1.43h-57A1.43,1.43,0,0,0,19,43.78v14L7.78,46.54ZM4,52.22a5,5,0,0,1,.52-2.17L33.85,79.38,8,105.23a5,5,0,0,1-4-4.9Z"/></g></g></svg>              quagliarofernanda@gmail.com
            </div>
            <div className="c-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        fill: darkMode && "#fff",
      }} className="c-icon" viewBox="0 0 64.75 102.74"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M63.83,38.17a29.51,29.51,0,0,0,.92-7.3C64.75,13.85,50.23,0,32.38,0S0,13.85,0,30.87a29.51,29.51,0,0,0,.92,7.3,44.24,44.24,0,0,0,3.53,12c3.18,6.37,16.57,27.41,22.72,37C18.86,88.18,15,91.59,15,94.8c0,3.82,5.44,7.94,17.38,7.94s17.37-4.12,17.37-7.94c0-3.21-3.86-6.62-12.17-7.63,6.15-9.58,19.54-30.62,22.72-37A44.24,44.24,0,0,0,63.83,38.17ZM44.74,94.8C44.4,95.71,40.22,98,32.38,98S20.25,95.65,20,94.83c.22-.79,3.63-2.73,10.08-3.12l.17.25a2.56,2.56,0,0,0,4.25,0l.17-.25C41,92.09,44.44,94,44.74,94.8ZM59,37.13c0,.06,0,.12,0,.18a41.12,41.12,0,0,1-3.12,10.82c-3.22,6.44-17.87,29.39-23.41,38-5.55-8.63-20.2-31.58-23.42-38A41.12,41.12,0,0,1,5.84,37.31c0-.06,0-.12,0-.18A25.05,25.05,0,0,1,5,30.87C5,16.48,17.28,4.77,32.38,4.77s27.37,11.71,27.37,26.1A25.05,25.05,0,0,1,59,37.13Z"/><path class="cls-1" d="M32.38,13.51C22.79,13.51,15,21,15,30.08s7.79,16.57,17.38,16.57,17.37-7.43,17.37-16.57S42,13.51,32.38,13.51Zm0,28.37C25.55,41.88,20,36.59,20,30.08s5.55-11.8,12.38-11.8,12.37,5.3,12.37,11.8S39.2,41.88,32.38,41.88Z"/></g></g></svg>              Ciudad Autonoma de Buenos Aires - Argentina            
              </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. 
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
