import { AuthContextProvider } from "./Context/Context"
import Header from "./Context/Header/Header"

export default function App() {
  
  return (
    <AuthContextProvider>
      
      <Header />
    </AuthContextProvider>
  )
}
