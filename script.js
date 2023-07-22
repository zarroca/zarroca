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
                    document.getElementById("video").src = "https://github.com/zarroca/zarroca/raw/main/logov.mp4";
            } else {
                document.getElementById("menu").style.display = "none";
                document.querySelector(".nav-mobile").style.display = "none";
                document.getElementById("shortcuts").style.display = "block";
                document.getElementById("close").style.display = "none";
                    document.getElementById("video").src = "https://cdn.glitch.global/a737c789-ffa2-499c-99a5-8616f6e5cdaa/logo.mp4?v=1689914645806";
            }
          }
                
          var x = window.matchMedia("(max-width: 1000px)")
          myFunction(x)
          x.addListener(myFunction)
