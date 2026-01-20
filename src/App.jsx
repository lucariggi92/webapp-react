import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import AppLayout from './layouts/AppLayout'
import MoviesPage from './pages/MoviesPage'

function App() {
  const nameApp ="MoviesApp"


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout nameApp={nameApp}/>}>
        <Route element={<Home/>} path="/"/>
               <Route element={<MoviesPage/>} path="/movies"/>
        
      </Route>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
