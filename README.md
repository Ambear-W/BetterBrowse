# ![BetterBrowse Icon](https://user-images.githubusercontent.com/43912805/189496870-af1c2238-8e70-4fee-a923-adb3679859ad.png) BetterBrowse
BetterBrowse is a Google Chrome extension that strives to make the internet a more accessible place; by allowing users to select different options that changes the webpage - making it more accessible.

 # Currently, we have the following features:
 - Making all font on a page dylexic friendly :D 
 - Change all the font on a page to something more readable
 - Make all images on a page more accessible by add/changing alt tags to better suit the image
 
 ![A Google chrome extension that has been pin and opened](https://user-images.githubusercontent.com/43912805/189513153-3ed00906-a306-45f5-9a37-25daa853ae3c.png)


# How to get it
Right now, BetterBrowse is NOT on the Google Extension store. 
The best way to get it on your computer is to download this repository! 

1. Make sure to "Extract all" after you download if it shows as a zip.

2. Then go to your Google Chrome browser and and on the top right corner, there should be a puzzle piece. Select this and go to "Manage Extensions". This should open an Extensions tab. 

3. In the top right, there should be a toggle that says "Developer Mode". Select this and few buttons should appear under the Google Logo. 

4. Select "Load Package" and select the download.

5. You should be good to go now!

This is how it should look at the end:
![The Google Chrome extension page is open and showcasing developer mode turned on](https://user-images.githubusercontent.com/43912805/189513537-34814255-1d55-4e00-8666-7615836bce2a.png)


# How it works

With a bit of HTML, very little CSS, and a lot of JavaScript! OH! And some Azure Cognitive Services.

The part that does all the heavy lifting is the JavaScript:
- popup.js

popup.js does all the work for changing the fonts. This was done by checking to see if the toggle was checked and then going through the entire webpage to grab all possible locations of text to apply a new font style!

- azureCalls.js

By using Azure Cognitive Services, you can get back a lot of different information about an image. For it to work though, you either have to download and directly send the image or send an image's URL.
For this project, I opted to use JavaScript to grab all the images on a page. There it will run through and find the url (which was challenging since some sites directly links to a photo and others don't). After that is done, it will then send a set of information to the Azure service which will then return a JSON file that contains different information about the images. From there, you just have to add it directly to the alt tag!

# Final thoughts

I still want to keep adding more to this! Please feel free to message me with ideas!
Don't be scared to copy this repo and add some more to it yourself!

Happy coding!

AND

Happy Better Browsing! 
