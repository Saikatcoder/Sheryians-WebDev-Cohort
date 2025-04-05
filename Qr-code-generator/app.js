function generateQRCode() {
    const textInput = document.getElementById("textInput").value;
    const qrcodeContainer = document.getElementById("qrcode");

    if (!textInput) {
        alert("Please enter text or URL.");
        return;
    }

    qrcodeContainer.innerHTML = "";

    const qr = new QRCode(qrcodeContainer, {
        text: textInput,
        width: 200,
        height: 200,
    });
    setTimeout(() => {
        const qrCanvas = qrcodeContainer.querySelector("canvas"); // Get QR code as canvas
        if (qrCanvas) {
            const qrDataUrl = qrCanvas.toDataURL("image/png"); // Convert to Data URL
            downloadLink.href = qrDataUrl;
            downloadLink.download = "QRCode.png";
            downloadLink.style.display = "block"; // Show the download button
        }
    }, 500); 
}





