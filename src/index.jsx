import React from 'react';
import { hydrate } from 'react-dom';
import App from './views/App';
import getTest from './functions/testFetch';

const rootNode = document.querySelector('#root')

getTest().then(data => {
    hydrate(<App test={data} />, rootNode)
})

