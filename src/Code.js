function onOpen() {
  SpreadsheetApp.getUi().createMenu('ERL').addItem('Hello', 'hello').addToUi();
}
function hello() {
  SpreadsheetApp.getActive().toast('Hello from GitHub Actions!');
}