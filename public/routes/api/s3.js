const aws = require('aws-sdk');

let s3 = new aws.S3();
// aws.config.update({
//     secretAccessKey: ,
//     accessKeyId: ,
//     region: "us-west-1"
// });


module.exports = function(app) {

    app.post("/upload/file", function (req, res) {
        uploadFile(req.files.chef.name, req.files.chef.data)
        res.json(req.body)
    })

    const uploadFile = (fileName, fileContent) => {
        const params = {
            Bucket: "my-test-bucket-1-3-21",
            Key: fileName, 
            Body: fileContent
        };

        s3.upload(params, function(err, data) {
            if (err) throw err;
            console.warn(`File uploaded successfully. ${data.Location}`);
        });

    };
}