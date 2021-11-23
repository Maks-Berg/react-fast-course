// React Library
import {Routes, Route} from "react-router-dom";

// Common, Components
import Header from './common/Header/Header'
import Articles from './components/Articles/Articles'

// Common css
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Articles/>}/>
            </Routes>
        </div>
    );
}

export default App;
