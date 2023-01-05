import React, { useState } from "react";
//import axios from 'axios'

export default function ImageUpload() {
  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    e.preventDefault();
    console.log(image);
    const data = new FormData();
    data.append("name", "Taylor Testing");
    data.append("file", image);

    // axios.post('http://localhost:5000/upload', data)
    // .then((res) => {
    //     console.log(res)
    // });

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data,
    });
    const res2 = await res.json();

    console.log(res2);
  };

  return (
    <div>
      <form onSubmit={(e) => uploadImage(e)}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
