import React from "react";
import contact_us from "../Components/Assets/contact-us-illustration.avif";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xrgwdkoa");
  return (
    <div className="contact">
      <div className="right-contact">
        <img src={contact_us} alt="contact_us" />
      </div>
      <div className="left-contact">
        <form onSubmit={handleSubmit}>
          <h1>تواصل معنا</h1>
          <p>إملأ الخانات أدناه ثم إضغط “إرسال”.</p>
          <div className="input">
            <label htmlFor="name">الاسم :</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="input">
            <label htmlFor="email">البريد الالكتروني :</label>
            <input type="email" id="email" name="email address" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="input">
            <label htmlFor="tel">رقم الهاتف :</label>
            <input type="tel" id="tel" name="telephone number" required />
          </div>
          <button className="btn" disabled={state.submitting}>
            ارسل
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
