process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(input);
    var instruction = input.toString().trim();
    switch (instruction) {
      case 'version':
        process.stdout.write('Node version: ' + process.versions.node + '\n');
        break;
      case 'language':
        process.stdout.write('Language is: ' + process.env.LANG + '\n');
        break;
      case '/exit':
        process.stdout.write('Wychodzimy!\n');
        process.exit();
        break;
      default:
        process.stderr.write('Złe instrukcje!\n');
    }
  }
});