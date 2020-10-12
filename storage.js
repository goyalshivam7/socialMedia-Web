$("#uploadPhoto").click(function() {

    var myFile = document.getElementById("photo").files[0];
    var name = "Storage" + "/" + myFile.name;
    // var name = myFile.name;
    var metadata = {
        contentType: myFile.type
    };
    var task = ref.child(name).put(myFile, metadata);

    task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(function(downloadURL) {
            // console.log(downloadURL);
            alert("image uploaded");
            var image = document.getElementById("displayImage");
            image.src = downloadURL;
        });

});

ref.child('Storage/').listAll().then(function(result) {
    result.items.forEach(function(imageRef) {
        console.log(imageRef.toString());
    });
});