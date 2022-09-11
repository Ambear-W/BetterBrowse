let betterAltsBtn = document.getElementById("betterAlts")
betterAltsBtn.addEventListener("click", async() =>{
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
            function: () => {
                function azureVision(imageUrl, img){
                    var request = new XMLHttpRequest();
                    request.open('POST', 'https://betterbrowse.cognitiveservices.azure.com/vision/v1.0/describe?maxCandidates=1&language=en', true);
                    request.setRequestHeader('Content-Type', 'application/json');
                    request.setRequestHeader('Ocp-Apim-Subscription-Key', '410023a8c34e447fb3505fcea6a2983c');
                    request.send(JSON.stringify({ "url": imageUrl }));
                    request.onload = function () {
                        var resp = request.responseText;
                        if (request.status >= 200 && request.status < 400) {
                            // Success!
                            console.log('Success!');
                            img.alt = (JSON.parse(resp)).description.captions[0].text;
                        } else {
                            // We reached our target server, but it returned an error
                            console.error('Error!');
                        }
                        console.log(JSON.parse(resp));
                    };
                    request.onerror = function (e) {
                        console.log(e);
                    };
                }

                let imgs = document.getElementsByTagName("img");
                for (var i = 0;i < imgs.length; i++){
                    imageToSend = imgs[i].src;
                    try{
                        azureVision(imageToSend, imgs[i]);
                    } catch (err){
                        console.log(err);
                    }
                    
                }
            }
    })
})

