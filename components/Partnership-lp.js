import PageTitle from "../components/PageTitle";
import Image from 'next/image';

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

import DangQuangHuyMimg from '../assets/Website/Mentors/DangQuangHuy.png';
import DuongAnGiangMimg from '../assets/Website/Mentors/DuongAnGiang.png';
import NguyenThiHongNhungMimg from '../assets/Website/Mentors/NguyenThiHongNhung.png';
import QuynhDoMimg from '../assets/Website/Mentors/QuynhDo.png';
import ThoaPhamMimg from '../assets/Website/Mentors/ThoaPham.png';
import TranKimHoangYenMimg from '../assets/Website/Mentors/TranKimHoangYen.png';
import TriMinhLeMimg from '../assets/Website/Mentors/TriMinhLe.png';
import VoHuynhMinhXuanMimg from '../assets/Website/Mentors/VoHuynhMinhXuan.png';
import newbg from '../assets/newbg.png';

const Partnershiplp = () => {
    return (
        <main className="space-y-1 pt-10 bg-fixed text-center" style={{
            backgroundImage: `url(${newbg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '0% 0%',
            zIndex: 2,
        }}>
            <style>
                {`
                    .gradient-bg 
                    {
                        background-image: linear-gradient(90deg, #f85f1d, #6739b1);
                    }
                `}
            </style>
            <PageTitle className="" title={'PARTNERSHIP'}></PageTitle>
            <p className='font-extrabold lg:text-[27px] text-[25px] my-4 pt-4 text-glow-strong'>JUDGES FOR ROUND 1 & 2</p>
            <div className="flex flex-col items-center justify-center text-center">
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={PaulThangNguyenimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Mr. Paul Thang Nguyen</h2>
                                <p className="text-white text-[18px]">
                                    Co-Founder & CGO at MET.EV and DEALERSEDGE
                                </p>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DaoHienMaiimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Dao Hien Mai</h2>
                                <p className="text-white text-[18px]">
                                    Associate Brand Manager at Fonos
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="ml-3 mr-6">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NgoMinhThuanimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Mr. Ngo Minh Thuan</h2>
                                <p className="text-white text-[18px]">
                                    Founder & Managing Director at DNA Consulting
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Mr. Dang Quang Huy</h2>
                                <p className="text-white text-[18px]">
                                    Social Planner at DNA Consulting
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenHaiMinhimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Mr. Nguyen Hai Minh</h2>
                                <p className="text-white text-[18px]">
                                    Chairman & Chief of Knowledge at Wisdom Agency
                                </p>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenNhuHaTranimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Nguyen Nhu Ha Trang</h2>
                                <p className="text-white text-[18px]">
                                    Senior Strategist at DNA Consulting
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="ml-3 mr-6">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={LeHuynhThienLanimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Le Huynh Thien Lan</h2>
                                <p className="text-white text-[18px]">
                                    Senior Strategic Planner at Wisdom Agency
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Vo Huynh Minh Xuan</h2>
                                <p className="text-white text-[18px]">
                                    Managing Director at Wisdom Agency
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Quynh Do</h2>
                                <p className="text-white text-[18px]">
                                    Head of Marketing & Consumer Insight at BuzzMetrics
                                </p>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Thoa Pham</h2>
                                <p className="text-white text-[18px]">
                                    Planning & Consulting Manager at TRUM Consultant
                                </p>
                            </div>
                        </div>
                        <div className="ml-3 mr-6">
                            <div className="gradient-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Mr. Tri Minh Le</h2>
                                <p className="text-white text-[18px]">
                                    Creative Director at TRUM Consultant & Fashion Blogger
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='font-extrabold lg:text-[27px] text-[25px] my-4 pt-16 text-glow-strong'>MENTORS</p>
            <div className="flex flex-col items-center justify-center text-center pb-6">
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="gradient-mentor-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={VoHuynhMinhXuanMimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">MS. Vo Huynh Minh Xuan</h2>
                                <p className="text-white text-[18px]">
                                    Managing Director at Wisdom Agency
                                </p>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="gradient-mentor-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={ThoaPhamMimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Thoa Pham</h2>
                                <p className="text-white text-[18px]">
                                    Planning & Consulting Manager at Trum Consultant
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="ml-3 mr-6">
                            <div className="gradient-mentor-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={NguyenThiHongNhungMimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Nguyen Thi Hong Nhung</h2>
                                <p className="text-white text-[18px]">
                                    Head of Growth Marketing at Fonos
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="gradient-mentor-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={TranKimHoangYenMimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Tran Kim Hoang Yen</h2>
                                <p className="text-white text-[18px]">
                                    Associate PR Account Director at VERO Vietnam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mt-6">
                        <div className="">
                            <div className="gradient-mentor-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={QuynhDoMimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Quynh Do</h2>
                                <p className="text-white text-[18px]">
                                    Head of Marketing & Consumer Insight at BuzzMetrics
                                </p>
                            </div>
                        </div>
                        <div className="ml-6 mr-3">
                            <div className="gradient-mentor-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={TriMinhLeMimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Mr. Tri Minh Le</h2>
                                <p className="text-white text-[18px]">
                                    Creative Director at Trum Consultant & Fashion Blogger
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="ml-3 mr-6">
                            <div className="gradient-mentor-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DangQuangHuyMimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Mr. Dang Quang Huy</h2>
                                <p className="text-white text-[18px]">
                                    Social Planner at DNA Consulting
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="gradient-mentor-bg text-center relative rounded-[50px] h-[400px] w-[275px]">
                                <Image className="flex items-center justify-center object-center rounded-[30px]" src={DuongAnGiangMimg} />
                                <h2 className="text-xl font-bold text-white text-glow-strong text-[20px]">Ms. Duong An Giang</h2>
                                <p className="text-white text-[18px]">
                                    CEO at VFC Group
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Partnershiplp;
