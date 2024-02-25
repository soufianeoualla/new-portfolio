import Header from "../components/Header";
import Product from "../components/Product";
import xx99_II from "../components/assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import xx99_I from "../components/assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59 from "../components/assets/shared/desktop/image-xx59-headphones.jpg";
import ProductCategory from "../components/ProductCategory";
import xx59_tablet from "../components/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx99_I_tablet from "../components/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99_II_tablet from "../components/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";

import { useEffect, useState } from "react";

const Headphones = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsTablet(width >= 768 && width <= 1024);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="h-[336px] bg-black">
        <Header />
        <div className="flex justify-center items-center h-[240px] font-bold">
          <h1 className="text-2xl tracking-widest text-white">HEADPHONES</h1>
        </div>
      </div>
      <div className=" max-w-[1110px] mx-auto grid gap-24 my-28">
        <Product
          desc={
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          }
          slug={"XX99 Mark II Headphones"}
          link={"xx99 mark ii"}
          img={isTablet? xx99_II_tablet : xx99_II}
          index={1}
        />

        <Product
          desc={
            "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          }
          slug={"XX99 Mark I Headphones"}
          link={"xx99 mark i"}
          img={isTablet ? xx99_I_tablet : xx99_I}
          index={isTablet ? null : 2}
        />

        <Product
          desc={
            "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          }
          slug={"XX59 Headphones"}
          link={"xx59"}
          img={isTablet ? xx59_tablet : xx59}
          index={3}
        />
      </div>
      <div className="max-w-[1110px] mx-auto">
        <ProductCategory />
      </div>
    </div>
  );
};

export default Headphones;
