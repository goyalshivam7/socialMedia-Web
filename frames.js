function displayImageOnScreen(imageRef) {
    imageRef.getDownloadURL().then(function(downloadURL) {
        console.log(downloadURL);
        // document.getElementById("setImageInFrames").innerHTML = "";
        var tickets = document.getElementById("setImageInFrames").innerHTML;
        var frame = "<div class=\"row my-5\">";
        frame += "<img src='" + downloadURL + "' height=\"300\" width=\"300\">";
        frame += "</div>";
        tickets += frame;

        document.getElementById("setImageInFrames").innerHTML = tickets;
    });
}