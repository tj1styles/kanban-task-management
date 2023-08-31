import React from "react";
import board from '../image/icon-board.svg'
import ToggleButton from "./ToggleButton";
import images from "../imgdata";

const SideBar = ({ sidebar_class, logo_src, btn_1, btn_2,btn_3, btn_1_content, btn_2_content, btn_3_content, btn_1_Click, btn_2_Click, btn_3_Click,span_class, checkBoxClick }) => {
  return (
    <>
      <div className={sidebar_class}>
        <div className="w-full flex  pt-6 pl-[30px]">
          <img alt="company_logo" className="w-[50%]" src={logo_src} />
        </div>
        <div className="w-full flex flex-col  pt-[40px]">
          <h6 className="dark:text-white text-black op-2 pl-[30px] dark:opacity-50">ALL BOARDS (8)</h6>
          <div onClick={btn_1_Click}   className={btn_1}><span className={span_class}>{btn_1_content}</span></div>
          <div onClick={btn_2_Click}   className={btn_2}><span className={span_class}>{btn_2_content}</span></div>
          <div onClick={btn_3_Click}   className={btn_3}><span className={span_class}>{btn_3_content}</span></div>
          
        </div>

       <div className="w-[80%] p-3 rounded-lg m-auto bg-DarkSecondary flex flex-row justify-center relative lg:mt-[270px] md:mt-[500px] sm:mt-[500px] xs:mt-[300px]  text-center items-center">
       {/* <ToggleButton /> */}
          <div className="w-[10%] mr-3 ml-6">
            <img src={`${images[2].img_src}`} className="" alt="light theme" />
          </div>
          <div className="w-[25%]  relative h-[20px]">
            
             <label>
           <input  type="checkbox" onClick={checkBoxClick}/>

          <span className="slideBtnTg round"></span>
            </label>

          </div>
         <div className="h-[20px] w-[20%] ml-3">
         <img src={`${images[3].img_src}`} className="" alt="dark theme" />
         </div>
       </div>
      </div>
    </>
  );
};

export default SideBar;
