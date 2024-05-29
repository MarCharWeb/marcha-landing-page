import PageTitle from "../components/PageTitle";
import newbg from "../assets/newbg.png"
import Footer from "../components/Footer";
const halloffame = () => {
    return (
        <main className="space-y-1 -mt-8 bg-fixed" style={{
            backgroundImage: `url(${newbg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '0% 0%',
            zIndex: 2,
        }}>
            <section className='pt-28 pb-10' >

                <PageTitle className="pb-6" title={"HALL OF FAME"}></PageTitle>
                <div className="flex flex-col items-center justify-center text-center">
                    <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">CHAMPION</h2>
                        <p className="text-white text-[18px]">
                            Do Viet Kien - FTU 2
                        </p>
                        <p className="text-white text-[18px]">
                            Nguyen Quoc Hung - IU
                        </p>
                        <p className="text-white text-[18px] mb-2">
                            Nguyen Thi Thao Hien - IU
                        </p>
                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">TORUKI</h2>
                    </div>
                    <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mt-6">
                        <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">1ST RUNNER-UP</h2>
                        <p className="text-white text-[18px]">
                            Cao Nguyen Nhat Hao - FTU 2
                        </p>
                        <p className="text-white text-[16px]">
                            Nguyen Diep Phuong Lan - FTU 2
                        </p>
                        <p className="text-white text-[18px] mb-2">
                            Le Tran Nhat Tan - FTU 2
                        </p>
                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">DON PHUONG 3 THANG</h2>
                    </div>
                    <div className="hidden md:flex flex-row mt-6">
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mr-3">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">2ND RUNNER-UP</h2>
                            <p className="text-white text-[18px]">
                                Luu Anh Phuong - RMIT SGS
                            </p>
                            <p className="text-white text-[18px]">
                                Ho Minh Thu - RMIT SGS
                            </p>
                            <p className="text-white text-[16px] mb-2">
                                Pham Tran Thu Ngan - RMIT SGS
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">22H</h2>
                        </div>
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 ml-3">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">2ND RUNNER-UP</h2>
                            <p className="text-white text-[17px]">
                                Nguyen Viet Truong Son - APD
                            </p>
                            <p className="text-white text-[18px]">
                                Nguyen Huong Giang - NEU
                            </p>
                            <p className="text-white text-[18px] mb-2">
                                Le Minh Ngoc - NEU
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">GIA TRUONG</h2>
                        </div>
                    </div>
                    <div className="flex md:hidden flex-col mt-6">
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">2ND RUNNER-UP</h2>
                            <p className="text-white text-[18px]">
                                Luu Anh Phuong - RMIT SGS
                            </p>
                            <p className="text-white text-[18px]">
                                Ho Minh Thu - RMIT SGS
                            </p>
                            <p className="text-white text-[16px] mb-2">
                                Pham Tran Thu Ngan - RMIT SGS
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">22H</h2>
                        </div>
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mt-6">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">2ND RUNNER-UP</h2>
                            <p className="text-white text-[17px]">
                                Nguyen Viet Truong Son - APD
                            </p>
                            <p className="text-white text-[18px]">
                                Nguyen Huong Giang - NEU
                            </p>
                            <p className="text-white text-[18px] mb-2">
                                Le Minh Ngoc - NEU
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">GIA TRUONG</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <PageTitle className="pt-16 pb-6" title={"CERAVE'S CHALLENGE"}></PageTitle>
                    {/* <p className='font-extrabold lg:text-[27px] text-[25px] my-4'>CERAVE&#39;S CHALLENGE</p> */}
                    <div>
                        <div className="text-center p-8 relative rounded-lg h-[222px] w-[300px] bg-transparent border-2 border-yellow-500">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">WINNER</h2>
                            <p className="text-white text-[20px]">
                                Hoang Thi Ngoc Anh
                            </p>
                            <p className="text-white text-[20px] mb-2">
                                Tran To Hien
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">EZ</h2>

                        </div>
                    </div>
                    <div className="hidden md:flex flex-row mt-6">
                        <div className="mr-6">
                            <div className=" text-center p-8 relative rounded-lg h-[240px] w-[326px] bg-transparent border-2 border-yellow-500">
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                                <p className="text-white text-[20px]">
                                    Le Vy An
                                </p>
                                <p className="text-white text-[20px] mb-2">
                                    Tran Thi Tuyet Minh
                                </p>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">THE BARRIERS <br></br>WARRIORS</h2>

                            </div>

                        </div>
                        <div className="ml-6">
                            <div className=" text-center p-8 relative rounded-lg h-[240px] w-[326px] bg-transparent border-2 border-yellow-500">
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                                <p className="text-white text-[19px]">
                                    Nguyen Ngoc Thuy Quynh
                                </p>
                                <p className="text-white text-[20px]">
                                    Tran Thi Nhu Quynh
                                </p>
                                <p className="text-white text-[20px] mb-2">
                                    Le Nguyen Bao Thi
                                </p>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">ANASTASIA</h2>

                            </div>

                        </div>
                    </div>
                    <div className="flex md:hidden flex-col mt-6">
                        <div className="">
                            <div className=" text-center p-8 relative rounded-lg h-[240px] w-[326px] bg-transparent border-2 border-yellow-500">
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                                <p className="text-white text-[20px]">
                                    Le Vy An
                                </p>
                                <p className="text-white text-[20px] mb-2">
                                    Tran Thi Tuyet Minh
                                </p>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">THE BARRIERS <br></br>WARRIORS</h2>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className=" text-center p-8 relative rounded-lg h-[240px] w-[326px] bg-transparent border-2 border-yellow-500">
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                                <p className="text-white text-[19px]">
                                    Nguyen Ngoc Thuy Quynh
                                </p>
                                <p className="text-white text-[20px]">
                                    Tran Thi Nhu Quynh
                                </p>
                                <p className="text-white text-[20px] mb-2">
                                    Le Nguyen Bao Thi
                                </p>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">ANASTASIA</h2>

                            </div>

                        </div>
                    </div>
                    <div className="hidden md:flex flex-row mt-6">
                        <div className="mr-6">
                            <div className=" text-center p-8 relative rounded-lg h-[240px] w-[326px] bg-transparent border-2 border-yellow-500">
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                                <p className="text-white text-[20px]">
                                    Pham Tran Bao Tran
                                </p>
                                <p className="text-white text-[20px]">
                                    Nguyen Phuc Bao Tran
                                </p>
                                <p className="text-white text-[20px] mb-2">
                                    Lai Do Quan
                                </p>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">RAINBOW DASH</h2>

                            </div>

                        </div>
                        <div className="ml-6">
                            <div className=" text-center p-8 relative rounded-lg h-[240px] w-[326px] bg-transparent border-2 border-yellow-500">
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                                <p className="text-white text-[20px]">
                                    Phan Thanh Thuy
                                </p>
                                <p className="text-white text-[20px]">
                                    Nguyen Bao Gia An
                                </p>
                                <p className="text-white text-[20px] mb-2">
                                    Le Ngoc Bao An
                                </p>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">MVE</h2>

                            </div>

                        </div>
                    </div>
                    <div className="flex md:hidden flex-col mt-6">
                        <div className="">
                            <div className=" text-center p-8 relative rounded-lg h-[240px] w-[326px] bg-transparent border-2 border-yellow-500">
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                                <p className="text-white text-[20px]">
                                    Pham Tran Bao Tran
                                </p>
                                <p className="text-white text-[20px]">
                                    Nguyen Phuc Bao Tran
                                </p>
                                <p className="text-white text-[20px] mb-2">
                                    Lai Do Quan
                                </p>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">RAINBOW DASH</h2>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className=" text-center p-8 relative rounded-lg h-[240px] w-[326px] bg-transparent border-2 border-yellow-500">
                                <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                                <p className="text-white text-[20px]">
                                    Phan Thanh Thuy
                                </p>
                                <p className="text-white text-[20px]">
                                    Nguyen Bao Gia An
                                </p>
                                <p className="text-white text-[20px] mb-2">
                                    Le Ngoc Bao An
                                </p>
                                <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">MVE</h2>
                            </div>
                        </div>
                    </div>
                    <p className='font-extrabold lg:text-[27px] text-[25px] mt-10'>TOP 8 OFFICAL</p>
                    <div className="hidden xl:flex flex-row">
                        <div className="flex flex-row mt-6">
                            <div className="">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[17px]">
                                        Nguyen Viet Truong Son - APD
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Huong Giang - NEU
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Le Minh Ngoc - NEU
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">GIA TRUONG</h2>
                                </div>

                            </div>
                            <div className="ml-6 mr-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Do Viet Kien - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Quoc Hung - IU
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Nguyen Thi Thao Hien - IU
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">TORUKI</h2>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row mt-6">
                            <div className="ml-3 mr-6">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Cao Nguyen Nhat Hao - FTU 2
                                    </p>
                                    <p className="text-white text-[16px]">
                                        Nguyen Diep Phuong Lan - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Le Tran Nhat Tan - FTU 2
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">DON PHUONG 3 THANG</h2>
                                </div>

                            </div>
                            <div className="">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Vu Thi Khanh Dieu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Vu Quynh Anh - FTU 1
                                    </p>
                                    <p className="text-white text-[17px] mb-2">
                                        Nguyen Gia Nhat Truong - UEH
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">THE MAGIC</h2>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex xl:hidden flex-col">
                        <div className="flex flex-row mt-6">
                            <div className="mr-6">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[17px]">
                                        Nguyen Viet Truong Son - APD
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Huong Giang - NEU
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Le Minh Ngoc - NEU
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">GIA TRUONG</h2>
                                </div>

                            </div>
                            <div className="">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Do Viet Kien - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Quoc Hung - IU
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Nguyen Thi Thao Hien - IU
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">TORUKI</h2>
                                </div>

                            </div>
                            <div className="ml-6">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Cao Nguyen Nhat Hao - FTU 2
                                    </p>
                                    <p className="text-white text-[16px]">
                                        Nguyen Diep Phuong Lan - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Le Tran Nhat Tan - FTU 2
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">DON PHUONG 3 THANG</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mt-6">
                            <div className="mr-6">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Vu Thi Khanh Dieu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Vu Quynh Anh - FTU 1
                                    </p>
                                    <p className="text-white text-[17px] mb-2">
                                        Nguyen Gia Nhat Truong - UEH
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">THE MAGIC</h2>
                                </div>
                            </div>
                            <div className="">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Lam Thien Khanh - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Ngoc Tu My - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Nguyen Phan Hien - RMIT HN
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">BAC TRUNG NAM</h2>
                                </div>
                            </div>
                            <div className="ml-6">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Luu Anh Phuong - RMIT SGS
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Ho Minh Thu - RMIT SGS
                                    </p>
                                    <p className="text-white text-[16px] mb-2">
                                        Pham Tran Thu Ngan - RMIT SGS
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">22H</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mt-6 w-full items-center justify-center">
                            <div className="mr-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Ta Phuong Lam - FTU 2
                                    </p>
                                    <p className="text-white text-[16px]">
                                        Thach Thi Truc Thuong - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Le Thi Thu Hieu - UFM
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">3 CO GAI</h2>
                                </div>

                            </div>
                            <div className="ml-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Cao Dinh Trung Hieu - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Tran Diep Thien Kim - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Bui Quynh Giao - FTU 2
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">HGK</h2>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex lg:hidden flex-col">
                        <div className="flex flex-row mt-6">
                            <div className="mr-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[17px]">
                                        Nguyen Viet Truong Son - APD
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Huong Giang - NEU
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Le Minh Ngoc - NEU
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">GIA TRUONG</h2>
                                </div>

                            </div>
                            <div className="ml-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Do Viet Kien - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Quoc Hung - IU
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Nguyen Thi Thao Hien - IU
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">TORUKI</h2>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row mt-6">
                            <div className="mr-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Cao Nguyen Nhat Hao - FTU 2
                                    </p>
                                    <p className="text-white text-[16px]">
                                        Nguyen Diep Phuong Lan - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Le Tran Nhat Tan - FTU 2
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">DON PHUONG 3 THANG</h2>
                                </div>

                            </div>
                            <div className="ml-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Vu Thi Khanh Dieu - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Vu Quynh Anh - FTU 1
                                    </p>
                                    <p className="text-white text-[17px] mb-2">
                                        Nguyen Gia Nhat Truong - UEH
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">THE MAGIC</h2>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden flex-col">
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                            <p className="text-white text-[17px]">
                                Nguyen Viet Truong Son - APD
                            </p>
                            <p className="text-white text-[18px]">
                                Nguyen Huong Giang - NEU
                            </p>
                            <p className="text-white text-[18px] mb-2">
                                Le Minh Ngoc - NEU
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">GIA TRUONG</h2>
                        </div>
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mt-6">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                            <p className="text-white text-[18px]">
                                Do Viet Kien - FTU 2
                            </p>
                            <p className="text-white text-[18px]">
                                Nguyen Quoc Hung - IU
                            </p>
                            <p className="text-white text-[18px] mb-2">
                                Nguyen Thi Thao Hien - IU
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">TORUKI</h2>
                        </div>
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mt-6">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                            <p className="text-white text-[18px]">
                                Cao Nguyen Nhat Hao - FTU 2
                            </p>
                            <p className="text-white text-[16px]">
                                Nguyen Diep Phuong Lan - FTU 2
                            </p>
                            <p className="text-white text-[18px] mb-2">
                                Le Tran Nhat Tan - FTU 2
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">DON PHUONG 3 THANG</h2>
                        </div>
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mt-6">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                            <p className="text-white text-[18px]">
                                Vu Thi Khanh Dieu - UEH
                            </p>
                            <p className="text-white text-[18px]">
                                Nguyen Vu Quynh Anh - FTU 1
                            </p>
                            <p className="text-white text-[17px] mb-2">
                                Nguyen Gia Nhat Truong - UEH
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">THE MAGIC</h2>
                        </div>
                    </div>
                    <div className="hidden xl:flex flex-row">
                        <div className="flex flex-row mt-6">
                            <div className="">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Lam Thien Khanh - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Ngoc Tu My - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Nguyen Phan Hien - RMIT HN
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">BAC TRUNG NAM</h2>
                                </div>

                            </div>
                            <div className="ml-6 mr-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Luu Anh Phuong - RMIT SGS
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Ho Minh Thu - RMIT SGS
                                    </p>
                                    <p className="text-white text-[16px] mb-2">
                                        Pham Tran Thu Ngan - RMIT SGS
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">22H</h2>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row mt-6">
                            <div className="ml-3 mr-6">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Ta Phuong Lam - FTU 2
                                    </p>
                                    <p className="text-white text-[16px]">
                                        Thach Thi Truc Thuong - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Le Thi Thu Hieu - UFM
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">3 CO GAI</h2>
                                </div>

                            </div>
                            <div className="">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Cao Dinh Trung Hieu - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Tran Diep Thien Kim - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Bui Quynh Giao - FTU 2
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">HGK</h2>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex lg:hidden flex-col">
                        <div className="flex flex-row mt-6">
                            <div className="mr-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Lam Thien Khanh - UEH
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Nguyen Ngoc Tu My - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Nguyen Phan Hien - RMIT HN
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">BAC TRUNG NAM</h2>
                                </div>

                            </div>
                            <div className="ml-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Luu Anh Phuong - RMIT SGS
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Ho Minh Thu - RMIT SGS
                                    </p>
                                    <p className="text-white text-[16px] mb-2">
                                        Pham Tran Thu Ngan - RMIT SGS
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">22H</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mt-6">
                            <div className="mr-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Ta Phuong Lam - FTU 2
                                    </p>
                                    <p className="text-white text-[16px]">
                                        Thach Thi Truc Thuong - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Le Thi Thu Hieu - UFM
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">3 CO GAI</h2>
                                </div>

                            </div>
                            <div className="ml-3">
                                <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500">
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                                    <p className="text-white text-[18px]">
                                        Cao Dinh Trung Hieu - FTU 2
                                    </p>
                                    <p className="text-white text-[18px]">
                                        Tran Diep Thien Kim - FTU 2
                                    </p>
                                    <p className="text-white text-[18px] mb-2">
                                        Bui Quynh Giao - FTU 2
                                    </p>
                                    <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">HGK</h2>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden flex-col">
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mt-6">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                            <p className="text-white text-[18px]">
                                Lam Thien Khanh - UEH
                            </p>
                            <p className="text-white text-[18px]">
                                Nguyen Ngoc Tu My - FTU 2
                            </p>
                            <p className="text-white text-[18px] mb-2">
                                Nguyen Phan Hien - RMIT HN
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">BAC TRUNG NAM</h2>
                        </div>
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mt-6">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                            <p className="text-white text-[18px]">
                                Luu Anh Phuong - RMIT SGS
                            </p>
                            <p className="text-white text-[18px]">
                                Ho Minh Thu - RMIT SGS
                            </p>
                            <p className="text-white text-[16px] mb-2">
                                Pham Tran Thu Ngan - RMIT SGS
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">22H</h2>
                        </div>
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mt-6">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                            <p className="text-white text-[18px]">
                                Ta Phuong Lam - FTU 2
                            </p>
                            <p className="text-white text-[16px]">
                                Thach Thi Truc Thuong - FTU 2
                            </p>
                            <p className="text-white text-[18px] mb-2">
                                Le Thi Thu Hieu - UFM
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">3 CO GAI</h2>
                        </div>
                        <div className=" text-center p-8 relative rounded-lg h-[240px] w-[340px] bg-transparent border-2 border-yellow-500 mt-6">
                            <div className="absolute inset-0 pointer-events-none rounded-[20px]"></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 8</h2>
                            <p className="text-white text-[18px]">
                                Cao Dinh Trung Hieu - FTU 2
                            </p>
                            <p className="text-white text-[18px]">
                                Tran Diep Thien Kim - FTU 2
                            </p>
                            <p className="text-white text-[18px]">
                                Bui Quynh Giao - FTU 2
                            </p>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[22px]">HGK</h2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default halloffame;
