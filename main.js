function generateQR() {
    if (document.getElementById("qrText").value !== "") {
        document.getElementById("qrImg").src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${document.getElementById("qrText").value}`;
        document.getElementById("imgBox").classList.add("show");
    } else {
        document.getElementById("qrText").classList.add("error");
        setTimeout(() => { document.getElementById("qrText").classList.remove("error"); }, 1000);
    };
};