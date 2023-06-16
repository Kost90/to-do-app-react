import React, {memo} from 'react'


const Checkbox = memo(({onChenge}) => {
    return (
        <input type="checkbox" onChange={onChenge} />
    )
  })

export default Checkbox