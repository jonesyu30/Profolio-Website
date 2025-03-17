// Load projects from the database to the page. 

// Load the data from the JSON file
async function readJson() {
    const response = await fetch("projects.json");
    const json = await response.json();
    return json;
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

        //Add the multimedia
        for(var j = 0; j < project.multimedia.length; j++) {
            var multimedia = project.multimedia[j];
            if(multimedia.type == "image") {
                projectElement.innerHTML += "<img src='" + multimedia.link + "' alt='Project Image'>";
            }else if(multimedia.type == "video") {
                projectElement.innerHTML += "<video controls><source src='" + multimedia.link + "' type='video/mp4'></video>";
            }else if (multimedia.type == "youtube") {
                projectElement.innerHTML += "<iframe src='" + multimedia.link + "' frameborder='0' controls='0' allowfullscreen></iframe>";
            }
        }

        // Add the tasks
        for(var j = 0; j < project.tasks.length; j++) {
            var task = project.tasks[j];
            projectElement.innerHTML += "<p><b>" + task.name + "</b></p>";
            projectElement.innerHTML += "<p>" + task.description + "</p>";
        }
        projectSection.appendChild(projectElement);
    }
}



// Load the projects
var json = readJson().then(json => writeProjects(json));