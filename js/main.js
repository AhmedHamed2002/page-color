document.body.classList.add(localStorage.getItem("pageColor")) ;  

let  Color =  document.querySelectorAll(".color_switcher li"); 

let array_color = [] ;

for(let i  =0 ;  i<Color.length ; i++)
{
    array_color.push(Color[i].getAttribute("data-color")) ; 
    
    Color[i].addEventListener("click" , function(){

        // remove all  class from body 
        document.body.classList.remove(...array_color) ;  
        
        // add  class in body  
        document.body.classList.add(this.getAttribute("data-color")); 

        // add  to local storage 
        localStorage.setItem("pageColor" , this.getAttribute("data-color")); 
    }); 
}