/* 
    store总库 
*/

import { configureStore } from "@reduxjs/toolkit"
import themeReducer from '@/store/slices/theme'

export const store = configureStore({
    reducer: {
        //  主题换肤store分库
        theme: () => themeReducer ? themeReducer : null
    },
    // 后续追加其他分库

})




