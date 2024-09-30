import MainLayOut from '@components/Layout/Layout'
import HomePage from '@components/pages/HomePage/HomePage'

function App() {
    return (
        // <ContextProvider>
        //     <Home />
        // </ContextProvider>

        <MainLayOut>
            <HomePage />
        </MainLayOut>
    )
}

export default App
