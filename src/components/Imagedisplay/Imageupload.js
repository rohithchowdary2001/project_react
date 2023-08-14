import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [imageId, setImageId] = useState('');

  const handleImageUpload = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      await axios.post('http://localhost:8081/upload', formData);
      setImageName(e.target.files[0].name);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAndDisplayImage = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/image/${imageId}`, { responseType: 'arraybuffer' });
      const imageBlob = new Blob([response.data], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(imageBlob);
      setImage(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <input type="number" placeholder="Image ID" value={imageId} onChange={(e) => setImageId(e.target.value)} />
      <button onClick={fetchAndDisplayImage}>Fetch Image</button>
      {image && <img src={image} alt={imageName} />}
    </div>
  );
}

export default App;


