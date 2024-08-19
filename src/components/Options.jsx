import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';


function Options() {
  return (
    <div style={{
      width:'100%',
    }}>
         <Box
      height={320}
      width='100%'
      my={4}
    //   display="block"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ 
        justifyContent:'space-between',
        boxShadow:"10px 15px 40px rgba(66, 71, 74, 0.09)",
       }}
    >
        <Grid item
        sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}
        >
        <Grid item
        sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height: '70px',
            width: '70px',
            minWidth: '80px',
            borderRadius: '25px',
            background: 'rgba(0, 208, 166, 0.1)'
        }}>
        <img
        style={{
            width:'60px',
            height:'60px'
        }}
        src='../src/assets/call.png' />
        </Grid>
        </Grid>
      <Grid item
      sx={{
        margin:'20px'
      }}
      >
        <Typography
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}
        variant='p' component='h2'>
            سوالی دارید؟
        </Typography>
        <Typography
        sx={{
            marginTop:'10px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}
        variant='p' component='p'>
        همین الان با مشاوران ما تماس بگیرید و سوالات خود را بپرسید.
        </Typography>
      </Grid>
      <Grid item
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',  
      }}
      >
      <Button
      sx={{
        margin:'20px',
        background: '#00d0a6',
        boxShadow:' 0 8px 32px rgba(0, 208, 166, 0.25)',
      }}
      variant="contained"
      >
        درخواست مشاوره
      </Button>
      <Typography
      color='#00d0a6'
      variant='p' component='h4' >
        09130970902
      </Typography>
        <CallIcon sx={{
            color:'#00d0a6',
            marginRight:'10px'
        }}/>
      </Grid>
    </Box>
    </div>
  )
}

export default Options