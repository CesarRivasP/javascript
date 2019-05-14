// -- Object Destructuring class --

// Sin destructuring
// Es como se extraen los valores de un objeto
const learningJavascript = {
  // version: 'ES6+',
  version: {
    after: 'ES7',
    before: 'ES6'
  },
  frameworks: ['VueJS', 'AngularJS']
}

console.log(learningJavascript);

let versionJS = learningJavascript.version;
console.log(versionJS);

let newVersion = learningJavascript.version.after;
console.log(newVersion);


let frameworksJS = learningJavascript.frameworks[1];
console.log(frameworksJS);

// -- Con destructuring --
//  { OBJETOS } = DE DONDE SE VAN A OBTENER
let { version, frameworks } = learningJavascript;
console.log(version);
console.log(frameworks);

let { after } = learningJavascript.version;
console.log(after);
