import Round1 from '../assets/1.png';
import Round21 from '../assets/21.png';
import Round22 from '../assets/22.png';
import Round3 from '../assets/3.png';
import WARMUP from '../assets/WARMUP.png';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import PageTitle from "../components/PageTitle";

const Timeline = () => {
    const [isVisible, setIsVisible] = useState(false);
    const paragraphRef = useRef(null);

    const handleClick = () => {
        setIsVisible(true); // Make the paragraph visible
    };

    useEffect(() => {
        if (isVisible) {
            // Scroll to the paragraph when it becomes visible
            paragraphRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isVisible]);

    const [buttonSize, setButtonSize] = useState('large');

    useEffect(() => {
        const updateButtonSize = () => {
            setButtonSize(window.innerWidth < 1024 ? 'small' : 'large');
        };

        window.addEventListener('resize', updateButtonSize);
        updateButtonSize(); // Initialize on component mount

        return () => {
            window.removeEventListener('resize', updateButtonSize);
        };
    }, []);


    const [dynamicHeight, setDynamicHeight] = useState('calc(1900px)');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) { // Assuming 'lg' is at 1024px
                setDynamicHeight('calc(1000px)'); // Smaller height for smaller screens
            } else {
                setDynamicHeight('calc(1900px)'); // Larger height for larger screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on component mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='lg:pt-[2700px] pt-[1000px] '>
            <PageTitle className='pb-10' title="TIMELINE"></PageTitle>

            <div className="flex justify-center items-center">
                {/* Page Title */}

                {/* Rest of the component */}
                <div className="absolute left-1/2 top-0 bottom-0 border-r border-gray-500 lg:top-[2800px] top-[1100px]" style={{
                    position: 'absolute',
                    left: '50%',
                    width: '8px',
                    background: 'linear-gradient(135deg, #ffde59, #ff914d)',
                    height: dynamicHeight,
                    transform: 'translateX(-50%)'
                }}>
                </div>
                <div className="w-full max-w-[calc(100vw-2px)]">
                    <table className="w-full table-auto mx-auto">
                        <colgroup>
                            <col style={{ width: '50%' }} />
                            <col style={{ width: '50%' }} />
                        </colgroup>
                        <tbody>
                            <tr className="w-1/2 h-[200px]">
                                <td className="png px-4 py-2 text-gray-600"></td>
                                <td className="png text-gray-600 flex flex-row ">
                                    <div className='lg:-ml-12 -ml-10'>
                                        <Image src={WARMUP} alt="description" width={320} height={500} />
                                    </div>
                                    <div className="flex flex-col items-start justify-center font-extrabold lg:text-[25px] text-[15px] text-center lg:text-left" style={{ flex: '1' }}>
                                        <p className=''>CERAVE&apos;S CHALLENGE</p>
                                        <div className="group self-start relative">
                                            <Button
                                                onClick={handleClick}
                                                isGlow={true}
                                                type='primary'
                                                className='animate-bounce-slow font-bold mt-4'
                                                text={'Details'}
                                                size={buttonSize}
                                            />
                                            <span className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5 w-96" style={{ right: '100%', top: '0', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }}>
                                                <ul className="space-y-1 list-disc text-left">
                                                    <li><span className="font-black text-[18px] text-glow-strong">Description:</span> <span className="font-light text-[18px]">In 72 hours, the contestants &apos; team of 3 members must come up with a general IMC Plan that brightens the marketing challenge addressed in the client brief provided by the company sponsoring this round.</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Duration:</span> <span className="font-light text-[18px]">8:00 pm 04/04/2024 - 8:00 pm 07/04/2024 (3 days)</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Format:</span> <span className="font-light text-[18px]">Online</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Attendance:</span> <span className="font-light text-[18px]">All teams successfully registered</span></li>
                                                </ul>
                                            </span>

                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 w-1/2 h-[200px]">
                                <td className="png text-gray-600 flex flex-row justify-end">
                                    <div className="flex flex-col items-center justify-center font-extrabold lg:text-[25px] text-[15px] w-1/2  text-center lg:text-left">
                                        <p className='ml-4 lg:ml-0'>72H RESEARCH AND IDEATION</p>
                                        <div className="group self-start relative">
                                            <Button
                                                onClick={handleClick}
                                                isGlow={true}
                                                type='primary'
                                                className='animate-bounce-slow font-bold mt-4'
                                                text={'Details'}
                                                size={buttonSize}
                                            />
                                            <span className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5" style={{ width: '525px', left: '100%', top: '0', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }}>
                                                <ul className="space-y-1 list-disc text-left">
                                                    <li><span className="font-black text-[18px] text-glow-strong">Description:</span> <span className="font-light text-[18px]">In 72 hours, the contestants &apos; team of 3 members must come up with a general IMC Plan that brightens the marketing challenge addressed in the client brief provided by the company sponsoring this round.</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Duration:</span> <span className="font-light text-[18px]">8:00 pm 04/04/2024 - 8:00 pm 07/04/2024 (3 days)</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Format:</span> <span className="font-light text-[18px]">Online</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Attendance:</span> <span className="font-light text-[18px]">All teams successfully registered</span></li>
                                                </ul>
                                            </span>


                                        </div>
                                    </div>
                                    <div className="">
                                        <Image src={Round1} alt="description" width={200} height={300} />
                                    </div>
                                </td>
                                <td className="png px-4 py-2 text-gray-600 "></td>
                            </tr>
                            <tr className="w-1/2 h-[200px]">
                                <td className="png px-4 py-2 text-gray-600"></td>
                                <td className="png text-gray-600 flex flex-row ">
                                    <div>
                                        <Image src={Round21} alt="description" width={180} height={320} />
                                    </div>
                                    <div className="flex flex-col items-start justify-center font-extrabold lg:text-[25px] text-[15px] text-center lg:text-left" style={{ flex: '1' }}>
                                        <p className='hidden lg:flex'>DEPLOYMENT PLAN</p>
                                        <p className='lg:hidden'>DEPLOY-MENT PLAN</p>
                                        <div className="group self-start relative">
                                            <Button
                                                onClick={handleClick}
                                                isGlow={true}
                                                type='primary'
                                                className='animate-bounce-slow font-bold mt-4'
                                                text={'Details'}
                                                size={buttonSize}
                                            />
                                            <span className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5 w-96" style={{ right: '100%', top: '0', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }}>
                                                <ul className="space-y-1 list-disc text-left">
                                                    <li><span className="font-black text-[18px] text-glow-strong">Description:</span> <span className="font-light text-[18px]">Top 30 will continue to develop an IMC plan using different marketing tools to communicate the brand message to the target audience. The case will be provided by the company sponsoring it. </span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Duration:</span> <span className="font-light text-[18px]">8:00 pm 13/04/2024 - 8:00 pm 19/04/2024 (5 days)</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Format:</span> <span className="font-light text-[18px]">Online</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Attendance:</span> <span className="font-light text-[18px]">Top 30 teams</span></li>
                                                </ul>
                                            </span>

                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 w-1/2 h-[200px]">
                                <td className="png text-gray-600 flex flex-row justify-end">
                                    <div className="flex flex-col items-center justify-center font-extrabold lg:text-[25px] text-[15px] w-1/2 text-center lg:text-left">
                                        <p className='ml-4 lg:ml-0'>SHOWCASE & PRIVATE PITCHING</p>
                                        <div className="group self-start relative">
                                            <Button
                                                onClick={handleClick}
                                                isGlow={true}
                                                type='primary'
                                                className='animate-bounce-slow font-bold mt-4'
                                                text={'Details'}
                                                size={buttonSize}
                                            />
                                            <span className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5 w-96" style={{ width: '650px', left: '100%', top: '0', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }}>
                                                <ul className="space-y-1 list-disc text-left">
                                                    <li>
                                                        <span className="font-black text-[18px] text-glow-strong">Description:</span> <span className="font-light text-[18px]">
                                                            <ul className="list-disc list-inside space-y-2 mt-2">
                                                                <li>Key content asset (26/04/2024 - 02/05/2024): Each team has to conduct a media product highlighting their plan&apos;s key message addressing the brand&apos;s marketing challenge. The product would be posted on the Marketing Challengers fan page for the “most popular” category; also considered one of the main criteria for finding the top 4 finalists.</li>
                                                                <li>Private Pitching (04/05/2024): This stage allows the top 8 teams to present their plan more precisely; presenting their media products and answering judges&apos; questions on the online platform.</li>
                                                            </ul>
                                                        </span>
                                                    </li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Format:</span> <span className="font-light text-[18px]">Offline at RMIT University</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Attendance:</span> <span className="font-light text-[18px]">Top 8 teams</span></li>
                                                </ul>
                                            </span>

                                        </div>
                                    </div>
                                    <div>
                                        <Image src={Round22} alt="description" width={220} height={380} />
                                    </div>
                                </td>
                                <td className="png px-4 py-2 text-gray-600 "></td>
                            </tr>
                            <tr className="w-1/2 h-[200px]">
                                <td className="png px-4 py-2 text-gray-600"></td>
                                <td className="png text-gray-600 flex flex-row ">
                                    <div>
                                        <Image src={Round3} alt="description" width={180} height={320} />
                                    </div>
                                    <div className="flex flex-col items-start justify-center font-extrabold lg:text-[25px] text-[15px] text-center lg:text-left" style={{ flex: '1' }}>
                                        <p className=''>GRAND FINALE</p>
                                        <div className="group self-start relative">
                                            <Button
                                                onClick={handleClick}
                                                isGlow={true}
                                                type='primary'
                                                className='animate-bounce-slow font-bold mt-4'
                                                text={'Details'}
                                                size={buttonSize}
                                            />
                                            <span className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5 w-96" style={{ right: '100%', top: '0', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }}>
                                                <ul className="space-y-1 list-disc text-left">
                                                    <li><span className="font-black text-[18px] text-glow-strong">Description:</span> <span className="font-light text-[18px]">The top 4 teams will respectively present their IMC plan to Round 2’s case study. Then, the top 2 will be decided by round judges and come to the mini case study round. Final results announcement and reward session are conducted.</span></li>
                                                    <li><span className="font-black text-[18px] text-glow-strong">Date and Time:</span> <span className="font-light text-[18px]">1:30 pm - 6:00 pm 19/05/2024</span></li>
                                                </ul>
                                            </span>

                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
