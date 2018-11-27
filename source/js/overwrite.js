document.addEventListener("DOMContentLoaded", function(event) {
    var $headContent = parent.document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../../styleguide/css/overwrite.css";
    $headContent.appendChild(link);
});