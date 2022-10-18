import Head from "next/head";
import Image from "next/image";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import { DownloadIcon } from "@heroicons/react/solid";
import { ChatIcon } from "@heroicons/react/solid";
import { ArrowRightIcon,ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
const scaleVariants1 = {
  whileInView: {
    transform: "scale(0)",
    scale: [0, 1, 1.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

const scaleVariants2 = {
  whileInView: {
    transform: "scale(0)",
    scale: [0, 1, 1.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
      delay: 0.4,
    },
  },
};

const scaleVariants3 = {
  whileInView: {
    transform: "scale(0)",
    scale: [0, 1, 1.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
      delay: 0.6,
    },
  },
};

const scaleVariants4 = {
  whileInView: {
    transform: "scale(0)",
    scale: [0, 1, 1.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
      delay: 0.8,
    },
  },
};

const scaleVariants5 = {
  whileInView: {
    y: [100, 50, 0],
    opacity: [0, 0, 1],
    transition: { duration: 1 },
  },
};

const MainContainer = () => {
  var mainHeading = "Visual Turing Test";
  return (
    <div
      id="mainHeading"
      className="flex w-full items-center pt-20 pb-20 justify-center"
    >
      <div className="mx-auto flex flex-col items-center max-w-7xl">
        <div className="font-ubuntu mb-10 font-semibold text-[6.3rem]">
          <TypeWriter
            options={{
              delay: 25,
            }}
            onInit={(typewriter) => {
              typewriter.typeString(mainHeading).start();
            }}
          />
        </div>
        <motion.div
          variants={scaleVariants5}
          whileInView={scaleVariants5.whileInView}
          className="ml-9"
        >
          <div>
            <p className="tracking-wide w-[50rem] text-gray-800 text-lg lg:leading-8">
              In recent years, methods based on Artificial Intelligence (AI)
              have been increasingly employed to assist human radiologists in
              diagnosing patient images for pathologies, such as cancerous
              tumors or cardiac deficiencies. In this study we look into images
              obtained through medical scanning via X-ray Computed Tomography
              which produces cross sectional images of the body’s interior, such
              as the one shown below.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <img
              className="h-[20rem] object-contain border-r-2"
              src="/100081_2000_400_40_1-058.dcm.png"
            ></img>
          </div>
          <div className="mt-6">
            <p className="tracking-wide w-[50rem] text-gray-800 text-lg lg:leading-8">
            Just like human radiologists, AI-based methods also require training by letting it “see” a
great diversity of human images and pathologies. And in order to make the AI as robust
and effective as possible, an abundance of training images is needed -- the more
images the better.
            </p>
          </div>
          <div className="mt-5">
            <p className="tracking-wide w-[50rem] text-gray-800 text-lg lg:leading-8">
              We have devised an algorithm which can generate synthetic images
              to boost the diversity of images that can be used for AI training,
              AI verification and AI testing. In the following we will show you
              a set of medical images, one at a time, and you will be asked
              whether you think they came from a human scan (real) or were
              generated from our algorithm (fake). If you think an image was
              algorithmically generated (fake) you will be asked why you think
              it is fake. Does it look fake because the texture is off or
              because the anatomy is wrong or both?
            </p>
          </div>
          <div className="mt-5">
            <p className="tracking-wide w-[50rem] text-gray-800 text-lg lg:leading-8">
              Before beginning the study you will receive instructions and then
              you will need to pass a test. If you pass the test you will be
              asked to provide information on your demographics and medical
              expertise and then you will be shown the first image. If you do
              not pass the test you can repeat the instructions and the test.
              Real and simulated images will be presented in random order, and
              you will be able to opt out at any time. No information will be
              collected that can link you to the responses you gave or that you
              participated in this study.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={scaleVariants5}
          whileInView={scaleVariants5.whileInView}
          className="mt-9 ml-9"
        >
          <div className="mb-6">
            <p className="font-ubuntu text-2xl font-semibold tracking-wide underline ">
              Instructions
            </p>
          </div>
          <div className="mt-5">
            <p className="tracking-wide  w-[50rem] text-gray-800 text-lg lg:leading-8">
              The below are a few typical CT slice images of a chest study.
            </p>
          </div>
          <div className="flex flex-wrap space-x-4 justify-center mt-6">
            <img
              className="h-[11rem] object-contain border-r-2"
              src="/100002_2001_400_40_1-059.dcm.png"
            ></img>
            <img
              className="h-[11rem] object-contain border-r-2"
              src="/100037_2000_400_40_1-066.dcm.png"
            ></img>
            <img
              className="h-[11rem] object-contain border-r-2"
              src="/100142_2000_400_40_1-088.dcm.png"
            ></img>
            <img
              className="h-[11rem] object-contain border-r-2"
              src="/100461_2001_400_40_1-050.dcm.png"
            ></img>
          </div>
          <div className="mt-6">
            <p className="tracking-wide  w-[50rem] text-gray-800 text-lg lg:leading-8">
              In the following you will see a series of images, one at a time,
              and you will need to decide whether the image is real or
              algorithmically generated. The screen will looks like this:
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <img
              className="h-[24rem] object-contain border-r-2"
              src="/UI-Image.png"
            ></img>
          </div>
          <div className="mt-6">
            <p className="tracking-wide  w-[50rem] text-gray-800 text-lg lg:leading-8">
              If this were a segment of the study you would select either “real”
              or “fake” and if you selected “fake” you would tell us the reason
              of your choice. Select “texture” if you feel the texture is off or
              “anatomy” if you feel the anatomy is incorrect. You can also
              select both. Once you are sure of your choices you can click the
              “Commit” which will change the screen to the next image. The
              progress bar below the image informs you how many images are still
              left for you to rate.
            </p>
          </div>
          <div className="mt-5 text-center">
            <p className="tracking-wide font-bold  w-[50rem] text-red-800 text-md not-italic lg:leading-8">
            Note that you can always click the “Leave” button if you wish to exit the study
prematurely.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={scaleVariants5}
          whileInView={scaleVariants5.whileInView}
          className="flex flex-row lg:space-x-14 lg:space-y-0 space-y-5 justify-center mt-16"
        >
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="#mainHeading"
            //href={`${props.abouts[0].resume}?dl=`}
            className="flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-red-400 lg:hover:text-darkBgLight"
          >
            <p className="tracking-wider">Leave</p>
            <LogoutIcon className="h-7 w-7 animate-pulse hover:text-darkBgLight" />
          </motion.a>

          <motion.a
            href="/Classify"
            whileTap={{ scale: 0.9 }}
            className="mt-8 flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-gray-800 py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-8 lg:hover:bg-green-400 lg:hover:text-darkBgLight"
          >
            <p className="tracking-wider">Proceed</p>
            <ChevronDoubleRightIcon className="h-7 w-7 animate-pulse hover:text-darkBgLight" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default MainContainer;
