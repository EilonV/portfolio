import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [{
        id: makeId(),
        att: 'about',
        data: ['Hey i\'m Eilon (you\'re in my website!)', 'I am 27 from Gedera, Full stack developer and currently looking for work as a Front end developer.', 'I am a creative person who enjoys coding, design and anything artistic.']
    },


    ],
    list2: [
        {
            id: makeId(),
            att: 'projects',
            data: [
                {
                    name: '3D Portfolio',
                    description: 'An interactive 3D portfolio (a bit heavy)',
                    link: 'https://eilonvana.netlify.app/',
                },
                {
                    name: 'Daily color',
                    description: 'Generates random color each day for inspiration',
                    link: 'https://dailycolor.netlify.app/',
                },
                {
                    name: 'Animember',
                    description: 'Anime information site',
                    link: 'https://animember.netlify.app/',

                },
                {
                    name: 'Fiverr',
                    description: 'Fiverr clone (final project)',
                    link: 'https://react-reviews-vus7.onrender.com',

                },
                {
                    name: 'Meme generator',
                    description: 'Basic generator made with js canvas',
                    link: 'https://eilonv.github.io/Meme-Generator/',

                },
                {
                    name: '3D Scenes',
                    description: 'A few 3D interactive scenes made with spline',
                    link: 'https://3dscenes.netlify.app/',
                }
            ]
        },
        {
            id: makeId(),
            att: 'contact',
            data: [['github', 'https://github.com/EilonV'], ['linkedin', 'https://www.linkedin.com/in/eilonvana/'], ['facebook', 'https://www.facebook.com/dontmindmejustcleaninguphere/'], ['instagram', 'https://www.instagram.com/eilon_vana/'], ['email']]

        },
        {
            id: makeId(),
            att: 'skills',
            data: ['JavaScript', 'HTML', 'CSS', 'React', 'jQuery', 'Redux (Toolkit / Thunk)', 'SCSS', 'MongoDB', 'Beautiful DnD', 'NodeJS', 'Axios'],
            personal: ['Team player', 'Ambitious', 'Strong work ethic', 'Friendly']
        }

    ]
}


export const dndSlice = createSlice({
    name: 'dnd',
    initialState,
    reducers: {
        reorganize: (state, action) => {
            state.list = action.payload
        },
        reorganize2: (state, action) => {
            state.list2 = action.payload
        },
    }
})

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