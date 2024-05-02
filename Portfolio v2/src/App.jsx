import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Technologies from "./Components/Technologies";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(isInView);
    }
  }, [isInView, mainControls]);

  return (
    <>
      <div className='wrapper'>
        <div className='container m-auto p-8'>
          <Header />
          <About />
          <Technologies />
          <div ref={ref}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial='hidden'
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Work />
            </motion.div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
