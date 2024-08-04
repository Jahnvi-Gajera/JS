//Immediately Invoked Function Expressions (IIFE)
// *used to remove gobal scope pollution 

(function chai(){                  //named iife
    console.log(`DB connected`);
})();                                    //iife    ,  must end with semicolon
// chai()

//()()    //1st () is for function definition and 2nd is for execution (for understanding) 


//also used for arrow function
(  (name) => {                    //simple iife
    console.log(`DB Connected two ${name}`);
})(`jahnvi`)                    // see as chai() is replaced by ()

// most important point  --> if we want to write 2 iife together must end 1st iife with semicolon