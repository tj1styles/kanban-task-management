import { React, useState } from "react";
import SideBar from "../components/SideBar";
import images from "../imgdata";
import data from "../data.json";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import {v4} from 'uuid'
import TaskDropMenu from "../components/TaskDropMenu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const HomePage = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [sidebarClicked, setSidebarClicked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [index, setIndex] = useState(0);
  const data_img = images;

  const pKey = v4();


  const checkCount = (subArray) => {
    let count = 0;
    for (let index = 0; index < subArray.length; index++) {
      if (subArray[index].isCompleted) {
        count++;
      }
    }
    return count;
  };
  // console.log(index);
  // console.log(toggleDropDown);
  // console.log(darkMode)
  console.log(data);


  const dragStart = (e) =>{
    e.dataTransfer.setData('')
  }
  return (
    <>
      <section
        className={`w-[100%] h-[180vh] relative bg-lightGrey ${
          darkMode ? "dark" : " "
        }`}
      >
        {/* DropMenu Container */}

        <div className={toggleDropDown ? "w-[100%] bg-[rgba(15,16,21,0.56)] absolute z-[99999] tranlate-y-[10000px]  h-[186vh] items-center flex flex-wrap flex-row transition-all  ease-in duration-1000" : "translate-y-[-1000px]  absolute z-[99999] transition-all  ease-out duration-1000"}>

            <TaskDropMenu onClick={()=>setToggleDropDown(!toggleDropDown)} />

        </div>




        {/* SideBar  */}

        <SideBar
          sidebar_class={
            sidebarClicked === false
              ? "h-full  lg:fixed md:fixed fixed lg:left-0 md:left-0 left-[1000px] w-[280px] dark:bg-lightSecondary dark:shadow-gray-500 dark:shadow-sm bg-white   shadow-gray-900 shadow-sm z-50"
              : ""
          }
          logo_src={
            darkMode ? `${data_img[0].img_src}` : `${data_img[1].img_src}`
          }
          btn_1_content={data.boards[0].name}
          btn_1={
            index === 0
              ? "large_card md_card sm_card  py-[15px] my-[10px] pl-[30px] dark:text-opacity-70 mr-[90px] flex flex-row sm:text-white xs:text-white"
              : "  large_card_else md_card_else my-[10px] pl-[30px] pt-[20px] dark:opacity-80  flex  flex-row dark:text-white text-black "
          }
          btn_1_Click={() => setIndex(0)}
          btn_2={
            index === 1
              ? "large_card md_card sm_card py-[15px] pl-[30px] my-[10px] dark:text-opacity-70 flex flex-row dark:text-white text-black sm:text-white xs:text-white"
              : "large_card_else md_card_else my-[20px] pl-[30px] dark:text-opacity-10 flex flex-row opacity-80 dark:text-white text-black"
          }
          btn_2_Click={() => setIndex(1)}
          btn_2_content={data.boards[1].name}
          btn_3={
            index === 2
              ? "large_card md_card sm_card py-[15px] pl-[30px] dark:text-opacity-70 flex flex-row dark:text-white text-black sm:text-white xs:text-white"
              : "large_card_else md_card_else my-[20px] pl-[30px] dark:text-opacity-10 flex flex-row opacity-90 dark:opacity-80 dark:text-white text-black"
          }
          btn_3_Click={() => setIndex(2)}
          btn_3_content={data.boards[2].name}
          checkBoxClick={() => setDarkMode(!darkMode)}
        />

        {/* Major Conatiner */}
        <div
          className={
            sidebarClicked === false
              ? "lg:w-calc md:w-calc w-full lg:pl-[280px]  relative md:z-0"
              : ""
          }
        >
          <NavBar
            content={
              index === 0
                ? `${data.boards[0].name}`
                : index === 1
                ? `${data.boards[1].name}`
                : `${data.boards[2].name}`
            }
            div_click={() => setSidebarClicked(!sidebarClicked)}
            icon_class={'pl-[10px] pt-[6px]'}
            icon_content={
              sidebarClicked ? <FaAngleUp /> : <FaAngleDown />
            }
            onClick={()=>setToggleDropDown(!toggleDropDown)}
          />

          {/* All containers */}
          <div className="md:w-full w-[100%] md:h-[170vh] xs:h-[130vh] mt-[20px] w-full relative md:overflow-auto overflow-scroll scroll-smooth wow">







            {/* SubContainers */}
            <div className={index===0 ? "md:w-full flex xs:w-[300%] dark:bg-DarkSecondary md:h-[170vh] md:absolute z-[999]  bg-lightGrey xs:absolute xs:h-[170vh] xs:z-[999] " : ' flex xs:z-0  md:h-[170vh] md:absolute xs:absolute z-0 md:w-full'}>

              <div className="lg:w-[31%] md:w-[33%] xs:w-[90%] md:static  mr-[8px] ml-[8px] flex-wrap md:mr-[6px] md:ml-[4px] pt-2">
                <div className="w-full flex items-center">
                  {" "}
                  <div className="circle h-[15px] w-[15px] rounded-full bg-[rgb(73,198,230)] mr-[6px]"></div>{" "}
                  {data.boards[0].columns[0].name}
                </div>
                <div className="w-full">
                  {
                    //  console.log()
                    data.boards[0].columns[0].tasks.map((text) => (
                    
                      <Card 
                      key={console.log(text.id)}
                        heading_content={text.title}
                        classed={
                          "w-full text-black dark:text-white  dark:shadow-gray-500 dark:shadow-sm shadow-black shadow-sm my-[20px] dark:bg-[rgb(44,44,56)] rounded-sm p-3 md:text-[18px]"
                        }
                        paragraph_content={`${
                          checkCount(text.subtasks) +
                          " of " +
                          text.subtasks.length +
                          " completed"
                        }`}
                      />
                    ))
                  }
                </div>
              </div>

              <div className="md:w-[31%] xs:w-[90%] md:static   flex-wrap mr-[6px] ml-[4px] pt-2">
                <div className="w-full flex items-center">
                  <div className="circle h-[15px] w-[15px] rounded-full bg-[rgb(132,112,246)] mr-[6px]"></div>{" "}
                  {data.boards[0].columns[1].name}
                </div>
                <div className="w-full">
                  {data.boards[0].columns[1].tasks.map((text) => (
                    <Card
                    key={console.log(text.id)}
                      heading_content={text.title}
                      classed={
                        "w-full text-black dark:text-white  dark:shadow-gray-500 dark:shadow-sm shadow-black shadow-sm my-[20px] dark:bg-[rgb(44,44,56)] rounded-sm p-3 md:text-[18px]"
                      }
                      paragraph_content={`${
                        checkCount(text.subtasks) +
                        " of " +
                        text.subtasks.length +
                        " completed"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="w-[31%] xs:w-[90%] md:static flex-wrap mr-[6px] ml-[4px] pt-2">
                <div className="w-full flex items-center">
                  <div className="circle h-[15px] w-[15px] rounded-full bg-[rgb(103,232,176)] mr-[6px]"></div>{" "}
                  {data.boards[0].columns[2].name}
                </div>
                <div className="w-full">
                  {data.boards[0].columns[2].tasks.map((text) => (
                    <Card
                      heading_content={text.title}
                      classed={
                        "w-full text-black dark:text-white  dark:shadow-gray-500 dark:shadow-sm shadow-black shadow-sm dark:bg-[rgb(44,44,56)] my-[20px] rounded-sm p-3 md:text-[18px]"
                      }
                      paragraph_content={`${
                        checkCount(text.subtasks) +
                        " of " +
                        text.subtasks.length +
                        " completed"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="md:w-[31%] w-[90%] md flex flex-row flex-wrap dark:shadow-gray-500 dark:bg-[rgb(44,44,56)] items-center shadow-black shadow-sm dark:text-[rgb(136,144,162)] text-[30px] md:text-[20px] font-semibold my-[52px] xs:h-[120vh]">
                <span>+ NEW COLUMN</span>
              </div>
            </div>

















            {/* Sub container */}

            <div className={index===1 ? "md:w-full flex  md:h-[170vh] md:absolute z-[999]  dark:bg-DarkSecondary bg-lightGrey xs:absolute xs:h-[170vh] xs:z-[999]" : ' flex xs:absolute  md:h-[170vh] md:absolute z-0 md:w-full'}>
              <div className="md:w-[31%] xs:w-[90%] flex-wrap mr-[6px] ml-[4px] pt-2">
                <div className="w-full flex items-center">
                  {" "}
                  <div className="circle h-[15px] w-[15px] rounded-full bg-[rgb(73,198,230)] mr-[6px]"></div>{" "}
                  {data.boards[1].columns[0].name}
                </div>
                <div className="w-full">
                  {
                    //  console.log()
                    data.boards[1].columns[0].tasks.map((text) => (
                      // console.log(text.title)
                      <Card
                        heading_content={text.title}
                        classed={
                          "w-full text-black dark:text-white  dark:shadow-gray-500 dark:shadow-sm shadow-black shadow-sm my-[20px] dark:bg-[rgb(44,44,56)] rounded-sm p-3 md:text-[18px]"
                        }
                        paragraph_content={`${
                          checkCount(text.subtasks) +
                          " of " +
                          text.subtasks.length +
                          " completed"
                        }`}
                      />
                    ))
                  }
                </div>
              </div>

              <div className="md:w-[31%] xs:w-[90%]  flex-wrap mr-[6px] ml-[4px] pt-2">
                <div className="w-full flex items-center">
                  <div className="circle h-[15px] w-[15px] rounded-full bg-[rgb(132,112,246)] mr-[6px]"></div>{" "}
                  {data.boards[1].columns[1].name}
                </div>
                <div className="w-full">
                  {<Card  heading_content={'None Available +'} classed={'w-full text-black dark:text-white  dark:shadow-gray-500 dark:shadow-sm shadow-black shadow-sm dark:bg-[rgb(44,44,56)] my-[20px] rounded-sm p-3 md:text-[18px]'}/>}
                </div>
              </div>

              <div className="md:w-[31%] w-[90%]  flex-wrap mr-[6px] ml-[4px] pt-2">
                <div className="w-full flex items-center">
                  <div className="circle h-[15px] w-[15px] rounded-full bg-[rgb(103,232,176)] mr-[6px]"></div>{" "}
                  {data.boards[1].columns[2].name}
                </div>
                <div className="w-full">
                  {  <Card  heading_content={'None Available +'} classed={'w-full text-black dark:text-white  dark:shadow-gray-500 dark:shadow-sm shadow-black shadow-sm dark:bg-[rgb(44,44,56)] my-[20px] rounded-sm p-3 md:text-[18px]'}/>}
                </div>
              </div>

              <div className="md:w-[31%] xs:w-[90%] flex flex-row flex-wrap dark:shadow-gray-500 dark:bg-[rgb(44,44,56)] items-center shadow-black shadow-sm dark:text-[rgb(136,144,162)] text-[30px] md:text-[25px] font-semibold my-[52px] xs:h-[120vh]">
                <span>+ NEW COLUMN</span>
              </div>
            </div>


















            {/* Sub container */}

            <div className={index===2 ? "md:w-full flex  md:h-[170vh] md:absolute z-[999] dark:bg-DarkSecondary bg-lightGrey xs:absolute xs:h-170vh xs:z-[999]" : ' flex  md:h-[170vh] md:absolute z-0 md:w-full'}>
           
              <div className="lg:w-[31%] md:w-[33%] xs:w-[90%] md:static  mr-[8px] ml-[8px] flex-wrap md:mr-[6px] md:ml-[4px] pt-2">
                <div className="w-full flex items-center">
                  {" "}
                  <div className="circle h-[15px] w-[15px] rounded-full bg-[rgb(73,198,230)] mr-[6px]"></div>{" "}
                  {data.boards[2].columns[0].name}
                </div>
                <div className="w-full">
                  {
                    //  console.log()
                    data.boards[2].columns[0].tasks.map((text) => (
                      // console.log(text.title)
                      <Card
                        heading_content={text.title}
                        classed={
                          "w-full text-black dark:text-white  dark:shadow-gray-500 dark:shadow-sm shadow-black shadow-sm my-[20px] dark:bg-[rgb(44,44,56)] rounded-sm p-3 md:text-[18px]"
                        }
                        paragraph_content={`${
                          checkCount(text.subtasks) +
                          " of " +
                          text.subtasks.length +
                          " completed"
                        }`}
                      />
                    ))
                  }
                </div>
              </div>

              <div className="md:w-[31%] w-[90%] md:static xs:w-[90%]   flex-wrap mr-[6px] ml-[4px] pt-2">
                <div className="w-full flex items-center">
                  <div className="circle h-[15px] w-[15px] rounded-full bg-[rgb(132,112,246)] mr-[6px]"></div>{" "}
                  {data.boards[2].columns[1].name}
                </div>
                <div className="w-full">
                {<Card  heading_content={'None Available +'} classed={'w-full text-black dark:text-white  dark:shadow-gray-500 dark:shadow-sm shadow-black shadow-sm dark:bg-[rgb(44,44,56)] my-[20px] rounded-sm p-3 md:text-[18px]'}/>}
                </div>
              </div>



              <div className="w-[31%] md:static flex-wrap mr-[6px] xs:w-[90%] ml-[4px] pt-2">
                <div className="w-full flex items-center">
                  <div className="circle h-[15px] w-[15px] rounded-full bg-[rgb(103,232,176)] mr-[6px]"></div>{" "}
                  {data.boards[2].columns[2].name}
                </div>
                <div className="w-full">
                   {<Card  heading_content={'None Available +'} classed={'w-full text-black dark:text-white  dark:shadow-gray-500 dark:shadow-sm shadow-black shadow-sm dark:bg-[rgb(44,44,56)] my-[20px] rounded-sm p-3 md:text-[18px]'}/>}
                </div>
              </div>

              <div className="md:w-[31%] xs:w-[90%] md flex flex-row flex-wrap dark:shadow-gray-500 dark:bg-[rgb(44,44,56)] items-center shadow-black shadow-sm dark:text-[rgb(136,144,162)] text-[30px] md:text-[20px] font-semibold my-[52px] xs:h-[120vh]">
                <span>+ NEW COLUMN</span>
              </div>
            </div>

















          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
