/* 
    createSlice 用于创建分库

*/

import { createSlice } from "@reduxjs/toolkit";
import { globalConfig } from '@/globalConfig'

const sessionTheme = JSON.parse(window.localStorage.getItem(globalConfig.SESSION_LOGIN_THEME))

const initTheme = sessionTheme ? sessionTheme : globalConfig.initTheme

const initalState = {
    dark: initTheme.dark,
    colorPrimary: initTheme.colorPrimary
}

// 
export const themeSlice = createSlice({
    // store分库名称
    name: 'theme',
    // 初始值
    initalState,
    reducers: {
        setDark: (state, action) => {
            state.dark = action.payload,
                window.localStorage.setItem(globalConfig.SESSION_LOGIN_THEME, JSON.stringify(state))
        },
        setColorPrimary: (state, action) => {
            // 修改store分库里的colorPrimary的值 用于让全项目动态生效
            state.colorPrimary = action.payload
            window.localStorage.setItem(globalConfig.SESSION_LOGIN_THEME, JSON.stringify(state))
        }
    }
})

export const { setDark } = themeSlice.actions
export const { setColorPrimary } = themeSlice.actions
export default themeSlice.reducer
