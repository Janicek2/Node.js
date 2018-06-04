var os = require('os');
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
      case '/info':
        getOSinfo();
        break;
      default:
        process.stderr.write('Złe instrukcje!\n');
    }
  }
  function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
  }
});