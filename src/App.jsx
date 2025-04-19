
import './App.css'
import Posts from './components/Posts'
import "tailwindcss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 

  return (
    <>
    <Posts/>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
