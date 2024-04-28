import PageTitle from "../components/PageTitle";
import Button from '../components/Button'
import React from "react";
import Image from 'next/image';

import OC1 from '../assets/EventInfo/OpeningCeremony/1.png';
import OC2 from '../assets/EventInfo/OpeningCeremony/2.png';
import OC3 from '../assets/EventInfo/OpeningCeremony/3.png';

import TD1 from '../assets/EventInfo/TestDrive/1.png';
import TD2 from '../assets/EventInfo/TestDrive/2.png';
import TD3 from '../assets/EventInfo/TestDrive/3.png';

import W11 from '../assets/EventInfo/webinar1/1.png';
import W12 from '../assets/EventInfo/webinar1/2.png';
import W13 from '../assets/EventInfo/webinar1/3.png';

import W21 from '../assets/EventInfo/webinar2/1.png';
import W22 from '../assets/EventInfo/webinar2/2.png';
import W23 from '../assets/EventInfo/webinar2/3.png';

import WS1 from '../assets/EventInfo/workshop/1.png';
import WS2 from '../assets/EventInfo/workshop/2.png';
import WS3 from '../assets/EventInfo/workshop/3.png';



const EventInfo = () => {
    return (
        <main className="mt-40">
            <style>
                {`
                    .gradient-bg {
                        background-image: linear-gradient(90deg, #ffde59, #ff914d);
                    }
                    .gradient-bg-big-left {
                        background-image: linear-gradient(90deg, #6739b1, #f8b41d);
                    }
                    .gradient-bg-big-right {
                        background-image: linear-gradient(90deg, #f8b41d, #6739b1);
                    }
                `}
            </style>

            <PageTitle className="" title={"EVENT'S INFORMATION"}></PageTitle>
            <div className="lg:flex mx-20">
                <div className="h-[250px] lg:w-1/2 w-full bg-blue-300 text-justify lg:mt-10 lg:mx-4 flex justify-end items-center">
                    <div style={{ borderRadius: '50px' }} className="gradient-bg-big-left flex-col flex items-center justify-center">
                        <div className="m-7">
                            At Webinar 1, contestants will discover information related to the topic of season 12 and will help them in the process of solving the case in round 1. Don&apos;t hesitate to take this opportunity and enter this exciting journey ahead.
                        </div>
                        <Button
                            onClick={() => {
                                window.open('https://fb.watch/rptdyAdrG7/', '_blank');
                            }}
                            isGlow={true}
                            type='primary'
                            className='animate-bounce-slow font-bold px-6 py-2 mb-2'
                            text={'See More'}
                            size='medium'
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 w-full bg-gray-300 flex flex-col items-center justify-start h-full">
                    <h4 className="font-bold text-headline-31 lg:text-headline-37 text-glow-strong mt-6">WEBINAR 1</h4>
                    <div className="text-center text-[22px] my-1">Sustainability in Marketing & Business Development</div>
                    <div style={{ borderRadius: '50px' }} className="gradient-bg text-[#ffffff] font-bold h-[50px] w-[150px] flex items-center justify-center">
                        14/03/2024
                    </div>
                    <div className="my-3 flex space-x-2">
                        <div>
                            <Image src={W11} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div className="px-2">
                            <Image src={W12} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div>
                            <Image src={W13} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="lg:flex mx-20 mt-16">
                <div className="lg:w-1/2 w-full bg-gray-300 flex flex-col items-center justify-start h-full">
                    <h4 className="font-bold text-headline-31 lg:text-headline-37 text-glow-strong mt-6">TEST DRIVE WITH MET.EV</h4>
                    <div style={{ borderRadius: '50px' }} className="gradient-bg text-[#ffffff] font-bold h-[50px] w-[250px] flex items-center justify-center my-1">
                        22-24/03/2024
                    </div>
                    <div className="my-3 flex space-x-2">
                        <div>
                            <Image src={TD1} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div className="px-2">
                            <Image src={TD2} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div>
                            <Image src={TD3} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                    </div>
                </div>
                <div className="h-[250px] lg:w-1/2 w-full bg-blue-300 text-justify lg:mt-10 lg:mx-4 flex justify-end items-center">
                    <div style={{ borderRadius: '50px' }} className="gradient-bg-big-right flex-col flex items-center justify-center">
                        <div className="m-7">
                            Test Drive will create an opportunity for contestants to supplement their knowledge about MET.EV&apos;s brand and products that have not been published online, and confidently conquer the upcoming rounds. Let&apos;s quickly learn to understand the values, orientation and spirit of the brand.                        </div>
                        <Button
                            onClick={() => {
                                window.open('https://www.facebook.com/marketing.challengers/posts/pfbid025855WE9wXtDVJ9S5BjjfiTDrLbRP4eU4tVLAvWx6RXDsovbvXLunNFLjRnxHcuvml', '_blank');
                            }}
                            isGlow={true}
                            type='primary'
                            className='animate-bounce-slow font-bold px-6 py-2 mb-2'
                            text={'See More'}
                            size='medium'
                        />
                    </div>
                </div>
            </div>
            <div className="lg:flex mx-20 mt-16">
                <div className="h-[250px] lg:w-1/2 w-full bg-blue-300 text-justify lg:mt-10 lg:mx-4 flex justify-end items-center">
                    <div style={{ borderRadius: '50px' }} className="gradient-bg-big-left flex-col flex items-center justify-center">
                        <div className="m-7">
                            At the Opening Ceremony, contestants will have the opportunity to hear details about the competition rounds, exam structure, prizes and at the same time meet and interact with big brands. Therefore, don&apos;t miss these valuable and useful moments!                        </div>
                        <Button
                            onClick={() => {
                                window.open('https://www.facebook.com/marketing.challengers/posts/pfbid0iFFynV3kYLWr9UfrW8eJumNL4DAyYQ7itvVDMCasJafW846SyntLBtoTbHSw4iMBl', '_blank');
                            }}
                            isGlow={true}
                            type='primary'
                            className='animate-bounce-slow font-bold px-6 py-2 mb-2'
                            text={'See More'}
                            size='medium'
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 w-full bg-gray-300 flex flex-col items-center justify-start h-full">
                    <h4 className="font-bold text-headline-31 lg:text-headline-37 text-glow-strong mt-6">OPENING CEREMONY</h4>
                    <div style={{ borderRadius: '50px' }} className="gradient-bg text-[#ffffff] font-bold h-[50px] w-[150px] flex items-center justify-center my-1">
                        30/03/2024
                    </div>
                    <div className="my-3 flex space-x-2">
                        <div>
                            <Image src={OC1} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div className="px-2">
                            <Image src={OC2} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div>
                            <Image src={OC3} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                    </div>
                </div>

            </div>
            <div className="lg:flex mx-20 mt-16">
                <div className="lg:w-1/2 w-full bg-gray-300 flex flex-col items-center justify-start h-full">
                    <h4 className="font-bold text-headline-31 lg:text-headline-37 text-glow-strong mt-6"> WEBINAR 2</h4>
                    <div className="text-center text-[22px] my-1">How to find an insightful insight?</div>
                    <div style={{ borderRadius: '50px' }} className="gradient-bg text-[#ffffff] font-bold h-[50px] w-[150px] flex items-center justify-center my-1">
                        02/04/2024
                    </div>
                    <div className="my-3 flex space-x-2">
                        <div>
                            <Image src={W21} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div className="px-2">
                            <Image src={W22} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div>
                            <Image src={W23} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                    </div>
                </div>
                <div className="h-[250px] lg:w-1/2 w-full bg-blue-300 text-justify lg:mt-10 lg:mx-4 flex justify-end items-center">
                    <div style={{ borderRadius: '50px' }} className="gradient-bg-big-right flex-col flex items-center justify-center">
                        <div className="m-7">
                            Coming to Webinar 2, contestants will discover many different ways to find customer &quot;insight&quot;, learn how to avoid assumptions when searching and prepare more thoroughly for round 1 of the competition.
                        </div>
                        <Button
                            onClick={() => {
                                window.open('https://fb.watch/rptjReIt67/', '_blank');
                            }}
                            isGlow={true}
                            type='primary'
                            className='animate-bounce-slow font-bold px-6 py-2 mb-2'
                            text={'See More'}
                            size='medium'
                        />
                    </div>
                </div>
            </div>
            <div className="lg:flex mx-20 mt-16">
                <div className="h-[250px] lg:w-1/2 w-full bg-blue-300 text-justify lg:mt-10 lg:mx-4 flex justify-end items-center">
                    <div style={{ borderRadius: '50px' }} className="gradient-bg-big-left flex-col flex items-center justify-center">
                        <div className="m-7">
                            During the Workshop, the Top 30 will  hear useful sharing about how to implement a real Marketing campaign from an agency&apos;s perspective and practiced exercises to deepen their knowledge. Don&apos;t miss the opportunity to learn from these experts.                        </div>
                        <Button
                            onClick={() => {
                                window.open('https://www.facebook.com/marketing.challengers/posts/pfbid02LAzmqKpkTmmVdYViQFX2oxQWSDQjpjyEZvbPbUv8JXbpgQfYHbY1ivsuSHqMETFtl', '_blank');
                            }}
                            isGlow={true}
                            type='primary'
                            className='animate-bounce-slow font-bold px-6 py-2 mb-2'
                            text={'See More'}
                            size='medium'
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 w-full bg-gray-300 flex flex-col items-center justify-start h-full">
                    <h4 className="font-bold text-headline-31 lg:text-headline-37 text-glow-strong mt-6"> WORKSHOP</h4>
                    <div className="text-center text-[22px] my-1">Deep Dive Into Execution</div>
                    <div style={{ borderRadius: '50px' }} className="gradient-bg text-[#ffffff] font-bold h-[50px] w-[150px] flex items-center justify-center my-1">
                        02/04/2024
                    </div>
                    <div className="my-3 flex space-x-2">
                        <div>
                            <Image src={WS1} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div className="px-2">
                            <Image src={WS2} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                        <div>
                            <Image src={WS3} alt={`alt`} width={"100px"} height={"120px"} className="rounded-tl-[55px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[55px]"/>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default EventInfo;
