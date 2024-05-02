function createProgressBlock() {
    const unityElement = document.getElementById("unityContainer");
    let progressElement = document.getElementById("progress-bar");
    let fullElement = document.getElementById("progress-bar-full");
    let emptyElement = document.getElementById("progress-bar-empty");

    progressElement = document.createElement("div");
    progressElement.id = "progress-bar";
    progressElement.className = "progress";

    boxElement = document.createElement("div");
    boxElement.id = "box";
    boxElement.className = "box";
    progressElement.appendChild(boxElement);

    emptyElement = document.createElement("div");
    emptyElement.className = "empty";
    emptyElement.id = "progress-bar-empty";
    boxElement.appendChild(emptyElement);

    fullElement = document.createElement("div");
    fullElement.className = "full";
    fullElement.id = "progress-bar-full";
    emptyElement.appendChild(fullElement);

    textElement = document.createElement("div");
    textElement.className = "text";
    textElement.id = "text-progress";
    progressElement.appendChild(textElement);

    unityElement.appendChild(progressElement);
}

function unityProgress(progress) {
    let fullElement = document.getElementById("progress-bar-full");
    let textElement = document.getElementById("text-progress");
    if (fullElement !== null) {
        let progress_value = Math.round(100 * progress) + "%";
        fullElement.style.width = progress_value;
        textElement.setAttribute('loading_text', progress_value);
    }
}

function hideProgressBar(unityInstance) {
    let progressElement = document.getElementById("progress-bar");
    if (progressElement !== null)
        progressElement.style.display = "none";
    return unityInstance;
}
