function readImage(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var takingInputFile = new FileReader();
        takingInputFile.onload = function(event) {
            $('#displayImage').attr('src', event.target.result);
        }
        takingInputFile.readAsDataURL(fileInput.files[0]);
    }
}
$("#photo").change(function() {
    readImage(this);
});


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
            // alert("image uploaded");
            console.log("Image Sucessfully Uploaded");
        });

});

ref.child('Storage/').listAll().then(function(result) {
    result.items.forEach(function(imageRef) {
        // console.log(imageRef.toString());
        // console.log(result.items[2]);
        displayImageOnScreen(imageRef);
    });
});