import {useState } from 'react'
import './App.css'
import { useAuthContext } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/HomePage';
import SignUpPage from './pages/HomePage';
import LikesPage from './pages/HomePage';
import ExplorePage from './pages/HomePage';

function App() {
  const {authUser, loading}= useAuthContext();
  
  if (loading) return null;

  return (
    <div className='flex'>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<HomePage/>} />
					<Route path='/login' element={!authUser ? <LoginPage/> : <Navigate to={"/"} />} />
					<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
					<Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />} />
					<Route path='/likes' element={authUser ? <LikesPage /> : <Navigate to={"/login"} />} />
				</Routes>
				<Toaster />
			</div>
		</div>
  );
}

export default App
