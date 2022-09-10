// Snag our button
let btn = document.getElementById("dyslexicFriendly")
var dyslexicOn = false;
// Run on click
btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
    if(dyslexicOn == false){ //we want to make it into a friendly font
        alert("Its not on! Lets turn it on~!")
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
    }else{ //want to turn off friendly font
        alert("In here!");
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