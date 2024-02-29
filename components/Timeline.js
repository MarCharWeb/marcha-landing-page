import Round1 from '../assets/1.png';
import Round21 from '../assets/21.png';
import Round22 from '../assets/22.png';
import Round3 from '../assets/3.png';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '../components/Button';


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

    return (<div className="flex justify-center items-center pt-[2700px]">
        <div className="absolute left-1/2 top-0 bottom-0 border-r border-gray-500" style={{
            position: 'absolute',
            left: '50%',
            width: '8px', // Width of the line
            background: 'linear-gradient(135deg, #ffde59, #ff914d)', // Adjust the color and thickness of the line here
            top: '2650px',
            height: `calc(1450px)`,
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
                    <tr className="bg-gray-100 w-1/2 h-[200px]">
                        <td className="png text-gray-600 flex flex-row">
                            <div className="flex flex-col items-center justify-center font-extrabold text-[25px] pl-10">
                                <p>
                                    72H RESEARCH AND IDEATION
                                </p>
                                <div className="self-start">
                                    <Button
                                        onClick={handleClick}
                                        isGlow={true}
                                        type='primary'
                                        className='animate-bounce-slow font-bold mt-4'
                                        text={'Details'}
                                        size='large'
                                    />
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
                        <td className="png text-gray-600 flex flex-row pr-20 ">
                            <div>
                                <Image src={Round21} alt="description" width={180} height={320} />
                            </div>
                            <div className="flex flex-col items-center justify-center font-extrabold text-[25px]">
                                <p>
                                    DEPLOYMENT PLAN
                                </p>
                                <div className="self-end">
                                    <Button
                                        onClick={handleClick}
                                        isGlow={true}
                                        type='primary'
                                        className='animate-bounce-slow font-bold mt-4'
                                        text={'Details'}
                                        size='large'
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray-100 w-1/2 h-[200px]">
                        <td className="png text-gray-600 flex flex-row ">
                            <div className="flex flex-col items-center justify-center font-extrabold text-[25px] pl-10">
                                <p>
                                    SHOWCASE & PRIVATE PITCHING
                                </p>
                                <div className="self-start">
                                    <Button
                                        onClick={handleClick}
                                        isGlow={true}
                                        type='primary'
                                        className='animate-bounce-slow font-bold mt-4'
                                        text={'Details'}
                                        size='large'
                                    />
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
                        <td className="png text-gray-600 flex flex-row pr-52 ">
                            <div>
                                <Image src={Round3} alt="description" width={180} height={320} />
                            </div>
                            <div className="flex flex-col items-center justify-center font-extrabold text-[25px]">
                                <p>
                                    GRAND FINALE
                                </p>
                                <div className="self-end">
                                    <Button
                                        onClick={handleClick}
                                        isGlow={true}
                                        type='primary'
                                        className='animate-bounce-slow font-bold mt-4'
                                        text={'Details'}
                                        size='large'
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    );
}

export default Timeline;
