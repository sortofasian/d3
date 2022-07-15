import './Grid.scss'

import React from 'react'

type Props = { children: React.ReactNode }
function Grid({ children }: Props) {
    return <div className='grid'>{children}</div>
}

export default Grid
