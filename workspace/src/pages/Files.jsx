import React from 'react';
import AddFolder from "../assets/AddFolder.png";
import AddMedia from "../assets/AddMedia.png";
import File from "../assets/File.png";
import Logout from "../assets/Logout.png";
import Trash from "../assets/Trash.png";
// A functional component for the dashboard page
function Files() {

    

  return (
    <div>
      <div className='file-username'>@username</div>
      <img src={AddMedia} className='add-media'/>
      <svg xmlns="http://www.w3.org/2000/svg" width="1337" height="666" viewBox="0 0 1337 666" fill="none" className='transparent'>
        <path d="M0 25C0 11.1929 11.1929 0 25 0H1312C1325.81 0 1337 11.1929 1337 25V641C1337 654.807 1325.81 666 1312 666H25C11.1929 666 0 654.807 0 641V25Z" fill="#D9D9D9" fill-opacity="0.23"/>
      </svg>
      {/* <div className='file-background'></div> */}
      
      

      
    </div>
  );
}

export default Files;
