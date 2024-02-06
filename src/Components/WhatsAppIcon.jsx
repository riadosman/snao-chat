import React from "react";
import whatsapp_icon from "./Assets/whatsapp.png";
const WhatsAppIcon = () => {
  return (
    <div>
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/966575770510&text='هل أستطيع توثيق حسابي وزيادة عدد المتابعين'"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
        >
          <img src={whatsapp_icon} alt="WhatsApp icon" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppIcon;
