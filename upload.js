import http from 'http';
import formidable from 'formidable';
import { rename, readFile } from 'fs';
import { parse } from 'url';

const server = http.createServer((req, res) => {
  if (req.url === '/fileupload') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/shevchua/projects/learn-node/' + files.filetoupload.originalFilename;
      rename(oldpath, newpath, (err) => {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      })
      res.write('File uploaded');
      var q = parse(req.url, true);
      var filename = '.' + q.pathname;
      readFile(filename, (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      })
      res.end();
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
});

server.listen(1244);
