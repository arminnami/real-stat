import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadImage } from '../supabase';
import { updateUserAvatar } from '../redux/user/userSlice';

export default function Profile() {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(currentUser?.avatar || '');

  useEffect(() => {
    const uploadFile = async () => {
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);

        try {
          const url = await uploadImage(file);
          dispatch(updateUserAvatar(url));
          setPreviewUrl(url);
        } catch (error) {
          console.error('Upload failed:', error.message);
        }

        URL.revokeObjectURL(objectUrl);
      }
    };

    uploadFile();
  }, [file, dispatch]);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          id="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          hidden
        />
        <img
          onClick={() => fileInputRef.current.click()}
          src={previewUrl}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer mt-2 self-center"
        />
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
