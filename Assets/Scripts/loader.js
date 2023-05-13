function loadPage() {
  var dateFact = Math.floor((new Date() - new Date("12 May 2023")) / (1000 * 3600 * 24));
  var version = "1.0"


  var facts = ["This theme was made " + dateFact + " days ago", "This theme is responsive", "This theme was made by <a href=\"https://github.com/DarioH0/\">DarioH0</a>", "You are currently using the " + version + " Version of this theme."];
  var funFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fun_fact").innerHTML = funFact;
  document.getElementById("fun_fact_title").innerHTML = `DID YOU KNOW`;
  document.getElementById("fun_fact_image").innerHTML = `<img src="Assets/Icons/logo.png" height=120 weight=120>` 

  new Promise((resolve) => {
    setTimeout(() => {
      var beforeLoad = document.getElementById("before_load");
      var afterLoad = document.getElementById("after_load");
      beforeLoad.classList.add("blur");
      afterLoad.classList.add("unblur");
      setTimeout(() => {
        beforeLoad.style.display = "none";
        afterLoad.style.display = "block";
        resolve();
        document.title = "Loader - Home"
      }, 1000); // transition animation
      document.title = "Loader - Loading..."
    }, 5000); // loading screen
    document.title = "Loader - Setting up..."
  });
}
