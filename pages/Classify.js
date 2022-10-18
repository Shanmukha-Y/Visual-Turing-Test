import Head from "next/head";
import Image from "next/image";
import IMAGES from "../Images/Images";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ArrowRightIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { LogoutIcon, CheckCircleIcon } from "@heroicons/react/outline";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Question from "../components/Question";
import Skeleton from "react-loading-skeleton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { resultState } from "../atoms/result";
import { finalSurvState } from "../atoms/FinalSurvey";
import { ctImagesState } from "../atoms/ctImages";
import { sanityClient, urlFor } from "../sanity";
import submitSurvey from "./api/submitSurvey";

const Classify = (props) => {
  let imagesArray = props?.ctImages[0].ctImagesGallery;

  console.log("props : ", imagesArray);

  const [success, setSuccess] = useState(false);
  const [currentIt, setCurrentIt] = useState();
  const [navi, setNavi] = useState(false);
  const [totalIm, setTotalIm] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");

  const [selected, setSelected] = useState("");
  const [fakeSel, setFakeSel] = useState(false);
  const [checked, setChecked] = useState([]);

  const [images, setImages] = useState(imagesArray);

  const [image, setImage] = useState(IMAGES[0].path);

  const [resSt, setResultSt] = useRecoilState(resultState);

  

  const [callbackSetup, setCallbackSetup] = useState(false);

  const [disable, setDisable] = useState(false);

  const stateRef = useRef();
  stateRef.current = resSt;

  let setFinalRes = useSetRecoilState(finalSurvState);

 
  // const [finalRes, setFinalRes] = useRecoilState(finalSurvState);

  //  const [ctImage, setCtImage] = useRecoilState(ctImagesState);

  // const [bHide, setBhide] = useState(true);

  var hp = (currentIt / totalIm) * 100;

  let btnRef = useRef();

  const scaleVariants5 = {
    whileInView: {
      y: [100, 50, 0],
      opacity: [0, 0, 1],
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    if (fakeSel) {
      //router.push("#footer")

      // location.href = "#footer";
      //  var elem = document.getElementById("footer");
      //    elem.scrollIntoView();
      location.href = "#footer";
    }

    if (!fakeSel) {
      // router.push("#header")
      //  var elem = document.getElementById("header");
      //  elem.scrollIntoView();
      // location.href = "#header";
      location.href = "#header";
    }
  }, [fakeSel]);

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  // if (success) {
  // //  delay(100).then(() => (location.href = "/Thanks"));
  // }

  function Loader() {
    setSelected("");
    setChecked([]);
    setFakeSel(false);
    !isLoading && setIsLoading(true);
    delay(500).then(() => setIsLoading(false));
  }

  function setupConsoleCallback(callback) {
    console.log("Setting up callback");
    setInterval(callback, 1000);
  }

  function handleChange(selectedIndex) {
    console.log("s I :", selectedIndex);

    var newImageArray = images.filter(function (el, index) {
      return index + 1 == selectedIndex;
    });

    console.log('newImageArray : ',newImageArray)

    let imP = newImageArray[0].image.asset;
    let imI = selectedIndex;
    let imN = newImageArray[0].imageName;
    // setImage(imP);
    // setId(imI);

    let reJs = {
      key: imI,
      imageName: imN,
      image: {
        asset: imP,
      },
      choice: selected,
      reason1: checked[0] ? checked[0] : "",
      reason2: checked.length > 1 ? checked[1] : "",
    };

    // let newList = [...resSt,reJs];

    setResultSt((resSt) => [...resSt, reJs]);
  }

  function handleSubmit(event) {
    let d = new Date();
    let date = d.toString();
    handleChange(totalIm)
    if (!callbackSetup) {
      setupConsoleCallback(() => {
        var finalJson = {
          Date: date,
          FinalSurvey: stateRef.current,
        };

        setFinalRes(finalJson);

        localStorage.setItem('finalRes', JSON.stringify(finalJson));

        setCallbackSetup(true);  
        
        //submitSurvey(finalJson);
        delay(100).then(() => (location.href = "/Loader"));
      });
    }

    // setFinalRes({
    //   Date: date,
    //   FinalSurvey: stateRef.current,
    // });
    // console.log('fj',finalJson);

    //submitSurvey(finalJson);
  }

  

  // function submitSurvey(payload) {
  //   fetch("/api/submitSurvey", {
  //     method: "POST",
  //     body: JSON.stringify(payload),
  //   })
  //     .then(() => {
  //       setSuccess(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  console.log("Final Array ", resSt);

  //console.log("Final Array ", finalRes);

  return (
    <div
      id="header"
      className="flex flex-col bg-gray-100 min-h-screen lg:w-full lg:justify-center"
    >
      <div className="mx-auto relative h-[30rem] w-full mt-12 flex flex-col justify-center max-w-4xl">
        <Carousel
          className="flex"
          onChange={handleChange}
          statusFormatter={(currentItem, total) => {
            setCurrentIt(currentItem);
            setTotalIm(total);
            //</div> <div className="absolute font-sans group top-[36rem] right-[26.5rem] w-[5rem] text-[1rem] text-darkBg">{currentIt} / {totalIm} {setCurrentIt(currentItem)} {setTotalIm(total)}  </div>
          }}
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (
            <motion.div
              className="absolute group top-[37rem] left-[10rem] cursor-pointer hidden"
              //onClick={clickHandler}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeftIcon className="w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out  group-hover:bg-gray-500 group-hover:text-darkBgLight" />
            </motion.div>
          )}
          renderArrowNext={(clickHandler, hasNext, labelNext) => (
            <motion.div
              className="z-50 group w-44 mt-[1rem] pb-2 ml-[22.5rem] "
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                onClick={() => {
                  clickHandler();
                  Loader();
                  //  navigate();
                }}
                className={"group cursor-pointer "}
              >
                <motion.div
                  className={
                    currentIt == totalIm
                      ? "hidden"
                      : "rounded-[0.2rem] bg-gray-800 font-ubuntu text-md font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out  lg:hover:bg-gray-400 lg:hover:text-darkBgLight"
                  }
                >
                  <div className="flex h-14 w-32 ml-6 space-x-4 justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <p className=" tracking-[0.15rem] text-[1.3rem]">Submit</p>
                    <PaperAirplaneIcon className="h-7 w-7 animate-pulse rotate-90 hover:text-darkBgLight" />
                  </div>
                </motion.div>
              </motion.a>
            </motion.div>
          )}
          //   renderIndicator={(onClickHandler, isSelected, index, label) => {
          //   return (
          //     <span
          //      // style={style}
          //       className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}
          //       onClick={onClickHandler}
          //       onKeyDown={onClickHandler}
          //       value={index}
          //       key={index}
          //       role="button"
          //       tabIndex={0}
          //       aria-label={`${label} ${index + 1}`}
          //     >
          //       {index+1}
          //     </span>
          //   );
          // }}
          showIndicators={false}
          showThumbs={false}
        >
          {images.map((image) => (
            <div key={image._id}>
              <img
                className="h-[29rem] object-contain border-r-4"
                id={image._id}
                src={urlFor(image.image.asset).url()}
              ></img>
            </div>
          ))}
        </Carousel>
        <div
          className={
            currentIt == totalIm
              ? "absolute top-[12.3rem]"
              : "absolute top-[10.3rem]"
          }
        >
          <div className="relative shadow-md left-[45rem] bottom-[11rem] h-[26.5rem] w-[3rem] bg-gray-300 rounded-full dark:bg-gray-700">
            <div
              style={{
                height: `${hp}%`,
              }}
              className={`w-[3rem] transition-all duration-500 ease-in-out bottom-0 absolute bg-green-400 rounded-full dark:bg-green-500`}
            ></div>
            <div className="top-[50%] absolute">
              <p className="text-[0.7rem] font-semibold font-ubuntu  text-center w-[3rem]">
                {currentIt} / {totalIm}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border-r-2 bg-gray-500 w-16 h-16">
        <p> FORM SECTION</p>
      </div> */}
      {/* <div className="w-full top-[33rem] left-[27rem] z-50 flex">
        <Question load={isLoading} selectedSet={setSelected} fakeSelSet={setFakeSel} checkedSet={setChecked} selectedI={selected} checkedI={checked} fakeSelI={fakeSel} />
      </div> */}
      <div className="w-full mt-10 justify-center z-50 flex">
        <Question
          load={isLoading}
          selectedSet={setSelected}
          fakeSelSet={setFakeSel}
          checkedSet={setChecked}
          selectedI={selected}
          checkedI={checked}
          fakeSelI={fakeSel}
        />
      </div>
      <motion.div
        id="footer"
        variants={scaleVariants5}
        whileInView={scaleVariants5.whileInView}
        className="flex flex-row lg:space-x-14 lg:space-y-0 space-y-5 justify-center pt-[2rem] mb-[3rem]"
      >
        <motion.a
          whileTap={{ scale: 0.9 }}
          href="/"
          //href={`${props.abouts[0].resume}?dl=`}
          className="flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-red-400 lg:hover:text-darkBgLight"
        >
          <p className="tracking-wider">Leave</p>
          <LogoutIcon className="h-7 w-7 animate-pulse hover:text-darkBgLight" />
        </motion.a>

        <motion.button
          id="submit"
          ref={btnRef}
          disabled={disable || currentIt != totalIm}
          onClick={currentIt == totalIm ? handleSubmit : undefined}
          // href={currentIt != totalIm ? "#" : "/Thanks"}
          whileTap={{ scale: 0.9 }}
          className={
            currentIt != totalIm
              ? "mt-8 flex cursor-not-allowed justify-center opacity-30 rounded-[0.2rem] space-x-5 transition duration-500 ease-in-out lg:px-8 py-4 font-ubuntu text-lg font-semibold shadow-md text-white bg-gray-800  shadow-gray-800 "
              : "mt-8 flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 transition duration-500 ease-in-out lg:px-8 py-4 font-ubuntu text-lg font-semibold shadow-md text-white bg-gray-800  shadow-gray-800  lg:hover:bg-green-400 lg:hover:text-darkBgLight"
          }
        >
          <p className="tracking-wider">Finish</p>
          <CheckCircleIcon
            className={
              currentIt != totalIm
                ? "h-7 w-7 animate-pulse "
                : "h-7 w-7 animate-pulse hover:text-darkBgLight "
            }
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const ctImageQuery = `*[_type=="images"]{
    _id,
    _createdAt,
    ctImagesGallery
  }`;

  const ctImageData = await sanityClient.fetch(ctImageQuery);

  return {
    props: {
      ctImages: ctImageData,
    },
  };
};

export default Classify;
