import React from 'react';
import photo from './photo.PNG';

const ProfilePic = () => {

console.log(photo);
return(
    <div className='photoClass'>
        <img className='image1' src= {photo} alt="Youcef's photo" height={500} width={500}></img>
    </div>
);

}

export default ProfilePic;