import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import {
    Box,
    Paper,
    Typography,
    Button,
    IconButton,
    TextField,
    Stack,
    Avatar
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonIcon from '@mui/icons-material/Person';

export default function Posts() {

    const [loved, setLoved] = useState(false);
    const [posts, setPosts] = useState([]);
    const [editingPostId, setEditingPostId] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    let loggedUser = JSON.parse(localStorage.getItem('id') || 'null');

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((response) => {
                setPosts(response.data.reverse());
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    const handleEdit = (post) => {
        setEditingPostId(post.id);
        setEditedTitle(post.title);
        setEditedDescription(post.description);
    }

    const handleUpdate = async (id) => {
        try {
            await axios.patch(`http://localhost:3000/posts/${id}`, {
                title: editedTitle,
                description: editedDescription,
            });

            toast.success('Post updated successfully');

            setPosts(prevPosts => prevPosts.map((post) =>
                post.id === id ? { ...post, title: editedTitle, description: editedDescription } : post
            ));

            setEditingPostId(null);
        } catch (error) {
            toast.error("Failed to update post");
        }
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/posts/${id}`)
                    .then(() => {
                        toast.error("Post deleted successfully!");
                        setPosts(posts.filter(post => post.id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your post has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(() => {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the post.",
                            icon: "error"
                        });
                    });
            }
        });
    }

    return (
        <>
            {posts.map((post) => (
                <Paper
                    key={post.id}
                    elevation={3}
                    sx={{
                        maxWidth: 700,
                        mx: 'auto',
                        my: 4,
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: 1,
                        borderColor: 'divider',
                        bgcolor: 'background.paper'
                    }}
                >
                    <Box
                        sx={{
                            px: 3,
                            pt: 2,
                            pb: 1,
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: 'amber.50',
                            mb: 2,
                        }}
                    >
                        <Avatar sx={{ bgcolor: 'primary.light', mr: 1 }}>
                            <PersonIcon />
                        </Avatar>
                        <Typography fontWeight={600} color="text.secondary">
                            {post.user.userName}
                        </Typography>
                    </Box>
                    <Box sx={{ px: 3, pb: 2 }}>
                        <Typography variant="h6" fontWeight={700} color="text.primary" mb={1}>
                            {post.title}
                        </Typography>
                        <Typography color="text.secondary" mb={2}>
                            {post.description}
                        </Typography>
                        {post.photo && (
                            <Box
                                component="img"
                                src={post.photo}
                                alt={post.title}
                                sx={{
                                    width: '60%',
                                    height: 224,
                                    // objectFit: 'cover',
                                    borderRadius: 2,
                                    mb: 2
                                }}
                            />
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, pb: 2 }}>
                        <Box>
                            {post.user?.id === loggedUser && editingPostId !== post.id && (
                                <>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleEdit(post)}
                                        sx={{ mr: 1 }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => handleDelete(post.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </>
                            )}
                        </Box>
                        {editingPostId === post.id && (
                            <Box sx={{ width: '100%', mt: 2 }}>
                                <Stack spacing={2}>
                                    <TextField
                                        label="Title"
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                        fullWidth
                                        size="small"
                                    />
                                    <TextField
                                        label="Description"
                                        value={editedDescription}
                                        onChange={(e) => setEditedDescription(e.target.value)}
                                        fullWidth
                                        multiline
                                        minRows={2}
                                        size="small"
                                    />
                                    <Stack direction="row" spacing={2}>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            startIcon={<SaveIcon />}
                                            onClick={() => handleUpdate(post.id)}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="inherit"
                                            startIcon={<CancelIcon />}
                                            onClick={() => setEditingPostId(null)}
                                        >
                                            Cancel
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        )}
                    </Box>
                </Paper>
            ))}
        </>
    );
}