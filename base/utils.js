
/// function to process all the CSS classes inside a component 
/// keeping an opinionated style 

function applyClasses ( classes=[] ) {

    if ( classes.length === 0 ) {
        
            return null
      
    }

    else {
        
        return classes.toString().replace(/[\,]/gm, ' ')

    }

}

/// function to process all the events associated with all the events of 
/// a custom-element created
function applyEvents ( events=[] ) { 

    

 }


/// get 
function getElement ( id ) { 

    return document.getElementById ( id )

 }

 

///



export { applyClasses, applyEvents  }