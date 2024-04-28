import PageTitle from "../components/PageTitle";

const CRVChallenge = () => {
    return (
        <main className="mt-40">
            <PageTitle className="" title={"CERAVE’S CHALLENGE"}></PageTitle>
            <div className="flex flex-col items-center justify-center text-center">
                <p className='font-extrabold lg:text-[27px] text-[15px] my-4'>OUR TOP 5 EXCELLENT TEAMS</p>
                <div>
                    <div className="text-center p-8 relative rounded-lg h-[200px] h-[200px]">
                            <div className="absolute inset-0 pointer-events-none border-4" style={{ backgroundColor: 'rgba(255, 218, 25, 0.15)', margin: '5px', borderColor: 'rgba(255, 218, 25, 0.5)' }}></div>
                        <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">WINNER</h2>
                        <p className="text-white text-[20px]">
                            Hoang Thi Ngoc Anh
                        </p>
                        <p className="text-white text-[20px]">
                            Tran To Hien
                        </p>
                    </div>
                    <div style={{
                        background: 'linear-gradient(to right, rgba(255, 218, 25, 0), rgba(255, 218, 25, 0.65), rgba(255, 218, 25, 0))'
                    }} className="w-[315px] h-[50px] text-[25px] flex items-center justify-center font-bold">
                        EZ
                    </div>
                </div>
                <div className="flex flex-row mt-6">
                    <div className="mr-6">
                        <div className="text-center p-8 relative rounded-lg h-[200px]">
                                <div className="absolute inset-0 pointer-events-none border-4" style={{ backgroundColor: 'rgba(255, 218, 25, 0.15)', margin: '5px', borderColor: 'rgba(255, 218, 25, 0.5)' }}></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                            <p className="text-white text-[20px]">
                            Le Vy An
                            </p>
                            <p className="text-white text-[20px]">
                            Tran Thi Tuyet Minh                            
                            </p>
                        </div>
                        <div style={{
                            background: 'linear-gradient(to right, rgba(255, 218, 25, 0), rgba(255, 218, 25, 0.65), rgba(255, 218, 25, 0))'
                        }} className="w-[315px] h-[50px] text-[25px] flex items-center justify-center font-bold">
                            THE BARRIERS WARRIORS
                        </div>
                    </div>
                    <div className="ml-6">
                        <div className="text-center p-8 relative rounded-lg h-[200px]">
                            <div className="absolute inset-0 pointer-events-none border-4" style={{ backgroundColor: 'rgba(255, 218, 25, 0.15)', margin: '5px', borderColor: 'rgba(255, 218, 25, 0.5)' }}></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                            <p className="text-white text-[20px]">
                            Nguyen Ngoc Thuy  Quynh
                            </p>
                            <p className="text-white text-[20px]">
                            Tran Thi Nhu Quynh
                            </p>
                            <p className="text-white text-[20px]">
                            Le Nguyen Bao Thi                            
                            </p>
                        </div>
                        <div style={{
                            background: 'linear-gradient(to right, rgba(255, 218, 25, 0), rgba(255, 218, 25, 0.65), rgba(255, 218, 25, 0))'
                        }} className="w-[315px] h-[50px] text-[25px] flex items-center justify-center font-bold">
                            ANASTASIA
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mt-6">
                    <div className="mr-6">
                        <div className="text-center p-8 relative rounded-lg h-[200px]">
                                <div className="absolute inset-0 pointer-events-none border-4" style={{ backgroundColor: 'rgba(255, 218, 25, 0.15)', margin: '5px', borderColor: 'rgba(255, 218, 25, 0.5)' }}></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                            <p className="text-white text-[20px]">
                            Pham Tran Bao Tran
                            </p>
                            <p className="text-white text-[20px]">
                            Nguyen Phuc Bao Tran
                            </p>
                            <p className="text-white text-[20px]">
                            Lai Do Quan                            
                            </p>
                        </div>
                        <div style={{
                            background: 'linear-gradient(to right, rgba(255, 218, 25, 0), rgba(255, 218, 25, 0.65), rgba(255, 218, 25, 0))'
                        }} className="w-[315px] h-[50px] text-[25px] flex items-center justify-center font-bold">
                            RAINBOW DASH
                        </div>
                    </div>
                    <div className="ml-6">
                        <div className="text-center p-8 relative rounded-lg h-[200px]">
                                <div className="absolute inset-0 pointer-events-none border-4" style={{ backgroundColor: 'rgba(255, 218, 25, 0.15)', margin: '5px', borderColor: 'rgba(255, 218, 25, 0.5)' }}></div>
                            <h2 className="text-xl font-bold text-white mb-2 text-glow-strong text-[30px]">TOP 5</h2>
                            <p className="text-white text-[20px]">
                            Phan Thanh Thuy
                            </p>
                            <p className="text-white text-[20px]">
                            Nguyen Bao Gia An
                            </p>
                            <p className="text-white text-[20px]">
                            Le Ngoc Bao An                            
                            </p>
                        </div>
                        <div style={{
                            background: 'linear-gradient(to right, rgba(255, 218, 25, 0), rgba(255, 218, 25, 0.65), rgba(255, 218, 25, 0))'
                        }} className="w-[315px] h-[50px] text-[25px] flex items-center justify-center font-bold">
                            MVE
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default CRVChallenge;
