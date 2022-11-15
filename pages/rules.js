import PageTitle from "../components/PageTitle";

const Rules = () => {
    return ( <main className="pt-20 container-media-padding">
        <PageTitle title={'Rules & Regulations'} type={2}></PageTitle>
        <section className="py-10 space-y-6">
            <div className="space-y-1">
                <h4 className="font-bold uppercase text-primary-50">Entrant ELIGIBILITY</h4>
                <ul className="pl-4 space-y-1 list-disc">
                    <li><p>Current university/college students from year <strong>01</strong> to year <strong>04</strong> who are living, studying and working in Vietnam or studying abroad but are Vietnamese students.</p></li>
                    <li><p>Members of organising teams and (sponsor) related parties are <strong>NOT</strong> allowed to join the competition.</p></li>
                    <li><p>Compulsory language used in the competition: <strong>100% English</strong></p></li>
                </ul>
            </div>

            <div className="space-y-1">
                <h4 className="font-bold uppercase text-primary-50">COMPETITION STRUCTURE</h4>
                <ul className="pl-4 space-y-1 list-disc">
                    
                    <li><p> <strong className="italic">Round 1:</strong> Candidates have to independently complete <strong>an INDIVIDUAL online test.</strong></p></li>

                    <li>
                       <strong className="italic"> Round 2:</strong><ul className="pl-4 space-y-1 list-[square]">
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
                       <strong className="italic"> Round 3:</strong><ul className="pl-4 space-y-1 list-[square]">
                            <li>
                                TOP 16 will compete to pick out the best <strong>4 teams.</strong> 
                            </li>
                            <li>
                                TOP 4 will present their final product at the Closing Ceremony. Teams that have members outside of Ho Chi Minh City will be pitching in hybrid mode 
                            </li>
                            
                        </ul>
                    </li>
                </ul>
            </div>


            <div className="space-y-1">
                <h4 className="font-bold uppercase text-primary-50">REGISTRATION TIMELINE</h4>
                <ul className="pl-4 space-y-1 list-disc">
                    
                    <li><p>From <strong className="text-primary-500">October 24 to November 14</strong></p></li>

                </ul>
            </div>

            <div className="space-y-1">
                <h4 className="font-bold uppercase text-primary-50">CONDITIONS & RULES FOR EVENT PARTICIPATION</h4>
                <p className="font-bold">Workshops:</p>
                <ul className="pl-4 space-y-1 list-disc">
                    
                    <li><strong className="italic">Condition to join:</strong>
                        <ul className="space-y-1">
                            <li>For Workshop 1: candidates who have successfully made it to Round 2.</li>
                            <li>For Workshop 2: candidates who have successfully made it to TOP 16.</li>
                        </ul>
                        
                    </li>
                    <li><strong className="italic">Regulation for candidates:</strong>
                        <ul className="pl-4 space-y-1 list-[square]">
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

            <div className="space-y-1">
                <h4 className="font-bold uppercase text-primary-50">SUBMISSION GUIDELINE</h4>
                
                <ul className="space-y-1">
                   <li><p>Follow the instructions of the organisers. Contact as soon as technical problems occur.</p></li> 
                   <li><p>Candidates are encouraged not to submit the test too close to the deadline to avoid unnecessary technical problems.</p></li> 
                   <li><p>Candidates who submit assignments late or incorrectly will be disqualified.</p></li> 
                    
                </ul>
                
            </div>
            <div className="space-y-1">
                <h4 className="font-bold uppercase text-primary-50">TERM & CONDITIONS</h4>
                
                <ul className="space-y-1">
                   <li><p>No registration fees necessary for entering the competition.</p></li> 
                   <li><p>All materials submitted must be candidates’ own work and must not be under the submission of other competitions. Any duplication of outside sources must be referenced properly to avoid plagiarism.</p></li> 
                   <li><p>Candidates must not reveal the datasets and questions from all rounds to ensure the confidentiality of the contest.</p></li> 
                   <li><p>Candidates must maintain a courteous and respectful demeanor throughout the competition toward the organizers, judges, sponsors, guest speakers, mentors, and other teams. Candidates shall not make deceptive comments that may affect the stakeholders involved.</p></li> 
                   <li><p>The Organising Team, RMIT Vietnam Business Club, sponsors and RMIT reserve the right to use all data, entries, photographs for communication purposes and other legal purposes.</p></li> 
                    
                </ul>
                
            </div>
            
        </section>
    </main> );
}
 
export default Rules;