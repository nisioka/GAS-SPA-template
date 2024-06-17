function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html")
  .addMetaTag("viewport", "width=device-width, initial-scale=1")
  .setTitle("GAS-SPA-template");
}

function doPost(e: GoogleAppsScript.Events.DoPost) {
  return getList();
  // console.log(e.postData.name)
  // console.log(e.parameter.toString())
  // switch (e.postData.name) {
  //   default:
  //     return getList();
  // }
}

function getList() {
  let result = [
    {id: 1, title: "title1", text: "text1"},
    {id: 2, title: "title2", text: "text2"}
  ];
  return ContentService.createTextOutput(JSON.stringify(result))
  .setMimeType(ContentService.MimeType.JSON);
}