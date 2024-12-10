'use client'

import { useEffect, useState } from 'react';
import './ProfileButton.css'
import getUser from '@/services/lib/getUser';

export default function ProfileButton() {
    const [userPhoto, setUserPhoto] = useState("https://picsum.photos/80");

    useEffect(() => {
      async function fetchUserPic() {
        let userPic = await getUser().then( (res) => res.profilePicture);
        setUserPhoto(userPic);
      }
      fetchUserPic();
    }, []);  

  return (
    <a className='profile-button' href="/perfil">
        <img src={userPhoto} alt="" />``
    </a>
  );
}


