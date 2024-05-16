//const path = require('path');

describe('Upload File Hidden Input', async() => {
  it('should be able to upload a file on hidden input', async() => {

    const filePath = ('./chrome.png');

    // use browser.uploadFile to upload the test file
    const remoteFilePath = await browser.uploadFile(filePath);

    await browser.url('https://test.com/');
    await browser.pause(40000)
     await browser.switchWindow('https://test.com');
     await browser.pause(20000);
    

  const element = await browser.$("(//div/*[@class='file-upload-container']/div/input)[1]");

  await browser.execute((element, attributeName, newValue) => {
    element.setAttribute(attributeName, newValue);
  }, element, 'style', 'display: block;');

  await browser.pause(10000);
    await element.setValue(remoteFilePath);
   
    await browser.pause(10000);

    // Add your assertion here
  });
});