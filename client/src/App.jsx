import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout'
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Group from './pages/GroupForm';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import RoomForm from './pages/RoomForm';
import FormUpdate from './pages/FormUpdate';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
        
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<PostList/>}/>
          <Route path='post/:id' element={<PostDetail/>}/>
        </Route>
         
        <Route path='/post' element={<Group/>}/>
        <Route path='/dashboard/group/:id/update' element={<FormUpdate/>}/>
        <Route path='/dashboard/post/:id/form' element={<RoomForm/>}/>
      </Routes>
    </>
  );
}

export default App
