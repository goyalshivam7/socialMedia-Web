$("#uploadPhoto").click(function() {

    var myFile = document.getElementById("photo").files[0];
    var name = new Date() + "/" + myFile.name;
    var metadata = {
        contentType: myFile.type
    };
    var task = ref.child(name).put(myFile, metadata);

    task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(function(downloadURL) {
            console.log(downloadURL);
            alert("image uploaded");
        });
});