    let title = document.getElementById("platformName");
    let fb = document.getElementById("fb");
    let ig = document.getElementById("ig");
    let yt = document.getElementById("yt");

    fb.addEventListener("click", function(){
      document.body.style.backgroundColor = "#1877F2"; 
      title.textContent = "Facebook";
    });

    ig.addEventListener("click", function(){
      document.body.style.backgroundColor = "#C13584";
      title.textContent = "Instagram";
    });

    yt.addEventListener("click", function(){
      document.body.style.backgroundColor = "#FF0000"; 
      title.textContent = "YouTube";
    });