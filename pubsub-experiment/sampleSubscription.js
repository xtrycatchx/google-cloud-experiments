const pubsub = require('@google-cloud/pubsub')({
    projectId: 'curious-cistern-185603',
    keyFilename: '../keyfile.json'
});

// dapat naa ni na topic daan
const topic = pubsub.topic('TOPICXYZ');
topic.createSubscription('TOPICXYZ', (err, subscription) => {
    const onError = err => {
        console.error(`hit onError ${JSON.stringify(err)}`)
    }
    const onMessage = message => {
        console.log(`hit onMessage ${message.data}`)
    }
    subscription.on('error', onError);
    subscription.on('message', onMessage);

    // subscription.removeListener('message', onMessage);
    // subscription.removeListener('error', onError);
});