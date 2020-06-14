export function toImgUploadFormData(file, folder, tag) {
  const fd = new FormData()
  const unsignedUploadPreset = 'm7pay'
  if (tag) {
    fd.append('tags', tag)
  }
  if (folder) {
    fd.append('folder', folder)
  }
  fd.append('file', file)
  fd.append('upload_preset', unsignedUploadPreset)
  return fd
}
