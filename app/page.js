import Slider from "@/components/Slider";

import GlobalApi from "./utils/GlobalApi";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Test from "@/components/Test";
import Bgr from "@/components/Bgr";


export default async function Home() {

  const sliderList=await GlobalApi.getSliders();
  return (
    <>
    
    <div className="mt-20 md:mt-20">
      <Slider sliderList={sliderList}/>
    </div>
    <div className="">
      <About/>
      </div>
    <Services/>
    <Bgr/>
    <Test/>
    </>
  );
}
