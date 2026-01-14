import { storage } from '@/firebase'
import { ref as storageRef, getDownloadURL } from 'firebase/storage'

export async function getFileUrl(path: string): Promise<string> {
  const fileRef = storageRef(storage, path)
  return await getDownloadURL(fileRef)
}
