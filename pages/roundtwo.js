import { useFormik } from "formik";
import Button from "../components/Button";
import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import { useRouter } from "next/router";
import * as Yup from 'yup';
import { useState } from "react";


const RoundTwo = () => {
    const [errorOnSubmit, setErrorOnSubmit] = useState(null);
    const route = useRouter();
    const formik = useFormik({
        initialValues: {
            registerType:'',
        
        },

        validationSchema: Yup.object({        
            registerType: Yup.string().trim().required("Please pick how you register for round 2"),

        })
        ,
    onSubmit: (values) => {
        if (formik.isValid){
            if (values.registerType == 'group'){
                route.push('/roundtwo-group');
            }else if (values.registerType == 'indi'){
                route.push('/roundtwo-indi');
            }
           
              
        }else{
          setErrorOnSubmit("Some fields have not been properly inputted or been missed. Please check again to continue the registration!");
        }
        
        
      
    }
    })
    return ( <section className="relative">
        <Hero>
             <div className='absolute flex flex-col pt-20 xl:pt-[150px] items-center w-full '>
               <PageTitle type={2} subTitle='round 2' title='Topic Register'></PageTitle>
            <div  className="w-[95vw] xl:w-1/2 mx-auto mt-4 xl:mt-10 bg-bg-50 rounded-2xl pt-6 md:pt-10 xl:pt-14 min-h-[850px]  2xl:min-h-[900px]">
                { 
                  <form className="w-10/12 mx-auto space-y-2 md:space-y-4 lg:space-y-8 md:w-2/3 text-headline-21 md:text-body-18 text-bg-500" onSubmit={formik.handleSubmit}>
                    <h2 className="font-bold text-primary-600 text-lead-24">Select how would you like to register</h2>

                    {errorOnSubmit !== null && <p className='p-2 mb-2 font-bold rounded text-headline-21 lg:text-small-16 bg-error-500 text-error-100'>{errorOnSubmit}</p>}

                    <div className='space-y-2 lg:space-y-0.5'>
                        <label className='block font-bold text-bg-950'>If you have already had a group of at least 3 members, select Group Pick. Otherwise, please select Individual Pick and we will help you find one.*</label>
                        

                        <div className="space-y-5 md:space-y-4 lg:space-y-2 xl:space-y-1.5">
                            <label className="block" ><input type="radio" name="registerType" value="group" onChange={formik.getFieldProps("round2Topic").onChange} /> Group Pick</label>
                            <label className="block" ><input type="radio" name="registerType" value="indi" onChange={formik.getFieldProps("round2Topic").onChange} /> Individual Pick</label>
                        </div>
                
                        
                    </div>
                    
                    
                    {/* Button list */}
                    <div className='flex justify-between pt-4 md:pt-2 lg:pt-0'>
                        
                        <Button loadingText='Picking...' isLoading={formik.isSubmitting}  type={'submit' } onClick={formik.handleSubmit} className={!formik.isValid ? 'opacity-50 pointer-events-none' : ''} text={'Submit'} />
                    </div>
                </form>}
            </div>
          </div>

        </Hero>

       
    </section> );
}
 
export default RoundTwo;