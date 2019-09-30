const program = require('commander');
const { fetchNow, myIp } = require('./commands');

program
.version('0.0.1')
.description('Command line IP Address Application')

program
.command("lookup '<ipAddress>'")
.alias('l')
.description('lookup an IP address')
.action(ipAddress => fetchNow(ipAddress));

program
.command("myip")
.alias('m')
.description('see information about your origin/source IP address')
.action(() => myIp()); 

program.parse(process.argv)