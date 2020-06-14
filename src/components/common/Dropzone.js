import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function readFile(file, onUpload) {
  const reader = new FileReader()
  reader.onload = (event) => {
    onUpload(file, btoa(event.target.result))
  }
  reader.readAsBinaryString(file)
}

function ImagePicker({
  onUpload,
  multiple = undefined,
  width,
  label = undefined,
  minSize,
  maxSize,
}) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => readFile(file, onUpload))
    },
    [onUpload],
  )

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop,
    multiple,
    minSize,
    maxSize,
  })

  return (
    <div className="dropzone-container" style={{width}}>
      <div
        className="dropzone"
        style={{
          borderColor: isDragActive
            ? '#2196f3'
            : isDragAccept
            ? '#00e676'
            : isDragReject
            ? '#ff1744'
            : '#fff',
        }}
        {...getRootProps({isDragActive, isDragAccept, isDragReject})}
      >
        <input {...getInputProps()} />
        {label ? <p>{label}</p> : null}
      </div>
    </div>
  )
}

export default ImagePicker
