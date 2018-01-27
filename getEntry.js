var path = require('path');
var glob = require('glob');


function getEntry(globPath, pathDir) {
  var files = glob.sync(globPath);
  console.log(files)
  var entries = {},
    entry, dirname, basename, pathname, extname;

  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    // extname = path.extname(entry);
    // basename = path.basename(entry, extname);
    pathname = path.join(dirname, basename || '');
    pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname;
    entries[pathname || '/main'] = './' + entry;
  }
  return entries;
}

var entries = getEntry('src/**/main.js', 'src');

console.log('=====================================================')
console.log(entries);
