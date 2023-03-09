import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [
        {
            id: 'Zhg453sG',
            name: 'Eilon',
            age: '27'
        },
        {
            id: '345Xyuu41',
            name: 'Gaya',
            age: '25'
        },
        {
            id: 'LHs865ZX',
            name: 'Luna',
            age: '1'
        },
    ],
    list2: [
        {
            id: '123',
            name: 'DONK',
            age: '27'
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