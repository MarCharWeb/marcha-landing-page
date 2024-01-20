import PageTitleRules from "../components/PageTitleRules";
import WhiteLight from '../assets/Logolight-white.png'
import Value from "../components/Value";
import Birdbg from "../assets/bird-bg.png"
import Footer from "../components/Footer";
import Avabg from '../assets/Ava-background.png'

const Rules = () => {
    return ( <main className="pt-20 container-media-padding" style={{
        backgroundImage: `url(${Avabg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '0% 0%',
        zIndex: 2,
    }}>
        <div id="rules&regulations"/>
        <PageTitleRules title={'RULES AND REGULATIONS'} type={2}></PageTitleRules>
        <section className="py-10 space-y-6"
        style={{
            backgroundImage: `url(${Birdbg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '250px 350px',
            backgroundPosition: '100% -2%',
            zIndex: '1',
        }}>
            <div className="space-y-1">
                <div className="flex items-center ">
                    <Value className="value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-primary-500 -pl-10">ENTRANT ELIGIBILITY</h4>
                </div>
                <div className="-pt-32">
                <ul className="pl-4 space-y-1 list-disc">
                    <li><p>Current university/college students from year <strong>01</strong> to year <strong>04</strong> who are living, studying and working in Vietnam or studying abroad but are Vietnamese students.</p></li>
                    <li><p>Members of organising teams and (sponsor) related parties are <strong>NOT</strong> allowed to join the competition.</p></li>
                    <li><p>Compulsory language used in the competition: <strong>100% English</strong></p></li>
                </ul>
                </div>
                
            </div>

            <div className="space-y-1 pt-5">
                <div className="flex items-center">
                    <Value className=" value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-primary-500 ">COMPETITION STRUCTURE</h4>
                </div>
                <ul className="pl-4 space-y-1 list-disc">
                    
                    <li><p> <strong className="italic">Round 1:</strong> Candidates have to independently complete <strong>an INDIVIDUAL online test.</strong></p></li>

                    <li>
                       <strong className="italic"> Round 2:</strong><ul className="pl-4 space-y-1 list-[circle]">
                            <li>
                                Each individual who successfully passes round 1 has to register for a team. Each team includes 03 to 04 members. 
                            </li>
                            <li>
                                One candidate is only allowed to register in one team. 
                            </li>
                            <li>
                                At the end of Round 2, the best <strong>TOP 16</strong> teams will be able to attend the final round. 
                            </li>
                        </ul>
                    </li>

                    <li>
                       <strong className="italic"> Round 3:</strong><ul className="pl-4 space-y-1 list-[circle]">
                            <li>
                                TOP 16 will compete to pick out the best <strong>4 teams.</strong> 
                            </li>
                            <li>
                                TOP 4 will present their final product at the Closing Ceremony. Teams that have members outside of Ho Chi Minh City will be pitching in hybrid mode.
                            </li>
                            
                        </ul>
                    </li>
                </ul>
            </div>


            <div className="space-y-1 pt-5">
                <div className="flex items-center ">
                    <Value className=" value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-primary-500 ">REGISTRATION TIMELINE</h4>
                </div>
                <ul className="pl-4 space-y-1 list-disc">
                    
                    <li><p>From <strong className="text-primary-500">October 24 to November 14</strong></p></li>

                </ul>

                <h4 className="font-bold ">CONDITIONS & RULES FOR EVENT PARTICIPATION</h4>
                <p className="font-bold">Workshops:</p>
                <ul className="pl-4 space-y-1 list-disc">
                    
                    <li><strong className="">Condition to join:</strong>
                        <ul className="pl-4 space-y-1 list-[circle]">
                            <li>For Workshop 1: candidates who have successfully made it to Round 2.</li>
                            <li>For Workshop 2: candidates who have successfully made it to TOP 16.</li>
                        </ul>
                        
                    </li>
                    <li><strong className="">Regulation for candidates:</strong>
                        <ul className="pl-4 space-y-1 list-[circle]">
                            <li>Join the event on time</li>
                            <li>Open the camera to communicate with guest speakers</li>
                            <li>Must not share screen or turn on the microphone while guest speakers are sharing</li>
                            <li>Must not spam messages in the chat box</li>
                            <li>Follow the instruction of displaying candidate name during the event</li>
                            <li>Have a respectful attitude when interacting with guest speakers and other candidates</li>
                        </ul>
                        
                    </li>

                </ul>
                <p>Marketing Challengers still has live broadcasts of this series on Facebook Group.</p>
            </div>

            <div className="space-y-1 pt-5">
                <div className="flex items-center">
                    <Value className=" value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-primary-500 ">SUBMISSION GUIDELINE</h4>
                </div>
                
                <ul className="pl-4 space-y-1 list-disc">
                   <li><p>Follow the instructions of the organisers. Contact as soon as technical problems occur.</p></li> 
                   <li><p>Candidates are encouraged not to submit the test too close to the deadline to avoid unnecessary technical problems.</p></li> 
                   <li><p>Candidates who submit assignments late or incorrectly will be disqualified.</p></li> 
                    
                </ul>
                
            </div>
            <div className="space-y-1 pt-5">
                <div className="flex items-center">
                    <Value className=" value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-primary-500 ">TERM & CONDITIONS</h4>
                </div>                
                <ul className="pl-4 space-y-1 list-disc">
                   <li><p>No registration fees necessary for entering the competition.</p></li> 
                   <li><p>All materials submitted must be candidates’ own work and must not be under the submission of other competitions. Any duplication of outside sources must be referenced properly to avoid plagiarism.</p></li> 
                   <li><p>Candidates must not reveal the datasets and questions from all rounds to ensure the confidentiality of the contest.</p></li> 
                   <li><p>Candidates must maintain a courteous and respectful demeanor throughout the competition toward the organizers, judges, sponsors, guest speakers, mentors, and other teams. Candidates shall not make deceptive comments that may affect the stakeholders involved.</p></li> 
                   <li><p>The Organising Team, RMIT Vietnam Business Club - SGS, sponsors and RMIT reserve the right to use all data, entries, photographs for communication purposes and other legal purposes.</p></li> 
                   <li><p>The Organising Team cannot be held responsible for lost, delayed, mislaid entries or any technical failure of online submission. A confirmation email will be sent if a team’s submission for every round is successful.</p></li> 
                   <li><p>The Organising Team reserves the right to prohibit entry or exclude any teams from the competition who we believe that they violated the rules and regulation listed above (will communicate to the recipients <strong>at least 24 hours before finalising this decision</strong>).</p></li> 
                   <li><p>These rules are subject to change without notice.</p></li> 
                   <li><p>By entering this contest, candidates accept the terms herein and agree to be bound by the above rules and regulations. Entrants further agree to be bound by the decisions of the Judging Panel and the Organizing Team, which shall be final and binding in all respects. Any concerns, conflicts or disputes <strong className="underline">MUST</strong> be sent to the Organizing team via this email: <strong className="text-primary-500">marketingchallengers.rmitbc@gmail.com</strong></p></li> 
                    
                </ul>
                
            </div>
            <div className="space-y-1 pt-5">
                <div className="flex items-center">
                    <Value className=" value" icon={WhiteLight} iconClassName="w-[120px] h-[120px] xl:w-[120px] xl:h-[120px]" />
                    <h4 className="font-bold uppercase text-primary-500 ">COPYRIGHTS OF MARKETING CHALLENGERS</h4>
                </div>    
                
                <ul className="pl-4 space-y-1 list-disc">
                   <li><p>Candidates must obey the copyright laws and not violate the copyrights of any other third parties. The Organisers of this Contest, RMIT Business Club, is not responsible for any breach by the candidate.</p></li> 
                   <li><p>RMIT Business Club reserves the right to publish and display the Project, using its content and images for publicity, promotion and non-payment purposes.</p></li> 
                   <li><p>The Organising Team, RMIT Vietnam Business Club - SGS, sponsors and RMIT will not use the candidate&apos; s work for any purpose other than grading and filtering out the best works for awarding.</p></li> 
                   <li><p>If a sponsor desires to use a candidate&apos; s idea, the sponsor and candidate will enter into a separate agreement. The Organizing Team, RMIT Vietnam Business Club - SGS, and RMIT <strong>are not responsible</strong> for this consent or any ensuing circumstances.</p></li> 
                   
                    
                </ul>
                
            </div>
        </section>
        <Footer></Footer>
    </main> 
    );
}
 
export default Rules;
