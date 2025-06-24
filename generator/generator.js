import * as fs from 'node:fs';
const template = fs.readFileSync('./template.html', 'utf-8');
const files = fs.readdirSync("./drafts");
console.log(files);

const titleString = "##TITLE##";
const descriptionString = "##DESCRIPTION##";
const contentString = "##CONTENT##";

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

    // remove the first two lines
    var content = ""
    for (let i = 2; i < draft.length; i++) {
        if(draft[i].trim() === "") continue; // skip empty lines
        if(draft[i].startsWith('##')){
            content += `<h2 class="section-title">${draft[i].substring(2)}</h2>\n`;
            continue;
        }
        if(draft[i].startsWith('1. ')) {
            content += '<ol type="1">';
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

    // edit the template
    var result = template;
    result = result.replace(titleString, title)
    result = result.replace(descriptionString, description)
    result = result.replace(contentString, content);


    
    // write to file
    const writePath = `./projects/${file.split('.')[0]}.html`;
    fs.writeFileSync(writePath, result, 'utf-8');
});

// console.log(newtemplate);