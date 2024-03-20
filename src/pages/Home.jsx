import Header from "../components/Header";
import Newslatter from "../components/Newslatter";
import About from "./About";
import Faq from "./Faq";
import Login from "./Login";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <div className="text-center">
            <Faq></Faq>
            <Login></Login>
            <Newslatter></Newslatter>
            </div>
            
            
            
        </div>
    );
};

export default Home;