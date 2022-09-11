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
                    currentStyles = elems[i].style.fontFamily;
                    if(currentStyles.length === 2 || currentStyles.length === 0){
                        elems[i].style.fontFamily = "Comic Sans MS" + elems[i].style.fontFamily;
                    }else{
                        elems[i].style.fontFamily = "Comic Sans MS, " + elems[i].style.fontFamily;
                    } 
                }
            }
        })
        dyslexicOn = true;
    }else{ //want to turn off friendly font
        chrome.scripting.executeScript({ 
            target: {tabId: tab.id},
            function: () => {
                let elems = document.querySelectorAll("*");
                for (var i = 0;i < elems.length; i++){ 
                    currentStyles = elems[i].style.fontFamily;
                    newStyles = currentStyles.replace(/Comic Sans MS, /g,"");
                    newStyles = currentStyles.replace(/Comic Sans MS/g,"");

                    if(newStyles.length === 2){
                        elems[i].style.fontFamily = null;
                    }else{
                        elems[i].style.fontFamily = newStyles;
                    }
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
                    currentStyles = elems[i].style.fontFamily;
                    if(currentStyles.length === 2 || currentStyles.length === 0){
                        elems[i].style.fontFamily = "Verdana" + elems[i].style.fontFamily;
                    }else{
                        elems[i].style.fontFamily = "Verdana, " + elems[i].style.fontFamily;
                    } 
                }
            }
        })
        readableOn = true;
    }else{ //want to turn off friendly font
        chrome.scripting.executeScript({ 
            target: {tabId: tab.id},
            function: () => {
                let elems = document.querySelectorAll("*");
                for (var i = 0;i < elems.length; i++){ 
                    currentStyles = elems[i].style.fontFamily;
                    newStyles = currentStyles.replace(/Verdana, /g,/Verdana/g, "");
                    newStyles = currentStyles.replace(/Verdana/g,"");

                    console.log(newStyles.length);

                    if(newStyles.length === 2){
                        elems[i].style.fontFamily = null;
                    }else{
                        elems[i].style.fontFamily = newStyles;
                    }
                }
            }
        })
        readableOn = false;
    }
})
