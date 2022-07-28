import './PageNav.scss'

import { Dispatch, SetStateAction } from 'react'

type Props = {
    pageState: [number, Dispatch<SetStateAction<number>>]
    limitState: [number, Dispatch<SetStateAction<number>>]
    total: number
}
function PageNav({ pageState, limitState, total }: Props) {
    const [page, setPage] = pageState
    const [limit, setLimit] = limitState

    return (
        <>
            <div className='pagenav'>
                <div className='pagenav-limit'>
                    <select
                        title='Items per page'
                        value={limit}
                        onChange={(e) => setLimit(parseInt(e.target.value))}
                    >
                        <option>10</option>
                        <option>15</option>
                        <option>30</option>
                    </select>
                    <label>items per page</label>
                </div>

                <div className='pagenav-buttons'>
                    <button
                        className={`${page > 1 ? '' : 'disabled'}`}
                        onClick={() => {
                            if (page > 1) {
                                setPage((page) => page - 1)
                            }
                        }}
                    >
                        Last
                    </button>

                    <div>{`${page} of ${Math.ceil(total / limit)}`}</div>

                    <button
                        className={`${page < total / limit ? '' : 'disabled'}`}
                        onClick={() => {
                            if (page < total / limit) {
                                setPage((page) => page + 1)
                            }
                        }}
                    >
                        Next
                    </button>
                </div>
                <div className='pagenav-limit' />
            </div>
        </>
    )
}

export default PageNav
