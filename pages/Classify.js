import { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Question from "../components/Question";
import { useRecoilState, useSetRecoilState } from "recoil";
import { resultState } from "../atoms/result";
import { finalSurvState } from "../atoms/FinalSurvey";;
import { sanityClient, urlFor } from "../sanity";
import Question2 from "../components/Question2";
import Modal from "../components/Modal";
import AreaComponent from "../components/AreaComponent";

const answers = {
  1: "Fake",
  2: "Real",
  3: "Fake",
  4: "Real",
  5: "Real",
  6: "Fake",
  7: "Fake",
  8: "Real",
  9: "Real",
  10: "Real",
  11: "Real",
  12: "Real",
  13: "Fake",
  14: "Fake",
  15: "Real",
  16: "Real",
  17: "Fake",
  18: "Fake",
  19: "Fake",
  20: "Real",
  21: "Fake",
  22: "Fake",
  23: "Real",
  24: "Fake",
  25: "Real",
  26: "Real",
  27: "Fake",
  28: "Fake",
  29: "Real",
  30: "Fake"
}
const Classify = (props) => {
  let imagesArray = props?.ctImages[0].ctImagesGallery;

  const [openst, setOpenst] = useState(false);

  const [openArs, setOpenArs] = useState(false);

  const [areasA, setAreasA] = useState([]);

  const [snippetSubmitted, setSnippetSubmitted] = useState(false);

  const [last, setLast] = useState(false);
  const [currentIt, setCurrentIt] = useState(0);
  const [totalIm, setTotalIm] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [selected, setSelected] = useState("");
  const [selectedE, setSelectedE] = useState("");
  const [fakeSel, setFakeSel] = useState(false);

  const [selectedF, setSelectedF] = useState("");

  const [images, setImages] = useState(imagesArray);

  const [image, setImage] = useState(imagesArray[0]);

  const [resSt, setResultSt] = useRecoilState(resultState);

  const [callbackSetup, setCallbackSetup] = useState(false);

  const [disable, setDisable] = useState(false);

  const [req, setReq] = useState(false);

  const stateRef = useRef();
  stateRef.current = resSt;

  const stateRef1 = useRef();
  stateRef1.current = currentIt;

  let setFinalRes = useSetRecoilState(finalSurvState);
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
      location.href = "#footer";
    }

    if (!fakeSel) {
      location.href = "#header";
    }
  }, [fakeSel]);

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function Loader() {
    setSelected("");
    setSelectedF("");
    setFakeSel(false);
    setSnippetSubmitted(false)
    !isLoading && setIsLoading(true);
    delay(500).then(() => setIsLoading(false));
  }

  function setupConsoleCallback(callback) {
    //console.log("Setting up callback");
    setInterval(callback, 1000);
  }

  function updateLast() {
    //console.log("ul");
    setCurrentIt(totalIm + 1);
  }

  function handleChange(selectedIndex) {
    //console.log("s I :", selectedIndex);
    var newImageArray = images.filter(function (el, index) {
      return index + 1 == selectedIndex;
    });

    //console.log("newImageArray : ", newImageArray);

    let imP = newImageArray[0].image.asset;
    let imI = selectedIndex;
    let imN = newImageArray[0].imageName;


    var newImageArrayNext = images.filter(function (el, index) {
      return index + 1 == selectedIndex + 1;
    });

    setImage(newImageArrayNext[0]);

    var snippetCoordinates = JSON.parse(localStorage.getItem("snippetCoordinates"));

    //console.log('s-c : ', snippetCoordinates);



    for (let i = 0; i < snippetCoordinates?.length; i++) {
      snippetCoordinates[i] = Object.assign(snippetCoordinates[i], { _key: i + 1 });
    }

    //console.log('s-c : ', snippetCoordinates);

    let reJs = {
      key: imI,
      imageName: imN,
      image: {
        asset: imP,
      },
      choice: selected,
      reason: selectedF,
      snippetCoordinates: (selected == "Real" || !snippetSubmitted) ? [] : snippetCoordinates
    };

    setResultSt((resSt) => [...resSt, reJs]);
  }

  function handleSubmit(event) {
    //console.log("asas");
    let d = new Date();
    let date = d.toString();
    if (!callbackSetup) {
      setupConsoleCallback(() => {
        var finalJson = {
          Date: date,
          Knowledge: selectedE,
          FinalSurvey: stateRef.current,
        };

        setFinalRes(finalJson);        

        localStorage.setItem("finalRes", JSON.stringify(finalJson));

        setCallbackSetup(true);

        delay(100).then(() => (location.href = "/Loader"));
      });
    }
  }

  function computeResult() {
    return resSt.reduce((acc, d) => {
      console.log(answers[d.key], d.choice, answers[d.key] === d.choice)      
      return acc + (answers[d.key] === d.choice ? 1 : 0)
    }, 0)
  }

  console.log("Final Array ", resSt);

  //console.log("la", last);

  return (
    <>
      <div
        id="header"
        className="flex flex-col bg-gray-100 min-h-screen lg:w-full lg:justify-center"
      >
        {currentIt != totalIm + 1 && (
          <div className="mx-auto relative h-[30rem] w-full mt-12 flex flex-col justify-center max-w-4xl">
            <Carousel
              className="flex"
              onChange={handleChange}
              statusFormatter={(currentItem, total) => {
                setTotalIm(total);
                //console.log("inCa", currentIt);
                if (currentIt != totalIm + 1) {
                  setCurrentIt(currentItem);
                }                
              }}
              renderArrowPrev={(clickHandler, hasPrev, labelPrev) => {}}
              renderArrowNext={(clickHandler, hasNext, labelNext) => (
                <motion.div
                  className="z-50 group w-44 mt-[1rem] pb-2 ml-[22.5rem] "
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-full mt-10 justify-center z-50 flex" style={{marginBottom: 15}}>
                    {
                      currentIt == totalIm + 1
                        ? <Question2
                          load={isLoading}
                          selectedSetE={setSelectedE}
                          selectedIE={selectedE}
                        />
                        : <Question
                          load={isLoading}
                          selectedSet={setSelected}
                          fakeSelSet={setFakeSel}
                          selectedI={selected}
                          fakeSelI={fakeSel}
                          selectedFI={selectedF}
                          setSelectedFI={setSelectedF}
                          reqI={req}
                          setOpenAQ={setOpenArs}
                          areas={areasA}
                          setAreas={setAreasA}
                        />
                    }
                  </div>
                  <motion.a
                    onClick={() => {
                      //console.log("cI", currentIt);

                      if (selected.length > 1 && selected == "Real") {
                        Loader();
                        if (currentIt == totalIm) {
                          handleChange(totalIm);
                          updateLast();
                        } else {
                          clickHandler();
                        }
                        setReq(false);
                      } else if (
                        selected.length > 1 &&
                        selected == "Fake" &&
                        selectedF.length > 0
                      ) {
                        Loader();
                        if (currentIt == totalIm) {
                          handleChange(totalIm);
                          updateLast();
                        } else {
                          clickHandler();
                        }
                        setReq(false);
                      } else {
                        setReq(true);
                      }
                    }}
                    className={"group cursor-pointer "}
                  >
                    <motion.div
                      className={
                        currentIt == totalIm + 1
                          ? "hidden"
                          : "rounded-[0.2rem] bg-gray-800 font-ubuntu text-md font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out  lg:hover:bg-gray-400 lg:hover:text-darkBgLight"
                      }
                    >
                      <div className="flex h-14 w-32 ml-6 space-x-4 justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                        <p className=" tracking-[0.15rem] text-[1.3rem]">
                          Next
                        </p>
                        <PaperAirplaneIcon className="h-7 w-7 animate-pulse rotate-90 hover:text-darkBgLight" />
                      </div>
                    </motion.div>
                  </motion.a>
                </motion.div>
              )}
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

            <div className={currentIt == totalIm ? "absolute top-[12.3rem]" : "absolute top-[10.3rem]"}>
              <div className="relative shadow-md left-[45rem] bottom-[11rem] h-[26.5rem] w-[3rem] bg-gray-300 rounded-full dark:bg-gray-700">
                <div
                  style={{ height: `${hp}%` }}
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
        )}
        
        <motion.div
          id="footer"
          variants={scaleVariants5}
          whileInView={scaleVariants5.whileInView}
          style={{alignItems: 'center'}}
          className="flex flex-col lg:space-x-14 lg:space-y-0 space-y-5 justify-center pt-[2rem] mb-[3rem]"
        >
          {
            currentIt != totalIm + 1
              ? null
              : <>
                
                <motion.button
                  id="submit"
                  ref={btnRef}
                  disabled={disable || currentIt != totalIm + 1}
                  onClick={currentIt == totalIm + 1 ? handleSubmit : undefined}
                  whileTap={{ scale: 0.9 }}
                  style={{maxWidth: '12rem', marginLeft: 0}}

                  className={"mt-8 flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 transition duration-500 ease-in-out lg:px-8 py-4 font-ubuntu text-lg font-semibold shadow-md text-white bg-gray-800  shadow-gray-800  lg:hover:bg-green-400 lg:hover:text-darkBgLight"}
                >
                  <p className="tracking-wider">Get Results</p>
                  <CheckCircleIcon
                    className={
                      currentIt != totalIm
                        ? "h-7 w-7 animate-pulse "
                        : "h-7 w-7 animate-pulse hover:text-darkBgLight "
                    }
                  />
                </motion.button>
                </>
          }

        </motion.div>
      </div>
      <Modal open={openst} setOpen={setOpenst} />
      {/* {selectedF.length>0 && <>  */}
      {currentIt != totalIm + 1 &&
        <AreaComponent areas={areasA} setAreas={setAreasA} setSnippetSubmittedA={setSnippetSubmitted} img={image} setOpenAr={setOpenArs} openAr={openArs} />
      }
    </>
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
