import React, { useEffect,useState } from 'react';
import { Typography,Stack } from '@mui/material';
import ResponsiveAppBar from '../components/NavBar';
import RecipeReviewCard from '../components/ReceipeCard';
function Home(){


    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(data => setPosts(data.recipes));

    },[])
    return(
        <>
        <ResponsiveAppBar />
        <Stack spacing={5} mt={2} sx={ {display:'flex',alignItems:'center'}}>
            {
                posts.map((post)=>{
                    return <RecipeReviewCard post={post}/>

                })
            }
                  
        </Stack>
                  

        </>
       
    )
}


export default Home;