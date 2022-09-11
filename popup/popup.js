let dyslexicBtn = document.querySelector('#dyslexicFriendly');
let readableBtn = document.querySelector('#readableFont');

const options = {};
chrome.storage.session.get('options', (data) => {
    Object.assign(options, data.options);
    dyslexicBtn.checked = Boolean(options.dyslexicBtn);
    readableBtn.checked = Boolean(options.readableBtn)
});

dyslexicBtn.addEventListener('change', (event) => {
    options.dyslexicBtn = event.target.checked;
    chrome.storage.session.set({options});
});
readableBtn.addEventListener('change', (event) => {
    options.readableBtn = event.target.checked;
    chrome.storage.session.set({options});
});

dyslexicBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
    if(dyslexicBtn.checked){ //we want to make it into a friendly font
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
    }else{
        chrome.scripting.executeScript({ 
            target: {tabId: tab.id},
            function: () => {
                let elems = document.querySelectorAll("*");
                for (var i = 0;i < elems.length; i++){ 
                    currentStyles = elems[i].style.fontFamily;
                    newStyles = currentStyles.replace(/Comic Sans MS, /g, '');
                    newStyles = currentStyles.replace(/Comic Sans MS/g, '');

                    if(newStyles.length === 2){
                        elems[i].style.fontFamily = null;
                    }else{
                        elems[i].style.fontFamily = newStyles;
                    }
                }
            }
        })
    }
})

readableBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
    if(readableBtn.checked){ //we want to make it into a friendly font
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
    }else{
        chrome.scripting.executeScript({ 
            target: {tabId: tab.id},
            function: () => {
                let elems = document.querySelectorAll("*");
                for (var i = 0;i < elems.length; i++){ 
                    currentStyles = elems[i].style.fontFamily;
                    newStyles = currentStyles.replace(/Verdana, /g, '');
                    newStyles = currentStyles.replace(/Verdana/g, '');

                    if(newStyles.length === 2){
                        elems[i].style.fontFamily = null;
                    }else{
                        elems[i].style.fontFamily = newStyles;
                    }
                }
            }
        })
    }
})