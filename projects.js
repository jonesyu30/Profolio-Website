// Load the data from the JSON file
async function readJson() {
    const response = await fetch("projects.json");
    const json = await response.json();
    const shuffled = json.sort(() => Math.random() - 0.5);
    return shuffled;
}
function writeProjects(projects) {
    var projectSection = document.getElementById("projects-grid");
    projectSection.innerHTML = "";
    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var projectElement = document.createElement("div");
        projectElement.className = "project-card";
        // Add the project name and language
        projectElement.innerHTML = "<h3>" + project.name + "</h3><p>" + project.language + "</p>";

        //Add the image with styling to fit coherently in the card
        const imageHeight = "250px"; // You can adjust this value as needed
        var imageHTML = `<img src='${project.image}' alt='Project Image'>`;

        const link = project.link;
        if (link) {
            if (link.startsWith("http")) {
                imageHTML = `<a href='${link}' target='_blank'> ${imageHTML} </a>`;
            } else {
                imageHTML = `<a href='./projects/${project.link}'> ${imageHTML} </a>`;
            }
        }
        // I made the previous line without AI, so cool~
        imageHTML = `<div style='padding: 5px; margin: 20px 0; border-radius: 10px; overflow: hidden;'> ${imageHTML} </div>`;
        projectElement.innerHTML += imageHTML;

        // projectElement.innerHTML += "<img src='" + project.image + "' alt='Project Image' style='width: 100%; height: auto;'>";

        // Add the tasks
        for (var j = 0; j < project.tasks.length; j++) {
            var task = project.tasks[j];
            projectElement.innerHTML += "<h4><b>" + task.name + "</b></h4>";
            projectElement.innerHTML += "<p>" + task.description + "</p>";
        }
        if (link) {
            if (link.startsWith("http")) {
                projectElement.innerHTML += `<a href='${link}' target='_blank'>Open</a>`;
            } else {
                projectElement.innerHTML += `<a href='./projects/${link}'>Read More</a>`;
            }
        }
        projectSection.appendChild(projectElement);
    }
}



// Load the projects
var json = readJson().then(json => writeProjects(json));