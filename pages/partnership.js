import PageTitle from "../components/PageTitle";
import Image from 'next/image';
import Footer from "../components/Footer";
import Link from 'next/link';

import DangQuangHuyimg from '../assets/Website/Judges/DangQuangHuy.png';
import DaoHienMaiimg from '../assets/Website/Judges/DaoHienMai.png';
import LeHuynhThienLanimg from '../assets/Website/Judges/LeHuynhThienLan.png';
import NgoMinhThuanimg from '../assets/Website/Judges/NgoMinhThuan.png';
import NguyenHaiMinhimg from '../assets/Website/Judges/NguyenHaiMinh.png';
import NguyenNhuHaTranimg from '../assets/Website/Judges/NguyenNhuHaTran.png';
import PaulThangNguyenimg from '../assets/Website/Judges/PaulThangNguyen.png';
import QuynhDoimg from '../assets/Website/Judges/QuynhDo.png';
import ThoaPhamimg from '../assets/Website/Judges/ThoaPham.png';
import TriMinhLeimg from '../assets/Website/Judges/TriMinhLe.png';
import VoHuynhMinhXuanimg from '../assets/Website/Judges/VoHuynhMinhXuan.png';
import DuongAnGiangimg from '../assets/Website/Mentors/DuongAnGiang.png';
import NguyenThiHongNhungimg from '../assets/Website/Mentors/NguyenThiHongNhung.png';
import TranKimHoangYenimg from '../assets/Website/Mentors/TranKimHoangYen.png';

import newbg from '../assets/newbg.png';

const partnership = () => {
    return (
        <main className="space-y-1 sm:pt-12 lg:pt-20 bg-fixed" style={{
            backgroundImage: `url(${newbg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '0% 0%',
            zIndex: 2,
        }}>
            <div className="w-full flex items-center justify-center flex-col pb-6">
            <PageTitle className="item-center justify-center" title={'PARTNERSHIP'}></PageTitle>
            <p className='font-extrabold lg:text-[27px] text-[25px] my-4 pt-4 text-glow-strong'>JUDGES FOR ROUND 1 & 2</p>
            <div className="hidden xl:flex flex-col items-center justify-center text-center">
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/paul3nguyen/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={PaulThangNguyenimg} width={150} height={272}/>
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info">Mr. Paul Thang Nguyen</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Co-Founder & CGO at MET.EV and DEALERSEDGE
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/mai-hien-dao-648a801a0/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DaoHienMaiimg}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Dao Hien Mai</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Associate Brand Manager<br></br> at Fonos
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/thuanngominh/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NgoMinhThuanimg} width={175} height={275}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Ngo Minh Thuan</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Founder & Managing Director <br></br> at DNA Consulting
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/harvey-dang/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyimg} width={255} height={278}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Dang Quang Huy</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Social Planner at <br></br> DNA Consulting
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/minhhainguyen2006/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenHaiMinhimg} width={185} height={272}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Nguyen Hai Minh</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Chairman & Chief of<br></br> Knowledge at Wisdom Agency
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/nguyennhuhatrang/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenNhuHaTranimg} width={212} height={272}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Nguyen Nhu Ha Trang</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Senior Strategist at <br></br> DNA Consulting
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/lan-l%C3%AA-hu%E1%BB%B3nh-thi%C3%AAn-95b979286/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={LeHuynhThienLanimg} width={202} height={272}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Le Huynh Thien Lan</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Senior Strategic Planner <br></br> at Wisdom Agency
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/xu%C3%A2n-v%C3%B5-2542ab92/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanimg} width={252} height={272}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Vo Huynh Minh Xuan</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Managing Director at <br></br> Wisdom Agency
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/qu%E1%BB%B3nh-%C4%91%E1%BB%97-nh%C6%B0-270a05135/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoimg} width={172} height={272}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Quynh Do</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Head of Marketing & Consumer Insight at BuzzMetrics
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/thoa-pham-86a29a268/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Thoa Pham</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Planning & Consulting Manager at TRUM Consultant
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/tri-minh-le-396b85237/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Tri Minh Le</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Creative Director at TRUM Consultant & Fashion Blogger
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex xl:hidden flex-col items-center justify-center text-center">
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/paul3nguyen/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={PaulThangNguyenimg} width={150} height={272}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Paul Thang Nguyen</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Co-Founder & CGO at MET.EV and DEALERSEDGE
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/mai-hien-dao-648a801a0/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DaoHienMaiimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Dao Hien Mai</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Associate Brand Manager<br></br> at Fonos
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/thuanngominh/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NgoMinhThuanimg} width={175} height={275} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Ngo Minh Thuan</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Founder & Managing Director <br></br> at DNA Consulting
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/harvey-dang/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyimg} width={255} height={278} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Dang Quang Huy</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Social Planner at <br></br> DNA Consulting
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/minhhainguyen2006/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenHaiMinhimg} width={185} height={272} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Nguyen Hai Minh</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Chairman & Chief of<br></br> Knowledge at Wisdom Agency
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/nguyennhuhatrang/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenNhuHaTranimg} width={212} height={272} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Nguyen Nhu Ha Trang</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Senior Strategist at <br></br> DNA Consulting
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/lan-l%C3%AA-hu%E1%BB%B3nh-thi%C3%AAn-95b979286/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={LeHuynhThienLanimg} width={202} height={272} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Le Huynh Thien Lan</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Senior Strategic Planner <br></br> at Wisdom Agency
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/xu%C3%A2n-v%C3%B5-2542ab92/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanimg} width={252} height={272} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Vo Huynh Minh Xuan</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Managing Director at <br></br> Wisdom Agency
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/qu%E1%BB%B3nh-%C4%91%E1%BB%97-nh%C6%B0-270a05135/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoimg} width={172} height={272}/>
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Quynh Do</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Head of Marketing & Consumer Insight at BuzzMetrics
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/thoa-pham-86a29a268/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Thoa Pham</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Planning & Consulting Manager at TRUM Consultant
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/tri-minh-le-396b85237/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Tri Minh Le</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Creative Director at TRUM Consultant & Fashion Blogger
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex xl:hidden lg:hidden flex-col items-center justify-center text-center">
                <div className="flex flex-row mt-6">
                    <div className="mr-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/paul3nguyen/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={PaulThangNguyenimg} width={150} height={272}/>
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Paul Thang Nguyen</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Co-Founder & CGO at MET.EV and DEALERSEDGE
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/mai-hien-dao-648a801a0/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={DaoHienMaiimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Dao Hien Mai</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Associate Brand Manager<br></br> at Fonos
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-6">
                    <div className="mr-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/thuanngominh/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={NgoMinhThuanimg} width={175} height={275} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Ngo Minh Thuan</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Founder & Managing Director <br></br> at DNA Consulting
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/harvey-dang/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyimg} width={255} height={278} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Dang Quang Huy</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Social Planner at <br></br> DNA Consulting
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-6">
                    <div className="mr-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/minhhainguyen2006/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenHaiMinhimg} width={185} height={272} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Nguyen Hai Minh</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Chairman & Chief of<br></br> Knowledge at Wisdom Agency
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/nguyennhuhatrang/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenNhuHaTranimg} width={212} height={272} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Nguyen Nhu Ha Trang</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Senior Strategist at <br></br> DNA Consulting
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-6">
                    <div className="mr-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/lan-l%C3%AA-hu%E1%BB%B3nh-thi%C3%AAn-95b979286/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={LeHuynhThienLanimg} width={202} height={272} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Le Huynh Thien Lan</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Senior Strategic Planner <br></br> at Wisdom Agency
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/xu%C3%A2n-v%C3%B5-2542ab92/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanimg} width={252} height={272} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Vo Huynh Minh Xuan</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Managing Director at <br></br> Wisdom Agency
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-6">
                    <div className="mr-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/qu%E1%BB%B3nh-%C4%91%E1%BB%97-nh%C6%B0-270a05135/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoimg} width={172} height={272}/>
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Quynh Do</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Head of Marketing & Consumer Insight at BuzzMetrics
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/thoa-pham-86a29a268/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Thoa Pham</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Planning & Consulting Manager at TRUM Consultant
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/tri-minh-le-396b85237/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Tri Minh Le</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Creative Director at TRUM Consultant & Fashion Blogger
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="flex md:hidden flex-col items-center justify-center text-center">
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                    <Link href="https://www.linkedin.com/in/paul3nguyen/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={PaulThangNguyenimg} width={150} height={272}/>
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Paul Thang Nguyen</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Co-Founder & CGO at MET.EV and DEALERSEDGE
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/mai-hien-dao-648a801a0/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={DaoHienMaiimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Dao Hien Mai</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Associate Brand Manager<br></br> at Fonos
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/thuanngominh/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={NgoMinhThuanimg} width={175} height={275} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Ngo Minh Thuan</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Founder & Managing Director <br></br> at DNA Consulting
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                    </span>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/harvey-dang/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyimg} width={255} height={278} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Dang Quang Huy</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Social Planner at <br></br> DNA Consulting
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/minhhainguyen2006/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenHaiMinhimg} width={185} height={272} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Nguyen Hai Minh</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Chairman & Chief of<br></br> Knowledge at Wisdom Agency
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/nguyennhuhatrang/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenNhuHaTranimg} width={212} height={272} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Nguyen Nhu Ha Trang</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Senior Strategist at <br></br> DNA Consulting
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/lan-l%C3%AA-hu%E1%BB%B3nh-thi%C3%AAn-95b979286/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={LeHuynhThienLanimg} width={202} height={272} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Le Huynh Thien Lan</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Senior Strategic Planner <br></br> at Wisdom Agency
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/xu%C3%A2n-v%C3%B5-2542ab92/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanimg} width={252} height={272} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Vo Huynh Minh Xuan</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Managing Director at <br></br> Wisdom Agency
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>


                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/qu%E1%BB%B3nh-%C4%91%E1%BB%97-nh%C6%B0-270a05135/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoimg} width={172} height={272}/>
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Quynh Do</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Head of Marketing & Consumer Insight at BuzzMetrics
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/thoa-pham-86a29a268/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Thoa Pham</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Planning & Consulting Manager at TRUM Consultant
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>

                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/tri-minh-le-396b85237/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Tri Minh Le</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Creative Director at TRUM Consultant & Fashion Blogger
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
            <p className='font-extrabold lg:text-[27px] text-[25px] my-4 pt-16 text-glow-strong'>MENTORS</p>
            <div className="hidden xl:flex flex-col items-center justify-center text-center pb-6">
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/xu%C3%A2n-v%C3%B5-2542ab92/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanimg} width={252} height={272}/>
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">MS. Vo Huynh Minh Xuan</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Managing Director at <br></br>Wisdom Agency
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/thoa-pham-86a29a268/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Thoa Pham</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Planning & Consulting Manager <br></br> at Trum Consultant
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/nguyen-thi-hong-nhung/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenThiHongNhungimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Nguyen Thi Hong Nhung</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Head of Growth Marketing<br></br>at Fonos
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/trankimhoangyen/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">

                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={TranKimHoangYenimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Tran Kim Hoang Yen</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Associate PR Account Director <br></br> at VERO Vietnam
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/qu%E1%BB%B3nh-%C4%91%E1%BB%97-nh%C6%B0-270a05135/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoimg} width={172} height={272} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Quynh Do</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Head of Marketing & Consumer Insight at BuzzMetrics
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/tri-minh-le-396b85237/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Tri Minh Le</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Creative Director at Trum Consultant & Fashion Blogger
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/harvey-dang/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Dang Quang Huy</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Social Planner at <br></br>DNA Consulting
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/giangduongofficial/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DuongAnGiangimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Duong An Giang</h2>
                                                <p className="text-white text-[18px] hover-info mt-1">
                                                    CEO at VFC Group
                                                </p>
                                            </div>

                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex xl:hidden flex-col items-center justify-center text-center pb-6">
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/xu%C3%A2n-v%C3%B5-2542ab92/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">MS. Vo Huynh Minh Xuan</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Managing Director at <br></br>Wisdom Agency
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/thoa-pham-86a29a268/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Thoa Pham</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Planning & Consulting Manager <br></br> at Trum Consultant
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/nguyen-thi-hong-nhung/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenThiHongNhungimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Nguyen Thi Hong Nhung</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Head of Growth Marketing<br></br>at Fonos
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/trankimhoangyen/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">

                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={TranKimHoangYenimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Tran Kim Hoang Yen</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Associate PR Account Director <br></br> at VERO Vietnam
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/qu%E1%BB%B3nh-%C4%91%E1%BB%97-nh%C6%B0-270a05135/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoimg} width={172} height={272} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Quynh Do</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Head of Marketing & Consumer Insight at BuzzMetrics
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-3 mr-6">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/tri-minh-le-396b85237/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Tri Minh Le</h2>
                                                <p className="text-white text-[18px] hover-info">
                                                    Creative Director at Trum Consultant & Fashion Blogger
                                                </p>
                                            </div>
                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/harvey-dang/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Dang Quang Huy</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Social Planner at <br></br>DNA Consulting
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                                <Link href="https://www.linkedin.com/in/giangduongofficial/" passHref>
                                    <a target="_blank">
                                        <div className="hover-card-container ">
                                            <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DuongAnGiangimg} />
                                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Duong An Giang</h2>
                                                <p className="text-white text-[18px] hover-info mt-1">
                                                    CEO at VFC Group
                                                </p>
                                            </div>

                                        </div>
                                        <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex xl:hidden lg:hidden flex-col items-center justify-center text-center">
                <div className="flex flex-row mt-6">
                    <div className="mr-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/xu%C3%A2n-v%C3%B5-2542ab92/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">MS. Vo Huynh Minh Xuan</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Managing Director at <br></br>Wisdom Agency
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/thoa-pham-86a29a268/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Thoa Pham</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Planning & Consulting Manager <br></br> at Trum Consultant
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-6">
                    <div className="mr-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/nguyen-thi-hong-nhung/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenThiHongNhungimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Nguyen Thi Hong Nhung</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Head of Growth Marketing<br></br>at Fonos
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/trankimhoangyen/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">

                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={TranKimHoangYenimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Tran Kim Hoang Yen</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Associate PR Account Director <br></br> at VERO Vietnam
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-6">
                    <div className="mr-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/qu%E1%BB%B3nh-%C4%91%E1%BB%97-nh%C6%B0-270a05135/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoimg} width={172} height={272} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Quynh Do</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Head of Marketing & Consumer Insight at BuzzMetrics
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/tri-minh-le-396b85237/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Tri Minh Le</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Creative Director at Trum Consultant & Fashion Blogger
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-6">
                    <div className="mr-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/harvey-dang/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Dang Quang Huy</h2>
                                            <p className="text-white text-[18px] hover-info">
                                                Social Planner at <br></br>DNA Consulting
                                            </p>
                                        </div>
                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                            <Link href="https://www.linkedin.com/in/giangduongofficial/" passHref>
                                <a target="_blank">
                                    <div className="hover-card-container ">
                                        <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                            <Image className="flex items-center justify-center object-center rounded-[30px]" src={DuongAnGiangimg} />
                                            <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Duong An Giang</h2>
                                            <p className="text-white text-[18px] hover-info mt-1">
                                                CEO at VFC Group
                                            </p>
                                        </div>

                                    </div>
                                    <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden flex-col items-center justify-center text-center">
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer">
                    <Link href="https://www.linkedin.com/in/xu%C3%A2n-v%C3%B5-2542ab92/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">MS. Vo Huynh Minh Xuan</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Managing Director at <br></br>Wisdom Agency
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/thoa-pham-86a29a268/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Thoa Pham</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Planning & Consulting Manager <br></br> at Trum Consultant
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/nguyen-thi-hong-nhung/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenThiHongNhungimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Nguyen Thi Hong Nhung</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Head of Growth Marketing<br></br>at Fonos
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/trankimhoangyen/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">

                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={TranKimHoangYenimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Tran Kim Hoang Yen</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Associate PR Account Director <br></br> at VERO Vietnam
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>

                </div>

                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/qu%E1%BB%B3nh-%C4%91%E1%BB%97-nh%C6%B0-270a05135/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoimg} width={172} height={272} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Quynh Do</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Head of Marketing & Consumer Insight at BuzzMetrics
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/tri-minh-le-396b85237/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Tri Minh Le</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Creative Director at Trum Consultant & Fashion Blogger
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>

                </div>

                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/harvey-dang/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Mr. Dang Quang Huy</h2>
                                    <p className="text-white text-[18px] hover-info">
                                        Social Planner at <br></br>DNA Consulting
                                    </p>
                                </div>
                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="group relative transition-all duration-300 hover:scale-105 hover-info cursor-pointer mt-6">
                    <Link href="https://www.linkedin.com/in/giangduongofficial/" passHref>
                        <a target="_blank">
                            <div className="hover-card-container ">
                                <div className="border-[2px] text-center relative rounded-[50px] h-[400px] w-[275px] ">
                                    <Image className="flex items-center justify-center object-center rounded-[30px]" src={DuongAnGiangimg} />
                                    <h2 className="text-xl font-bold text-white text-glow-strong text-[20px] hover-info ">Ms. Duong An Giang</h2>
                                    <p className="text-white text-[18px] hover-info mt-1">
                                        CEO at VFC Group
                                    </p>
                                </div>

                            </div>
                            <span style={{ top: '250px', left: '0px', zIndex: '0', }} className="absolute hidden group-hover:block gradient-hover-bg rounded-[50px] text-center h-[150px] w-[275px] transition-all duration-300">
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
            </div>
            <Footer></Footer>

        </main>
    );
}

export default partnership;
