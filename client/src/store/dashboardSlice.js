import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: null,
    stats: null
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setVideos: (state, action)=>{
            state.videos= action.payload
        },
        updateVideoPublishStatus: (state, action)=>{
            state.videos = state.videos.map((video)=> video._id !== action.payload.videoId ?{
                ...video,
                ispublished: action.payload.ispublished
            }:video)
        },
        deleteVideo: (state, action)=>{
            state.videos = state.videos.filter((video)=> video._id !== action.payload.videoId )
        },
        setStats: (state, action)=>{
            state.stats = action.payload
        },
        addVideoStats: (state)=>{
            state.stats.totalVideos = state.stats.totalVideos+1
        }

    }

})

export const {setVideos, updateVideoPublishStatus, deleteVideo, setStats, addVideoStats} = dashboardSlice.actions

export default dashboardSlice.reducer