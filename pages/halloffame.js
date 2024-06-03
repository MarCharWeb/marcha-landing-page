import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import newbg from "../assets/newbg.png"
import Footer from "../components/Footer";
import Button from '../components/Button'

const HallOfFame = () => {
    const [visibleSection, setVisibleSection] = useState('ss12');

    return (
        <main className="space-y-1 bg-fixed" style={{
            backgroundImage: `url(${newbg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '0% 0%',
            zIndex: 2,
        }}>
            <PageTitle className="pt-20 pb-6" title={"HALL OF FAME"}></PageTitle>

            <div className="flex justify-center space-x-4">
                <div
                    onClick={() => setVisibleSection('ss11')}
                    className={
                        "px-4 py-2 font-bold rounded cursor-pointer w-fit text-headline-21 md:text-lead-24 " +
                        (visibleSection === 'ss11' ? 'bg-secondary-600' : 'border border-secondary-600')
                    }
                >
                    SEASON 11
                </div>
                <div
                    onClick={() => setVisibleSection('ss12')}
                    className={
                        "px-4 py-2 font-bold rounded cursor-pointer w-fit text-headline-21 md:text-lead-24 " +
                        (visibleSection === 'ss12' ? 'bg-secondary-600' : 'border border-secondary-600')
                    }
                >
                    SEASON 12
                </div>
            </div>
            {visibleSection === 'ss12' && (
                <section className='pb-10' >
                    <div id="ss12">
                        <h1 className="ml-8 text-[30px] lg:text-headline-30 2xl:text-hero-60 text-left font-extrabold">TOP 4</h1>
                        <div className="mx-8 pb-10">
                            <div className="h-[2px] w-full bg-[#ffffff] "></div>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">CHAMPION</h2>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">TORUKI</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Do Viet Kien - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Quoc Hung - IU
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Thi Thao Hien - IU
                                </p>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">1ST RUNNER-UP</h2>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">DON PHUONG 3 THANG</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Cao Nguyen Nhat Hao - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Diep Phuong Lan - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Le Tran Nhat Tan - FTU 2
                                </p>
                            </div>
                            <h2 className="hidden md:flex text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">CO 2ND RUNNER-UP</h2>
                            <div className="hidden md:flex flex-row">
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">22H</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Luu Anh Phuong - RMIT SGS
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Ho Minh Thu - RMIT SGS
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Pham Tran Thu Ngan - RMIT SGS
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">GIA TRUONG</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Nguyen Viet Truong Son - APD
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Huong Giang - NEU
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Le Minh Ngoc - NEU
                                    </p>
                                </div>
                            </div>
                            <div className="flex md:hidden flex-col">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">2ND RUNNER-UP</h2>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">22H</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Luu Anh Phuong - RMIT SGS
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Ho Minh Thu - RMIT SGS
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Pham Tran Thu Ngan - RMIT SGS
                                    </p>
                                </div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">2ND RUNNER-UP</h2>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">GIA TRUONG</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Nguyen Viet Truong Son - APD
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Huong Giang - NEU
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Le Minh Ngoc - NEU
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h1 className="ml-8 text-[30px] lg:text-headline-30 2xl:text-hero-60 text-left font-extrabold">TOP 8</h1>
                        <div className="mx-8 pb-10">
                            <div className="h-[2px] w-full bg-[#ffffff] "></div>
                        </div>
                        <div className="flex md:hidden flex-col items-center justify-center text-center">
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE MAGIC</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Vu Thi Khanh Dieu - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Vu Quynh Anh - FTU 1
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Gia Nhat Truong - UEH
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BAC TRUNG NAM</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Lam Thien Khanh - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Ngoc Tu My - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Phan Hien - RMIT HN
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">3 CO GAI</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Ta Phuong Lam - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Thach Thi Truc Thuong - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Le Thi Thu Hieu - UFM
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">HGK</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Cao Dinh Trung Hieu - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Tran Diep Thien Kim - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Bui Quynh Giao - FTU 2
                                </p>
                            </div>
                        </div>
                        <div className="md:block hidden flex flex-col items-center justify-center text-center">
                            <div className="hidden md:flex flex-row items-center justify-center text-center">
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE MAGIC</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Vu Thi Khanh Dieu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Vu Quynh Anh - FTU 1
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Gia Nhat Truong - UEH
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BAC TRUNG NAM</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Lam Thien Khanh - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Ngoc Tu My - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Phan Hien - RMIT HN
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:block hidden flex flex-col items-center justify-center text-center">
                            <div className="hidden md:flex flex-row items-center justify-center text-center">
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">3 CO GAI</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Ta Phuong Lam - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Thach Thi Truc Thuong - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Le Thi Thu Hieu - UFM
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">HGK</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Cao Dinh Trung Hieu - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Tran Diep Thien Kim - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Bui Quynh Giao - FTU 2
                                    </p>
                                </div>
                            </div>
                        </div>
                        <PageTitle className="pt-16" title={"CERAVE'S CHALLENGE"}></PageTitle>
                        <h1 className="ml-8 text-[30px] lg:text-headline-30 2xl:text-hero-60 text-left font-extrabold">TOP 5</h1>
                        <div className="mx-8 pb-10">
                            <div className="h-[2px] w-full bg-[#ffffff] "></div>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">WINNER</h2>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">EZ</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Hoang Thi Ngoc Anh
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Tran To Hien
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:flex flex-row">
                                <div className="hidden md:flex flex-row items-center justify-center text-center">
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE BARRIERS WARRIORS</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Le Vy An
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Tran Thi Tuyet Minh
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">ANASTASIA</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Nguyen Ngoc Thuy Quynh
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Tran Thi Nhu Quynh
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Le Nguyen Bao Thi
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:hidden flex-col">
                                <div className="flex-col items-center justify-center text-center">
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE BARRIERS WARRIORS</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Le Vy An
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Tran Thi Tuyet Minh
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">ANASTASIA</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Nguyen Ngoc Thuy Quynh
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Tran Thi Nhu Quynh
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Le Nguyen Bao Thi
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex flex-row">
                                <div className="flex flex-row items-center justify-center text-center">
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-6 mr-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">RAINBOW DASH</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Pham Tran Bao Tran
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Phuc Bao Tran
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Lai Do Quan
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-6 ml-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">MVE</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Phan Thanh Thuy
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Bao Gia An
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Le Ngoc Bao An
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:hidden flex-col">
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">RAINBOW DASH</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Pham Tran Bao Tran
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Phuc Bao Tran
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Lai Do Quan
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">MVE</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Phan Thanh Thuy
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Bao Gia An
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Le Ngoc Bao An
                                    </p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className="ml-8 text-[30px] lg:text-headline-30 2xl:text-hero-60 text-left font-extrabold">TOP 8</h1>
                                <div className="mx-8 pb-10">
                                    <div className="h-[2px] w-full bg-[#ffffff] "></div>
                                </div>
                            </div>
                            <div className="flex md:hidden flex-col">
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">GIA TRUONG
                                    </h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Nguyen Viet Truong Son - APD
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Huong Giang - NEU
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Le Minh Ngoc - NEU
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">TORUKI</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Do Viet Kien - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Quoc Hung - IU
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Thi Thao Hien - IU
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">DON PHUONG 3 THANG</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Cao Nguyen Nhat Hao - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Diep Phuong Lan - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Le Tran Nhat Tan - FTU 2
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE MAGIC</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Vu Thi Khanh Dieu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Vu Quynh Anh - FTU 1
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Gia Nhat Truong - UEH
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BAC TRUNG NAM</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Lam Thien Khanh - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Ngoc Tu My - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Phan Hien - RMIT HN
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">22H</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Luu Anh Phuong - RMIT SGS
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Ho Minh Thu - RMIT SGS
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Pham Tran Thu Ngan - RMIT SGS
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">3 CO GAI</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Ta Phuong Lam - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Thach Thi Truc Thuong - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Le Thi Thu Hieu - UFM
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">HGK</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Cao Dinh Trung Hieu - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Tran Diep Thien Kim - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Bui Quynh Giao - FTU 2
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:block flex flex-col">
                                <div className="hidden md:flex flex-row items-center justify-center text-center">

                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">GIA TRUONG
                                        </h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Nguyen Viet Truong Son - APD
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Huong Giang - NEU
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Le Minh Ngoc - NEU
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">TORUKI</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Do Viet Kien - FTU 2
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Quoc Hung - IU
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Thi Thao Hien - IU
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-row items-center justify-center text-center">

                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">DON PHUONG 3 THANG</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Cao Nguyen Nhat Hao - FTU 2
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Diep Phuong Lan - FTU 2
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Le Tran Nhat Tan - FTU 2
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE MAGIC</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Vu Thi Khanh Dieu - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Vu Quynh Anh - FTU 1
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Gia Nhat Truong - UEH
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-row items-center justify-center text-center">

                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BAC TRUNG NAM</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Lam Thien Khanh - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Ngoc Tu My - FTU 2
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Phan Hien - RMIT HN
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">22H</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Luu Anh Phuong - RMIT SGS
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Ho Minh Thu - RMIT SGS
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Pham Tran Thu Ngan - RMIT SGS
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-row items-center justify-center text-center">

                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">3 CO GAI</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Ta Phuong Lam - FTU 2
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Thach Thi Truc Thuong - FTU 2
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Le Thi Thu Hieu - UFM
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">HGK</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Cao Dinh Trung Hieu - FTU 2
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Tran Diep Thien Kim - FTU 2
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Bui Quynh Giao - FTU 2
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {visibleSection === 'ss11' && (
                <section className='pb-10' >
                    <div id="ss11">
                        <h1 className="ml-8 text-[30px] lg:text-headline-30 2xl:text-hero-60 text-left font-extrabold">TOP 4</h1>
                        <div className="mx-8 pb-10">
                            <div className="h-[2px] w-full bg-[#ffffff] "></div>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">CHAMPION</h2>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">LAD</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Duong Lam Tuan Anh - FTU 1
                                </p>
                                <p className="text-white text-[18px]">
                                    Bui Khanh Linh - FTU 1
                                </p>
                                <p className="text-white text-[18px]">
                                    Do Tri Dung - FTU 1
                                </p>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">1ST RUNNER-UP</h2>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">HYPE JEANS</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Tran Thanh Ky - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Trai Thi My Xuyen - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Hoan Vu - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Bui Mai Ny - FTU 2
                                </p>
                            </div>
                            <h2 className="hidden md:flex text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">CO 2ND RUNNER-UP</h2>
                            <div className="hidden md:flex flex-row">
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">SAM PANH</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Le Nha Uyen -FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Phan Tran Khanh Vy - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Le Thi Xuan Mai - FTU 2
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">NESTOP MODELS</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Nguyen Hien Dieu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Truong Nguyen Minh Duy - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Hoang Vu Minh Thu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Ngoc Tuong Vy - UEH
                                    </p>
                                </div>
                            </div>
                            <div className="flex md:hidden flex-col">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">2ND RUNNER-UP</h2>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">SAM PANH</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Le Nha Uyen -FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Phan Tran Khanh Vy - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Le Thi Xuan Mai - FTU 2
                                    </p>
                                </div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">2ND RUNNER-UP</h2>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">NESTOP MODELS</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Nguyen Hien Dieu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Truong Nguyen Minh Duy - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Hoang Vu Minh Thu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Ngoc Tuong Vy - UEH
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h1 className="ml-8 text-[30px] lg:text-headline-30 2xl:text-hero-60 text-left font-extrabold">TOP 16</h1>
                        <div className="mx-8 pb-10">
                            <div className="h-[2px] w-full bg-[#ffffff] "></div>
                        </div>
                        <div className="flex md:hidden flex-col items-center justify-center text-center">
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BA BICH</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Nguyen Hien Dieu - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Truong Nguyen Minh Duy - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Hoang Vu Minh Thu - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Ngoc Tuong Vy - UEH
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BING CHILLING</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Bo Bao Han - FTU 2
                                </p>
                                <p className="text-white text-[18px]">
                                    Vo Quynh Lam - WSU
                                </p>
                                <p className="text-white text-[18px]">
                                    Lam Truc Thao - Swinburne
                                </p>
                                <p className="text-white text-[18px]">
                                    Tran Huyen Tran - UEH
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BIRDS</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Le Minh Thinh - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Hoang Minh Tam - FPTU
                                </p>
                                <p className="text-white text-[18px]">
                                    Do Huynh Anh Thu - FPTU
                                </p>
                                <p className="text-white text-[18px]">
                                    Pham Ngoc Quynh Thu - FPTU
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BLACKAPPA</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Nguyen Hien Dieu - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Truong Nguyen Minh Duy - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Hoang Vu Minh Thu - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Ngoc Tuong Vy - UEH
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">NET DUNG HOI</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    La Hoang Quan - NEU
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Linh - VNU-IS
                                </p>
                                <p className="text-white text-[18px]">
                                    Pham Thi Thu Phuong - FTU 1
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Thi Thuy Hang - NEU
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">TEMPORARY</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Le Tran Tien Dung - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Vo Thi Thanh Mai - RMIT
                                </p>
                                <p className="text-white text-[18px]">
                                    Dang Nguyen Ba Hung - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Dinh Le Uyen Phuong - WSU
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE CEASERS</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Nguyen Khanh Linh - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Ngoc Thao Ngan - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Vu Công Hoang - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Thi Thu Trang - UEH
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE NYNN</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Dao Huynh Bao Ngoc - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Vo Nhu y - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Thi My Ngoc - UEH
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Kieu Thao Ngan - ISB
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">ZPIONEER</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Do Minh Ngoc - FTU 1
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Y Nhi - FTU 1
                                </p>
                                <p className="text-white text-[18px]">
                                    Vu Minh Hanh - BUV
                                </p>
                                <p className="text-white text-[18px]">
                                    Vu Hong Nhung - NEU
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">SWEETIE SEEKERS</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Le Tieu Linh - FTU
                                </p>
                                <p className="text-white text-[18px]">
                                    Luong Thi Phuong Hoa - FTU
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Bich Hue - FTU
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">WINUN</h2>
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <p className="text-white text-[18px]">
                                    Bui Thu Uyen - FTU
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Vo Quynh Nhu - FTU
                                </p>
                                <p className="text-white text-[18px]">
                                    Nguyen Le Yen Nhi - FTU
                                </p>
                            </div>
                        </div>
                        <div className="md:block hidden flex flex-col items-center justify-center text-center">
                            <div className="hidden md:flex flex-row items-center justify-center text-center">
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BA BICH</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Nguyen Hien Dieu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Truong Nguyen Minh Duy - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Hoang Vu Minh Thu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Ngoc Tuong Vy - UEH
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BING CHILLING</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Bo Bao Han - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Vo Quynh Lam - WSU
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Lam Truc Thao - Swinburne
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Tran Huyen Tran - UEH
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:block hidden flex flex-col items-center justify-center text-center">
                            <div className="hidden md:flex flex-row items-center justify-center text-center">
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BIRDS</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Le Minh Thinh - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Hoang Minh Tam - FPTU
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Do Huynh Anh Thu - FPTU
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Pham Ngoc Quynh Thu - FPTU
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">BLACKAPPA</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Nguyen Hien Dieu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Truong Nguyen Minh Duy - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Hoang Vu Minh Thu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Ngoc Tuong Vy - UEH
                                    </p>
                                </div>
                            </div>
                            <div className="md:block hidden flex flex-col items-center justify-center text-center">
                                <div className="hidden md:flex flex-row items-center justify-center text-center">
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">NET DUNG HOI</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            La Hoang Quan - NEU
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Linh - VNU-IS
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Pham Thi Thu Phuong - FTU 1
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Thi Thuy Hang - NEU
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">TEMPORARY</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Le Tran Tien Dung - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Vo Thi Thanh Mai - RMIT
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Dang Nguyen Ba Hung - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Dinh Le Uyen Phuong - WSU
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:block hidden flex flex-col items-center justify-center text-center">
                                <div className="hidden md:flex flex-row items-center justify-center text-center">
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE CEASARS</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Nguyen Khanh Linh - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Ngoc Thao Ngan - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Vu Công Hoang - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Thi Thu Trang - UEH
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">THE NYNN</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Dao Huynh Bao Ngoc - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Vo Nhu y - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Thi My Ngoc - UEH
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Kieu Thao Ngan - ISB
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:block hidden flex flex-col items-center justify-center text-center">
                                <div className="hidden md:flex flex-row items-center justify-center text-center">
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 mr-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">ZPIONEER</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">Do Minh Ngoc - FTU 1</p>
                                        <p className="text-white text-[18px]">Nguyen Y Nhi - FTU 1</p>
                                        <p className="text-white text-[18px]">Vu Minh Hanh - BUV</p>
                                        <p className="text-white text-[18px]">Vu Hong Nhung - NEU</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10 ml-6">
                                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">SWEETIE SEEKERS</h2>
                                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                        <p className="text-white text-[18px]">
                                            Le Tieu Linh - FTU
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Luong Thi Phuong Hoa - FTU
                                        </p>
                                        <p className="text-white text-[18px]">
                                            Nguyen Bich Hue - FTU
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center w-full">
                                <div className="flex flex-col justify-center items-center text-center relative rounded-lg h-[200px] w-[340px] bg-transparent border-2 border-yellow-500 mb-10">
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px] text-[#ffda19]">WINUN</h2>
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <p className="text-white text-[18px]">
                                        Bui Thu Uyen - FTU
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Vo Quynh Nhu - FTU
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Le Yen Nhi - FTU
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <Footer></Footer>
        </main>
    );
};

export default HallOfFame;
