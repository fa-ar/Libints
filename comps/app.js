import { create, mount, unmount, patch } from "../base/core.js"
import { applyClasses } from "../base/utils.js"

let body = document.querySelector ( 'body' )


/// Main application access point 
let app = create (

    'div',

    {
        id: 'app',
        class: applyClasses ( [

            'bg-red', 
            'pd-a'
            

        ] )
    },
    
    [
        /// header
        create (
            
            'header',

            {
                id: 'test',
                class: applyClasses ( [

                    'header',
                    'bg-blue',
                    'pd-a',
                    'mg-a'
                    

                ] )
            },

            'header'

        ),

        /// content
        create (

            'nav',
            
            {
                id: 'nav',
                class: applyClasses ( [

                    'bg-blue',
                    'pd-a',
                    'mg-a'
                
                ] )
            },

            'nav'


        ),

        create (

            'aside',

            {
                id: 'sideL',
                class: applyClasses ( [

                    'bg-blue',
                    'pd-a',
                    'mg-a'

                ] )
            },

            'asideL'

        )


    ],

) 

console.clear()
console.log(typeof app)
mount ( app, body )
console.clear()
