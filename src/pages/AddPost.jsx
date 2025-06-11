import axios from 'axios';
import React, {  useEffect, useRef, useState } from 'react'
import {useNavigate } from 'react-router'
import { toast } from 'react-toastify';

export default function AddPost() {
  let navigate = useNavigate();
  const fileInputRef = useRef();
  let loggedUser = localStorage.getItem('token');
  let loggedUserId = localStorage.getItem('id');
  if (!loggedUser) {
    navigate('/login');
  }
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [photo, setPhoto] = useState(null);
  let [photoBase64, setPhotoBase64] = useState('');
  let [currentUser, setCurrentUser] = useState('');

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${loggedUserId}`)
    .then((res)=> setCurrentUser(res.data))
  },[])
  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setPhoto(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoBase64(reader.result);
    };
    reader.readAsDataURL(file);
  }
};
  
  
  let handlePost = (e) => {
    e.preventDefault();
    if (title && description) {
      
      const post = {
        title: title,
        description: description,
        photo: photoBase64 || null,
        user :{
          id: currentUser.id,
          userName: currentUser.name,
        }

      }
      axios.post('http://localhost:3000/posts', post)

        .then((res) => {
          console.log(res);
          toast.success('Post created successfully');
          // alert('Post created successfully');
          navigate('/posts');
        })
        .catch((err) => {
          console.error(err);
          toast.error('Error creating post');
          // alert('Error creating post');
        });

    } else {
      toast.error('Please fill in all fields');
      // alert('Please fill in all fields');
    }
  }



  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 w-2xl rounded-box border p-4 m-auto mt-20">
        <legend className="fieldset-legend ">Create post</legend>
        <label className="label" >Title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" className="input  w-2xl" placeholder="My awesome page" />
        <label className="label">Description</label>
        <textarea onChange={(e) => setDescription(e.target.value)}
          className="textarea  w-2xl" placeholder="Description...."></textarea>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        />
        <button onClick={() => fileInputRef.current.click()} className='flex items-center mt-3 btn btn-ghost w-28'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <p className='p-1'>Photo</p>
        </button>
        {photo && <p className="mt-2 text-sm">Selected: {photo.name}</p>}
        {photoBase64  && <img src={URL.createObjectURL(photo)} alt="preview" className="w-32 mt-2" />}
        <button onClick={handlePost} className="btn btn-primary text-white mt-3">Post</button>
      </fieldset>
    </>
  )
}
