import React from "react";
import "./services.css";
const Services = () => {
  const handleClick = (i) => {
    let messages = [
      "دعم مشاهادات حساب السناب شات",
      "اختبار توثيق سناب",
      "انشاء ملف تعريفي للسناب شات",
    ];
    window.location.href = `https://wa.me/966575770510?text=${messages[i]}`;
  };
  return (
    <div className="container text-center" id="services">
      <h2 className="my-4 title">خدماتنا</h2>
      <p>
        تحول حسابك إلى علامة تجارية موثوقة ومميزة مع خدمات توثيق الحسابات
        الاحترافية التي نقدمها. اجعل حسابك يبرز بين الملايين واحصل على العلامة
        الزرقاء أو العلامة الذهبية التي تعزز هويتك الرقمية. اتصل بنا اليوم
        واستمتع بتجربة توثيق حسابات سلسة وفعّالة، حيث نضع التفاصيل في خدمتك
        لتعزيز مصداقيتك وجاذبيتك الرقمية.
      </p>
      <div
        className="cards"
        onClick={() => {
          handleClick(0);
        }}
      >
        <div className="card">
          <img
            className="card-img-top"
            src="https://i0.wp.com/www.drsnapchat.com/wp-content/uploads/2023/05/ry1N2zQrtl2BhmYkPL4Uwu8QNh8in4d9uhahbISO.webp?fit=500%2C500&ssl=1"
            alt="Title"
          />
          <div className="card-body">
            <p className="card-text">
              هي خدمة دعم لحساب سناب عن طريق مشاهدات سناب لـ 50 ألف شخص عبر
              اعلان ممول لحسابك.
            </p>
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            handleClick(1);
          }}
        >
          <img
            className="card-img-top"
            src="https://i0.wp.com/www.drsnapchat.com/wp-content/uploads/2023/05/iOMz7RQh0LZoFJQwRTE3bPX97Vdmj0dXnr2wbpha-1.webp?fit=500%2C500&ssl=1"
            alt="Title"
          />
          <div className="card-body">
            <p className="card-text">
              سهولة التعرف على حسابك بعد التحقق من أن الحساب رسمي سوف يتم إثبات
              ذلك من خلال وضع النجمة الذهبية بجوار اسمك
            </p>
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            handleClick(2);
          }}
        >
          <img
            className="card-img-top"
            src="https://i0.wp.com/www.drsnapchat.com/wp-content/uploads/2023/05/4uzeDeWdtG1CfpxX1tDoygLCsWdgAPs1iKFMYZgK-1.webp?fit=500%2C500&ssl=1"
            alt="Title"
          />
          <div className="card-body">
            <p className="card-text">
              ان إنشاء ملف تعريفي يعد بغاية الأهمية فمن خلاله يطلع الزائرين
              والمشاهدين لحسابك نبذة عنك وعن اهتماماتك وما الذي تقدمة ومن خلال
              يستطيع المتابع تحديد هل يقبل بمتابعتك ام لا.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
