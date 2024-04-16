import './Main.css'
import SectionOne from './SectionOne.jsx';
import SectionTwo from './SectionTwo.jsx';
import SectionThree from './SectionThree.jsx';
import SectionFour from './SectionFour.jsx';
import SectionFive from './SectionFive.jsx';
import SectionSix from './SectionSix.jsx';

function Main() {

  return (

    <section className='container-fluid px-0 main-section'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </section>
  );
}


export default Main;