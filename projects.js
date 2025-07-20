// hardcoded JSON data for projects

const PROJECT_JSON = [
    {
        "id": 1,
        "name": "Java Image Postprocessing - Pixel Manipulation",
        "language": "Java",
        "tasks": [
            {
                "id": 1,
                "name": "Image filter",
                "description": "Designed and developed an image filter generator which uses an Evolution algorithm to recreate an image with a box-filter. "
            },
            {
                "id": 2,
                "name": "GUI",
                "description": "Designed a user interface which uses Java Swing to visualise the generation process. The user can save the generated image as well as the generation process as a video."
            }
        ],
        "image": "./assets/images/java-image-postprocessing.png",
        "link": "java-image-postprocessing.html"
    },
    {
        "id": 2,
        "name": "Tetris Blossom ❀ - A Terminal Tetris Clone",
        "language": "Python",
        "tasks": [
            {
                "id": 1,
                "name": "Group Project",
                "description": "Collaborate with a group of teammates by sharing the workload to maximise the efficiency. "
            },
            {
                "id": 2,
                "name": "Game Design",
                "description": "Designed and developed a Python console Tetris game without any external libraries which generates a real time response. "
            },
            {
                "id": 3,
                "name": "Score",
                "description": "Obtained grade A in Group Project of ENGG1330 - Computer Programming."
            }
        ],
        "image": "./assets/images/tetris-blossom.png",
        "link": "tetris-blossom.html"
    },
    {
        "id": 3,
        "name": "Automatic Notice Scrapper for Scouts - A Discord Bot",
        "language": "Node.js",
        "tasks": [
            {
                "id": 1,
                "name": "Web Scrapping",
                "description": "Scheduled an HTTP request everyday to scrap updates from the notice website. "
            },
            {
                "id": 2,
                "name": "Discord Bot",
                "description": "Designed and developed a Discord bot that notifies users whenever a new notice is created using Discord.js."
            },
            {
                "id": 3,
                "name": "Marketing",
                "description": "Recorded and edited a playlist of 4 YouTube videos to showcase the progresses and results."
            }
        ],
        "image": "https://i.ytimg.com/vi/wzCNy71EyDc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDrUMMDBEA_hHfrK_YkKUPsycOw2A",
        "link": "discord-bot.html"
    },
    {
        "id": 4,
        "name": "Pascal Maze - A 2D Terminal Maze Game",
        "language": "Pascal",
        "tasks": [
            {
                "id": 1,
                "name": "Algorithm",
                "description": "Designed and created a console maze game in Pascal, which uses the depth first search algorithm to generate random mazes. "
            },
            {
                "id": 2,
                "name": "Documentation",
                "description": "Documented the code and created a user manual to explain how to play the game."
            },
            {
                "id": 3,
                "name": "Leaderboard",
                "description": "Implemented a leaderboard system, which uses insertion and bubble sort to ensure accurate rankings."
            }
        ],
        "image": "./assets/images/pascal-maze.png",
        "link": "pascal-maze.html"
    },
    {
        "id": 5,
        "name": "Terra Verde Dungeon - A console based Dungeon Game",
        "language": "C++",
        "tasks": [
            {
                "id": 1,
                "name": "Version Control",
                "description": "Worked in a group of 4, which used Github version control to track changes from each teammates. "
            },
            {
                "id": 2,
                "name": "Data Structure",
                "description": "Used various data structures including maps and classes to effectivly store information in different aspect of the game."
            },
            {
                "id": 3,
                "name": "Multithreading",
                "description": "Implemented a real time boss fight using multiple threads to seperatly handle the Boss AI, Player input, and Rendering."
            }
        ],
        "image": "./assets/images/dungeon-game.png",
        "link": "dungeon-game.html"
    },
    {
        "id": 6,
        "name": "W.A.W.L. - A platform to Make Art With LOVE.",
        "language": "HTML/CSS/JavaScript",
        "tasks": [
            {
                "id": 1,
                "name": "Serverless Application",
                "description": "Designed a serverless web application using Peer.JS to allow collaboration in drawing with friends and partner."
            },
            {
                "id": 2,
                "name": "Mobile Friendly",
                "description": "Incorperated designs to ensure the application is mobile friendly, allowing users to draw on their phones."
            },
            {
                "id": 3,
                "name": "Clear Documentation",
                "description": "Documented the code and features, with a user manual in README.MD file to explain how to use the application as well as the technologies used."
            }
        ],
        "image": "https://raw.githubusercontent.com/jonesyu30/MAWL/main/assets/08a69412-dd0d-46e1-aae4-36f4e3088e47.sketchpad-2.png",
        "link": "make-art-with-love.html"
    },
    {
        "id": 7,
        "name": "N.G.L. Convo - Anonymous conversation for Instagram",
        "language": "Next.js/MongoDB",
        "tasks": [
            {
                "id": 1,
                "name": "Database Management",
                "description": "Designed and implemented a MongoDB database structure to store user data and conversation history, ensuring data integrity and security."
            },
            {
                "id": 2,
                "name": "Next.js API Routes",
                "description": "Utilised Next.js API routes to handle server-side logic, including user message retrieval, and storage."
            },
            {
                "id": 3,
                "name": "Vercel hosting",
                "description": "Deployed the application on Vercel, ensuring fast and reliable hosting with automatic scaling capabilities."
            }
        ],
        "image": "https://ngl-convo.vercel.app/icon.ico",
        "link": "ngl-convo.html"
    },
    {
        "id": 8,
        "name": "Portfolio Website - You Chung Yau's Portfolio",
        "language": "HTML/CSS/JavaScript",
        "tasks": [
            {
                "id": 1,
                "name": "Static Site Generator",
                "description": "Developed a static site generator using Node.js to create a fast and efficient portfolio website, optimised for performance and SEO."
            },
            {
                "id": 2,
                "name": "Responsive Design",
                "description": "Developed a responsive design using CSS to ensure the website is accessible on various devices, including desktops, tablets, and smartphones."
            },
            {
                "id": 3,
                "name": "Dark/Light Mode",
                "description": "Implemented a dark/light mode toggle using JavaScript, allowing users to switch between themes for a personalised viewing experience."
            }
        ],
        "image": "./assets/images/profolio.jpeg",
        // "link": "https://github.com/jonesyu30"
    }
]

// Load the data from the JSON file
async function readJson() {
    const shuffled = PROJECT_JSON.sort(() => Math.random() - 0.5);
    // const response = await fetch("projects.json");
    // const json = await response.json();
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