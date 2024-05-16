//const path = require('path');

describe('Upload File Hidden Input', async() => {
  it('should be able to upload a file on hidden input', async() => {
    // find your selectors
    const inputDiv = $('#div_file_box0');
    const input = $('#input_file0');
    const submitBtn = $('.convert_button');

    // store test file path
    //const filePath = path.join(__dirname, './chrome.png');
    const filePath = ('./chrome.png');

    // use browser.uploadFile to upload the test file
    const remoteFilePath = await browser.uploadFile(filePath);

    // access the test page
    await browser.url('https://online2pdf.com/');

    // change display to block from none for the hidden div
   await browser.execute(async function () {
       document.getElementById('div_file_box0').style.display = 'block';
    });

    // wait for div to be displayed
    await inputDiv.waitForDisplayed();

    // set file path value in the input field
    await input.setValue(remoteFilePath);
   
   //download
    // await submitBtn.click(); // click the submit button

    // temporary pause to see if the file got upload successfully
    await browser.pause(5000);

    // Add your assertion here
  });
});