import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ShoppingCart } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';


const pages = ['Products', 'About', 'Shop','Features','Services','ContactUs'];
const settings = ['Profile', 'Cart', 'Checkout', 'Logout'];

var items = [
      {pic: "/images/img1.jpg"},
      {pic: "/images/img2.jpg"},
      {pic: "/images/img3.jpg"},
      {pic:"/images/img4.jpg"},
      {pic:"/images/img5.jpg"},
      {pic:"/images/img6.jpg"},
      {pic:"/images/img7.jpg"},
      {pic:"/images/img8.jpg"},
      {pic:"/images/img9.jpg"},
      {pic:"/images/img10.jpg"},
      {pic:"/images/img11.jpg"},
      {pic:"/images/img12.jpg"},
      {pic:"/images/img13.jpg"},
      {pic:"/images/img14.jpg"}
]

export default function MatrialUI() {
  let data = [
    {id:1,name:"Product1",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img1.jpg"},
    {id:2,name:"Product2",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img2.jpg"},
    {id:3,name:"Product3",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img3.jpg"},
    {id:4,name:"Product4",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img4.jpg"},
    {id:5,name:"Product5",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img5.jpg"},
    {id:6,name:"Product6",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img6.jpg"},
    {id:7,name:"Product7",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img7.jpg"},
    {id:8,name:"Product8",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img8.jpg"},
    {id:9,name:"Product9",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img9.jpg"},
    {id:10,name:"Product10",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img10.jpg"},
    {id:11,name:"Product11",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img11.jpg"},
    {id:12,name:"Product12",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img12.jpg"},
    {id:13,name:"Product13",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img13.jpg"},
    {id:14,name:"Product14",basePrice:2400,discount:50,finalPrice:1200,pic:"/images/img14.jpg"}
  ]

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl" className='background'>
        <Toolbar disableGutters>
          <ShoppingCart sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dcart
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ShoppingCart sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             Dcart
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/images/img2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <Carousel>
            {
                items.map( (item, i) => <img key={i} src={item.pic} height={500} width={"100%"} alt=''/>)        
            }
    </Carousel>

    <Grid Container>
   {data.map((p,index) => {
     return <Grid item key={index} xl={2} lg={3} md={4} sm={6} xs={12}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={p.pic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {p.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           <del className='text-danger'>&#83377;{p.basePrice}</del>&#83377;{p.finalPrice}<sup>{p.discount}% Off</sup>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  variant='contained' color='primary' className='background w-100'>Add to cart</Button>
      </CardActions>
    </Card>
     </Grid>
   })
   }
    </Grid>
    </>
  );
}
 
