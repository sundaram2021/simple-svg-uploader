window.changeColor = function () {
  const colorPicker = document.getElementById("colorPicker");
  const logoPreview = document.getElementById("logoPreview");
  // Check if there is an SVG displayed
  if (logoPreview.firstChild) {
    // Get all elements inside the SVG that might have a fill property
    const paths = logoPreview.querySelectorAll(
      "path, circle, rect, polyline, polygon, ellipse"
    );
    paths.forEach(function (path) {
      path.style.fill = colorPicker.value; // Change the fill color
    });
  }
};

document
  .getElementById("uploadLogo")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const logoPreview = document.getElementById("logoPreview");
      logoPreview.innerHTML = e.target.result; // Display the SVG inside the div
    };
    reader.readAsText(file);
  });
