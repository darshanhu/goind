function sendMessageToIframe() {
    window.parent.document.getElementById('iframe2').contentWindow.postMessage(message, '*');
}

const discoverMoreBtn = document.getElementById('discver-more-btn');
discoverMoreBtn.addEventListener("click", () => {
    sendMessageToIframe('Yes, this has been sent from iframe-1');
})