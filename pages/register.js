import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import { useFormik } from 'formik';
import { useState, useEffect, useRef} from "react";
import { doc, increment, setDoc, serverTimestamp, updateDoc, getDoc } from "firebase/firestore";
import {auth, db, storage} from '../config/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from "../context/AuthContext";
import * as Yup from 'yup';
import Button from "../components/Button";
import { useRouter } from "next/router";
import InternalLink from "../components/InternalLink";
import Head from "next/head";


const Register = () => {

    const {signup} = useAuth()
    const [errorOnSubmit, setErrorOnSubmit] = useState(null);
    const [overDue, setOverDue] = useState(true);
    const startTime = useRef(Date.now());
    const [formStep] = useState([
      {
        stepNumber: '01',
        stepDesc: 'Personal Information',
        isActive: true,
      },
      {
        stepNumber: '02',
        stepDesc: 'Identification Upload',
        isActive: false,
      },
      {
        stepNumber: '03',
        stepDesc: 'Account Set up',
        isActive : false,
      },
    ]);
    const [currentStep, setCurrentStep] = useState(0);
    //const [slot, setSlot] = useState(null);
    //const [slotType, setSlotType] = useState(null);
    const [cardUploadingMess, setCardUploadingMess] = useState(null);
    const [idUploadingMess, setIdUploadingMess] = useState(null);
    const [isSubmitted, setIsSumitted] = useState(false);
    const successMessRef = useRef()
    const formTitleRef = useRef()
    const handleNext = () =>{
      if (currentStep < 2){
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

    const updateAvgTimeCompleted = async (formCompleted) => {
          const statsRef = doc(db, "metadata", "stats");
          const statsSnap =  await getDoc(statsRef);
          
          let submissions;
          let preAvgTimeCompleted;
          if (statsSnap.exists()) {
              submissions = statsSnap.data().submissions;
              preAvgTimeCompleted = statsSnap.data().timeCompletedInMillis
          } else {
            // doc.data() will be undefined in this case
            console.log("Cannot calculate form time completed!");
          }

        let avgTimeCompleted = (preAvgTimeCompleted * (submissions - 1) + formCompleted) / submissions
        let avgTimeCompletedInSec = Math.floor(avgTimeCompleted / 1000); //convert to sec
          await updateDoc(statsRef, {timeCompleted: `${parseInt(avgTimeCompletedInSec/60)}m ${avgTimeCompletedInSec % 60}s`}) 
          await updateDoc(statsRef, {timeCompletedInMillis: avgTimeCompleted}) 
    }

    const uploadStorage = async (e) => {
      const file = e.target.files[0];
      const fileSize = file.size / 1024 / 1024;

      if (fileSize <= 3){
          setErrorOnSubmit(null)
          const photoRef = ref(storage, file.name);

          if (e.target.name === "id-card-img"){
              setIdUploadingMess(`Uploading ${file.name}...`)

          }else if (e.target.name === "student-card-img"){
              setCardUploadingMess(`Uploading ${file.name}...`)
            
          }

          await uploadBytes(photoRef, file);
          setCardUploadingMess(null)
          setIdUploadingMess(null)
          
          if (e.target.name === "id-card-img"){
              formik.setFieldValue("idPhoto", file.name);

          }else if (e.target.name === "student-card-img"){
              formik.setFieldValue("studentPhoto", file.name);
            
          }
      }else{
        setErrorOnSubmit('Exceed file size limit!')
      }
      

      
    }

    // useEffect(() => {
    //   if (isSubmitted){
    //     // console.log('hey')
    //     successMessRef.current.scrollIntoView({ behavior: 'smooth' })
    //   }  
    // }, [isSubmitted])

    // useEffect(() => {
    //   const updateOpenStats = async () => {
    //     await updateDoc(doc(db, "metadata", "stats"), {openClicks: increment(1)})
    //   }

    //   updateOpenStats();
    // }, [])

    useEffect(() => {
        let today = new Date();
        let deadline = new Date(2022, 10, 15, 12, 5);

        if (today.getTime() >= deadline.getTime()){
          setOverDue(true);
        }
    }, [])

    const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      dob: '',
      major: '',
      university: '',
      idPhoto: '',
      studentPhoto: '',
      phone: '',
      confirmPassword: ''

    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required("Name is required"),
      email: Yup.string().trim().email("Invalid email address").test({
        name: 'is-school-email',
        test: (value) => value == null || !value.includes("edu.vn"), 
        message: "School email (example@school.edu.vn) is not allowed!"
      }).required("Email is required"),
      dob: Yup.string().required("Date of birth is required"),
      university: Yup.string().trim().required("University is required"),
      phone: Yup.string().trim().required("Phone is required"),
      major: Yup.string().trim().required("Major is required"),
      password: Yup.string().min(8, "Password must have at least 8 characters").required("Password is required"),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required("This field cannot be empty!"),
      idPhoto: Yup.string().required("Identification photo is required!"),
      studentPhoto: Yup.string().required("Student card photo is required!"),

    })
    ,
    onSubmit: async (values) => {
         
        if (formik.isValid){
            setErrorOnSubmit(null);
            formik.setSubmitting(true);

            try {
               await signup(values.email, values.password);
              
            } catch (error) {
              console.log(error);
               if (error.code == 'auth/email-already-in-use') {
                    setErrorOnSubmit('This email has already been used.');
                    return;
                  } 
            }
           
             const idPhotoUrl =  await getDownloadURL(ref(storage, values.idPhoto));
             const studentPhotoUrl = await getDownloadURL(ref(storage, values.studentPhoto));
             //await fetchSlots();

             const slotSnap =  await getDoc(doc(db, "metadata", "slots"));
            if (slotSnap.exists()) {
               let slot = new Date(2022, 10, 16);
               let slotType = 'slot1';
               
              if (slotSnap.data()["slot1"] <= slotSnap.data()["slot2"]){

                //pick slot 1 : 11/16/2022
                slot = new Date(2022, 10, 16);
                slotType = 'slot1'
              }else{
                //pick slot 2
                slot = new Date(2022, 10, 17);
                slotType = 'slot2'
              }
              await setDoc(doc(db, "users", values.email), {
                email: values.email,
                name: values.name,
                dob: values.dob,
                major: values.major,
                phone: values.phone,
                university: values.university,
                idPhoto: idPhotoUrl,
                studentPhoto: studentPhotoUrl,
                createdAt: serverTimestamp(),
                result: 0,
                timeCompleted: 0,
                slot: slot
                
              });    
              await updateDoc(doc(db, "metadata", "slots"), {[slotType]: increment(1)})
              await updateDoc(doc(db, "metadata", "stats"), {submissions: increment(1)})
            
              await updateAvgTimeCompleted(Date.now() - startTime.current);
              
          
              formik.setSubmitting(false);
              setIsSumitted(true);
              let res = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({email: values.email})
              })

              if (res.status == 200){
                await updateDoc(doc(db, "users", values.email), {
                  hasSendEmail: true
                })
              }
              
              
              
              
            } else {
              // doc.data() will be undefined in this case
              console.log("Cannot get slot time info!");

              setErrorOnSubmit("Sorry we cannot assign your slot. Please contact us for assistance")
            }

            
              
            
            
            
          
            
            formik.setSubmitting(false);
              
        }else{
          setErrorOnSubmit("Some fields have not been properly inputted or been missed. Please check again to continue the registration!");
        }
        
        
      
    }
    })
    return ( <section className="relative ">
        <Head>
          <title>Marketing Challengers Season 11</title>
          <link rel="icon" type="image/png" sizes='16x16' href="/favi.png"></link>
          <link rel="icon" type="image/png" sizes='32x32' href="/favi-lg.png"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          
        </Head>
        <Hero >
          <div className='absolute flex flex-col pt-20 xl:pt-[150px] items-center w-full '>
               <PageTitle type={2} title='Individual Register'></PageTitle>
            <div  className="w-[95vw] xl:w-1/2 mx-auto mt-4 xl:mt-10 bg-bg-50 rounded-2xl pt-6 md:pt-10 xl:pt-14 min-h-[850px]  md:min-h-[900px]">
                { overDue ? <div className="w-3/4 p-2 mx-auto"> 
                  <p ref={successMessRef}  className='mb-2 font-bold rounded text-headline-21 text-success-900'>Form has been closed!</p>
                  <InternalLink className={'mt-4'}></InternalLink> 
                  </div> : null
                // isSubmitted ? <div className="w-3/4 p-2 mx-auto"> 
                //   <p ref={successMessRef}  className='mb-2 font-bold rounded text-headline-21 text-success-900'>Successfully registered! A confirmation email with Round 1 information will be sent to you shortly (please check your Inbox and Spam folder). If you have not received it within 1 hour, please contact us for assistance. <br/> Congratulations! By registering, you have also received a gift from our Diamond Sponsor - Fonos, which is an audiobook named “Tuần làm việc 4H”, valuing at 129,000 VND. Please click the following link to receive ❤️: <a target={'_blank'} className='italic underline hover:text-primary-500' rel="noreferrer" href='https://fonos.vn/marketing-challengers-11'>https://fonos.vn/marketing-challengers-11</a></p>
                //   <InternalLink className={'mt-4'}></InternalLink> 
                //   </div> : 
                //   <form className="w-10/12 mx-auto space-y-2 md:space-y-3 lg:space-y-5 md:w-2/3 text-headline-21 md:text-body-18 text-bg-500" onSubmit={formik.handleSubmit}>
                //     <h2 ref={formTitleRef} className="font-bold text-primary-600 text-lead-24">Step {currentStep + 1}/{formStep.length}: {formStep[currentStep].stepDesc}</h2>

                //     {errorOnSubmit !== null && <p className='p-2 mb-2 font-bold rounded text-headline-21 lg:text-small-16 bg-error-500 text-error-100'>{errorOnSubmit}</p>}
                //     {!formik.isValid && currentStep == 2 && <p className='p-2 mb-2 font-bold rounded text-headline-21 lg:text-small-16 bg-error-500 text-error-100'>Some fields have not been properly inputted! Please check all the steps again</p>}

                //     {/* Step 1: Personal Input */}
                //     {currentStep == 0 && <div className='space-y-4'>
                //         <div className='space-y-1 lg:space-y-0.5'>
                //           <label className='block font-bold' htmlFor="name">Full Name*</label>
                //           <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="text" name='name' value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='name'/>
                //           {formik.touched.name && formik.errors.name && <p className='font-medium text-XSmall-12 md:text-small-16 text-error-500 '>{formik.errors.name}</p> }
                //         </div>
                //       <div className='space-y-1 lg:space-y-0.5'>
                //         <label className='block font-bold text-bg-950' htmlFor="dob">Date of Birth*</label>
                //         <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="date" name='dob'  value={formik.values.dob} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='01/01/2000'/>
                //         {formik.touched.dob && formik.errors.dob && <p className='font-medium text-XSmall-12 md:text-small-16 text-error-500 '>{formik.errors.dob}</p> }

                //       </div>
                //     <div  className='space-y-1 lg:space-y-0.5'>
                //       <label className='block font-bold text-bg-950' htmlFor="phone">Phone Number*</label>
                //       <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="text" name='phone'  value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='0999999999'/>
                //       {formik.touched.phone && formik.errors.phone && <p className='font-medium text-XSmall-12 md:text-small-16 text-error-500 '>{formik.errors.phone}</p> }

                //     </div>
                //     <div  className='space-y-1 lg:space-y-0.5'>
                //       <label className='block font-bold text-bg-950' htmlFor="major">Major*</label>
                //       <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="text" name='major'  value={formik.values.major} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Digital Marketing'/>
                //               {formik.touched.major && formik.errors.major && <p className='font-medium text-XSmall-12 md:text-small-16 text-error-500 '>{formik.errors.major}</p> }

                //     </div>
                //     <div  className='space-y-1 lg:space-y-0.5'>
                //       <label className='block font-bold text-bg-950' htmlFor="university">University*</label>
                //       <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="text" name='university'  value={formik.values.university} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='RMIT'/>
                //       {formik.touched.university && formik.errors.university && <p className='font-medium text-XSmall-12 md:text-small-16 text-error-500 '>{formik.errors.university}</p> }


                //     </div>
                //     </div>}


                //     {/* Step 2: File Upload */}
                //     {currentStep == 1 && <div className='space-y-7 md:space-y-4'>
                //         <div  className='space-y-1.5 lg:space-y-0.5'>
                //           <label className='block font-bold text-bg-950' htmlFor="id-card-img">01 photo of your Idetification Card (CMND)*</label>
                //           <p className='text-grey-950 text-body-18 lg:text-small-16'>File size is no larger than 3MB. File name is set in the following format: name-id.png (ex: nguyenvanminh-id.png)</p>
                //           <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="file" name='id-card-img'  onChange={(e) => {uploadStorage(e)}} />
                //           {formik.touched.idPhoto && formik.errors.idPhoto && <p className='text-small-16 text-error-500 '>{formik.errors.idPhoto}</p>}
                //           {idUploadingMess && <p className='text-success-500 text-small-16 '>{idUploadingMess}</p>}
                //           {formik.values.idPhoto && <p className='text-success-500 text-small-16 '>Uploaded {formik.values.idPhoto} successfully!</p>}

                //         </div>
                //       <div  className='space-y-1.5 lg:space-y-0.5'>
                //         <label className='block font-bold text-bg-950' htmlFor="student-card-img">01 photo of your Student Card*</label>
                //         <p className='text-grey-950 text-body-18 lg:text-small-16'>File size is no larger than 3MB. File name is set in the following format: name-card.png (ex: nguyenvanminh-card.png)</p>
                //         <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="file" name='student-card-img' onChange={(e) => {uploadStorage(e)}}/>
                //         {formik.touched.studentPhoto && formik.errors.studentPhoto && <p className='text-small-16 text-error-500 '>{formik.errors.studentPhoto}</p>}
                //         {cardUploadingMess && <p className='text-success-500 text-small-16 '>{cardUploadingMess}</p>}
                //         {formik.values.studentPhoto && <p className='text-success-500 text-small-16 '>Uploaded {formik.values.studentPhoto} successfully!</p>}

                //       </div>
                //     </div>}

                //     {/* Step 3: Account set up */}
                //     {currentStep == 2 && <div className='space-y-7 md:space-y-4'>
                //         <div  className='space-y-1.5 lg:space-y-0.5'>
                //           <label className='block font-bold text-bg-950' htmlFor="email">Email*</label>
                //           <p className='text-grey-950 text-small-16'>Please your personal email to register. School email is not allowed</p> 
                //           <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='johndoe@gmail.com'/>
                //         {formik.touched.email && formik.errors.email && <p className='text-small-16 text-error-500 '>{formik.errors.email}</p> }

                //         </div>
                        
                //         <div className='space-y-1.5 lg:space-y-0.5'>
                //             <label className='block font-bold text-bg-950' htmlFor="password">Password*</label>
                //             <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="password" name='password'  value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                //             {formik.touched.password && formik.errors.password && <p className='text-small-16 text-error-500 '>{formik.errors.password}</p> }
                //         </div>

                //         <div className='space-y-1.5 lg:space-y-0.5'>
                //             <label className='block font-bold text-bg-950' htmlFor="confirmPassword">Confirm Password*</label>
                //             <input className='w-full px-4 py-2 bg-[#E9DCF9]  rounded' type="password" name='confirmPassword' onBlur={formik.handleBlur}  value={formik.values.confirmPassword} onChange={formik.handleChange}  />
                //             {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className='text-small-16 text-error-500 '>{formik.errors.confirmPassword}</p> }
                //         </div>
                //     </div>}
                    
                //     {/* Button list */}
                //     <div className='flex justify-between pt-2 md:pt-0'>
                //         <Button onClick={handleBack} text={'Back'} isPrimary={false}/>
                //         <Button loadingText='Signing up...' isLoading={formik.isSubmitting}  type={currentStep == 2 ? 'submit' : 'button'} onClick={currentStep == 2 ? formik.handleSubmit : handleNext} className={!formik.isValid && currentStep == 2 ? 'opacity-50 pointer-events-none' : ''} text={currentStep === 2 ? 'Register' : 'Next'} />
                //     </div>
                // </form>
                }
            </div>
          </div>
           
        </Hero>
    </section> );
}
 
export default Register;