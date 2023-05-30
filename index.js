const program = require('commander');
let numberOfCpus = 1;

program
  .version('1.0.0')
  .option('-f, --fork <fork>', 'Add number of CPUs')
  .action(({ fork }) => {
    if (typeof fork !== 'undefined') {
      numberOfCpus = parseInt(fork);
    }
  })
  .parse(process.args);
