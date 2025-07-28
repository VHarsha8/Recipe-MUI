import React from "react";
import { Typography,Stack,Button,Box,Paper,TextField } from "@mui/material";
import { useState } from "react";
function Registration(){
    

    const [loading,isLoading] = useState(false);
    return(
        <>
            
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent:'center',
                alignItems:'center',
                height:'100vh'
                
            }}
            >
           
            <Paper elevation={5} sx={{width:'500px',height:"500px",padding:'10px'}}>
                <Stack direction={"column"} spacing={3}>
                <Typography variant="h1">Sign up</Typography>
                <TextField
                    required
                    id="standard-required"
                    label="Name"
                    type="text"
                    
                    variant="standard"
                    />
                <TextField
                    required
                    id="standard-required"
                    label="Email"
                    type="text"
                    
                    variant="standard"
                    />
                <TextField
                    required
                    id="standard-required"
                    label="Password"
                    type="password"
                    
                    variant="standard"
                    />
                    <Button sx={{height:'40px'}}
                    size="small"
                    onClick={()=>{isLoading(!loading)}}
                    loading={loading}
                    variant="contained"
                    
                    >
                    Register
                    </Button>
                </Stack>
                
            </Paper>
            </Box>
        </>
    )
}

export default Registration;
