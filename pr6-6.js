   var arr = [
    {
        dp:"https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",story:"https://images.unsplash.com/photo-1695740022137-8bed179ebdcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",story:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1531923220864-78b6e621129a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",story:"https://images.unsplash.com/photo-1527707342924-47a934b566e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",story:"https://plus.unsplash.com/premium_photo-1669674583837-345867b97c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
    },

   ]

 var storiyan = document.querySelector("#storiyan")
   var clutter = ""
   arr.forEach(function(elem,idx)
   { 
     clutter  += `<div class="story">
     <img id="${idx}" src="${elem.dp}" alt="">
    </div> `
   })
   
   storiyan.innerHTML = clutter

   storiyan.addEventListener("click",function(dets)
   {
       document.querySelector("#full-screen").style.display = "block" 
      document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
      setTimeout(function(){
        
        document.querySelector("#full-screen").style.display = "none " 

      },2500);
    });

    var con = document.querySelector("#cont")
    var love  = document.querySelector("i")
    var ti  = document.querySelector(".ri-heart-line")
    con.addEventListener("dblclick",function()
    {
       
        love.style.transform = "translate(-50%,-50%) scale(1)";
       love.style.opacity = "0.8"
       ti.style.color = "pink"
        setTimeout (function()
      {
        love.style.opacity  = "0";
       
      },1000);
      setTimeout (function()
      {
        love.style.transform = "translate(-50%,-50%) scale(0)";
       
      },2000);
        
    })
    
    
     

    