import * as React from 'react';
import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import TextField from '@mui/material/TextField';
//import TeamNameAndLogo from "./TeamNameAndLogo";
//import UserInput from "./UserInput";

/* const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  })); */
 const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
  

export function GridMatch(params) {
    return (
        <Paper
      /* sx={{
        p: 2,
        margin: 'auto',
        //maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }} */
    >
      <Grid container spacing={2} xs>
        <Grid item justifyContent="center" xs>
            Additional informations
        </Grid>
{/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <Grid container direction="row" justifyContent="center">
            <Grid>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img
                            alt="complex"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/2560px-Flag_of_Morocco.svg.png"
                            />
                    </ButtonBase>
                </Grid>
                <Grid>
                    Morocco
                </Grid>
            </Grid>
{/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <Grid>
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            </Grid>
{/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <Grid>
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            </Grid>
{/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <Grid item container direction="column" justifyContent="center">
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img
                            alt="complex"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/2560px-Flag_of_Algeria.svg.png"
                            />
                    </ButtonBase>
                </Grid>
                <Grid>
                    <Typography>
                        Algeria
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
{/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <Grid item xs>
            <Typography>
                Score final
            </Typography>
        </Grid>
      </Grid>
    </Paper>
    );
}

export default GridMatch;