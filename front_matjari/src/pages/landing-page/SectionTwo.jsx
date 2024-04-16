import StoreIcon from './../../assets/landing-page-img/store-icon.png';
import AddProductIcon from './../../assets/landing-page-img/add-product-icon.png';
import GraphChartIcon from './../../assets/landing-page-img/graph-chart-icon.png';
import CreditCardIcon from './../../assets/landing-page-img/credit-card-icon.png';
import './SectionTwo.css';

function SectionTwo () {
    return (

        <div className='container-lg'>
            <div className='section-two py-5 rounded-3'>
            <h3 className='text-center'>كيفية الاستخدام</h3>
            <div className='d-flex flex-wrap section-two-boxes justify-content-between align-items-center'>
                <div className='box rounded-3 d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={StoreIcon} alt="store icon" />
                        <p className='text-muted mb-0'>1. إعداد المتجر</p>
                    </div>
                </div>
                <div className='box rounded-3 d-flex flex-column justify-content-center align-items-center'>    
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={AddProductIcon} alt="store icon" />
                        <p className='text-muted mb-0'>2. إضافة المنتجات</p>
                    </div>
                </div>
                <div className='box rounded-3 d-flex flex-column justify-content-center align-items-center'>    
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={GraphChartIcon} alt="store icon" />
                        <p className='text-muted mb-0'>3. زيادة عدد الزيارات ورفع نسبة المبيعات</p>
                    </div>
                </div>
                <div className='box rounded-3 d-flex flex-column justify-content-center align-items-center'>    
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={CreditCardIcon} alt="store icon" />
                        <p className='text-muted mb-0'>4. الحصول على الأموال</p>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default SectionTwo;