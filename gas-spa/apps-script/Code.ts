function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html")
  .addMetaTag("viewport", "width=device-width, initial-scale=1")
  .setTitle("GAS-SPA-template");
}

function doPost(e: GoogleAppsScript.Events.DoPost) {
  console.log(e.postData.name)
  console.log(e.parameter.toString())
  switch (e.postData.name) {
    default:
      return getList();
  }
}

function getList() {
  return [
    {title: "title1", text: "text1"},
    {title: "title2", text: "text2"}
  ];
}