const form = document.querySelector("form");
const input = document.querySelector("#input_url");
const input_file = document.querySelector("#input_file");

const replaceImages = (url) => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.src = url;
    });
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: replaceImages,
        args: [input.value]
    });
});