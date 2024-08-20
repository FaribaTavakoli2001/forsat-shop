import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Cardcomponent from './Card'
import Options from './Options'
import Gift from './Gift'

function HomePage() {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3} sx={{ marginBottom:'40px', alignItems: 'center' }}>
  <Grid item xs={6}>
    <Typography fontWeight={500} sx={{ marginTop: '40px'}} variant="p" component="h1">
      خرید گیفت کارت
    </Typography>
    <Typography sx={{ marginTop: '10px', color: 'GrayText' }} variant="p" component="p">
      فرصت شاپ سایت رسمی و معتبر فروش گیفت کارت به صورت آنلاین با تحویل سریع است. با فرصت شاپ به راحتی کارت هدیه یا همان گیفت کارت های محبوب مانند گیفت کارت آیتونز ، گوگل پلی ، پلی استیشن ، ایکس باکس، اسپاتیفای ، استیم، اسکایپ ، ریزرگلد ، بتل نت ،روبلاکس، پابجی موبایل ، گیم پس ، مسترکارت و ... که نیاز دارید را بخرید و بابت هر خرید امتیاز دریافت کنید ، با افزایش امتیاز و تبدیل آنها به کد تخفیف در خرید های بعدی تخفیف بگیرید ، ما در فرصت شاپ به صورت 24 ساعته پشتیبان شما هستیم.

      شما با خرید گیفت کارت از فرصت شاپ خیلی راحت و بدون نیاز به کارت های بین المللی می توانید هر پرداختی در پلتفرم های مختلف دارید را انجام دهید. پرداخت های درون برنامه ای ، خرید و شارژ آیکلود ، خرید بازی ها در کنسول های مختلف بازی از جمله پر طرفدار ترین پرداخت هایی است که کاربران با گیفت کارت انجام می دهند.

      تمام محصولات موجود در فرصت شاپ کاملا به صورت قانونی و رسمی به مشتریان عزیز ارائه می شوند.
    </Typography>
    <Button
      sx={{
        marginTop: '30px',
        background: 'purple',
      }}
      variant="contained"
    >
      خرید گیف کارت
    </Button>
  </Grid>
  <Grid item xs={6}>
    <img
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '500px',
      }}
      src='../src/assets/imagecover.png'
      alt="Gift card cover"
    />
  </Grid>
</Grid>

        <Grid container spacing={1}>
        <Box
      width={400}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
    >
      <Grid item 
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height: '120px',
        width: '120px',
        minWidth: '120px',
        borderRadius: '50px 14px 50px 50px',
        position: 'relative',
        paddingTop: '4px',
        background: 'linear-gradient(125deg, #f4f2fe 0%, #faf8fe 100%)',
      }}>
     <img 
     style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
     }}
      src='../src/assets/image1.png' />
      </Grid>
     <Typography
     sx={{
      color:'GrayText',
      width:'300px'
    }}
     variant='p' component='p'>
     گیفت کارت های مورد نظرتون رو از بین 10 نوع محصول فرصت شاپ انتخاب کنید
     </Typography>
    </Box>
    <Box
      width={400}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
    >
    <Grid item
     sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '120px',
      width: '120px',
      minWidth: '120px',
      borderRadius: '50px 14px 50px 50px',
      position: 'relative',
      paddingTop: '4px',
      background: 'linear-gradient(125deg, #f4f2fe 0%, #faf8fe 100%)',
    }}>
    <img 
      src='../src/assets/image2.png' />
    </Grid>
     <Typography
     sx={{
      color:'GrayText'
    }}
     variant='p' component='p'>
     شماره موبایل رو وارد کنید و با کد فعالسازی وارد شوید سپس به راحتی پرداخت آنلاین انجام بدید
     </Typography>
    </Box>
    <Box
      width={400}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
    >
    <Grid item
     sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '120px',
      width: '120px',
      minWidth: '120px',
      borderRadius: '50px 14px 50px 50px',
      position: 'relative',
      paddingTop: '4px',
      background: 'linear-gradient(125deg, #f4f2fe 0%, #faf8fe 100%)',
    }}>
    <img 
      src='../src/assets/image3.png' />
    </Grid>
     <Typography
     sx={{
      color:'GrayText'
    }}
     variant='p' component='p'>
      کد گیفت کارت رو بلافاصله پس از پرداخت از طریق پیامک و ایمیل دریافت میکنید ، به همین راحتی
     </Typography>
    </Box>
        </Grid>
       <Grid item
        sx={{
          margin:'40px'
        }}>
        <Typography
        variant='p' component='h2'>
       گیف کارت مورد نظر خود را انتخاب کنید
        </Typography>
        </Grid>
       <Grid
       container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
      //  xs={6}
      //  item 
       sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'10px'
       }}
       >
        <Cardcomponent />
       </Grid>
       <Grid item 
       sx={{
        marginTop:'50px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
       }}>
       <Gift />
       </Grid>
       <Grid item>
        <Options />
       </Grid>
    </Container>
  )
}

export default HomePage