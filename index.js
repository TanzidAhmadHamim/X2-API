const chalkAnimation = require('chalkercli');
let str = String.raw`
LOADING X2[▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒] 
`;
let logo = String.raw`
=====[ X2 is a server and the Owner Is H4M1MX2 feel free to use ]=====
`;
                             
const karaoke = chalkAnimation.karaoke(str);
const rainbow = chalkAnimation.rainbow(logo);
setTimeout(async() => {
    await karaoke.start()
    await rainbow.start()
    console.clear()
}, 1000);

setTimeout(() => {
    karaoke.stop()
    rainbow.stop()
    require('./app/main.js')
}, 7000);
