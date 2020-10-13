function displayImageOnScreen(imageRef) {
    imageRef.getDownloadURL().then(function(downloadURL) {
        console.log(downloadURL);

        var tickets = document.getElementById("setImageInFrames").innerHTML;
        var frame = "<div class=\"card w-75 mb-5\">";
        frame += "<div class=\"row\">";
        frame += "<div class=\"col-md-5\">";
        frame += "<img src='" + downloadURL + "' height=\"300\" width=\"300\">";
        frame += "</div>";
        frame += "<div class=\"col-md-7\">";
        frame += "<div class=\"card-body\">";
        frame += "<h5 class=\"card-title\"> Shivam goyal </h5>";
        frame += "<p class=\"card-text\"> Shivam goyal </p>";
        frame += "<a href=\"#\" class=\"btn btn-primary\"> Comment </a>";
        frame += "</div>";
        frame += "</div>";
        frame += "</div>";
        frame += "</div>";
        tickets += frame;

        document.getElementById("setImageInFrames").innerHTML = tickets;
    });
}