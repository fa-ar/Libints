
/// function to process all the classes inside a component 
/// keeping an opinionated style 

function applyClasses ( classes=[] ) {

    if ( classes.length === 0 ) {
        
            return null
      
    }

    else {
        
        return classes = classes.toString().replace(/[\,]/gm, ' ')

    }

}


export { applyClasses }