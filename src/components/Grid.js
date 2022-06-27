import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function FormRow1() {
  return (
    <React.Fragment>
      <Grid item xs={4} sm={8} md={12} lg={12} xl={12}>
      <Typography>
                <b>Additional informations</b>
            </Typography>
      </Grid>
    </React.Fragment>
  );
}
function FormRow2() {
  return (
    <React.Fragment>
      <Grid item container direction="row" justifyContent="space-evenly" alignItems="center" >
        <Grid item sx={{ width: 128, height: 128 }} alignItems="center" justifyContent="center" /* sm={8} md={12} lg={12} xl={12} */>
            <Item>
            <ButtonBase>
                <Img
                    alt="USA-flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
                />
            </ButtonBase>
            </Item>
        </Grid>
        <Grid xs={1} justifyContent="center" alignItems="center">
              <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{ width: 56, height: 56 }}  />
          </Grid>
        <Grid xs={1} justifyContent="center" alignItems="center">
              <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{ width: 56, height: 56 }} />
        </Grid>
        <Grid item sx={{ width: 128, height: 128 }} alignItems="center" justifyContent="center" /* sm={8} md={12} lg={12} xl={12}  */>
          <Item>
          <ButtonBase >
            <Img
              alt="Morocco-Flag"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/2560px-Flag_of_Morocco.svg.png"
            />
            </ButtonBase>
          </Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
function FormRow3() {
  return (
    <React.Fragment>
      <Grid container xs alignItems="center" justifyContent="space-around" >
        <Grid xs={2} justifyContent="flex-start">
          <Typography>
            <b>Algeria</b>
          </Typography>
        </Grid>
        <Grid>
          
        </Grid>
        <Grid xs={2} justifyContent="flex-start">
          <Typography>
            <b>Morocco</b>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function FormRow4() {
  return (
    <React.Fragment>
      <Grid item xs alignItems="center" justifyContent="space-around">
        <Grid>
        <Typography>
                   <b> Score final</b>
            </Typography> 
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default function Grid2() {
  return (
    <>
      <Paper elevation={3} /* sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 600,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}*/> 
      <Box 
      /* sx={{
        p: 0,
        margin: 'auto',
        maxWidth: 600,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }} */
      >
        <Grid container spacing={2} item xs={5} sm={8} md={12} lg={12} xl={12} >
          <Grid container spacing={5}  item xs={4} sm={8} md={12} lg={12} xl={12}>
            <FormRow1 />
          </Grid>
          <Grid container spacing={5} justifyContent="center" item xs={4} sm={8} md={12} lg={12} xl={12}>
            <FormRow2 />
          </Grid>
          <Grid container spacing={5} item xs={4} sm={8} md={12} lg={12} xl={12}>
            <FormRow3 />
          </Grid>
          <Grid container spacing={5} item xs={4} sm={8} md={12} lg={12} xl={12}>
            <FormRow4 />
          </Grid>
        </Grid>
      </Box>
    </Paper>     
    </>
  );
}