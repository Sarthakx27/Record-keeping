import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

export const Fields = (props) => {
  return (
    <div className='data_set'>
          <h4>{props.name}</h4>
          <h4>{props.email}</h4>
          <h4>
            <Stack>
            <Button 
              color='error'
              variant='contained'>
              <DeleteIcon />
            </Button>
            </Stack>
          </h4>
        </div>
  )
}

export default Fields 