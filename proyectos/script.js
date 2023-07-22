document
        .querySelector("#menu")
        .addEventListener("click", function () {
          document.querySelector(".nav-mobile").style.display = "flex";
        document.querySelector("#menu").style.display = "none";
        document.querySelector("#close").style.display = "block";
        });   
      
      document
        .querySelector("#close")
        .addEventListener("click", function () {
          document.querySelector(".nav-mobile").style.display = "none";
        document.querySelector("#close").style.display = "none";
        document.querySelector("#menu").style.display = "block";
        });

        function myFunction(x) {
            if (x.matches) {
                document.getElementById("menu").style.display = "block";
                document.getElementById("close").style.display = "none";
              document.getElementById("shortcuts").style.display = "none";
            } else {
                document.getElementById("menu").style.display = "none";
                document.querySelector(".nav-mobile").style.display = "none";
                document.getElementById("shortcuts").style.display = "block";
                document.getElementById("close").style.display = "none";
            }
          }
                
          var x = window.matchMedia("(max-width: 1000px)")
          myFunction(x)
          x.addListener(myFunction)
