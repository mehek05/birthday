var images = [
    "https://www.wishesmsg.com/wp-content/uploads/Happy-Birthday.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvFpo6NF_SwaFVl8530fYGFW4HCrd8Ph0UdufB6yyJGPBwbBH9-f8LEtWFPGkajFFzKM&usqp=CAU",
    "https://cdn.greenvelope.com/blog/wp-content/uploads/Happy-birthday-wishes-blog-header.png"
    ];
    
    var i = 0;
    function playmusic() {  
      document.getElementById("photo").src = images[i];
      i++;
     document.getElementById("music").play();
     
    }
    
    

