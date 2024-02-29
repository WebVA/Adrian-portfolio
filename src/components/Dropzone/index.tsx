import React from 'react'
import { useDropzone } from 'react-dropzone'

import { ActiveDropzone } from './ActiveDropzone'

interface DropzoneProps {
  children: React.ReactNode
  onUploadStarted: () => void
  onUploadComplete: (url?: string) => void
  onUploadFailed: () => void
}

export function Dropzone(props: DropzoneProps) {
  const { children, onUploadComplete, onUploadStarted, onUploadFailed } = props

  async function uploadFile({ file }) {
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'hpnpsqeq')

    const uploaded = await fetch(
      `https://api.cloudinary.com/v1_1/dugzhz3m6/image/upload`,
      {
        method: 'POST',
        body: data,
      }
    ).then((r) => r.json())

    return uploaded
  }

  const onDropAccepted = React.useCallback(async (acceptedFiles: File[]) => {
    onUploadStarted()

    const file = acceptedFiles[0]

    const uploaded = await uploadFile({ file })
    if (!uploaded?.secure_url) {
      onUploadFailed()
      return console.error('Upload failed')
    }

    const url = uploaded.secure_url
    return onUploadComplete(url)
  }, [])

  function onDropRejected() {
    alert('File rejected')
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
    onDropRejected,
    noKeyboard: true,
    multiple: false,
    noClick: true,
    maxSize: 1000 * 1000 * 3, // 3mb
    accept: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'],
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <ActiveDropzone /> : children}
    </div>
  )
}
