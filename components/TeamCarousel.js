import React, { useState } from 'react';
import marketing from '../assets/season13/ABOUT US/MARKETING.png';
import media from '../assets/season13/ABOUT US/MEDIA.png';
import operations from '../assets/season13/ABOUT US/OPERATIONS.png';
import program from '../assets/season13/ABOUT US/PROGRAM.png';
import sponsor from '../assets/season13/ABOUT US/SPONSOR.png';
import arc from '../assets/season13/ABOUT US/ARC.png';

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
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between">
      {/* Left: Text */}
      <div className="w-full lg:w-1/2 p-4 flex flex-col items-center">
        <h2 className="text-tertiary-300 text-4xl text-headline-31 mb-8">Hi! We are</h2>
        <div className="w-full max-w-lg flex items-center justify-between relative">
          <button onClick={handlePrev} className="w-0 h-0 border-y-[20px] border-r-[30px] border-y-transparent border-r-yellow-400 hover:brightness-110" />

          <div className="flex-1 mx-4">
            <div className="border border-yellow-400 bg-[#8a2be2] p-6 rounded-lg h-[550px] text-left text-tertiary-300">
              <h3 className="text-2xl text-center text-headline-37 mb-4">{currentTeam.name}</h3>
              <p className="text-sm ">{currentTeam.description}</p>
            </div>
          </div>

          <button onClick={handleNext} className="w-0 h-0 border-y-[20px] border-l-[30px] border-y-transparent border-l-yellow-400 hover:brightness-110" />
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full lg:w-1/2 p-4 flex items-center justify-center relative">
  {/* Team Circle Image */}
  <div
    className="w-[600px] h-[600px] rounded-full overflow-hidden relative z-10"
    style={{
      backgroundImage: `url(${currentTeam.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
  <img
    src="/season13/ABOUT US/ARC.png"
    alt="arc overlay"
    className="absolute top-0 left-0 w-[920px] h-[920px] z-2 pointer-events-none"
    style={{ top: '-50px', left: '90px' }}
  />
</div>

      
    </div>
    
  );
};

export default TeamCarousel;
