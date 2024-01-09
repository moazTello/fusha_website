import React, {useState} from 'react';
import './Homesec3.css';
// import { AiTwotoneRightCircle } from "react-icons/ai";
// import { IoIosArrowDropright } from "react-icons/io";
import arrow from '../../../images/rightarrow.svg';
const ImageSlider = ({slider}) => {
    const [ currentIndex,setCurrentIndex ] = useState(0);
    const goFor = () => {
        const isLastSlide = currentIndex === slider.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <div className='ImageSlider_main'>
        <div className='slide' 
             style={{
                // background:`url(${slider[currentIndex].srcIm})`,
             
            }}
        >
            <img className='ImageSlider_img'  src={slider[currentIndex].srcIm} alt=''/>
            <div className='home3_left_arrow' style={{cursor:'pointer'}} onClick={goFor}>
                {/* <IoIosArrowDropright size={100} color='white'/> */}
                <img className='home3_arrowright'  src={arrow} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider