import './SectionOne.css';
import { useState, useEffect } from 'react';
import ImageOne from './../../assets/landing-page-img/1.png';
import ImageTwo from './../../assets/landing-page-img/2.png';
import ImageThree from './../../assets/landing-page-img/3.png';
import ImageFour from './../../assets/landing-page-img/4.png';
import CheckImage from './../../assets/landing-page-img/circle.png';

function SectionOne () {


    const images = [
        ImageOne,
        ImageTwo,
        ImageThree,
        ImageFour
        // Add more image URLs as needed
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000); 
    
        return () => clearInterval(interval);
      }, [images.length]);
    
      return (

        <div className="container-lg">
            <div className='section-one'>
                <div className="row justify-content-between align-items-center">
                    
                    <div className="col-lg-5 px-0 text-center text-lg-end">
                        
                        <div className="display-3">البيع عبر الإنترنت أسهل مما تتخيل</div>
                        <p className="lead text-muted mt-4">لا تفكر كثيرا! ابدأ الآن في إنشاء متجرك باستخدام أفضل الأدوات والخصائص الاحترافية لبناء نشاط تجاري مربح والحصول على نتائج مبهرة</p>
                        <div className='d-flex flex-column me-4 mt-4 text-muted mb-4'>
                            <div className='text-end'>
                                <p><img className='check-img ms-3' src={CheckImage} alt="check icon" />إعداد سهل وسريع للمتجر</p>
                            </div>
                            <div className='text-end'>
                                <p><img className='check-img ms-3' src={CheckImage} alt="check icon" />لن تدفع شيئا حتى تربح</p>
                            </div>
                            <div className='text-end'>
                                <p><img className='check-img ms-3' src={CheckImage} alt="check icon" />جميع أدوات التجارة الإلكترونية التي تحتاجها في مكان واحد</p>
                            </div>
                        </div>
                        <div className='d-grid d-lg-flex'>
                            <button className='btn px-5' id='start-now-btn'>ابدأ الآن</button>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-4 px-0">
                        <div id='img-cover'>
                            <img src={images[currentImageIndex]} id='ecom-images' alt="ecommerce images"/>
                        </div>
                        <div className='mt-5 row'>
                            <div className='col border-start text-center'>
                                <span className='stats d-block fw-bold'>20%+</span>
                                <div className='text-muted'>
                                معدل التحويل
                                </div>
                            </div>
                            <div className='col border-start text-center'>
                            <span className='stats d-block fw-bold'>20+</span>
                                <div className='text-muted'>
                                دوله
                                </div>
                            </div>
                            <div className='col text-center'>
                            <span className='stats d-block fw-bold'>150K+</span>
                                <div className='text-muted'>
                                متاجر مفعلة
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionOne;
