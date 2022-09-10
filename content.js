chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "start"){
            start();
            sendResponse({method: "changePage"}); //same as innerText
        }
    }
);

function start(){
    alert("started");
}