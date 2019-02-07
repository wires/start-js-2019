// ESM syntax is supported.

import browserReady from './ready.js'

export default function start(element) {
    browserReady().then(() => {
        console.log('starting', element)
        // startApp("main")
    })    
}