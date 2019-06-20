import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/views/App'
import { getBundle } from '../utils/getBundle'
import getTest from '../src/functions/testFetch'

export const handleRoot = async (_req, res) => {
    const test = await getTest()
    const application = ReactDOMServer.renderToString(<App test={test} />);
    const bundleJS = getBundle('bundle')
    res.render('index', { application, bundleJS, init: JSON.stringify(test) })
}