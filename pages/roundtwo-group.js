import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import { useFormik   } from 'formik';
import { useState, useEffect, useRef} from "react";
import { doc,  serverTimestamp, getDoc, writeBatch } from "firebase/firestore";
import {auth, db, storage} from '../config/firebase'

import { useAuth } from "../context/AuthContext";
import * as Yup from 'yup';
import Button from "../components/Button";

import InternalLink from "../components/InternalLink";


const Register = () => {
    
    const [errorOnSubmit, setErrorOnSubmit] = useState(null);

    
    const [formStep] = useState([
    
      {
        stepNumber: '01',
        stepDesc: "Enter All Members’ Emails",
        isActive: true,
      },
      {
        stepNumber: '02',
        stepDesc: 'Pick Group Name & Round 2 Topic',
        isActive : false,
      },
    ]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitted, setIsSumitted] = useState(false);
    const successMessRef = useRef()
    const formTitleRef = useRef()
    const handleNext = () =>{
      if (currentStep < 1){
        setCurrentStep(step => step+=1);
        formTitleRef.current.scrollIntoView({ behavior: 'smooth' })

        
      }
    
    }
    const handleBack = () =>{

      if (currentStep > 0 ){
        setCurrentStep(step => step-=1);
        formTitleRef.current.scrollIntoView({ behavior: 'smooth' })
      }
      
    }


    useEffect(() => {
      if (isSubmitted){
        // console.log('hey')
        successMessRef.current.scrollIntoView({ behavior: 'smooth' })
      }  
    }, [isSubmitted])



    const formik = useFormik({
    initialValues: {
      
      email1: '',
      password1: '',
      
      email2: '',

      email3: '',
      
      email4: '',
      groupName:'',
      round2Topic:'',
    
    },
    validationSchema: Yup.object({
      email1: Yup.string().trim().email("Invalid email address").test({
        name: 'is-school-email',
        test: (value) => value == null || !value.includes("edu.vn"), 
        message: "School email (example@school.edu.vn) is not allowed!"
      }),
      // password1: Yup.string().min(8, "Password must have at least 8 characters").required("Password is required"),
      
      email2: Yup.string().trim().email("Invalid email address").test({
        name: 'is-school-email',
        test: (value) => value == null || !value.includes("edu.vn"), 
        message: "School email (example@school.edu.vn) is not allowed!"
      }),
      
      email3: Yup.string().trim().email("Invalid email address").test({
        name: 'is-school-email',
        test: (value) => value == null || !value.includes("edu.vn"), 
        message: "School email (example@school.edu.vn) is not allowed!"
      }),
      
      email4: Yup.string().trim().email("Invalid email address").test({
        name: 'is-school-email',
        test: (value) => value == null || !value.includes("edu.vn"), 
        message: "School email (example@school.edu.vn) is not allowed!"
      }),

      groupName: Yup.string().trim().required("Group Name is required"),
      round2Topic: Yup.string().trim().required("Please pick a topic for Round 2"),

    })
    ,
    onSubmit: async (values) => {
        if (formik.isValid){
            setErrorOnSubmit(null);
            formik.setSubmitting(true);

            try {
                let listMailsValid = ['', '', '', ''];
                let allMailsValid = false;
                let groupNameValid = true;
                const email1Snap = values.email1 !== '' ? await getDoc(doc(db, "users", values.email1)) : null;
                const email2Snap = values.email2 !== '' ? await getDoc(doc(db, "users", values.email2)) : null;
                const email3Snap = values.email3 !== '' ? await getDoc(doc(db, "users", values.email3)) : null;
                const email4Snap = values.email4 !== '' ? await getDoc(doc(db, "users", values.email4)) : null;
                const groupNameSnap =  await getDoc(doc(db, "users", values.groupName));

                if (email1Snap && email1Snap.exists()) {
                    if (email1Snap.data().rank <= 400){
                      listMailsValid[0] = true;
                    }else{
                      listMailsValid[0] = false;
                    }
                    
                } else if (values.email1 !== ''){
                    listMailsValid[0] = false;
                }

                if (email2Snap &&email2Snap.exists()) {
                    if (email2Snap.data().rank <= 400){
                      listMailsValid[1] = true;
                    }else{
                      listMailsValid[1] = false;
                    }
                     
                } else if (values.email2 !== '') {
                  listMailsValid[1] = false;
                } 

                if (email3Snap && email3Snap.exists()) {
                  if (email3Snap.data().rank <= 400){
                      listMailsValid[2] = true;
                  }else {
                    listMailsValid[2] = false;
                  }
                
                } else if (values.email3 !== ''){
                  listMailsValid[2] = false;
                }

                if (email4Snap && email4Snap.exists()) {
                    if (email4Snap.data().rank <= 400){
                      listMailsValid[3] = true;
                    } else{
                       listMailsValid[3] = false;
                    }
                  
                } else if (values.email4 !== '') {
                  listMailsValid[3] = false;
                }
                
                if (groupNameSnap.exists()) {
                    groupNameValid = false;
                    setErrorOnSubmit("Group name already exists!")
                } 

                if ((listMailsValid[0] || listMailsValid[0] === '') && (listMailsValid[1] || listMailsValid[1] === '')  &&  (listMailsValid[2] || listMailsValid[2] === '') &&  (listMailsValid[3] || listMailsValid[3] === '')){
                    allMailsValid = true;
                }else{
                  let errMess =  "Invalid email for";
                  for (let i = 0; i <= 3; i++){
                      if (!listMailsValid[i] && listMailsValid[i] !== ''){
                        errMess += ` member ${i+1},`;
                      }
                  }
                  console.log("invalid email")
                  setErrorOnSubmit(errMess);
                }

                

                if (allMailsValid && groupNameValid){
                    // console.log(listMailsValid)
                    // console.log(values.round2Topic)
                    const batch = writeBatch(db);

                    if (values.email1 !== ''){
                        batch.update(doc(db, "users", values.email1), {"group": values.groupName, "round2Topic": values.round2Topic, "round2PickAt": serverTimestamp()});
                    }
                    
                    if (values.email2 !== ''){
                       batch.update(doc(db, "users", values.email2), {"group": values.groupName, "round2Topic": values.round2Topic, "round2PickAt": serverTimestamp()});
                    }

                    if (values.email3 !== ''){
                       batch.update(doc(db, "users", values.email3), {"group": values.groupName, "round2Topic": values.round2Topic, "round2PickAt": serverTimestamp()});
                    }
                   
                   if (values.email4 !== ''){
                      batch.update(doc(db, "users", values.email4), {"group": values.groupName, "round2Topic": values.round2Topic, "round2PickAt": serverTimestamp()});
                   }
                    

                    // Commit the batch
                    await batch.commit();
                    formik.setSubmitting(false);
                    setIsSumitted(true);
                
                    
                    
                }
                
                formik.setSubmitting(false);

            } catch (error) {
              console.log(error);

            }
           
              
        }else{
          setErrorOnSubmit("Some fields have not been properly inputted or been missed. Please check again to continue the registration!");
        }
        
        
      
    }
    })
    return ( <section className="relative ">
        <Hero >
          <div className='absolute flex flex-col pt-20 xl:pt-[150px] items-center w-full '>
               <PageTitle type={2} subTitle='round 2' title='Group Pick'></PageTitle>
            <div  className="w-[95vw] xl:w-1/2 mx-auto mt-4 xl:mt-10 bg-bg-50 rounded-2xl pt-6 md:pt-10 xl:pt-14 min-h-[850px]  2xl:min-h-[900px]">
                {isSubmitted ? <div className="w-3/4 p-2 mx-auto"> 
                  <p ref={successMessRef}  className='mb-2 font-bold rounded text-headline-21 text-success-900'>Successfully registered group!</p>
                  <InternalLink></InternalLink> 
                  </div> : 
                  <form className="w-10/12 mx-auto space-y-2 md:space-y-4 lg:space-y-8 md:w-2/3 text-headline-21 md:text-body-18 text-bg-500" onSubmit={formik.handleSubmit}>
                    <h2 ref={formTitleRef} className="font-bold text-primary-600 text-lead-24">Step {currentStep + 1}/{formStep.length}: {formStep[currentStep].stepDesc}</h2>

                    {errorOnSubmit !== null && <p className='p-2 mb-2 font-bold rounded text-headline-21 lg:text-small-16 bg-error-500 text-error-100'>{errorOnSubmit}</p>}
                    {!formik.isValid && currentStep == 1 && <p className='p-2 mb-2 font-bold rounded text-headline-21 lg:text-small-16 bg-error-500 text-error-100'>Some fields have not been properly inputted! Please check all the steps again</p>}

                    {/* Step 1: Personal Input */}
                    {currentStep == 0 && <div className='space-y-7 md:space-y-4'>

                        {/* Email of member 1 */}
                        <div className='space-y-1.5 lg:space-y-0.5'>
                          <label className='block font-bold text-bg-950' htmlFor="email1">Email of Member 1:</label>
                          <p className='text-grey-950 text-small-16'>Please enter the registered email</p> 
                          <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="email" name='email1' value={formik.values.email1} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='mem1@gmail.com'/>
                        {formik.touched.email1 && formik.errors.email1 && <p className='text-small-16 text-error-500 '>{formik.errors.email1}</p> }
                        </div>

                         {/* Email of member 2 */}
                         <div className='space-y-1.5 lg:space-y-0.5'>
                          <label className='block font-bold text-bg-950' htmlFor="email2">Email of Member 2:</label>
                         <p className='text-grey-950 text-small-16'>Please enter the registered email</p> 
                          <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="email" name='email2' value={formik.values.email2} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='mem2@gmail.com'/>
                        {formik.touched.email2 && formik.errors.email2 && <p className='text-small-16 text-error-500 '>{formik.errors.email2}</p> }
                        </div>

                        {/* Email of member 3 */}
                         <div className='space-y-1.5 lg:space-y-0.5'>
                          <label className='block font-bold text-bg-950' htmlFor="email3">Email of Member 3:</label>
                          <p className='text-grey-950 text-small-16'>Please enter the registered email</p> 
                          <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="email" name='email3' value={formik.values.email3} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='mem3@gmail.com'/>
                        {formik.touched.email3 && formik.errors.email3 && <p className='text-small-16 text-error-500 '>{formik.errors.email3}</p> }
                        </div>
                        
                        {/* Email of member 4 */}
                         <div className='space-y-1.5 lg:space-y-0.5'>
                          <label className='block font-bold text-bg-950' htmlFor="email4">Email of Member 4:</label>
                          <p className='text-grey-950 text-small-16'>Please enter the registered email</p>  
                          <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="email" name='email4' value={formik.values.email4} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='mem4@gmail.com'/>
                        {formik.touched.email4 && formik.errors.email4 && <p className='text-small-16 text-error-500 '>{formik.errors.email4}</p> }
                        </div>
                    
                    </div>}

                    {/* Step 3: Account set up */}
                    {currentStep == 1 && <div className='space-y-7 md:space-y-4'>
                        
                        <div className='space-y-1.5 lg:space-y-0.5'>
                            <label className='block font-bold text-bg-950' htmlFor="groupName">Group Name*</label>
                            <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="text" name='groupName' value={formik.values.groupName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.groupName && formik.errors.groupName && <p className='text-small-16 text-error-500 '>{formik.errors.groupName}</p> }
                        </div>

                        <div className='space-y-2 lg:space-y-0.5'>
                            <label className='block font-bold text-bg-950'>Topic for Round 2*</label>
                            

                            <div className="space-y-5 md:space-y-4 lg:space-y-2 xl:space-y-1.5">
                                <label className="block" ><input type="radio" name="round2Topic" value="topic1" onChange={formik.getFieldProps("round2Topic").onChange} /> Topic 1</label>
                                <label className="block" ><input type="radio" name="round2Topic" value="topic2" onChange={formik.getFieldProps("round2Topic").onChange} /> Topic 2</label>
                            </div>
                            
                           
                            
                            
                        </div>
                    </div>}
                    
                    {/* Button list */}
                    <div className='flex justify-between pt-4 md:pt-2 lg:pt-0'>
                        <Button onClick={handleBack} text={'Back'} isPrimary={false}/>
                        <Button loadingText='Picking...' isLoading={formik.isSubmitting}  type={currentStep == 1 ? 'submit' : 'button'} onClick={currentStep == 1 ? formik.handleSubmit : handleNext} className={!formik.isValid && currentStep == 1 ? 'opacity-50 pointer-events-none' : ''} text={currentStep === 1 ? 'Submit' : 'Next'} />
                    </div>
                </form>}
            </div>
          </div>
           
        </Hero>
    </section> );
}
 
export default Register;