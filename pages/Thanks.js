import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/solid";
import { finalSurvState } from "../atoms/FinalSurvey";
import { useRecoilState } from "recoil";
import submitSurvey from "./api/submitSurvey";
import { useEffect, useRef } from "react";
import { atom, selector, useRecoilValue } from "recoil";
import LoadingBar from "react-top-loading-bar";

const Thanks = () => {
  const finalSu = useRecoilValue(finalSurvState);

  const [width, setWidth] = useState();

  const [height, setHeight] = useState();

  const [rem, setRem] = useState(true);

  const [finalRes, setFinalRes] = useRecoilState(finalSurvState);

  // const [isLoading, setLoading] = useState(true);

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  // const ref = useRef(null);

  // useEffect(() => {
  //   ref.current.continuousStart();
  //   const fiR = localStorage.getItem("finalRes");

  //   submitSurvey(JSON.parse(fiR));
  // }, []);

  // function submitSurvey(payload) {
  //   console.log("tete");
  //   fetch("/api/submitSurvey", {
  //     method: "POST",
  //     body: JSON.stringify(payload),
  //   })
  //     .then(() => {
  //       ref.current.complete();

  //       delay(600).then(() => setLoading(false));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // delay(100).then(() => setHeight(window?.innerWidth));
  // delay(100).then(() => setWidth(window?.innerHeight));

  delay(3000).then(() => setRem(false));

  return (
    <>
      <div>
        {rem && (
          <Confetti
            className="w-full"
            gravity={0.7}
            numberOfPieces={70}
            tweenDuration={2000}
          />
        )}
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
          id="mainHeading"
          className="flex w-full min-h-screen"
        >
          <div className="mx-auto flex  flex-col justify-center text-center items-center max-w-7xl">
            <div className="font-ubuntu font-semibold text-[4.3rem]">
              Thanks for finishing the study
            </div>

            <motion.a
              whileTap={{ scale: 0.9 }}
              href="/"
              //href={`${props.abouts[0].resume}?dl=`}
              className="flex mt-20 cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-gray-400 lg:hover:text-darkBgLight"
            >
              <HomeIcon className="h-7 w-7 animate-pulse hover:text-darkBgLight" />
              <p className="tracking-wider">Go To Home</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Thanks;
