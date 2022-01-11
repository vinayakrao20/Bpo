import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

export const TommorowCalls = (props) => (
  <Card {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h5"
          >
            100
          </Typography>
          <hr/>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            Tommorow Call
          </Typography>
        </Grid>
      
      </Grid>
      <Box sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        
      </Box>
    </CardContent>
  </Card>
);
