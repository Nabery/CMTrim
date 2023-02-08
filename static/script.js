const inputFile = document.getElementById("dropzone-file");
const fileLabel = document.querySelector("#fileLabel");

inputFile.addEventListener("change", function() {
  let fileNames = "";
  for (let i = 0; i < inputFile.files.length; i++) {
    fileNames += inputFile.files[i].name + ", ";
  }
  fileNames = fileNames.slice(0, -2);
  fileLabel.innerHTML = fileNames || "Clique para selecionar";
});

