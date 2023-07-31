import axios, { ResDataType } from './ajax'

// 获取单个文件信息
export async function getFileService(filePath: string): Promise<ResDataType> {
  const url = `/api/file/getFile`
  const data = (await axios.get(url, { params: { filePath }, timeout: 50000 })) as ResDataType
  return data
}

// 获取目录信息
export async function getDirectoryService(): Promise<ResDataType> {
  const url = `/api/file/getSideDirectory`
  const data = (await axios.get(url)) as ResDataType
  return data
}

// 获取tags
export async function getTagsService(path: string): Promise<ResDataType> {
  const url = `/api/file/getTags`
  const data = (await axios.get(url, { params: { path } })) as ResDataType
  return data
}

// 获取文件列表
export async function getFileListService(
  path = '',
  pageSize = 10,
  pageNum = 1
): Promise<ResDataType> {
  const url = `/api/file/getFileList`
  const data = (await axios.get(url, { params: { path, pageSize, pageNum } })) as ResDataType
  return data
}

// 文章浏览量
export async function addPapersHits(path: string): Promise<ResDataType> {
  const url = `/api/file/hits`
  const data = (await axios.post(url, { path })) as ResDataType
  return data
}
