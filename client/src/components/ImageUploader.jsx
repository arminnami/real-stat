import { useState } from 'react'
import { uploadImage } from '../supabase'

function ImageUploader() {
  const [imageUrl, setImageUrl] = useState(null)

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    try {
      const url = await uploadImage(file)
      setImageUrl(url)
    } catch (error) {
      console.error('Upload failed:', error.message)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  )
}

export default ImageUploader;