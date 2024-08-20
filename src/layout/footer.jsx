import { Box, Container, Grid, Typography, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import React from 'react'

function Footer() {
  return (
    <div style={{
      display:'flex',
      // justifyContent: 'center',
      alignItems:'center'
    }}>
       <Box
      sx={{
        display:'felx',
        backgroundColor: '#fff',
        color: 'GrayText',
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Grid item 
            sx={{
              display:'flex' 
            }}>
            <img src='./src/assets/Logo.png' alt="Logo" style={{ width: '150px' ,}} />
            </Grid>
            <Typography
            mr={5}
            variant="p" component='h4'>تماس با ما</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
             <Grid item
               sx={{
                ml:2,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width: '40px',
                  height: '40px',
                  borderRadius: '15px',
                  background: 'rgba(139, 114, 255, 0.15)',
                  fontSize: '17px',
              }}>
             <PhoneIcon sx={{  color:'#8b72ff'  }} />
             </Grid>
              <Typography>09176714823
                <br/>
                09134468071
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Grid item
            sx={{
              ml:2,
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width: '40px',
                height: '40px',
                borderRadius: '15px',
                background: 'rgba(139, 114, 255, 0.15)',
                fontSize: '17px',
            }}>
              <EmailIcon sx={{  color:'#8b72ff' 
               }} />
            </Grid>
              <Typography variant="p" component='p'>info@forsatshop.top</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Grid item
              sx={{
                ml:2,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width: '40px',
                  height: '40px',
                  borderRadius: '15px',
                  background: 'rgba(139, 114, 255, 0.15)',
                  fontSize: '17px',
              }}>
              <LocationOnIcon sx={{ color:'#8b72ff' }} />
            </Grid>
              <Typography variant="p" component='p'> یزد ، خیابان مطهری ، مجموعه پارک علم و فناوری اقبال ،واحد 270 </Typography>
            </Box>
          </Grid>
          </Grid>
      </Container>
    </Box>
    <Box
     sx={{
      display:'felx',
      backgroundColor: '#fff',
      color: 'GrayText',
      py: 4,
      mt: 4,
    }}>
          <Grid container>
            <Grid item
            sx={{
              display:'flex',
              // justifyContent:'space-between',
              alignItems:'center',
            }}
            xs={12}
            >
               <Typography
               sx={{
                marginLeft:'60px'
               }}
          fontWeight={600}
          variant='p' component='h3'>
                لینک های مهم
              </Typography>
             <Grid item
             sx={{
              display:'block',
             }}>
             <Typography
             mb={4}
             variant='p' component='p'>
              راهنمای خرید
              </Typography>
              <Typography
               mb={4}
              variant='p' component='p'>
              قوانین و مقررات
              </Typography>
              <Typography 
               mb={4}
              variant='p' component='p'>
              درباره ما
              </Typography>
              <Typography
               mb={4}
              variant='p' component='p'>
              وبلاگ
              </Typography>
              <Typography variant='p' component='p'>
              ثبت شکایات
              </Typography>
             </Grid>
            </Grid>
          </Grid>
          </Box>

    </div>
  )
}

export default Footer