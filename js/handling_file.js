var file = document.getElementById("load-file");
var reader = new FileReader();
reader.addEventListener('load', (event) => {
    img.src = event.target.result;
});
reader.readAsDataURL(file);