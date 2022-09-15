/// main function ///
function create ( tag, properties=null, children=[''] ) {

    console.log ( properties )

    // return the virtual node
    return {

        tag, 
        properties,
        children,

    } 

}



/// function that mount /// 
function mount ( vnode, container ) {

    // create the element
    const element = ( vnode.element = document.createElement (vnode.tag ) )

    // set properties
    for ( const key in vnode.properties ) {

        element.setAttribute ( key, vnode.properties [ key ] )

    }
    
    // handle children 
    if ( typeof vnode.children === 'string' ) {

        element.textContent = vnode.children

    }

    else {

        vnode.children.forEach ( child => {

            mount ( child, element )

        } )

    }
    
    // mount to the dom
    container.appendChild ( element )
    

}



/// unmount the virtual node to the dom ///
function unmount ( vnode ) {

    vnode.element.parentNode.removeChild ( vnode.element )

}



/// figure differences between two nodes
function patch ( node1, node2 ) {

    const element = ( node2.element = node1.element )

    // the nodes have different tags
    if ( node1.tag !== node2.tag ) {

        mount ( node2, element,parentNode )
        unmount ( node1 )

    }

    // the node are of the same tag
    else {

        // the old vnode has a string children
        if ( typeof node2.children === 'string' ) {

            element.textContent = node2.children 

        }

        // the new vnode has a string children
        else {

            const child1 = node1.children
            const child2 = node2.children
            const commonLength = Math.min ( child1.length, child2.length )

            // patch the children both nodes have in common
            for ( let i = 0; i < commonLength; i++ ) {

                patch ( child1 [ i ], child2 [ i ])

            }

            // old children was longer
            // remove the children that are note "there" anymore
            if ( child1.length > child2.length ) {

                child1.slice ( child2.length ).forEach ( child => {

                    unmount ( child )

                } )

            }

            // old children was shorter
            // add the newly added children
            else if ( child2.length > child1.length ) {

                child2.slice ( child1.length ).forEach ( child => {

                    mount ( child, element )

                } )

            }


        }

    }

}


/// function in charge of the reactivity 
function watch ( fn ) {

    active = fn
    
    fn()

    active = null

}


/// esxports
export { create, mount, unmount, patch, watch } 