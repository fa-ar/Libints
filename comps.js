import { create, mount, unmount, patch } from "./core.js"

const body = document.querySelector ( 'body' )

/// Main app entry point
const app = create (

    'div',
    {
        id: 'app',
        class: [
            
            'absolute', // position
            'fl-n', // float
            'd-g', // display
            'w-100', //'header'width
            'h-100', // height
            'mg-0', // margin
            'pd-0', // padding
            'lst-none', // list style
            // color 
            // background
            // border 
            // boxshadow
        ],
    },
    
    [
        mount ( create (

            'header',
            {
                id: 'header',
                class: [

                    'relative', // position
                    'h-b',
                    'bg-red'

                ]
            }, 'header',

        ) ) , 

        /// Main navigtion section
        create (

            'nav',
            {
                id: 'nav',
                class: [

                    'relative',
                    'pd-red'

                ]
            }, 'nav'

        ),
        
        /// Main content area
        create (

            'main',
            {
                id: 'main',
                class: [

                    'relative'
                
                ]
            }, 'main'

        ),
        
        /// aside section
        create (

            'aside',
            {
                id: 'aside'
            }, 'aside'

        ),

        /// Footer section
        create (

            'footer',
            {
                id: 'footer',
                class: [

                    'relative'

                ]
            }, 'footer'

        ),
        
        
    ]

)

mount ( app, body )
console.clear()
console.log(app.properties)

