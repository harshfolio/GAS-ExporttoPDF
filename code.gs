function onEdit(e) {
  exportSheetToPDF();
}

function exportSheetToPDF() {
  var spreadsheetId = 'Spreadsheet_ID'; // Replace with Spreadsheet ID
  var sheetName = 'Sheet1'; //Change to the Exact Sheet Name
  var folderId = 'Google Drive Folder ID'; // Replace this

  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);

  // Get data range dynamically based on columns B to F and the last row present in the sheet
  var lastRow = sheet.getLastRow();
  var dataRange = sheet.getRange(1, 2, lastRow, 5); // Columns B to F

  // Set top and side margins to 0.238"
  var topMargin = 0.238;
  var sideMargin = 0.238;

  // Build the file name
  var fileName = 'CV_Harsh_Sharma.pdf';

  // Build the download URL with the new data range, fit to width and height, adjusted margins, and file name
  var url = "https://docs.google.com/spreadsheets/d/" + spreadsheetId +
            "/export?format=pdf&gid=" + sheet.getSheetId() +
            "&range=" + encodeURIComponent(dataRange.getA1Notation()) +
            "&fitw=true" +
            "&fith=true" +
            "&top_margin=" + topMargin +
            "&bottom_margin=" + topMargin +
            "&left_margin=" + sideMargin +
            "&right_margin=" + sideMargin +
            "&filename=" + encodeURIComponent(fileName);

  // Fetch the PDF content
  var response = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken(),
    },
  });

  // Search for an existing file with the same name in the specified folder
  var existingFiles = DriveApp.getFolderById(folderId).getFilesByName(fileName);

  if (existingFiles.hasNext()) {
    // If an existing file is found, delete it before creating the new one
    var existingFile = existingFiles.next();
    existingFile.setTrashed(true);
    Logger.log('Existing PDF File Deleted: ' + existingFile.getUrl());
  }

  // Create the new PDF file in the specified folder
  var newFile = DriveApp.getFolderById(folderId).createFile(response.getBlob()).setName(fileName);
  Logger.log('New PDF File Created: ' + newFile.getUrl());
}
