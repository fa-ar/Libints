import { create, mount, unmount, patch } from "../base/core.js"

let body = document.querySelector ( 'body' )


/// Main application access point 
let app = create (

    'div',

    {
        id: 'app',
        class: [

            'bg-red', 
            'pd-a'

        ].toString().replace ( /[\,]/gm, ' ' )
    },
    
    'app',

) 

mount ( app, body )
console.clear()
console.log ( app.properties )