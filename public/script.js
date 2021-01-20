function copyToClipboard(text) {
	var input = document.body.appendChild(document.createElement("input"));
	input.value = text;
	input.focus();
	input.select();
	document.execCommand("copy");
	input.parentNode.removeChild(input);
}

document.getElementById("copy").addEventListener("click", () => {
	const clip = document.getElementById("clip");
	copyToClipboard(clip.innerText);
});
