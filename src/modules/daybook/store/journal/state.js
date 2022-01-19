export default ()=>({
    isLoading: true,
    entries:[
        {
            id: Math.floor(Math.random()*1000000000000),
            date: new Date().toDateString(),
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, minima vitae! Inventore deleniti a sit fugit sint quam, repudiandae repellendus dolorem nostrum sapiente quod placeat voluptas possimus culpa corrupti sunt.',
            picture: null
        },
        {
            id: Math.floor(Math.random()*1000000000000),
            date: new Date().toDateString(),
            text: 'At itaque accusantium ipsum reiciendis adipisci. Exercitationem suscipit nobis perspiciatis vero fugiat. Illum, delectus! Aliquam sunt dignissimos ut alias vitae illum assumenda adipisci sit! Nobis, sint eius. Commodi.',
            picture: null
        },
        {
            id: Math.floor(Math.random()*1000000000000),
            date: new Date().toDateString(),
            text: 'Illum, delectus! Aliquam sunt dignissimos ut alias vitae illum assumenda adipisci sit! Nobis, sint eius. Commodi. At itaque accusantium ipsum reiciendis adipisci. Exercitationem suscipit nobis perspiciatis vero fugiat. ',
            picture: null
        },
    ] 
})

