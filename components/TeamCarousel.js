import React, { useState } from 'react';

const teams = [
  {
    name: 'MEDIA TEAM',
    description:
      'The Media Team represents the public face of Marketing Challengers, managing all online content across social media platforms and ensuring the development and maintenance of the website throughout the competition. Additionally, we cultivate and manage relationships with Media Sponsors, Supporters, and Ambassadors to enhance the competition’s visibility and impact.',
    image: '/season13/ABOUT US/MEDIA.png',
  },
  {
    name: 'PROGRAM TEAM',
    description:
      'The Program Team is responsible for delivering the core content of Marketing Challengers. We collaborate closely to ensure the competition’s success by shaping each strategic initiative. This includes setting project objectives, creating themes and timelines, organizing event agendas and round structures, and providing detailed client briefs that serve as key criteria for judging. Our mission is to nurture contestants’ marketing skills while maintaining academic excellence throughout every season.',
    image: '/season13/ABOUT US/PROGRAM.png',
  },
  {
    name: 'MARKETING TEAM',
    description:
      'The Marketing team enhances brand visibility and drives sales for Marketing Challengers each season. We manage promotional materials, coordinate budgets and strategies with other teams, and align creative direction with project goals. We develop marketing plans across various channels, analyze market trends and consumer insights, and ensure projects remain on track and within budget.',
    image: '/season13/ABOUT US/MARKETING.png',
  },
  {
    name: 'SPONSOR TEAM',
    description:
      'The Sponsor Team, which is dedicated members of the organizing committee, focuses on securing essential sponsorships to ensure the competition’s success. Our commitment to building strategic partnerships enhances the experience for participants and sponsors alike. Stay tuned for the exciting initiatives we have planned this season!',
    image: '/season13/ABOUT US/SPONSOR.png',
  },
  {
    name: 'OPERATIONS TEAM',
    description:
      'The Operations team is essential to the seamless execution of all events. We manage critical details, including documentation, venue setup, and on-site coordination. With a strong focus on logistics and hands-on management, we ensure every event runs smoothly, providing a memorable and well-organized experience for all participants.',
    image: '/season13/ABOUT US/OPERATIONS.png',
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
    <div className="w-full mx-auto flex flex-wrap items-center sm:justify-center lg:justify-between ">
      {/* Left: Text */}
      <div className="w-full md:w-1/2  p-4 flex flex-col items-center">
        <h2 className="text-tertiary-300 text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">Hi! We are</h2>
        <div className="w-full max-w-xl flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="w-0 h-0 border-y-[12px] sm:border-y-[16px] border-r-[20px] sm:border-r-[24px] border-y-transparent border-r-yellow-400 hover:brightness-110"
            aria-label="Previous Team"
          />

          <div className="flex-1 mx-4">
            <div className="border min-w-[350px] border-yellow-400 bg-[#8a2be2] p-4 sm:p-6 rounded-lg min-h-[300px] sm:min-h-[350px] min-w-[400px] md:min-h-[400px] flex flex-col justify-center text-left z-20 text-tertiary-300">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-center mb-4">{currentTeam.name}</h3>
              <p className="text-sm sm:text-base">{currentTeam.description}</p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-0 h-0 border-y-[12px] sm:border-y-[16px] border-l-[20px] sm:border-l-[24px] border-y-transparent border-l-yellow-400 hover:brightness-110"
            aria-label="Next Team"
          />
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 px-4 flex items-center justify-center relative">
        <div
          className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden z-10"
          style={{
            backgroundImage: `url("${currentTeam.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <img
          src="/season13/ABOUT US/ARC.png"
          alt="Arc overlay"
          className="absolute w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] lg:w-[800px] lg:h-[800px] z-0 pointer-events-none"
          style={{ top: '-5%', left: '50%', transform: 'translateX(-50%)' }}
        />
      </div>
    </div>
  );
};

export default TeamCarousel;