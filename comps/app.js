import { create, mount, unmount, patch } from "../base/core.js"
import { applyClasses } from "../base/utils.js"

let body = document.querySelector ( 'body' )


/// Main application access point 
let app = create (

    'div',

    {
        'id': 'app',
        'class': applyClasses ( [

            'w-100',
            'h-100',
            'bg-red', 
            'pd-0',
            'mg-0'
            

        ] )
    },
    
    [
        /// header
        create (
            
            'header',

            {
                'id': 'test',
                'class': applyClasses ( [

                    'header',
                    'bg-blue',
                    'pd-0',
                    'mg-0'
                    
                ] )
            },

            'header'

        ),

        /// content
        create (

            'nav',
            
            {
                'id': 'nav',
                'class': applyClasses ( [

                    'bg-blue',
                    'pd-0',
                    'mg-0'
                
                ] )
            },

            'nav'


        ),
        
        /// left aside
        create (

            'aside',

            {
                'id': 'sideL',
                'class': applyClasses ( [

                    'bg-blue',
                    'pd-0',
                    'mg-0'

                ] )
            },

            'asideL'

        ),

        /// right aside
        create (

            'aside',

            {
                'id': 'sideR',
                'class': applyClasses ( [

                    'bg-blue',
                    'pd-0',
                    'mg-0'

                ] )
            },

            'asideR'

        ),
        
        /// footer aka "control center"
        create (

            'footer',

            {
                'id': 'footer',
                'class': applyClasses ( [

                    'bg-blue',
                    'pd-0',
                    'mg-0'

                ] )
            },

            'footer'

        ),

        create (

            'button',

            {
                'id': 'test-elem',
                'dataAttr': 'test-data',
                'class': applyClasses ( [

                    'bg-green',
                    'pd-a',
                    'mg-a',
                    'bw-n',
                    'br-bb'

                ] ),
                
                'onclick': 'console.log( this.dataset )'
                
            },

            'testing-reactivity',

        )

    ],

) 

console.clear()
//console.log(app)
console.log(app.children[5])


mount ( app, body )



