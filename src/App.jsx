import Home from '@components/Home'
import ContextProvider from '@context/ProviderContext'

function App() {
    return (
        <ContextProvider>
            <Home />
        </ContextProvider>
    )
}

export default App
