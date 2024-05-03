import '../style.scss';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import Add from "../imgchat/addAvatar.png";
import { useNavigate,Link } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate =useNavigate()
  const [avatar, setAvatar] = useState(null);
  const [fileError, setFileError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file type is supported
      const supportedTypes = ['image/jpeg', 'image/png'];
      if (supportedTypes.includes(file.type)) {
        setAvatar(file);
        setFileError(null);
      } else {
        setAvatar(null);
        setFileError('Unsupported file type. Please select a JPEG or PNG image.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file=e.target[3].files[0];


    try {
      if (!avatar) {
        setErr(true);
        return;
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);
      const uploadTask = await uploadBytes(storageRef, avatar);

      try {
        console.log('Upload')
        const downloadURL = await getDownloadURL(uploadTask.ref);
        console.log('Uploaded')
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL,
        });
        console.log('Updated')
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });
        console.log("data added before");

        await setDoc(doc(db,"userChats",res.user.uid),{});
        console.log("data added after");
        navigate("/");
        
        console.log("Document written successfully!");
      } catch (error) {
        console.error("Error in updating profile or setting document:", error);
        setErr(true);
      }
    } catch (error) {
      console.error("Error in createUserWithEmailAndPassword:", error);
      setErr(true);
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Petters Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={handleFileChange}
          />
          <label htmlFor='file'>
            <img src={Add} alt="Add Avatar" />
            <span>Add an Avatar</span>
          </label>
          {fileError && <span className="error">{fileError}</span>}
          <button>SignUp</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account?<Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
