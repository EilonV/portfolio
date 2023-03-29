import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [

        {
            id: makeId(),
            att: 'about',
            data: ['Hey i\'m Eilon (you\'re in my website!)', 'I am a creative person who enjoys coding, design and anything artistic.']
        }
    ],
    list2: [
        {
            id: makeId(),
            att: 'skills',
            data: ['JavaScript', 'HTML', 'CSS', 'React', 'jQuery', 'Redux (Toolkit / Thunk)', 'SCSS', 'MongoDB', 'Beautiful DnD', 'NodeJS', 'Axios'],
            personal: ['Team player', 'Ambitious', 'Strong work ethic', 'Friendly', 'Supportive']
        },
        {
            id: makeId(),
            att: 'projects'
        },
        {
            id: makeId(),
            att: 'contact'
        }
    ]
}


export const dndSlice = createSlice({
    name: 'dnd',
    initialState,
    reducers: {
        reorganize: (state, action) => {
            state.list = action.payload
            // console.log('ACTION PAYLOAD', action.payload);
        },
        reorganize2: (state, action) => {
            state.list2 = action.payload
            // console.log('ACTION PAYLOAD', action.payload);
        },
    }
})

// Action creators are generated for each case reducer function
export const { reorganize, reorganize2 } = dndSlice.actions

export default dndSlice.reducer

function makeId(length = 5) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}