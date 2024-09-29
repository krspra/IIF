import React from "react";

function EventGallery({ eventRef }) {
  return (
      <div ref={eventRef}>
        <div className="text-5xl font-bold text-black-1 text-center py-10">
          Event Gallery
        </div>
        <div className="flex flex-col items-center gap-8">
          <img
            src="./iifEvent1.jpg"
            alt=""
            className="h-96 w-[700px] max-md:w-[500px] max-md:h-80 max-sm:w-[350px] max-sm:h-60 rounded-xl"
          />
          <img
            src="./iifEvent2.jpg"
            alt=""
            className="h-96 w-[700px] max-md:w-[500px] max-md:h-80 max-sm:w-[350px] max-sm:h-60 rounded-xl"
          />
          <img
            src="./iifEvent3.jpg"
            alt=""
            className="h-96 w-[700px] max-md:w-[500px] max-md:h-80 max-sm:w-[350px] max-sm:h-60 rounded-xl"
          />
          <img
            src="./iifEvent4.jpg"
            alt=""
            className="h-96 w-[700px] max-md:w-[500px] max-md:h-80 max-sm:w-[350px] max-sm:h-60 rounded-xl"
          />
        </div>
      </div>
  );
}

export default EventGallery;
