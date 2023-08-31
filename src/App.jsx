import Accordion from "./Accordion";
import "./App.css";
import BgPattern from "./assets/bg-pattern-desktop.svg";
import MobileBg from "./assets/bg-pattern-mobile.svg";
import Box from "./assets/illustration-box-desktop.svg";
import WomanDesktop from "./assets/illustration-woman-online-desktop.svg";
import WomanMobile from "./assets/illustration-woman-online-mobile.svg";

function App() {
  return (
      <body className="bg-gradient-to-b from-[#af67e9] to-[#6565e7] flex justify-center items-center min-h-screen">
        <div className="relative mt-36 mb-12 lg:mt-6">
          <img src={Box} alt="cube" className="absolute cube hidden lg:block" />
          <div className="bg-white maindiv flex text-[#181028] shadow-lg rounded-3xl mx-2 relative lg:overflow-hidden">
            {/* desktop */}
            <div className="w-72 mr-2 hidden lg:block">
              <img
                src={BgPattern}
                alt="pattern"
                className="bgpattern absolute"
              />
              <img
                src={WomanDesktop}
                alt="Woman looking at a computer"
                className="womancomputer absolute"
              />
            </div>

            <div className="hidden lg:block">
              <h2 className="font-bold text-4xl mb-8 ml-12 mt-20 lg:ml-64">
                FAQ
              </h2>
              <Accordion TransitionProps={{ unmountOnExit: true }} />
            </div>
            {/* mobile */}
            <div className="block lg:hidden relative">
              <img
                src={MobileBg}
                alt="mobile pattern"
                className="absolute mobilebg left-12"
              />
              <img
                src={WomanMobile}
                alt="Woman looking at a computer"
                className="absolute -top-32 left-12 womanmobile"
              />
              <h2 className="font-bold text-4xl text-center mb-2 mt-40">FAQ</h2>
              <Accordion TransitionProps={{ unmountOnExit: true }} />
            </div>
          </div>
        </div>
      </body>
  );
}

export default App;
