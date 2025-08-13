# How to Load the Updated Extension

## Chrome Extension Installation

1. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Navigate to `chrome://extensions/` 
   - OR click the three dots menu → More tools → Extensions

2. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Select the `yadng` folder containing the manifest.json file
   - The extension should now appear in your extensions list

4. **Test the Extension**
   - Open the included `test.html` file in Chrome
   - Try dragging links and text in different directions
   - Configure search engines by right-clicking the extension icon and selecting "Options"

## What Changed in Manifest V3

- **Service Worker**: Background scripts now use a service worker instead of persistent background pages
- **Messaging**: Replaced `chrome.runtime.connect()` with `chrome.runtime.sendMessage()`
- **Tabs API**: Updated from deprecated `chrome.tabs.getSelected()` to `chrome.tabs.query()`
- **Permissions**: Split permissions into "permissions" and "host_permissions" as required by MV3
- **File Structure**: Separated content script (`content.js`) from background script (`background.js`)

## Features

- Drag links to open in new tabs (up=foreground, down=background, left=before current, right=after current)
- Drag selected text to search with different engines based on direction
- Configurable search engines and behavior through options page
- Support for 20+ built-in search engines
- Custom search engine support

## Troubleshooting

If the extension doesn't work:

1. Check that all files are present in the directory
2. Ensure Developer mode is enabled
3. Look for errors in the Chrome Extensions page
4. Check the browser console for JavaScript errors
5. Try reloading the extension
