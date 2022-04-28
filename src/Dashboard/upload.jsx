import { DropzoneArea } from 'material-ui-dropzone';
import React from 'react';
import './style.scss';
export default function Upload() {
  return (
    <div className='containerUpload'>
        <div className='itemUpload'>
        <DropzoneArea
            acceptedFiles={['image/*']}
            dropzoneText={"Drag and drop one image here or click"}
            onChange={(files) => console.log('Files:', files)}
        />
        </div>
        <div className='button'>Restore</div>
    </div>
  )
}
