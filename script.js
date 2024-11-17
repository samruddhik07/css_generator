// Select HTML elements
const previewButton = document.getElementById("previewButton");
const bgColor = document.getElementById("bgColor");
const textColor = document.getElementById("textColor");
const borderRadius = document.getElementById("borderRadius");
const boxShadow = document.getElementById("boxShadow");
const cssCode = document.getElementById("cssCode");
const copyButton = document.getElementById("copyButton");

// Function to update the preview button's style and CSS code
function updateButtonStyle() {
  // Get values from form inputs
  const bg = bgColor.value;
  const text = textColor.value;
  const radius = borderRadius.value + "px";
  const shadow = boxShadow.value + "px " + boxShadow.value + "px 10px rgba(0, 0, 0, 0.2)";

  // Update the button's style
  previewButton.style.backgroundColor = bg;
  previewButton.style.color = text;
  previewButton.style.borderRadius = radius;
  previewButton.style.boxShadow = shadow;

  // Generate and display the CSS code
  cssCode.innerText = `
  background-color: ${bg};
  color: ${text};
  border-radius: ${radius};
  box-shadow: ${shadow};`;
}

// Event listeners for real-time style updates
bgColor.addEventListener("input", updateButtonStyle);
textColor.addEventListener("input", updateButtonStyle);
borderRadius.addEventListener("input", updateButtonStyle);
boxShadow.addEventListener("input", updateButtonStyle);

// Copy CSS code to clipboard
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(cssCode.innerText)
    .then(() => alert("CSS code copied!"))
    .catch(err => console.error("Failed to copy text: ", err));
});

// Initial call to display default CSS
updateButtonStyle();
