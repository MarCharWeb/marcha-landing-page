import PageTitle from "../components/PageTitle";
import React from "react";
import Image from 'next/image';
import Button from '../components/Button'
import { useState, useEffect } from 'react';

import OCimg from '../assets/Website/Events/OC.jpg';
import TestDriveimg from '../assets/Website/Events/TestDrive.jpg';
import Webinar1img from '../assets/Website/Events/Webinar1.jpg';
import Webinar2img from '../assets/Website/Events/Webinar2.jpg';
import Workshopimg from '../assets/Website/Events/Workshop.jpg';
import PPimg from '../assets/Website/Events/PP.jpg';
import CCimg from '../assets/Website/Events/CC.png';

const EventInfo = () => {
    return (
        <main className="hidden lg:block flex flex-col pt-[1600px]">
            <style>
                {`
                    .gradient-bg 
                    {
                        background-image: linear-gradient(90deg, #f85f1d, #6739b1);
                    }
                `}
            </style>
            <PageTitle className="" title={"SEASON 11'S EVENT DETAILS"}></PageTitle>
            <div className="flex flex-col items-center justify-center w-full mt-4">
                <div className="gradient-bg relative rounded-[50px] h-[825px] w-[800px] flex flex-col items-center justify-start">
                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={Webinar1img} />
                    <p className="text-white text-[18px] mx-4 mt-4 text-left">
                        Being one of the events in the launch series of the Marketing Challengers season 12, Webinar 1: Sustainability in Marketing & Business Development, we are pleased to welcome the 2 Guest Speakers: <br></br>
                        🌿Ms. Khanh Truong - Client Partnership Supervisor at Buzzmetrics<br></br>
                        🌿Mr. Peter Vo - Head of Business Development & Partnership at The Parentinc<br></br>
                        At Webinar 1, you will have a chance to gain more knowledge and experience related to the theme of MarCha season 12, which will help you in the process of solving the case in round 1.
                    </p>
                    <Button
                        onClick={() => {
                            window.open('https://www.facebook.com/photo/?fbid=715724820755688&set=a.484714687190037', '_blank');
                        }}
                        isGlow={true}
                        type='primary'
                        className='animate-bounce-slow font-bold my-2'
                        text={'See More'}
                        size={'large'}
                    />
                </div>
                <div className="gradient-bg relative rounded-[50px] h-[800px] w-[800px] flex flex-col items-center justify-start mt-10">
                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={TestDriveimg} />
                    <p className="text-white text-[18px] mx-4 mt-4 text-left">
                        Understanding the contestants&apos;desires, MarCha has organized a &quot;Test Drive&quot; session to provide additional knowledge about the <span className="font-bold">MET</span>.<span className="font-bold">EV</span> brand and product that you won&apos;t find anywhere else on the internet. At the &quot;Test Drive&quot;, you will have the opportunity: <br></br>
                        🌟Hear the sharing from the founder of <span className="font-bold">MET</span>.<span className="font-bold">EV</span><br></br>
                        🌟Understand the value and direction of the brand<br></br>
                        🌟Understand the spiritual value of the product<br></br>
                        🌟Confidently conquer the rounds of MarCha season 12
                    </p>
                    <Button
                        onClick={() => {
                            window.open('https://www.facebook.com/photo/?fbid=718265680501602&set=a.484714687190037', '_blank');
                        }}
                        isGlow={true}
                        type='primary'
                        className='animate-bounce-slow font-bold mt-4'
                        text={'See More'}
                        size={'large'}
                    />
                </div>
                <div className="gradient-bg relative rounded-[50px] h-[800px] w-[800px] flex flex-col items-center justify-start mt-10">
                    <div className="w-full">
                        <Image className="flex items-center justify-center object-center rounded-[30px] min-w-full min-h-full object-cover" src={OCimg} />
                    </div>
                    <p className="text-white text-[18px] mx-4 mt-4 text-left">
                        The Opening Ceremony is a milestone marking the official start of Marketing Challengers Season 12. Coming to the Opening Ceremony, you will have the opportunity to:<br></br>
                        🌟Understand the competition rounds, competition structure, and special prizes<br></br>
                        🌟Meet and interact with the representatives of MarCha&apos;s sponsors<br></br>
                        🌟Grasp thorough understanding and expectations from our Exclusive Sponsor MET.EV<br></br>
                        🌟Expand networking and find great teammates for your upcoming journey<br></br>
                        🌟Unveiling the winner team of <span className="font-bold">CeraVe&#39;𝘀 Challenge Category</span>
                    </p>
                    <Button
                        onClick={() => {
                            window.open('https://l.facebook.com/l.php?u=https%3A%2F%2Fquickom.net%2Fevent%2Fopening-ceremony-marketing-challengers-1564&h=AT2U0DXquWCdRNa_U-YkyXGQHyOJX9rn0_cRfH7ZqihMpew5Cq0S7KgrgM2olPL8sm6VN3azmssEE2f0tLCyLNtUquYZFmccRKi1elWaoIaN2m-lrYhfewfN4O2E7Y2jp6QEW5TYfOvA5lKTBWOi&s=1', '_blank');
                        }}
                        isGlow={true}
                        type='primary'
                        className='animate-bounce-slow font-bold mt-4'
                        text={'See More'}
                        size={'large'}
                    />
                </div>
                <div className="gradient-bg relative rounded-[50px] h-[800px] w-[800px] flex flex-col items-center justify-start mt-10">
                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={Webinar2img} />
                    <p className="text-white text-[18px] mx-4 mt-4 text-left">
                        You are so proud to announce the upcoming webinar entitled &quot;<span className="font-bold">How to find an insightful insight</span>&quot;. In this webinar, we are glad to inform the presence of:<br></br>
                        🌿Mr. Nguyen Hai Minh - Chairman & Chief of Knowledge at Wisdom Agency<br></br>
                        🌿Ms. Lucy Pham - Webinar 2 Host<br></br>
                        Don&apos;t miss out on this webinar, as you will have a chance to discover various ways to discover an insightful insight, know how to avoid assumptions when finding, an more importantly, get yourself well-prepared before the Round 1.
                    </p>
                    <Button
                        onClick={() => {
                            window.open('https://www.facebook.com/photo/?fbid=727219086272928&set=a.484714687190037', '_blank');
                        }}
                        isGlow={true}
                        type='primary'
                        className='animate-bounce-slow font-bold mt-4'
                        text={'See More'}
                        size={'large'}
                    />
                </div>
                <div className="gradient-bg relative rounded-[50px] h-[800px] w-[800px] flex flex-col items-center justify-start mt-10">
                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={Workshopimg} />
                    <p className="text-white text-[18px] mx-4 mt-4 text-left">
                        In this workshop, we are honored to invite two esteemed guest speakers:<br></br>
                        🌿Mr. Ngo Minh Thuan - Founder & Managing Director at DNA Consulting<br></br>
                        🌿Mr. Dang Quang Huy - Social Planner at DNA Consulting<br></br>
                        With their wealth of knowledge and an abundance of experience, they will provide Top 30 with:<br></br>
                        🌟The essential marketing knowledge for Round 2: Deployment Plan<br></br>
                        🌟The real execution of a Marketing campaign from the agency&#39;s point of view<br></br>
                        🌟Experience sharing from the experts with practices to reinforce the knowledge

                    </p>
                    <Button
                        onClick={() => {
                            window.open('https://www.facebook.com/photo/?fbid=734851522176351&set=a.484714687190037', '_blank');
                        }}
                        isGlow={true}
                        type='primary'
                        className='animate-bounce-slow font-bold mt-4'
                        text={'See More'}
                        size={'large'}
                    />
                </div>
                <div className="gradient-bg relative rounded-[50px] h-[830px] w-[800px] flex flex-col items-center justify-start mt-10">
                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={PPimg} />
                    <p className="text-white text-[18px] mx-4 mt-4 text-left">
                        As part of Marketing Challengers Season 12, Private Pitching is where the Top 8 teams will showcase their talents through important social content (viral videos, small games, posters, etc.), aiming to highlight the key message in their strategy and solve marketing challenges from MET.EV with special support and guidance from the our esteemed mentors.<br></br>
                        Following this, the Networking Event is a valuable opportunity for the Top 8 finalists. This will undoubtedly be a &quot;golden&quot; opportunity for young marketers to interact, learn from industry veterans, and explore thousands of exciting career prospects awaiting them.
                    </p>
                    <Button
                        onClick={() => {
                            window.open('https://www.facebook.com/photo/?fbid=734851522176351&set=a.484714687190037', '_blank');
                        }}
                        isGlow={true}
                        type='primary'
                        className='animate-bounce-slow font-bold mt-4'
                        text={'See More'}
                        size={'large'}
                    />
                </div>
                <div className="gradient-bg relative rounded-[50px] h-[800px] w-[800px] flex flex-col items-center justify-start mt-10">
                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={CCimg} />
                    <p className="text-white text-[18px] mx-4 mt-4 text-left">
                        The Grand Finale of Marketing Challengers Season 12 is to wrap up this exciting journey .
                        Join us for an unforgettable evening which will include:<br></br>
                        🌿Award Ceremony - the Top 8 will receive prizes from our Sponsors.<br></br>
                        🌿Witness Top 4 Finalists&apos; Presentation - a showcase of their innovative marketing strategies.<br></br>
                        🌿Engage with our Sponsors, Mentors, and MarCha&apos;s organizers.<br></br>
                        🌿Expand your network and connect with like-minded Marketing enthusiasts.<br></br>
                    </p>
                    <Button
                        onClick={() => {
                            window.open('https://www.facebook.com/photo/?fbid=734851522176351&set=a.484714687190037', '_blank');
                        }}
                        isGlow={true}
                        type='primary'
                        className='animate-bounce-slow font-bold mt-4'
                        text={'See More'}
                        size={'large'}
                    />
                </div>
            </div>
        </main>
    );
};

export default EventInfo;
