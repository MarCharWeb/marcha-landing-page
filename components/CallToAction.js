import Button from "./Button";
import SectionTitle from "./SectionTitle";

const CallToAction = () => {
    return ( <section className="py-32 container-media-padding bg-bg-800">
        <div className="grid grid-cols-2">
            <div className="space-y-6">
                <SectionTitle text={'Ready to unlock your MarTech DNA?'} type='left'></SectionTitle>
                <Button size="large" text={'Register Now!'}></Button>
            </div>
            
        </div>
    </section> );
}
 
export default CallToAction;