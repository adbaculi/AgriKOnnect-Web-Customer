import React from 'react'
import { Box, CssBaseline, Button, 
    GlobalStyles, IconButton, Toolbar, Typography,
    Paper, Fab, InputBase,styled, Grid, ListItemIcon, 
    List, Stack, ListItem, ListItemText, Avatar} from "@mui/material";
import CustomerResponsiveAppBar from '../../components/CustomerResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../../components/ScrollToTop';
import { Image } from 'mui-image';
import productimg from '../../assets/lettuce.png';
import { Diversity1 } from '@mui/icons-material';
import { margin } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const classes = {
    root: {
      flexGrow: 1
    },
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#5F5B5B',
      marginTop: 5,
      marginLeft: 2,
    },
    SubHeader: {
      fontFamily: 'Poppins',
      color: '#5F5B5B',
      fontSize: 25,
      marginBottom: 5,
    },
    arrowback:{
        color: '#111111',
        width: 50,
        height: 50,
        marginTop: 5,
    },
    producttitle:{
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#737070',
    },
    productprice:{
      fontFamily: 'Poppins',
      color: '#000000',
    },
}

//Storing of tempdata
const ProdReviewsList = [
    {
      name: "Althea Baculi",
      date: "May 1, 2022",
      comment: "Fresh and fast delivery!",
      image: <Avatar></Avatar>,
    },
    {
        name: "Althea Baculi",
        date: "May 1, 2022",
        comment: "Fresh and fast delivery!",
        image:<Avatar></Avatar>,
    },
];

export default function ProductReviews(props) {
    const navigate = useNavigate();
    return (
    <>
        <CssBaseline />
          <GlobalStyles
            styles={{
              body: { backgroundColor: "#F4F4F4" },
            }}
        />
        <CustomerResponsiveAppBar/>
        <Box component="main" sx={{ p: 3 }}>
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3 }}
            >   
                <Toolbar id="back-to-top-anchor"/>
                <Stack direction='row'>
                    <Button onClick={() => navigate('/productdetails')}>
                        <ArrowBackIcon sx = {classes.arrowback}/>
                    </Button>
                    <Typography variant='h3' sx={classes.Header}>
                    Product Reviews
                    </Typography>
                </Stack>
                <List>
                    {ProdReviewsList.map((item, index) => {
                        const { name,date, comment, image} = item;
                        return (
                        <Box sx={{ width: '100%', marginBottom: 1 }}>
                            <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                            <Item key={index}>
                                <ListItem alignItems="flex-start">
                                {image && <ListItemIcon>{image}</ListItemIcon>}
                                <ListItemText primary={name} secondary={<Typography
                                sx={{ display: 'inline',
                                fontFamily: 'Poppins',
                                color: '#000000'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                {date}
                                —
                                {comment}
                                </Typography>
                                } 
                                primaryTypographyProps={{ style: classes.producttitle }}/>
                                </ListItem>
                            </Item>
                            </Stack>
                        </Box>
                        );
                        })}
                </List>
                <ScrollTop {...props}>
                    <Fab sx= {classes.ScrollTopButton} size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </Box>
        </Box>
    </>
  )
}