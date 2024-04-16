import './SectionFive.css'


function SectionFive() {


    return (
       
        <div className="container-lg"> 
            <div className='section-five'>
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 order-1 order-lg-0 mt-5 mt-lg-0" >
                        <div id='img-cover-3'>
                            <img src='https://static-portal.youcan.shop/images/home_page_images_v2/store-setup.png' id='image-three' alt="store stuf"/>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end mt-3 order-0 order-lg-1">
                        <h2 className='d-none d-lg-block'>
                        جميع أدوات التجارة الإلكترونية التي تحتاجها في مكان واحد
                        </h2>
                        <p className="lead text-muted mt-4">تصاميم مميزة، نظام بيع احترافي، وسائل دفع متعددة، إحصائيات دقيقة، وكل الخصائص التي تحتاجها لبناء وإدارة عملك بكل فعالية</p>
                        <button className='btn px-5' id='show-more-btn-3'>الاطلاع على المزيد</button>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default SectionFive;