let dylexicBtn = document.getElementById("dyslexicFriendly")
var dyslexicOn = false;
dylexicBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
    if(dyslexicOn == false){ //we want to make it into a friendly font
        chrome.scripting.executeScript({ // Run the following script on our tab
            target: {tabId: tab.id},
            function: () => {
                let elems = document.querySelectorAll("*"); // Grab every element in the dom
                for (var i = 0;i < elems.length; i++){ 
                    elems[i].style.fontFamily = "Comic Sans MS";
                }
            }
        })
        dyslexicOn = true;
        readableOn = false;
    }else{ //want to turn off friendly font
        chrome.scripting.executeScript({ 
            target: {tabId: tab.id},
            function: () => {
                let elems = document.querySelectorAll("*");
                for (var i = 0;i < elems.length; i++){ 
                    elems[i].style.fontFamily = "";
                }
            }
        })
        dyslexicOn = false;
    }
})

let readableBtn = document.getElementById("readableFont")
var readableOn = false;
readableBtn.addEventListener("click", async() =>{
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
    if(readableOn == false){ //we want to make it into a friendly font
        chrome.scripting.executeScript({ // Run the following script on our tab
            target: {tabId: tab.id},
            function: () => {
                let elems = document.querySelectorAll("*"); // Grab every element in the dom
                for (var i = 0;i < elems.length; i++){ 
                    elems[i].style.fontFamily = "Verdana";
                }
            }
        })
        dyslexicOn = false;
        readableOn = true;
    }else{ //want to turn off friendly font
        chrome.scripting.executeScript({ 
            target: {tabId: tab.id},
            function: () => {
                let elems = document.querySelectorAll("*");
                for (var i = 0;i < elems.length; i++){ 
                    elems[i].style.fontFamily = "";
                }
            }
        })
        readableOn = false;
    }
})

let betterAltsBtn = document.getElementById("betterAlts")
var betterAlts = false;
betterAltsBtn.addEventListener("click", async() =>{
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true})
    if(betterAlts == false){
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => {
                let imgs = document.getElementsByTagName("img");
                for (var i = 0; i < imgs.length; i++){
                    alert(imgs[i].src);
                }
            }
        })
    }
})