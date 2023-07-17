import axios, { ResDataType } from './ajax'

// 获取单个文件信息
export async function getFileService(name: string): Promise<ResDataType> {
  const url = `/api/file/getFile/${name}`
  const data = (await axios.get(url)) as ResDataType
  return data
}

// 获取目录信息
export async function getDirectoryService(): Promise<ResDataType> {
  const url = `/api/file/getFileDirectory`
  const data = (await axios.get(url)) as ResDataType
  return data
}
