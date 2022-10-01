import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { textAlign } from '@mui/system'

const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px'
           justifyContent='center' p='20px'>
      <Typography fontWeight={700}
      sx={{fontSize: {lg: '44px', xs: '30px'}}}
      textAlign='center' mb='50px'>
        Awesome Exercises You <br/>
        Should Know
      </Typography>

    </Stack>
  )
}

export default SearchExercises