import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Img = styled('img')({
    maxWidth: '100%',
    height: 'auto',
    padding: '0',
    margin: '0',
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function TeamNameAndLogo(props) {
  return (
    <>
      <Grid>
        <ButtonBase>
            <Img
            alt={props.alt}
            src={props.src}
            />
        </ButtonBase>
      </Grid>
      <Grid xs justifyContent="flex-start">
            <Item>
                <Typography>
                    <b>{props.name}</b>
                </Typography>
            </Item>
        </Grid>
    </>
  )
}