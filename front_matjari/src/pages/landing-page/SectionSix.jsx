import './SectionSix.css';
import CollapseOne from './CollapseOne.jsx';

function SectionSix () {

    let paragraph1 = (
        <div>لتغيير اسم متجرك الذي هو جزء من رابط متجرك (slug)، أوتغيير الإيميل الخاص بك، يرجى إرسال بريد إلكتروني إلى <a href=''>support@matjari.shop</a> يتضمن الاسم و/ أو الإيميل الجديد الذي ترغب في اعتماده. بينما لتغييراسم المتجر الذي يظهر لك أعلى لوحة التحكم ويُعرض على فواتير عملائك فيمكنك تغييره بكل بساطة من خلال قسم <a href=''>الإعدادات</a> في حال كنت تتبنى اسمين مختلفين (نوصي باستخدام نفس الاسم لكل من slug والاسم الداخلي للمتجر كي لا تتشتت).</div>
    ); 

    let paragraph2 = (
        <div>لتفادي الحسابات المزيفة والروبوتات، كما يمكنك دائما استخدام المبلغ الذي تم شراؤه باعتباره إيداعا في رصيدك.</div>
    ); 

    let paragraph3 = (
        <div>يمكنك إضافة عدد غير محدود من المنتجات واستقبال عدد غير محدود من الزوار الحقيقيين. Matjari تمكنك من إنشاء وتطوير وإدارة متجرك بلا حدود.</div>
    ); 

    let paragraph4 = (
        <div>لا نوفر حاليًا التخزين أو الشحن، ولكن لدينا خدمة Matjari Ship، والتي تعرض لك قائمة بشركات الشحن المحلية، يمكنك الاختيار من بينها ما يناسبك.</div>
    ); 

    let paragraph5 = (
        <div>نعم يمكن استخدام Matjari في دروبشيبينغ. جميع الأدوات التي قد تحتاجها للقيام بذلك متاحة على المنصة. يرجى فقط مراجعة الشروط والأحكام الخاصة بنا للاطلاع على الحالات التي لا يُسمح فيها باستخدام دروبشيبينغ.</div>
    ); 
    
    return (

        <div className='container-lg'>
            <div className='section-six py-5 rounded-3'>
                <h3 className='text-center'>الأسئلة المتكررة</h3>
                <div className='d-flex flex-column justify-content-between align-items-center question-boxes'>
                    <CollapseOne id="1" header="كيف يمكنني تغيير اسم متجري والبريد الإلكتروني؟" text={paragraph1}/>
                    <CollapseOne id="2" header="لماذا يجب علي شراء رصيد لتفعيل متجري؟" text={paragraph2} />
                    <CollapseOne id="3" header="هل هناك حد أقصى لعدد المنتجات التي يمكنني إضافتها إلى متجري؟" text={paragraph3} />
                    <CollapseOne id="4" header="هل تقدم Matjari خدمة التخزين و/أو الشحن؟" text={paragraph4} />
                    <CollapseOne id="5" header="هل يمكنني استخدام Matjari لدروبشيبينغ؟" text={paragraph5} />
                </div>
            </div>
        </div>
    );
}

export default SectionSix;
