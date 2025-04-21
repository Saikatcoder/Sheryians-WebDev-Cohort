const textarea = document.getElementById("markdown");
const preview = document.getElementById("preview");

textarea.addEventListener("input", () => {
  const rawText = textarea.value;

  // Basic markdown replacement
  let formatted = rawText
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*?)\*/gim, "<i>$1</i>")
    .replace(/\`(.*?)\`/gim, "<code>$1</code>")
    .replace(/\n$/gim, "<br />");

  preview.innerHTML = formatted;
});
