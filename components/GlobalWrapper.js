import Navigation from "./Navigation";

const GlobalWrapper = ({children}) => {
    return (<main className="relative min-h-screen overflow-hidden font-sans bg-[#2d033f] text-headline-21 text-bg-50">
        <Navigation>
        </Navigation>
        
        {children}

    </main> );
}
 
export default GlobalWrapper;