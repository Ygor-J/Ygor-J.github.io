var file = document.getElementById("load-file");
function readFile(file) {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      img.src = event.target.result;
    });
    reader.readAsDataURL(file);
}
readFile(file);