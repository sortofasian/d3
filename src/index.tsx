import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/* <BrowserRouter>
        Use hashrouter only for github pages routing */}
        <HashRouter>
            <App />
        </HashRouter>
        {/* </BrowserRouter> */}
    </React.StrictMode>
)
