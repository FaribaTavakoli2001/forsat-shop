import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';

function ResponsiveAppBar() {



  return (
    <AppBar sx={{
      background:'#f9f7ff',
    }} 
    position="static" >
      <Container maxWidth="xl">
        <Toolbar >
          <Typography
            variant="p"
            noWrap
            component="h1"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            فرصت شاپ
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          </Box>
          <Typography
            variant="p"
            noWrap
            component="h1"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            فرصت شاپ
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Typography variant='p' component='h4'
                sx={{ my: 2, color: 'black', marginRight:'50px'}}
              >
                خانه
              </Typography>
              <Typography variant='p' component='h4'
                sx={{ my: 2, color: 'black', marginRight:'50px'}}
              >
                گیف کارت
              </Typography>
              <Typography variant='p' component='h4'
                sx={{ my: 2, color: 'black', marginRight:'50px'}}
              >
                درباره ما
              </Typography>
              <Typography variant='p' component='h4'
                sx={{ my: 2, color: 'black', marginRight:'50px'}}
              >
                تماس با ما
              </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
