var qr
(function() {
    qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
        
    });
})();

function generateQRCode() {
    var qrtext = document.getElementById("qr-text").Value;
    document.getElementById("qr-result").innerHTML = "QR Code for " +":";
    alert(qrtext);
    qr.set({
        background: 'green',
        backgroundAlpha: 0.8,
        foreground: 'blue',
        foregroundAlpha: 0.8,
        padding: 25,
        size: 200,
    });
}