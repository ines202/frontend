import React from "react";

const Services = () => {
  const videos = [
    { src: 'chemin-vers-votre-video-1.mp4', title: 'How the doctor use our DOOLABCare web App?', description: 'This is a web application for the doctor who wants to achieve their goals and meet the needs of their patients by monitoring their diabetes, especially their foot care.' },
    { src: 'chemin-vers-votre-video-2.mp4', title: 'How the patient use our DOOLABCare mobile App?', description: 'This is a mobile App for a patient who wants to track their diabetes and foot care to avoid complications of diabetic foot ulcer.' },
    // { src: 'chemin-vers-votre-video-3.mp4', title: 'Comment faire...?', description: 'Ceci est un site Web pour un client qui souhaite atteindre ses objectifs et répondre aux besoins de ses utilisateurs tout en augmentant sa portée.' },
    // { src: 'chemin-vers-votre-video-4.mp4', title: 'Comment faire...?', description: 'Ceci est un site Web pour un client qui souhaite atteindre ses objectifs et répondre aux besoins de ses utilisateurs tout en augmentant sa portée.' }
  ];

  return (
    <div id="services" className="container mx-auto bg-white pt-8 px-8">
      <div className="">
        <h3 className="text-2xl font-bold text-purple-700">More About Us</h3>
        <p className="text-black mt-2 sm:text-title-xl2">We provide video guides to explain how some intricate
          sections of the DOOLABCare App should be performed.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="mb-8">
            <video src={video.src} controls className="w-full rounded-lg shadow-lg"></video>
            <h3 className="text-lg font-semibold mt-4">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
