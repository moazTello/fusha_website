import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './Homesec7.css';
import img from '../../../images/award.svg';
const Homesec7 = () => {
  const [t] = useTranslation("global");
    const[name,setName] = useState('');
    const[number,setNumber] = useState('');
    const[problem,setProblem] = useState('');
    const sendProblem = async (e) => {
        e.preventDefault();
        // try{
        //     const response = await axios.post('/web/sendEmployeRequest',{
        //       },
        //       {
        //         headers:{
        //           'Content-Type' : 'application/json'
        //         },
        //       },
        //       );
        //       alert('تم ارسال الرسالة بنجاح')

        //       console.log(response);
        // }
        // catch(err){
        //     console.log(err);
        // }
    }
  return (
    <div className='home7_main'>
        <div className='home7_problem_container'>
            <p className='home7_title'>{t("home7.any")}</p>
            <div>
                <p className='home7_text'>{t("home7.dont")}</p>
                <p className='home7_text'>{t("home7.dont1")}</p>
            </div>

            <form onSubmit={sendProblem} className='home7_form'>
               <input className='home7_input' type='text' placeholder={t("home7.name")} required onChange={(e) => setName(e.target.value)} value={name}
               />
               <input className='home7_input' type='text' placeholder={t("home7.number")} required onChange={(e) => setNumber(e.target.value)} value={number} 
               />
               <textarea className='home7_text_area' type='text' placeholder={t("home7.problem")} required onChange={(e) => setProblem(e.target.value)} value={problem}
               />
                <button type='submit' className='home7_btn'>{t("home7.send")}</button>
            </form>
        </div>
        <div className='home7_award_container'>
            <p className='home7_award'>{t("home7.award")}</p>
            <p className='home7_text'>{t("home7.best")}</p>
            <div className='home7_images_main'>
                <div className='home7_images_side'>
                    <div className='home7_imgtext'>
                        <img src={img} alt='' />
                        <div>
                            <p className='home7_img_title'>Attractions</p>
                            <p className='home7_img_text'>Top 10 Attractions</p>
                        </div>
                    </div>
                    <div className='home7_imgtext'>
                        <img src={img} alt='' />
                        <div>
                            <p className='home7_img_title'>Attractions</p>
                            <p className='home7_img_text'>Top 10 Attractions</p>
                        </div>
                    </div>
                    <div className='home7_imgtext'>
                        <img src={img} alt='' />
                        <div>
                            <p className='home7_img_title'>Attractions</p>
                            <p className='home7_img_text'>Top 10 Attractions</p>
                        </div>
                    </div>
                </div>
                <div className='home7_images_side_2'>
                    <div className='home7_imgtext'>
                        <img src={img} alt='' />
                        <div>
                            <p className='home7_img_title'>Attractions</p>
                            <p className='home7_img_text'>Top 10 Attractions</p>
                        </div>
                    </div>
                    <div className='home7_imgtext'>
                        <img src={img} alt='' />
                        <div>
                            <p className='home7_img_title'>Attractions</p>
                            <p className='home7_img_text'>Top 10 Attractions</p>
                        </div>
                    </div>
                    <div className='home7_imgtext'>
                        <img src={img} alt='' />
                        <div>
                            <p className='home7_img_title'>Attractions</p>
                            <p className='home7_img_text'>Top 10 Attractions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homesec7