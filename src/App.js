import VideoBanner from "./components/VideoBanner";
import ImageCarousel from "./components/ImageCarousel";
import BarberServices from "./components/BarberServices";
import SalonServices from "./components/SalonServices";
import { useEffect } from "react";
import scrollToTop from "./helpers/scrollToTop";

function App() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="relative">
      <VideoBanner />
      <h2 className="text-center py-4 text-6xl text-red-900">Style x Studio</h2>
      <p className="italic text-center text-xl">
        We provide the freshest cuts in the city.
      </p>
      <section className="py-4">
        <ImageCarousel />
      </section>
      <section className="py-4 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90">
          About Us
        </h2>
        <div className="flex flex-col gap-4 px-4">
          <p className="text-4xl">Who We are</p>
          <p className="italic text-2xl font-semibold">
            Style X Studio | Since 2021
          </p>{" "}
          <p className="max-w-lg mx-auto text-base sm:text-xl leading-relaxed">
            {" "}
            Style X Studio, situated on 6th Road, Satellite Town, Rawalpindi, is
            your premier destination for contemporary and personalized grooming
            and hairstyling services. Located at D27, Dar Street, 6th Road,
            Rawalpindi, we are committed to providing an exceptional salon
            experience that leaves you looking and feeling your best.{" "}
          </p>{" "}
          <p className="max-w-lg mx-auto text-base sm:text-xl leading-relaxed">
            {" "}
            Established in 2021, Style X Studio was born from a lifelong passion
            for the art of barbering. Our founder envisioned a space where
            everyone could experience the timeless craft of grooming in a
            relaxed and welcoming environment.{" "}
          </p>{" "}
          <p className="max-w-lg mx-auto text-base sm:text-xl  leading-relaxed">
            {" "}
            Our expert team of stylists and barbers is the foundation of our
            success. We take immense pride in our talented and diverse staff,
            who are not only professionals but artists dedicated to delivering
            exceptional service. Each stylist continually hones their skills and
            stays at the cutting edge of industry trends to ensure every client
            receives a personalized and stylish experience.{" "}
          </p>{" "}
          <p className="max-w-lg mx-auto text-base sm:text-xl  leading-relaxed">
            {" "}
            Whether you're looking for a trend-setting haircut, rejuvenating spa
            treatments, or expert grooming services, Style X Studio blends
            modern aesthetics with skilled craftsmanship to ensure you leave
            feeling refreshed, confident, and perfectly styled.{" "}
          </p>
        </div>
        <img
          className="w-1/4 grayscale object-cover hidden md:block"
          src="https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg"
        ></img>
      </section>
      <section className="w-xl pb-4 px-4 bg-red-950 bg-opacity-10 mt-4 flex flex-col md:flex-row mx-auto justify-center items-center gap-12">
        <BarberServices />
        <SalonServices />
      </section>
    </div>
  );
}

export default App;
