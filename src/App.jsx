import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import AppRoute from './routes/AppRoute'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { OrderAdminDataProvider } from './context/orderAdminContext'

function App() {

  console.log("localStorage : ",JSON.stringify(localStorage).length)

  return (
    <div 
    // className='bg-zinc-600'
    >
  
    <OrderAdminDataProvider>

    <ToastContainer />
     <AppRoute/>

     </OrderAdminDataProvider>
    
    </div>
  )
}

export default App
