import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  IconButton,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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
      <Box
        component={Paper}
        elevation={3}
        sx={{
          maxWidth: 600,
          mx: 'auto',
          mt: 10,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" component="legend" sx={{ mb: 2 }}>
          Create post
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            placeholder="My awesome page"
            value={title}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description...."
            value={description}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              color="primary"
              component="span"
              onClick={() => fileInputRef.current.click()}
              sx={{ width: 40, height: 40 }}
            >
              <PhotoCamera />
            </IconButton>
            <Button
              variant="outlined"
              onClick={() => fileInputRef.current.click()}
              sx={{ textTransform: 'none' }}
            >
              Photo
            </Button>
            {photo && (
              <Typography variant="body2" sx={{ ml: 2 }}>
                Selected: {photo.name}
              </Typography>
            )}
          </Stack>
          {photoBase64 && (
            <Box sx={{ mt: 2 }}>
              <img
                src={URL.createObjectURL(photo)}
                alt="preview"
                style={{ width: 128, borderRadius: 8 }}
              />
            </Box>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handlePost}
            sx={{ mt: 2 }}
          >
            Post
          </Button>
        </Stack>
      </Box>
    </>
  );
}