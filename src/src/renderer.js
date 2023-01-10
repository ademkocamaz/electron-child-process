function addParagraph(text) {
    const paragraph = document.createElement('p');
    const node = document.createTextNode(text);
    paragraph.appendChild(node);
    document.body.appendChild(paragraph);
}

var child_process = require('child_process');
var child = child_process.execFile('ping', ['1.1.1.1'], { encoding: 'utf8' });

child.stdout.on('data', function (data) {
    addParagraph(data.toString());
    console.log(data.toString());
});

child.stderr.on('data', function (data) {
    addParagraph(data.toString());
    console.log(data.toString());
});

child.on('exit', (code) => {
    addParagraph('Child exited with code: ', code.toString());
    console.log('Child exited with code: ', code)
});