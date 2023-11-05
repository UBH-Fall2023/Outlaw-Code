import React from 'react';
import AddFolder from "../assets/AddFolder.png";
import AddMedia from "../assets/AddMedia.png";
import File from "../assets/File.png";
import Logout from "../assets/Logout.png";
import Trash from "../assets/Trash.png";


import DocViewer from "react-doc-viewer";

import { useState } from 'react';
// A functional component for the dashboard page
function Files() {

  const [file, setFile] = useState()

  const docs = [
    {
      uri: <img src={File} className='file' />
    }
  ]

  function handleFile(event){
    setFile(event.target.files[0])
    console.log(event.target.files[0])
  }

  function handleUpload(){
    const formData = new FormData()
    formData.append('file', file)
    fetch(
      'url',
      {
        method: "POST",
        body: formData
      }
    ).then((response)=> response.json()).then(
      (result)=>{
        console.log("success",result)
        alert("File uploaded successfully!");
      }
    )
    .catch(error=> {
      console.error("Error: ", error);
      alert("There was an error uploading your file, please try again.")
    })
  }

    

  return (
    <div>
      <div className='file-username'>@username</div>
      <img src={AddMedia} className='add-media' onClick={handleFile}/>
      <img src={AddFolder} className='add-folder'/>
      <img src={Trash} className='trash'/>
      <img src={Logout} className='logout'/>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="1337" height="666" viewBox="0 0 1337 666" fill="none" className='transparent'>
        <path d="M0 25C0 11.1929 11.1929 0 25 0H1312C1325.81 0 1337 11.1929 1337 25V641C1337 654.807 1325.81 666 1312 666H25C11.1929 666 0 654.807 0 641V25Z" fill="#D9D9D9" fill-opacity="0.23"/>
        <form onSubmit={handleUpload}>
          <input type="file" name="file" />
        </form>
        <div>Your Files:</div>
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}/>
      </svg>
      {/* <div className='file-background'></div> */}
      
      

      
    </div>
  );
}

export default Files;
