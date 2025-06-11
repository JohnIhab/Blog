import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

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
                console.log('Posts fetched:', response.data);
                setPosts(response.data);
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
        const res = await axios.patch(`http://localhost:3000/posts/${id}`, {
            title: editedTitle,
            description: editedDescription,
        });

        toast.success('Post updated successfully');

        setPosts(prevPosts => prevPosts.map((post) =>
            post.id === id ? { ...post, title: editedTitle, description: editedDescription } : post
        ));

        setEditingPostId(null);
    } catch (error) {
        console.log('failed to update post', error);
        toast.error("Failed to update post");
    }
}


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/posts/${id}`)
                    .then((response) => {
                        console.log('Post deleted:', response.data);
                        toast.error("Post deleted successfully!");
                        setPosts(posts.filter(post => post.id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your post has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch((error) => {
                        console.error('Error deleting post:', error);
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


                <div key={post.id} className="max-w-3xl mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">

                    <div className="px-6 pt-4 pb-2 flex items-center bg-amber-50 mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className="font-semibold text-gray-700 ml-1.5">{post.user.userName}</span>
                    </div>
                    <div className="px-6 pb-2">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.description}</p>
                        {post.photo && (
                            <img
                                src={post.photo}
                                alt={post.title}
                                className=" h-56 object-cover rounded-lg mb-2"
                            />
                        )}
                    </div>
                    <div className="flex items-center justify-between px-6 pb-4">
                        {/* Edit & Delete Buttons */}
                        <div>
                            {post.user?.id === loggedUser && editingPostId !== post.id && (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => handleEdit(post)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mr-2 transition"
                                    >
                                        {/* Edit Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleDelete(post.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
                                    >
                                        {/* Delete Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </>
                            )}

                        </div>
                        {editingPostId === post.id && (
                            <div className="mt-4 w-full">

                                <label className='font-semibold'>title:</label>
                                <input
                                    type="text"
                                    value={editedTitle}
                                    onChange={(e) => setEditedTitle(e.target.value)}
                                    className="block w-full border border-gray-300 rounded mb-2 p-2"
                                    placeholder="Edit Title"
                                />
                                <label className='font-semibold'>Description:</label>

                                <textarea
                                    value={editedDescription}
                                    onChange={(e) => setEditedDescription(e.target.value)}
                                    className="block w-full border border-gray-300 rounded mb-2 p-2"
                                    placeholder="Edit Description"
                                ></textarea>
                                <button
                                    type="button"
                                    onClick={() => handleUpdate(post.id)}
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditingPostId(null)}
                                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}

        </>
    );
}