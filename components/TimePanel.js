const TimePanel = ({className, roundIcon, roundName, roundNameIcon}) => {
    return ( <div className={"flex gap-8 lg:gap-4 xl:gap-6  " + className}>
       {roundIcon}

        <div>
            <h4 className="flex gap-2 font-bold text-lead-24 lg:text-headline-37 mb-1.5 lg:mb-2.5">
            {roundNameIcon}
            {roundName}
            </h4>

        <p className="px-1.5 lg:px-3 py-2 lg:py-2.5 bg-bg-300 rounded-sm text-small-16 w-fit">27/09/2022 - 03/10/2022 </p>
        <p className="w-full mt-2 xl:mt-6 text-body-18 lg:text-headline-21 xl:w-4/5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus sit sit leo. Pharetra venenatis, tortor, pellentesque hac dignissim amet, tellus. Dignissim at varius tellus sollicitudin egestas viverra.</p>
        </div>
            
        
        
    </div> );
}
 
export default TimePanel;