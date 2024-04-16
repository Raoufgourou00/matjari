import { useState } from 'react';
import DownArrow from './../../assets/landing-page-img/down.png';;

function CollapseOne(props) {

    
  
    const [dropdown, setDropdown] = useState(false);


    const handleContent = () => {
        setDropdown((p) => {
            return !p;
        });  
    } 
 
    return (
        <div className='question-box'>
            <div className="w-100">
                <div className="d-flex flex-row justify-content-between align-items-center w-100 question" data-bs-toggle="collapse" href={`#collapse-${props.id}`} role="button" aria-expanded="false" aria-controls={`collapse-${props.id}`} onClick={handleContent}>
                    <h6>{props.header}</h6>
                    <img className={`dropdown-icon ${dropdown ? 'rotate-180' : 'rotate-0'}`} src={DownArrow}/>
                </div>
            </div>
            <div className="collapse answer" id={`collapse-${props.id}`}>
                {props.text}
            </div>
        </div>
    );
}

export default CollapseOne;