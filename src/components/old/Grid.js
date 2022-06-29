import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TeamNameAndLogo from "../TeamNameAndLogo";
import UserInput from "../UserInput";
// import { sizing } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow1() {
  return (
    <React.Fragment>
      <Grid item xs={4} sm={8} md={12} sx={{
        mx: "auto",
        width: "auto"
        }}
      >
        <Item>
          <Typography >
            <b>Additional informations</b>
          </Typography>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

// function FormRow2(props) {
//   return (
//     <React.Fragment>
//       <Grid item container direction="row" justifyContent="space-evenly" alignItems="baseline" >
//         <Grid item container sx={{ width: 128, height: 128 }} alignItems="center" justifyContent="space-between" >
//             <Grid items >
//               <Item>
//                 <TeamNameAndLogo alt={props.descA} src={props.logoA} name={props.teamA} />
//               </Item>
//             </Grid>
//         </Grid>
//         <Grid xs={2} justifyContent="center" alignItems="center">
//               <Item>
//                 <UserInput />
//               </Item>
//         </Grid>
//         <Grid xs={2} justifyContent="center" alignItems="center">
//               <Item>
//                 <UserInput />
//               </Item>
//         </Grid>
//         <Grid item container sx={{ width: 128, height: 128 }} alignItems="center" justifyContent="space-between" >
//             <Grid items >
//               <Item>
//                 <TeamNameAndLogo alt={props.descB} src={props.logoB} name={props.teamB} />
//                 {/* <TeamNameAndLogo alt="Morocco-flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/2560px-Flag_of_Morocco.svg.png" name="Morocco" /> */}
//               </Item>
//             </Grid>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

function FormRow4() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default function Grid2(props) {
  return (
    <>
      <Paper elevation={3} justifyContent="center" alignItems="center">
      <Box 
      sx={{
        xs: "",
        mx: "auto",
        width: '98%'
      }}
      >
        <Grid container spacing={1} item xs={5} sm={8} md={12}>
          <Grid container spacing={5}  item >
            <FormRow1 />
          </Grid>
          <Grid container spacing={5} justifyContent="center" alignItems="center" item xs={8} sm={12}>
            <Grid item container direction="row" justifyContent="space-evenly" alignItems="baseline" >
              <Grid item container sx={{ width: 128, height: 128 }} alignItems="center" justifyContent="space-between" >
                <Grid items >
                  <Item>
                    <TeamNameAndLogo src={props.logoA} name={props.teamA} />
                  </Item>
                </Grid>
              </Grid>
              <Grid xs={2} justifyContent="center" alignItems="center">
                <Item>
                  <UserInput />
                </Item>
              </Grid>
              <Grid xs={2} justifyContent="center" alignItems="center">
                <Item>
                  <UserInput />
                </Item>
              </Grid>
              <Grid item container sx={{ width: 128, height: 128 }} alignItems="center" justifyContent="space-between" >
                <Grid items >
                  <Item>
                    <TeamNameAndLogo src={props.logoB} name={props.teamB} />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
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