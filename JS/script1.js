const waitText = document.createElement("p");

function imageTimer() {
    document.getElementById("photo").style.display = "none";
    let photoParent = document.getElementById("profilePicture");
    waitText.textContent = "Wait 10 seconds for image to appear";

    const textPosition = document.getElementById("photo");
    photoParent.insertBefore(waitText, textPosition);
    setTimeout(function() {
        document.getElementById("photo").style.display = "block";
        waitText.remove(photoParent);
    }, 10000);
}