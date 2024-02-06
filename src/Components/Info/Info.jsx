import React from "react";
import "./info.css";
import { useForm, ValidationError } from "@formspree/react";
const Info = () => {
  const [state, handleSubmit] = useForm("xrgwdkoa");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <div className="info">
        <div className="right-info">
          <h3>خطوات توثيق حسابك على Snapchat</h3>
          <p>
            توثيق سناب شات Snapchat يعني عقد صفقة مع نظامه الأساسي بعد إنشاء
            حساب سناب شات مباشرةً، وبالتالي سيقدّم لك سناب شات نجمة ذهبية بجوار
            اسمك بمجرّ التحقق من هويتك. وهي ميّزة لا يُعلى عليها للأنشطة
            التجارية عمومًا والمشاهير والمؤثرين على منصات التواصل الاجتماعي
            لأنها تُضفي على حساباتهم المزيد من المصداقية والمميّزات من شركة سناب
            شات نفسها.
          </p>
        </div>
        <div className="left-info">
          <h3>فوائد توثيق حساب سناب شات بالنجمة</h3>
          <p>
            إذا كنت تتطلع إلى زيادة شعبيتك على SnapChat وإنشاء علامة توثيق شخصية
            أو تجارية لحسابك على تطبيق سناب شات، فقد يكون التحقق هو طريقك يعمل
            هذا النوع من التحقق كأداة تسويق قوية ، فهو مشابه جدًا للحالة التي تم
            التحقق منها على Twitter. أثناء التحقق من الحساب ، يُظهر لمستخدمي
            SnapChat أنه حساب خاص على سبيل المثال ، المشاهير فلديهم حساب
            SnapChat موثق أي تم التحقق منه.
          </p>
        </div>
      </div>
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
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="input">
          <label htmlFor="tel">رقم الهاتف :</label>
          <input type="tel" id="tel" name="telephone number" required />
        </div>
        <button className="btn" disabled={state.submitting}>ارسل</button>
      </form>
    </div>
  );
};

export default Info;
