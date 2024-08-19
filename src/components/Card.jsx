import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import shadows from '@mui/material/styles/shadows';

function Cardcomponent() {
    const cart = [
        {id : 1 , name : 'گیف کارت اپل' , src :'../src/assets/imageapple.png'},
        {id : 2 , name : 'گیف کارت پلی استیشن' , src :'../src/assets/playstation.png'},
        {id : 3 , name : 'گیف کارت استیم' , src :'../src/assets/steam.png'},
        {id : 4 , name : ' گیف کارت پلی استیشن پلاس' , src :'../src/assets/plus.png'},
        {id : 5 , name : ' اشتراک تلگرام پرمیوم' , src :'../src/assets/telegramprem.png'},
        {id : 6 , name : ' گیفت کارت ایکس باکس' , src :'../src/assets/xbox.png'},
        {id : 7 , name : ' گیفت کارت گلد (Core) ایکس باکس' , src :'../src/assets/xboxgold.png'},
        {id : 8 , name : 'گیم پس ایکس باکس' , src :'../src/assets/gamepass.png'},
        {id : 9 , name : ' گیفت کارت نینتندو' , src :'../src/assets/nintendo.png'},
        {id : 10 , name : 'گیفت کارت ریزر گلد ' , src :'../src/assets/rezergold.png'},
    
    
    ]
  return (
    <>    
    {cart.map(i => 
        <Card key={i.id} sx={{ maxWidth: 345,
            marginTop:'20px',
            top:' 0',
            position: 'relative',
            transition: 'all 0.15s ease-out',
            borderRadius:'10px',
         }}>
         <CardActionArea>
           <CardMedia
           sx={{
            padding:'20px',
            borderRadius:'20px',
            position: 'relative',
            zIndex: 2,
           }}
             component="img"
             height="auto"
             image={i.src}
           />
           <CardContent>
             <Typography
             sx={{
                display:'flex',
            justifyContent:'center'             }}
             variant="p" component="h3">
               {i.name}
             </Typography>
           </CardContent>
         </CardActionArea>
       </Card>
    )}
    </>

  );
}

export default Cardcomponent