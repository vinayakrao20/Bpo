
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme,Grid,Container } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const Sales = (props) => {
  const theme = useTheme();


  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
  
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <CardHeader
    
        title="Agents Monthly Performance "
        align="center"
      />
      <Divider />

      <CardContent>
        <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <input required type="date"></input><br/>
            <b> Enter From Date</b>
          </Grid>
          <Grid item lg={4}>
            <input required type="date"></input><br/>
           <b> Enter To Date</b>
          </Grid>
          <Grid item={4}>
            {'         '}
            <Button color='primary' variant='contained'>Search</Button>

          </Grid>
        </Grid>
        </Container>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >    
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};
