import PageTitle from "../components/PageTitle";
import WhiteLight from '../assets/Logolight-white.png'
import Value from "../components/Value";
// import Birdbg from "../assets/bird-bg.png"
import Footer from "../components/Footer";
import newbg from '../assets/newbg.png';

const Rules = () => {
    return (
        <div className="bg-fixed"
        style={{
            backgroundImage: `url(${newbg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '0% 0%',
            zIndex: 2,
        }}>

    <main className="sm:pt-12 lg:pt-20 container-media-padding lg:text-[22px] text-[18px]">
        <div id="rules&regulations" />
        <PageTitle title={'RULES AND REGULATIONS'} type={2}></PageTitle>
        <section className="py-10 space-y-6"
            // style={{
            //     backgroundImage: `url(${Birdbg.src})`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundSize: '250px 350px',
            //     backgroundPosition: '100% -5%',
            //     zIndex: '1',
            // }}
            >
            <div className="space-y-1">
                <div className="flex items-center -ml-8 lg:ml-0">
                    <Value className="value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-glow-strong -ml-6">ENTRANT ELIGIBILITY</h4>
                </div>
                <div className="">
                    <ul className="space-y-1 list-disc -mt-6 lg:px-24 text-left">
                        <li><p>Current university/college students of all nationalities from year 01 to year 04 who are living, studying, and working in Vietnam or studying abroad but are Vietnamese students.</p></li>
                        <li><p>Members of organizing teams and (sponsor) related parties are <strong>NOT</strong> allowed to join the competition.</p></li>
                        <li><p>Each team must have 3 members for eligible registration.</p></li>
                    </ul>
                </div>
            </div>

            <div className="space-y-1">
                <div className="flex items-center -ml-8 lg:ml-0">
                    <Value className=" value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-glow-strong -ml-6">SUBMISSION DATE</h4>
                </div>
                <div className="">
                    <ul className="space-y-1 list-disc -mt-6 lg:px-24 text-left">
                        <li><p>Follow the instructions of the organizers. Contact as soon as technical problems occur.</p></li>
                        <li><p>Candidates are encouraged to submit the plan reasonably to avoid unnecessary technical problems.</p></li>
                        <li><p>Candidates who submit assignments late or incorrectly will be disqualified.</p></li>
                    </ul>
                </div>
            </div>


            <div className="space-y-1">
                <div className="flex items-center -ml-8 lg:ml-0">
                    <Value className=" value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-glow-strong -ml-6">CONDITIONS & RULES FOR EVENT PARTICIPATION </h4>
                </div>
                <div>
                    <ul className="space-y-1 list-disc -mt-6 lg:px-20 text-left pt-5 lg:pt-0">
                        <li><strong className="">Condition to join:</strong>
                            <ul className="pl-4 space-y-1 list-[circle]">
                                <li>Webinar: Opened for everyone.</li>
                                <li className="">Workshop: candidates who have successfully made it to Round 2.1 (Top 30).</li>
                                <li className="">Mentoring Program & Networking Night: candidates who have successfully made it to Round 2.2 (Top 8).</li>
                            </ul>

                        </li>
                        <li><strong className="">Regulation for candidates:</strong>
                            <ul className="pl-4 space-y-1 list-[circle]">
                                <li>Join the event on time.</li>
                                <li>Open the camera to communicate with guest speakers.</li>
                                <li>Must not share screen or turn on the microphone while guest speakers are sharing.</li>
                                <li>Must not spam messages in the chat box.</li>
                                <li>Follow the instruction of displaying candidate name during the event.</li>
                                <li>Have a respectful attitude when interacting with others.</li>
                                <li>Marketing Challengers still has live broadcasts of this series on Facebook Page & Facebook Group.</li>
                            </ul>

                        </li>

                    </ul>
                </div>
            </div>
            <div className="space-y-1">
                <div className="flex items-center -ml-8 lg:ml-0">
                    <Value className=" value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-glow-strong -ml-6">TERM & CONDITIONS</h4>
                </div>

                <div>
                    <ul className="space-y-1 list-disc -mt-6 lg:px-24 text-left">
                        <li><p>No registration fees necessary for entering the competition.</p></li>
                        <li><p>All materials submitted must be candidates&apos; own work and must not be under the submission of other competitions. Any duplication of outside sources must be referenced properly to avoid plagiarism.</p></li>
                        <li><p>Candidates must not reveal the datasets and questions from all rounds to ensure the confidentiality of the contest.</p></li>
                        <li><p>Candidates must maintain a courteous and respectful demeanor throughout the competition toward the organizers, judges, sponsors, guest speakers, mentors, and other teams. Candidates shall not make deceptive comments that may affect the stakeholders involved.</p></li>
                        <li><p>The Organising Team, RMIT Vietnam Business Club - SGS, sponsors and RMIT reserve the right to use all data, entries, photographs for communication purposes and other legal purposes.</p></li>
                        <li><p>The Organising Team cannot be held responsible for lost, delayed, mislaid entries or any technical failure of online submission. A confirmation email will be sent if a team’s submission for every round is successful.</p></li>
                        <li><p>The Organising Team reserves the right to prohibit entry or exclude any teams from the competition who we believe that they violated the rules and regulation listed above (will communicate to the recipients <strong>at least 24 hours before finalising this decision</strong>).</p></li>
                        <li><p>These rules are subject to change without notice.</p></li>
                        <li><p>By entering this contest, candidates accept the terms herein and agree to be bound by the above rules and regulations. Entrants further agree to be bound by the decisions of the Judging Panel and the Organizing Team, which shall be final and binding in all respects. Any concerns, conflicts or disputes <strong className="underline">MUST</strong> be sent to the Organizing team via this email: <strong className="text-primary-500 ">rmitbcmarketingchallengers@gmail.com</strong></p></li>

                    </ul>
                </div>
            </div>
            <div className="space-y-1">
                <div className="flex items-center -ml-8 lg:ml-0">
                    <Value className=" value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-glow-strong -ml-6">COPYRIGHTS OF MARKETING CHALLENGERS</h4>
                </div>
                <div>
                    <ul className="space-y-1 list-disc -mt-6 lg:px-24 text-left">
                        <li><p>Candidates must obey the copyright laws and not violate the copyrights of any other third parties. The Organisers of this Contest, RMIT Vietnam Business Club - SGS, is not responsible for any breach by the candidate.</p></li>
                        <li><p>RMIT Vietnam Business Club - SGS reserves the right to publish and display the Project, using its content and images for publicity, promotion and non-payment purposes.</p></li>
                        <li><p>The Organising Team, RMIT Vietnam Business Club - SGS, sponsors and RMIT will not use the candidate&apos; s work for any purpose other than grading and filtering out the best works for awarding.</p></li>
                        <li><p>If a sponsor desires to use a candidate&apos; s idea, the sponsor and candidate will enter into a separate agreement. The Organizing Team, RMIT Vietnam Business Club - SGS, and RMIT <strong>are not responsible</strong> for this consent or any ensuing circumstances.</p></li>
                    </ul>
                </div>

            </div>
        </section>

    </main>
    <Footer></Footer>

    </div>
    );
}

export default Rules;
