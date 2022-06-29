import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TeamNameAndLogo from "./TeamNameAndLogo";
import UserInput from "./UserInput";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Grid2(props) {
  return (
    <>
        <Paper elevation={3} justifyContent="center" alignItems="center">
            <Box 
                sx={{
                    xs: "",
                    mx: "auto",
                    width: '98%'
                }}>
                <Grid container spacing={1} item xs={5} sm={8} md={12}>
                    <Grid container spacing={5}  item >
                        <Grid item xs={4} sm={8} md={12} sx={{
                            mx: "auto",
                            width: "auto"
                            }}>
                            <Item>
                                <Typography >
                                    <b>Additional informations</b>
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                        <Grid container spacing={5} justifyContent="center" alignItems="center" item xs={8} sm={12}>
                            <Grid item container direction="row" justifyContent="space-evenly" alignItems="baseline" >
                                <Grid item container sx={{ width: 128, height: 128 }} alignItems="center" justifyContent="space-between" >
                                    <Grid items >
                                        <TeamNameAndLogo src={props.logoA} name={props.teamA} />
                                    </Grid>
                            </Grid>
                            <Grid xs={2} justifyContent="center" alignItems="center">
                                <UserInput />
                            </Grid>
                            <Grid xs={2} justifyContent="center" alignItems="center">
                                <UserInput />
                            </Grid>
                            <Grid item container sx={{ width: 128, height: 128 }} alignItems="center" justifyContent="space-between" >
                                <Grid items >
                                    <TeamNameAndLogo src={props.logoB} name={props.teamB} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} item xs={4} sm={8} md={12} lg={12} xl={12}>
                        <Grid item xs={4} sm={8} md={12} sx={{
                            mx: "auto",
                            width: "auto"
                            }}>
                            <Item>
                                <Typography>
                                    <b> Score final</b>
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>     
    </>
  );
}