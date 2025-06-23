import React, { useState } from 'react';

const teams = [
  {
    name: 'MEDIA TEAM',
    description:
      'The Media Team represents the public face of Marketing Challengers, managing all online content across social media platforms and ensuring the development and maintenance of the website throughout the competition. Additionally, we cultivate and manage relationships with Media Sponsors, Supporters, and Ambassadors to enhance the competition’s visibility and impact.',
    image: '/season13/ABOUT US/MEDIA1.png',
  },
  {
    name: 'PROGRAM TEAM',
    description:
      'The Program Team is responsible for delivering the core content of Marketing Challengers. We collaborate closely to ensure the competition’s success by shaping each strategic initiative. This includes setting project objectives, creating themes and timelines, organizing event agendas and round structures, and providing detailed client briefs that serve as key criteria for judging. Our mission is to nurture contestants’ marketing skills while maintaining academic excellence throughout every season.',
    image: '/season13/ABOUT US/PROGRAM1.png',
  },
  {
    name: 'MARKETING TEAM',
    description:
      'The Marketing team enhances brand visibility and drives sales for Marketing Challengers each season. We manage promotional materials, coordinate budgets and strategies with other teams, and align creative direction with project goals. We develop marketing plans across various channels, analyze market trends and consumer insights, and ensure projects remain on track and within budget.',
    image: '/season13/ABOUT US/MARKETING1.png',
  },
  {
    name: 'SPONSOR TEAM',
    description:
      'The Sponsor Team, which is dedicated members of the organizing committee, focuses on securing essential sponsorships to ensure the competition’s success. Our commitment to building strategic partnerships enhances the experience for participants and sponsors alike. Stay tuned for the exciting initiatives we have planned this season!',
    image: '/season13/ABOUT US/SPONSOR1.png',
  },
  {
    name: 'OPERATIONS TEAM',
    description:
      'The Operations team is essential to the seamless execution of all events. We manage critical details, including documentation, venue setup, and on-site coordination. With a strong focus on logistics and hands-on management, we ensure every event runs smoothly, providing a memorable and well-organized experience for all participants.',
    image: '/season13/ABOUT US/OPERATIONS1.png',
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teams.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teams.length - 1 ? 0 : prev + 1));
  };

  const currentTeam = teams[currentIndex];

  return (
    <div className="w-full mx-auto flex flex-col items-center relative">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-[10px] sm:left-[15px] md:left-[20px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-[8px] sm:border-y-[10px] md:border-y-[12px] border-r-[12px] sm:border-r-[16px] md:border-r-[20px] border-y-transparent border-r-yellow-400 hover:brightness-110 z-30"
        aria-label="Previous Team"
      />
      <button
        onClick={handleNext}
        className="absolute right-[10px] sm:right-[15px] md:right-[20px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-[8px] sm:border-y-[10px] md:border-y-[12px] border-l-[12px] sm:border-l-[16px] md:border-l-[20px] border-y-transparent border-l-yellow-400 hover:brightness-110 z-30"
        aria-label="Next Team"
      />  

      {/* Rectangular Container */}
      <div className="w-full max-w-[80vw] sm:max-w-[70vw] md:max-w-[90vw] lg:max-w-[1200px] flex flex-col md:flex-row bg-[#8a2be2] border border-yellow-400 rounded-lg p-0 sm:p-1 md:p-2 lg:p-4">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-0 sm:p-1 md:p-2 lg:p-4 flex flex-col items-center">
          <h2 className="text-tertiary-300 text-xs sm:text-sm md:text-base lg:text-3xl mb-0 sm:mb-1 md:mb-2 lg:mb-4">Hi! We are</h2>
          <div className="flex-1 w-full">
            <div className="border border-yellow-400 bg-[#6a1bb8] p-0 sm:p-1 md:p-2 lg:p-4 rounded-lg min-h-[80px] sm:min-h-[100px] md:min-h-[160px] lg:min-h-[240px] flex flex-col justify-center text-left text-tertiary-300">
              <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-2xl text-center mb-0 sm:mb-1 md:mb-2 lg:mb-4">{currentTeam.name}</h3>
              <p className="text-[7px] sm:text-[8px] md:text-[10px] lg:text-base">{currentTeam.description}</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-0 sm:p-1 md:p-2 lg:p-4 flex items-center justify-center">
          <div
            className="w-full max-w-[60vw] sm:max-w-[50vw] md:max-w-[35vw] lg:max-w-[400px] lg:scale-[140%] aspect-[4/3] overflow-hidden"
            style={{
              backgroundImage: `url("${currentTeam.image}")`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;