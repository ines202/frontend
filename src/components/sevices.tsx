import React from "react";

const Services = () => {
  const videos = [
    {
      src: "",
      title: "How the doctor use our DOOLABCare web App?",
      description:
        "This is a web application for the doctor who wants to achieve their goals and meet the needs of their patients by monitoring their diabetes, especially their foot care.",
    },
    {
      src: "videos/Screenrecorder-2024-06-09-18-06-43-802.mp4",
      title: "How the patient use our DOOLABCare mobile App?",
      description:
        "This is a mobile App for a patient who wants to track their diabetes and foot care to avoid complications of diabetic foot ulcer.",
    },
  ];

  return (
    <div id="services" className="container mx-auto bg-white px-8 pt-8">
      <div className="">
        <h3 className="text-2xl font-bold text-purple-700">More About Us</h3>
        <p className="mt-2 text-black sm:text-title-xl2">
          We provide video guides to explain how some intricate sections of the
          DOOLABCare App should be performed.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {videos.map((video, index) => (
          <div key={index} className="mb-8">
            <video
              src={video.src}
              controls
              className="  w-full h-70
               rounded-lg shadow-lg"
            ></video>
            <h3 className="mt-4 text-lg font-semibold">{video.title}</h3>
            <p className="text-gray-600 text-sm">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
