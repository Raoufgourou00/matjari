import './SectionThree.css'


function SectionThree() {


    return (
       
        <div className="container-md"> 
            <div className='section-three'>
                <h2 className='d-block d-md-none text-center my-5'>
                    إعداد سهل وسريع 
                </h2>
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-5" >
                        <div id='img-cover-2'>
                            <img src='https://static-portal.youcan.shop/images/new_portal_design/home/setup-store-animation.gif' id='image-one' alt="prepare the store"/>
                        </div>
                    </div>
                    <div className="col-md-5 text-center text-lg-end mt-3">
                        <h2 className='d-none d-md-block'>
                            إعداد سهل وسريع
                        </h2>
                        <p className="lead text-muted mt-4">استمتع بتجربة تصميم متجرك بكل سهولة بالاعتماد على قوالب احترافية جاهزة، مع الاستفادة من معدل تحويل عالي</p>
                        <button className='btn px-5' id='show-more-btn-2'>الاطلاع على المزيد</button>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default SectionThree;