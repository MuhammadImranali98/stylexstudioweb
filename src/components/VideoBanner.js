import React from "react";
import barbervid from "./videos/barbervid.mp4";
// import { Link } from "react-router-dom";
function VideoBanner() {
  return (
    <div className="relative px-4 h-[75vh] bg-neutral-900 flex flex-col gap-4 justify-center items-center">
      <h2 className="z-20 text-neutral-300 text-3xl text-center">
        Looking Your Best Never Goes Out of Style.
      </h2>
      <h3 className="z-20 text-neutral-300 text-base sm:text-3xl px-4 py-2 font-bold block">
        Contact:
        <a href="tel:0514844545" className="text-white hover:underline">
          {" "}
          051-4844545
        </a>
      </h3>
      {/* <div className="z-20 text-neutral-300 text-base sm:text-3xl px-4 py-2 font-bold block">
        <span>Or reach us on </span>
        <a
          href="https://wa.me/923344844545"
          className="text-green-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div> */}

      {/* <Link
        to="/reservations"
        className="bg-red-900 nav z-20 text-neutral-300 text-base sm:text-xl px-4 py-2 font-bold block"
      >
        Book Now
      </Link> */}
      <video
        className="absolute opacity-60 top-0 left-0 w-full h-full object-cover"
        src={barbervid}
        muted
        loop
        autoPlay
      ></video>
    </div>
  );
}

export default VideoBanner;
