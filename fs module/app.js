const fs = require('fs');
fs.writeFileSync('note.txt', 'My name is amit'); //it will overwrite everything in the file
fs.appendFileSync('note.txt', '\nI am a software engineer'); //it will add the string to end of the file
