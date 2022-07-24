import Navigation from "./Navigation";


const GlobalWrapper = ({children}) => {
    return ( <main className="relative min-h-screen pb-36 bg-bg-900 text-bg-50">
        <Navigation>
        </Navigation>
        
        {children}
    </main> );
}
 
export default GlobalWrapper;