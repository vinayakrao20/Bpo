import { Avatar,Box ,Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            variant="h5"
            gutterBottom
          >
               50 
          </Typography>
          <hr/>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            Yesterday Call
          </Typography>
        </Grid>
        
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
      </Box>
    </CardContent>
  </Card>
);
