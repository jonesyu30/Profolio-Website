import * as fs from 'node:fs';
const template = fs.readFileSync('./template.html', 'utf-8');
const files = fs.readdirSync("./drafts");
console.log(files);

const titleString = "##TITLE##";
const descriptionString = "##DESCRIPTION##";
const contentString = "##CONTENT##";
const heroImageString = "##HERO_URL##";

files.forEach(file => {
    if(!file.endsWith('.project')) return; // only process .project files

    // read from file
    console.log(`Processing ${file}...`);
    var draft = fs.readFileSync(`./drafts/${file}`, 'utf-8');
    draft = draft.split('\n');
    const title = draft[0];
    const description = draft[1];
    if(!title || !description) {
        console.error(`Error: ${file} is missing title or description.`);
        return;
    }
    const heroImageLink = draft[2] || "";

    // remove the first two lines
    var content = ""
    var chapters = [];
    for (let i = 3; i < draft.length; i++) {
        if(draft[i].trim() === "") continue; // skip empty lines
        if(draft[i].startsWith('//')) continue; // skip lines starting with //
        if(draft[i].startsWith('##')){
            const chapterTitle = draft[i].substring(2).trim();
            const chapterId = chapterTitle.toLowerCase().replace(/ /g, '-');
            content += `<hr class="chapters-divider" id="${chapterId}">\n<h2 class="section-title">${chapterTitle}</h2>\n`;
            chapters.push(chapterTitle);
            continue;
        }
        if(draft[i].startsWith('1. ')) {
            content += '<ol>\n';
            while(draft[i].match(/^\d. /)) {
                content += `<li>${draft[i].substring(3)}</li>`;
                i++;
            }
            content += '</ol>';
            continue
        }
        content += `<p>${draft[i]}</p>\n`;
    }
    if(content.trim() === "") {
        console.error(`Error: ${file} has no content.`);
        return;
    }

    // add table of contents
    var toc = '<h2 class="section-title">Table of Contents</h2>\n<ol>';
    chapters.forEach((chapter, index) => {
        toc += `<li class="toc-list"><a href="#${chapter.toLowerCase().replace(/ /g, '-')}" class="toc-link">${chapter}</a></li>`;
    });
    toc += '</ol>\n';
    content = toc + content;

    // edit the template
    var result = template;
    result = result.replace(titleString, title)
    result = result.replace(descriptionString, description)
    result = result.replace(contentString, content);
    result = result.replace(heroImageString, heroImageLink);


    
    // write to file
    const writePath = `../projects/${file.split('.')[0]}.html`;
    fs.writeFileSync(writePath, result, 'utf-8');
});

// console.log(newtemplate);