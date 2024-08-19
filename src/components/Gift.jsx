import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Button, Grid } from '@mui/material';

function Gift() {
  return (
    <div>
            <Card sx={{ maxWidth: '100%',
                height:'100%',
                background: '#f9f7ff',
             }}>
      <Grid item
      sx={{
        display:'flex',
            justifyContent:'center'
      }}>
      <CardMedia
        sx={{ 
            width: 350,
            height: 350,
            marginTop:'10px',
            marginBottom:'20px',
        }}
        image="./src/assets/gift.png"
      />
      </Grid>
      <CardContent>
        <Typography
        sx={{
            display:'flex',
            justifyContent:'center'
        }}
        gutterBottom variant="p" component="h2">
        با خرید هر گیفت کارت ، امتیاز کسب کن !
        </Typography>
        <Typography variant="p" color="text.secondary">
        با هر خریدتون یا معرفی دوستانتون برای خرید از فرصت شاپ با لینک معرفی که داخل پروفایلتون در پنل کاربری دارید امتیاز دریافت میکنید ! امتیازهاتون رو جمع کنید و خیلی راحت اون ها رو به کد تخفیف تبدیل کنید . با این روش خرید های بعدیتون رو با تخفیف انجام میدید . به غیر از خرید و معرفی تو مناسبت های خاص و جشنواره های فرصت شاپی امتیاز ویژه از سمت ما دریافت میکنید. امتیاز گیری در فرصت شاپ از اولین خریدتون آغاز میشه پس همین حالا شروع کنید ...
        </Typography>
      </CardContent>
       <Grid item
       sx={{
        display:'flex',
        justifyContent:'center',
        marginBottom:'20px'
    }}>
       <Button 
           sx={{
             background:' linear-gradient(135deg, #b190fa 0%, #8f77f2 100%)',
           }}
        variant="contained">
            خرید گیف کارت
        </Button>
       </Grid>
        </Card>
    </div>
  )
}

export default Gift