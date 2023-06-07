import {Hero} from "./components/Hero/Hero.jsx";
import {Header} from "./components/Header/Header.jsx";
import './App.css'
import {Companies} from "./components/Companies/Companies.jsx";

function App() {
    return (
        <div className='App'>
            <div>
                <div className='write-gradient'/>
                <Header/>
                <Hero/>
            </div>
            <Companies/>
        </div>
    );
}

export default App;
