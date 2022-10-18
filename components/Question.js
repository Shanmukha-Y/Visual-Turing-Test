import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const Question = ({ load, selectedSet, fakeSelSet, checkedSet, selectedI, checkedI, fakeSelI }) => {
//   const [selected, setSelected] = useState("");
//   const [fakeSel, setFakeSel] = useState(false);
//   const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checkedI];
    if (event.target.checked) {
      updatedList = [...checkedI, event.target.value];
    } else {
      updatedList.splice(checkedI.indexOf(event.target.value), 1);
    }
    checkedSet(updatedList);
  };

  console.log("checked : ", checkedI);

  const checkList = ["Texture Looks Fake", "Anatomy Looks Fake"];
  return (
    <div>
      {load ? (
        <motion.div
          id="Question"
          className="flex overflow-hidden h-[128px] shadow-md w-[34rem] p-4 bg-white-700 border-4 rounded-lg flex-col "
        >
          <div role="status" className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-9 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[420px] mb-2.5"></div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          
          layout
          id="Question"
          className="flex overflow-hidden items-center shadow-md w-[34rem] p-6 bg-white-700 border-4 rounded-lg flex-col "
        >
          <motion.div  layout>
            <motion.p
              layout
              className="tracking-wide font-semibold text-gray-800 text-lg lg:leading-8"
            >
              Choose if image shown above is Real or Fake :
            </motion.p>
          </motion.div>
          <motion.div
            layout
            className={
              "flex space-x-28 mt-4 overflow-hidden " + (fakeSelI && "mb-5")
            }
          >
            <motion.div
              layout
              className="radio-btn overflow-hidden flex border-r-2"
              onClick={() => {
                selectedSet("Real");
                fakeSelSet(false);
              }}
            >
              <motion.input
                layout
                type="radio"
                value={selectedI}
                name="real"
                checked={selectedI == "Real"}
              />
              <motion.p layout className="ml-2 tracking-wider">
                Real
              </motion.p>
            </motion.div>
            <motion.div
              layout
              className="flex overflow-hidden"
              onClick={() => {
                selectedSet("Fake");
                fakeSelSet(true);
              }}
            >
              <motion.input
                layout
                type="radio"
                value={selectedI}
                name="fake"
                checked={selectedI == "Fake"}
              />
              <motion.p layout className="ml-2 tracking-wider">
                Fake
              </motion.p>
            </motion.div>
          </motion.div>
          {fakeSelI && (
            <AnimatePresence>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div>
                  <p className="tracking-wide font-semibold text-gray-800 text-md lg:leading-8">
                    What's the reason for this choice :
                  </p>
                </motion.div>

                <div className="flex flex-col ml-10 space-y-3 mt-4">
                  <motion.div className=" flex border-r-2">
                    <input
                      onChange={handleCheck}
                      type="checkbox"
                      value="Texture Looks Fake"
                      name="texture"
                      //checked={selected == "Texture Looks Fake"}
                    />
                    <p className="ml-2 tracking-wider">Texture Looks Fake</p>
                  </motion.div>
                  <motion.div
                    className="flex"
                    
                  >
                    <input
                      onChange={handleCheck}
                      type="checkbox"
                      value="Anatomy Looks Fake"
                      name="anotomy"
                      //checked={selected == "Anatomy Looks Fake"}
                    />
                    <p className="ml-2 tracking-wider">Anatomy Looks Fake</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Question;
