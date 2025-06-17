import PageTitle from "../components/PageTitle";
import WhiteLight from '../assets/Logolight-white.png'
import Value from "../components/Value";
// import Birdbg from "../assets/bird-bg.png"
import Footer from "../components/Footer";
import newbg from '../assets/newbg.png';
import road from '../assets/season13/RULES AND REGULATIONS/ROAD_FULL.png';
import tach from '../assets/season13/RULES AND REGULATIONS/TACH.png';

const Rules = () => {
    return (
    <div className="bg-fixed"
            style={{
                backgroundColor: '#2D033F',
                zIndex: 2,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '0% 0%',
                
            }}>
            <main className="sm:pt-12 lg:pt-20 container-media-padding lg:text-[22px] text-[18px]">
                <h1 className="text-display-64 md:text-5xl font-bold text-center text-tertiary-300 mt-10 mb-8">
  TERMS & CONDITIONS
</h1>
                <section className="py-10 space-y-6">
                    {/* Entrant Eligibility */}
                    <div className="relative">
                        <img
                            src="/season13/RULES AND REGULATIONS/tach.png" 
                            alt="decorative left graphic"
                            className="absolute top-[40%] left-0 w-[150px] z-[0] opacity-30 scale-[1000%] pointer-events-none select-none"
                            style={{ zIndex: 0 }}
                        />
                        
                        <h4 className="relative z-10 mt-20 font-semibold uppercase pb-[50px] text-tertiary-300 text-center text-headline-48 mb-4">
                            Entrance Eligibility
                        </h4>
                        <div className="relative z-10">
                            <ul className="space-y-1 list-disc text-tertiary-300 -mt-6 lg:px-12 z-10 text-left">
                                <li><p>All University and College undergraduates who are currently enrolled in universities or colleges in Vietnam (of all nationalities); OR graduated within 1 year; OR studying abroad but are Vietnamese students.</p></li>
                                <li><p>No registration fees are necessary to enter the competition.</p></li>
                                <li><p>Each team must consist of exactly 3 members to qualify for participation. Basic English proficiency is required, as the competition will be conducted fully in English.</p></li>
                                <li><p>Each individual is only allowed to register for a maximum of one team.</p></li>
                                <li><p>Members from teams that reached the final round of MARKETING CHALLENGERS from Season 1 to Season 12 will NOT be eligible to participate.</p></li>
                                <li><p>Members of the organizing committee, related parties (our sponsors or partners), and student ambassadors currently working at MARKETING CHALLENGERS 2025 will NOT be eligible to participate. </p></li>
                                <li><p>If there are any changes to the team members after registration, the team must notify the organizing committee via email at rmitbcmarketingchallengers@gmail.com by 11:59 PM on 31 July 2025.</p></li>
                                <li><p>All information regarding registration and submission confirmation will be sent to participants via email from the organizing committee as soon as possible.</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-10 ">
  <div className="w-2 h-2 bg-white rotate-45"></div>
  <div className="h-[2px] w-[500px] bg-white"></div>
  <div className="w-2 h-2 bg-white rotate-45"></div>
</div>

                    {/* Submission Date */}
                    <div>
                        <h4 className="font-semibold text-headline-48 uppercase text-tertiary-300 text-center pb-[50px] mb-4">
  Team Submission
</h4>
<div>
    <ul className="space-y-8 list-decimal text-white -mt-6 lg:px-12 text-left">
      <li>
        <p className="font-bold mb-2">Submission Rules and Conditions</p>
        <ul className="list-disc pl-6 space-y-1 text-tertiary-300">
          <li>All materials submitted must be candidates’ original work and must not be under submission to other competitions. Any duplication of outside sources must be referenced properly to avoid plagiarism. The Organising Team is not responsible for any violations made by the candidates.</li>
          <li>The Organising Team has the right to use the content and images of the submissions for non-profit public communications and promotional purposes without compensation.</li>
          <li>The Organising Team reserves the right to access, review, and store all submitted materials for the purposes of evaluation, quality control, and internal documentation. These materials will not be publicly disclosed or used for commercial purposes without the candidates’ consent.</li>
          <li>Candidates must not reveal the datasets and questions from all rounds to ensure the confidentiality of the contest.</li>
        </ul>
      </li>

      <li>
        <p className="font-bold mb-2">Submission Deadline</p>
        <ul className="list-disc pl-6 space-y-1 text-tertiary-300">
          <li>Strictly follow the submission guidelines and instructions of the organising committee. Contact the organisers as soon as technical problems occur.</li>
          <li>Candidates are encouraged to submit the plan reasonably to avoid unnecessary technical problems. Candidates who make late or incorrect submissions will be disqualified.</li>
          <li>The Organising Team is not responsible for lost, delayed, or mislaid entries or any technical failure of online submission. A confirmation email will be sent if a team’s submission for every round is successful.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

                    <div className="flex items-center justify-center my-10 ">
  <div className="w-2 h-2 bg-white rotate-45"></div>
  <div className="h-[2px] w-[500px] bg-white"></div>
  <div className="w-2 h-2 bg-white rotate-45"></div>
</div>

                    {/* Conditions & Rules for Event Participation */}
                    <div>
                        <h4 className="font-semibold uppercase text-tertiary-300 text-center pb-[50px] text-headline-48  mb-4">
                            Event Participation
                            </h4>
                        <div>
                            <ul className="space-y-8 list-decimal text-white -mt-6 lg:px-12 text-left">
                            <li>
                                <p className="font-bold mb-2"> Conditions for Event Participation</p>
                                <ul className="list-disc pl-6 space-y-1 text-tertiary-300">
                                <li>Webinars, Opening Ceremony, and Closing Ceremony: Open to everyone.</li>
                                <li>Workshop 1: Candidates who have successfully made it to Round 2.1 (Top 32).</li>
                                <li>Mentoring Program, Workshop 2, and Networking Night: Candidates who have successfully made it to Round 2.2 (Top 10).</li>
                                <li>Marketing Challengers still has live broadcasts of some webinars and main events on the Facebook Page & Facebook Group.</li>
                                <li>Webinars, Private Pitching, Workshop 1, and the Mentoring Program will be conducted online.</li>
                                <li>Opening Ceremony, Workshop 2, and Closing Ceremony will be held in a hybrid format (both online and offline).</li>
                                <li>Networking Day will be held fully offline.</li>
                                </ul>
                            </li>

                            <li>
                                <p className="font-bold mb-2">Rules for Online/Hybrid Event Participation</p>
                                <ul className="list-disc pl-6 space-y-1 text-tertiary-300">
                                <li>Join the event on time.</li>
                                <li>Must not share the screen or turn on the microphone while guest speakers are sharing during Webinar 2 and Workshops.</li>
                                <li>Must not send spam messages in the chat box.</li>
                                <li>Follow the instructions for displaying the candidate&apos;s name during the events.</li>
                                <li>Have a respectful attitude when interacting with others.</li>
                                <li>Open the camera to communicate with the Guest Speakers during the exclusive workshops for Top 32 and Top 10.</li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-10 ">
  <div className="w-2 h-2 bg-white rotate-45"></div>
  <div className="h-[2px] w-[500px] bg-white"></div>
  <div className="w-2 h-2 bg-white rotate-45"></div>
</div>

                    {/* Term & Conditions */}
                    <div className="relative">
                        <img
                            src="/season13/RULES AND REGULATIONS/tach.png" 
                            alt="decorative right graphic"
                            className="absolute top-[0%] right-0 w-[150px] z-0 opacity-30 scale-[1000%] pointer-events-none select-none"
                        />
                        <h4 className="relative z-10 font-semibold text-tertiary-300 uppercase pb-[50px] text-center text-headline-48 mb-4">
                            Contestant Rights
                            </h4>
                        <div>
                            <ul className="relative z-10space-y-1 list-disc text-tertiary-300 -mt-6 lg:px-24 text-left">
                                <li><p>The teams must comply with all rules, guidelines, and regulations set by the Organising Team and submit their work on time as instructed.</p></li>
                                <li><p>Any contact or meetings between teams and the judges, mentors, or sponsors involved in the professional collaboration during the competition period are prohibited.</p></li>
                                <li><p>Candidates must maintain a courteous and respectful demeanor toward the organizers, judges, sponsors, guest speakers, mentors, other teams, as well as all stakeholders throughout the competition.</p></li>
                                <li><p>Candidates shall not make deceptive comments that may affect the stakeholders involved.</p></li>
                                <li><p>The Organising Team, RMIT Vietnam Business Club - SGS, sponsors, and RMIT reserve the right to use all data, entries, and photographs for communication and other legal purposes.</p></li>
                                <li><p>The Organising Team reserves the right to prohibit entry or exclude any team from the competition that we believe has violated the rules and regulations listed above (we will communicate to the recipients at least 24 hours before finalizing this decision).</p></li>
                                <li><p>These rules are subject to change without notice.</p></li>
                            </ul>
                        </div>
                        <div className="text-center italic text-tertiary-300 px-4 sm:px-8 md:px-16 lg:px-12 xl:px-12 mt-20">
                            <p className="mb-4">
                                By entering this contest, candidates accept the terms herein and agree to be bound by the above rules and regulations. Entrants further agree to be bound by the decisions of the Judging Panel and the Organising Team, which shall be final and binding in all respects.
                            </p>
                            <p>
                                Any concerns, conflicts, or disputes MUST be sent to the Organising team via this email:{" "}
                                <span className="underline text-primary-500 font-medium">
                                rmitbcmarketingchallengers@gmail.com
                                </span>.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-10 ">
  <div className="w-2 h-2 bg-white rotate-45"></div>
  <div className="h-[2px] w-[500px] bg-white"></div>
  <div className="w-2 h-2 bg-white rotate-45"></div>
</div>

                    {/* Copyrights of Marketing Challengers */}
                    <div>
                        <h4 className="font-semibold text-tertiary-300 uppercase text-center pb-[50px] text-headline-48  mb-4">
  COPYRIGHTS OF<br></br> MARKETING CHALLENGERS
</h4>
                        <div>
                            <ul className="space-y-1 list-disc -mt-6 text-tertiary-300 lg:px-24 text-left">
                                <li><p>Candidates must obey the copyright laws and not violate the copyrights of any other third parties. The organizer of this contest, RMIT Vietnam Business Club-SGS, is not responsible for any breach by the candidate.</p></li>
                                <li><p>RMIT Vietnam Business Club - SGS reserves the right to publish and display the Project, using its content and images for publicity, promotion, and non-profit purposes.</p></li>
                                <li><p>The Organising Team reserves the right to take photographs throughout the competition and use them for non-profit publications and other related materials in the future.</p></li>
                                <li><p>The Organising Team, RMIT Vietnam Business Club - SGS, sponsors, and RMIT will not use the candidate&apos;s work for any purpose other than grading, reviewing between judges/mentors, and filtering out the best works for awarding.</p></li>
                                <li><p>If a sponsor desires to use a candidate&apos;s idea, the sponsor and candidate will enter into a separate agreement. The Organising Team, RMIT Vietnam Business Club - SGS, and RMIT are not responsible for this consent or any ensuing circumstances.</p></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <div className="relative h-[150px]">
            <img
                src="/season13/RULES AND REGULATIONS/ROAD_FULL.png" 
                alt="road decoration"
                className="absolute bottom-0 left-1/2 scale-[400%] top-[-160%] -translate-x-1/2 w-[400px] opacity-30 pointer-events-none select-none z-0"
            />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Footer></Footer>
        </div>
    );
}

export default Rules;
