import './SectionFour.css'
import ConfettiIcon from './../../assets/landing-page-img/confetti.png'
import Graph from './../../assets/landing-page-img/graph.png'
function SectionFour() {


    return (
        <div className="container-fluid section-four"> 
            <div className="container-lg"> 
                    <div className="row justify-content-between align-items-center">
        
                        <div className="col-md-5 text-center text-lg-end mb-4">
                            <h1>
                                <div className="h2">لن تدفع شيئا حتى تربح</div>
                            </h1>
                            <p className="lead text-muted mt-4">لا تفكر في المصاريف قم بالبيع أولا، واستفد من جميع ميزات وخدمات <span className='brand-span'>متجري</span> دون أي قيود ودون الحاجة إلى دفع أي شيء إلى غاية تحقيق <span className='brand-span'>10000 دولار</span>  من المبيعات</p>
                            <button className='btn px-5' id='show-more-btn-2'>الاطلاع على المزيد</button>
                        </div>

                        <div className="col-md-6 d-flex flex-row justify-content-between align-items-center image-chart-box">
                            <div className='chart-box d-flex flex-column justify-content-center align-items-center text-center'>
                                
                                <img src={ConfettiIcon} alt="" />
                                <p>
                                لقد بلغت مبيعاتك للتو <span>10 آلاف دولار</span>
                                </p>
                                <hr />
                                <img src={Graph} alt="" />
                            </div>
                            <div className='image-box'>
                                <img src="https://static-portal.youcan.shop/images/new_portal_design/home/navigate-illustration-3.webp" alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default SectionFour;