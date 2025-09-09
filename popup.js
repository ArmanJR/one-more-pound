function shiftHeadings(text) {
  return text.replace(/^(#+)(\s)/gm, '#$1$2');
}

document.getElementById("shift").addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const output = shiftHeadings(input);
  document.getElementById("output").value = output;
});

document.getElementById("copy").addEventListener("click", async () => {
  const output = document.getElementById("output").value;
  await navigator.clipboard.writeText(output);
  alert("Shifted Markdown copied to clipboard!");
});

