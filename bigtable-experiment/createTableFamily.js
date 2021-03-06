const Bigtable = require('@google-cloud/bigtable');
const bigtable = Bigtable({
    projectId: 'curious-cistern-185603',
    keyFilename: '../keyfile.json'
});
const instanceName = 'sydney-instance';
const instance = bigtable.instance(instanceName);
const table = instance.table('tablexyz');

table.createFamily('yawe', (err, family) => {
    if (err) {
        console.log(`error creating family ${err}`)
    } else {
        console.log(`successfully created faily ${JSON.stringify(family)}`)
    }
});