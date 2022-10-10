import React from 'react'
import { Box } from '@mui/system'

const HorizontalScrollbar = ({data}) => {
  return (
    <div>
        {data.map((item)=>  (
                <Box
                key={item.id || item}
                >

                </Box>
            )
        )}
    </div>
  )
}

export default HorizontalScrollbar