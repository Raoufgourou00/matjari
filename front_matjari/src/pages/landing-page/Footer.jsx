import './Footer.css'
import Facebook from './../../assets/landing-page-img/facebook.png'
import Linkedin from './../../assets/landing-page-img/linkedin.png'
import Youtube from './../../assets/landing-page-img/youtube.svg'
import Instagram from './../../assets/landing-page-img/instagram.png'
import Twitter from './../../assets/landing-page-img/twitter.png'

function Footer() {


    return (
        <div className="container-fluid footer"> 
            <div className="container-lg"> 
                <div className='row justify-content-center align-items-start footer-boxes'>
                    <div className='col-6 col-md-3 d-flex flex-column footer-box'>
                        <h4>Matjari</h4>
                        <a href="">من نحن</a>
                        <a href="">المميزات</a>
                        <a href="">الأسعار</a>
                        <a href="">انضم إلينا</a>
                        <a href="">الحياة في Matjari</a>
                    </div>
                    <div className='col-6 col-md-3 d-flex flex-column footer-box'>
                        <h4>مصادر</h4>
                        <a href="">اتصل بنا</a>
                        <a href="">دليل المستخدم</a>
                        <a href="">المطورين</a>
                        <a href="">المدونة</a>
                        <a href="">الأسئلة المتكررة</a>
                        <a href="">فضاء الصحافة</a>
                        <a href="">تعلم التجارة الالكترونية</a>
                    </div>
                    <div className='col-6 col-md-3 d-flex flex-column footer-box mt-5 mt-md-0'>
                        <h4>مجتمع Matjari</h4>
                        <a href="">بوابة الشركاء</a>
                        <a href="">التسويق بالعمولة</a>
                        <a href="">سفراء Matjari</a>
                        <a href="">جوائز Matjari</a>
                        <a href="">خبراء Matjari</a>
                    </div>
                
                
                    <div className='col-6 col-md-3 d-flex flex-column footer-box mt-5 mt-md-0'>
                        <h4>سياستنا</h4>
                        <a href="">شروط الاستخدام</a>
                        <a href="">سياسة الخصوصية</a>
                        <a href="">ملفات تعريف الارتباط</a>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <hr />
                </div>
                <div className='social-media d-flex flex-column justify-content-between align-items-center'>
                    <h4>تابعنا</h4>
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <img src={Youtube}/>
                        <img src={Facebook}/>
                        <img src={Twitter}/>
                        <img src={Instagram}/>
                        <img src={Linkedin}/>
                    </div>
                </div>
                <div className='copyright w-100 text-center'>
                        © 2024 Matjari. جميع الحقوق محفوظة.
                </div>
            </div>
        </div>
    );
}

export default Footer;