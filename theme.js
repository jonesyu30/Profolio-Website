function swapDiv(currentdiv, newdiv) {
  document.getElementById(currentdiv).style.display = 'none';
  document.getElementById(newdiv).style.display = 'block';
}

function addCss(fileName) {
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}
var currentTheme = localStorage.getItem("Theme") || "light";
if (currentTheme === "dark") {
  console.log("Dark theme detected");
  addCss("/style-dark.css");
}


function toggleTheme() {
  var currentTheme = localStorage.getItem("Theme") || "light";
  if (currentTheme === "light") {
    currentTheme = "dark";
    addCss("/style-dark.css");
  }
  else {
    currentTheme = "light";
    addCss("/style.css");
  }
  localStorage.setItem("Theme", currentTheme);
  location.reload();
}