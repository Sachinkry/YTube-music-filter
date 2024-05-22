# YTube Home Page Music Filter

- I used to listen to a lot of music without thinking, which hurt my productivity. So, I made a Chrome extension to hide any music videos recommended on the YouTube home page.
- Not super efficient but it works reasonably well.
## Features

- Hides videos on Home page of YTube labeled as `Official Artist Channel`.
- Hides videos with titles containing specified music keywords.

## Installation

### Download and Setup

1. **Download the Zip File**

   - Download the extension zip file by clicking on green btn on github repository

2. **Unzip the File**

   - Extract the contents of the zip file to a directory on your computer.

3. **Load the Extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click on the "Load unpacked" button.
   - Select the directory where you unzipped the extension files.

### Updating Keywords

If you want to update the keywords used for filtering music videos, follow these steps:

1. Open the `content.js` file in a text editor.
2. Locate the `musicKeywords` array:
   ```javascript
   const musicKeywords = [
     "official music video",
     "lyrics",
     "audio",
     "cover",
     "single",
     "album",
     "remix",
     "concert",
     "MV",
     "lofi",
     "song",
   ];
   ```
3. Add or remove keywords as needed. For example, to add the keyword "live", update the array to:
   ```javascript
   const musicKeywords = [
     "official music video",
     "lyrics",
     "audio",
     "cover",
     "single",
     "album",
     "remix",
     "concert",
     "MV",
     "lofi",
     "song",
     "live",
   ];
   ```
4. Save the `content.js` file.

5. Reload the Extension
   - Go back to `chrome://extensions/`.
   - Click the "Reload" button next to the YouTube Music Filter extension.
