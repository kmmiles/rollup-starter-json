import update from './update.js';
import examplejson from './example.json'

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

update();

// add json values
var jsonId = document.querySelector('#json-id');
jsonId.textContent = examplejson.id;

var jsonFirstName = document.querySelector('#json-firstname');
jsonFirstName.textContent = examplejson.firstname;

var jsonLastName = document.querySelector('#json-lastname');
jsonLastName.textContent = examplejson.lastname;




