document.getElementById("imagen").addEventListener("change", handleFiles, false);

function handleFiles() {
    const fileList = this.files; /* now you can work with the file list */
    if (fileList.length > 0) {
        document.getElementById("fileName").innerHTML = fileList[0].name
    } else {
        document.getElementById("fileName").innerHTML = "No ha cargado ningun archivo"
    }

}