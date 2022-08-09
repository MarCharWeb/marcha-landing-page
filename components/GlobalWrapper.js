import Footer from "./Footer";
import Navigation from "./Navigation";


const GlobalWrapper = ({children}) => {
    return ( <main className="relative min-h-screen font-sans bg-bg-900 text-headline-21 text-bg-50">
        <Navigation>
        </Navigation>
        
        {children}

        <Footer></Footer>
    </main> );
}
 
export default GlobalWrapper;