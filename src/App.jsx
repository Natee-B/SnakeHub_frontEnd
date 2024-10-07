import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import AppRoute from './routes/AppRoute'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div>
    <ToastContainer />
     <AppRoute/>
    </div>
  )
}

export default App
