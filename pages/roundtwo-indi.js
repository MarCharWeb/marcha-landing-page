import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import { useFormik   } from 'formik';
import { useState, useEffect, useRef} from "react";
import { doc,  serverTimestamp, getDoc, writeBatch, updateDoc } from "firebase/firestore";
import {auth, db, storage} from '../config/firebase'

import { useAuth } from "../context/AuthContext";
import * as Yup from 'yup';
import Button from "../components/Button";

import InternalLink from "../components/InternalLink";


const Register = () => {
    
    const [errorOnSubmit, setErrorOnSubmit] = useState(null);

    
    // const [formStep] = useState([
    
    //   {
    //     stepNumber: '01',
    //     stepDesc: "Enter Your Email & Topic",
    //     isActive: true,
    //   },
    //   {
    //     stepNumber: '02',
    //     stepDesc: 'Pick Group Name & Round 2 Topic',
    //     isActive : false,
    //   },
    // ]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitted, setIsSumitted] = useState(false);
    const successMessRef = useRef()
    // const formTitleRef = useRef()
    // const handleNext = () =>{
    //   if (currentStep < 0){
    //     setCurrentStep(step => step+=1);
    //     formTitleRef.current.scrollIntoView({ behavior: 'smooth' })

        
    //   }
    
    // }
    // const handleBack = () =>{

    //   if (currentStep > 0 ){
    //     setCurrentStep(step => step-=1);
    //     formTitleRef.current.scrollIntoView({ behavior: 'smooth' })
    //   }
      
    // }


    useEffect(() => {
      if (isSubmitted){
        // console.log('hey')
        successMessRef.current.scrollIntoView({ behavior: 'smooth' })
      }  
    }, [isSubmitted])



    const formik = useFormik({
    initialValues: {
      
      email: '',
      round2Topic:'',
    
    },
    validationSchema: Yup.object({
      email: Yup.string().trim().email("Invalid email address").test({
        name: 'is-school-email',
        test: (value) => value == null || !value.includes("edu.vn"), 
        message: "School email (example@school.edu.vn) is not allowed!"
      }).required("Email is required"),
      
      round2Topic: Yup.string().trim().required("Please pick a topic for Round 2"),

    })
    ,
    onSubmit: async (values) => {
        if (formik.isValid){
            setErrorOnSubmit(null);
            formik.setSubmitting(true);

            try {
          
                const emailSnap =  await getDoc(doc(db, "users", values.email));
                const isPicked = true;
                if (emailSnap.exists()) {
                    if (emailSnap.data().rank <= 400 && !emailSnap.data().hasOwnProperty("round2Topic")){
                      await updateDoc(doc(db, "users", values.email), {"round2Topic": values.round2Topic, "round2PickAt": serverTimestamp()})
                      formik.setSubmitting(false);
                      setIsSumitted(true);
                      console.log("done")
                       
                    } else if (emailSnap.data().rank <= 400 &&  emailSnap.data().hasOwnProperty("round2Topic")){
                        setErrorOnSubmit("You already chose the topic");
                    }else{
                      setErrorOnSubmit("Invalid Email");
                    }

                } else{
                    setErrorOnSubmit("Email Not Found");
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
               <PageTitle type={2} subTitle='round 2' title='Individual Pick'></PageTitle>
            <div  className="w-[95vw] xl:w-1/2 mx-auto mt-4 xl:mt-10 bg-bg-50 rounded-2xl pt-6 md:pt-10 xl:pt-14 min-h-[850px]  2xl:min-h-[900px]">
                {isSubmitted ? <div className="w-3/4 p-2 mx-auto"> 
                  <p ref={successMessRef} className='mb-2 font-bold rounded text-headline-21 text-success-900'>Successfully registered topic!</p>
                  <InternalLink></InternalLink> 
                  </div> : 
                  <form className="w-10/12 mx-auto space-y-2 md:space-y-4 lg:space-y-8 md:w-2/3 text-headline-21 md:text-body-18 text-bg-500" onSubmit={formik.handleSubmit}>
                    <h2 className="font-bold text-primary-600 text-lead-24">Enter Your Email & Topic</h2>

                    {errorOnSubmit !== null && <p className='p-2 mb-2 font-bold rounded text-headline-21 lg:text-small-16 bg-error-500 text-error-100'>{errorOnSubmit}</p>}
                    {/* {!formik.isValid && currentStep == 0 && <p className='p-2 mb-2 font-bold rounded text-headline-21 lg:text-small-16 bg-error-500 text-error-100'>Some fields have not been properly inputted! Please check again</p>} */}

                    <div className='space-y-7 md:space-y-4'>
                      {/* Email input */}
                        <div className='space-y-1.5 lg:space-y-0.5'>
                          <label className='block font-bold text-bg-950' htmlFor="email">Your Registered Email*</label>
                          <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='your@gmail.com'/>
                        {formik.touched.email && formik.errors.email && <p className='text-small-16 text-error-500 '>{formik.errors.email}</p> }
                        </div>
                        
                        <div className='space-y-2 lg:space-y-0.5'>
                            <label className='block font-bold text-bg-950'>Topic for Round 2*</label>
                            

                            <div className="space-y-5 md:space-y-4 lg:space-y-2 xl:space-y-1.5">
                                <label className="block" ><input type="radio" name="round2Topic" value="topic1" onChange={formik.getFieldProps("round2Topic").onChange} /> Topic 1</label>
                                <label className="block" ><input type="radio" name="round2Topic" value="topic2" onChange={formik.getFieldProps("round2Topic").onChange} /> Topic 2</label>
                            </div>
                            
                           
                            
                            
                        </div>
                    </div>
                    
                    {/* Button list */}
                    <div className='flex justify-between pt-4 md:pt-2 lg:pt-0'>
                        {/* <Button onClick={handleBack} text={'Back'} isPrimary={false}/> */}
                        <Button loadingText='Picking...' isLoading={formik.isSubmitting}  type={'submit' } onClick={formik.handleSubmit} className={!formik.isValid ? 'opacity-50 pointer-events-none' : ''} text={'Submit'} />
                    </div>
                </form>}
            </div>
          </div>
           
        </Hero>
    </section> );
}
 
export default Register;