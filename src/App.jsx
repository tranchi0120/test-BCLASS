import './App.css'
import Home from "./Components/Home.jsx";
import ContextProvider from './ConText/ProviderContext.jsx';

function App() {

    return (
        <ContextProvider>
            <Home />
        </ContextProvider>
    )
}

export default App
