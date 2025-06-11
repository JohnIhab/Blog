import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Offline } from "react-detect-offline";
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import ProtectedRoutes from './components/ProtectedRoutes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Posts from './pages/Posts';
import PostsLayout from './layouts/PostsLayout';
import MainLayout from './layouts/MainLayout';
import AddPost from './pages/AddPost';
import { useEffect, useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  return (
    <>
      <Offline>
        <div className='offline'>You are Offline Now!</div>
      </Offline>
      <BrowserRouter>
          <Routes>
            <Route
            path='/'
            element={
              isLoggedIn ? (
                <PostsLayout>
                  <Home />
                </PostsLayout>
              ) : (
                <MainLayout>
                  <Home />
                </MainLayout>
              )
            }
          />
          <Route
            path='/home'
            element={
              isLoggedIn ? (
                <PostsLayout>
                  <Home />
                </PostsLayout>
              ) : (
                <MainLayout>
                  <Home />
                </MainLayout>
              )
            }
          />
            <Route path='/about' element={<MainLayout > <About /></MainLayout>} />
            <Route path='/contact' element={<MainLayout > <Contact /></MainLayout>} />
            <Route path='/login' element={<MainLayout > <Login /></MainLayout>} />
            <Route path='/signup' element={<MainLayout > <Signup /></MainLayout>} />
            <Route
              path='/posts'
              element={
                <ProtectedRoutes>
                  <PostsLayout>
                    <Posts />
                  </PostsLayout>
                </ProtectedRoutes>
              }
            />
            <Route
              path='/add'
              element={
                <ProtectedRoutes>
                  <PostsLayout>
                    <AddPost />
                  </PostsLayout>
                </ProtectedRoutes>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
      <ToastContainer />


    </>
  )
}

export default App
