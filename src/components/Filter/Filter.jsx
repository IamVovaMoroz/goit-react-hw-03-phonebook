import React from 'react'
import TextField from '@mui/material/TextField';
import { FilterContainer } from './Filter.styled';

export const Filter= ({handleChange, value}) => {
  return (
    <FilterContainer className='ContainerFilter'>
    <TextField onChange={handleChange} value={value} id="standard-basic" label="Contact search" variant="standard" /></FilterContainer>
  )
}