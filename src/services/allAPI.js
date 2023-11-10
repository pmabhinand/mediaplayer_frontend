import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//upload videos

export const uploadAllVideo = async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//get all videos from json server

export const getAllVideos = async()=>{
  return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video

export const deleteAVideo=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//api to add data to watch-history
export const addToHistory = async(videoDetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//api to get all history from json-server
export const getAllHistory=async()=>{
   return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete history
export const deleteAHistory=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add categories
export const addToCategory=async(body)=>{
   return await commonAPI('POST',`${serverURL}/categories`,body)
}

//api to get category
export const getAllCategory=async()=>{
   return await commonAPI('GET',`${serverURL}/categories`,"")
}

//api to delete the category
export const deleteACategory=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}

//api to get data of a specific video
export const getAVideo=async(id)=>{
   return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update category
 export const updateCategory=async(id,body)=>{
  return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
}

