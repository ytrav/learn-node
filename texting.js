import { createServer } from 'http';

const server = createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    // res.write(req.url);
    // res.write(`<body style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-family: sans-serif;">OwO World!</h1><h2 style="font-family: sans-serif;">wait, did you just type "${req.url.slice(1)}" into the url? bruh.</h2></body>`);
    // if (req.url !== '/') {
    //     res.write(`<body style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-family: sans-serif;">OwO World!</h1><h2 style="font-family: sans-serif;">wait, did you just type "${req.url.slice(1)}" into the url? bruh.</h2></body>`);
    // } else {
    // }
    switch (req.url) {
        case '/':
            res.write(`<body style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-family: sans-serif;">OwO World!</h1><h2 style="font-family: sans-serif;">You are very cute today :3</h2></body>`);
            break;
        case '/uwu':
            res.write(`<body style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-family: sans-serif;">UwU!!!</h1><h2 style="font-family: sans-serif;">Uwuwuwuwuwwwuwuwuwuwwuw nya!!</h2></body>`);
            break;
        case '/hello':
        case '/hi':
            res.write(`<body style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-family: sans-serif;">Hello!!!!</h1><h2 style="font-family: sans-serif;">I'm so happy to see you!!</h2></body>`);
            break;
        case '/bye':
        case '/goodbye':
            res.write(`<body style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-family: sans-serif;">See ya later friend!!</h1><h2 style="font-family: sans-serif;">I'm gonna miss you!!!!</h2></body>`);
            break;
        case '/trans%20rights':
        case '/trans-rights':
        case '/transrights':
            res.write(`<body style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-family: sans-serif;">Uwa!!!!</h1><h2 style="font-family: sans-serif;">You are very based!!!!!</h2></body>`);
            break;
        default:
            res.write(`<body style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-family: sans-serif;">OwO World!</h1><h2 style="font-family: sans-serif;">wait, did you just type "${req.url.slice(1).replace(/%20/g, " ")}" into the url? bruh.</h2></body>`);
            break;
    }
    res.end();
})

server.listen(1244);

