# Google Sheets to PDF Exporter

This Google Apps Script provides a simple way to export a specific sheet from a Google Sheets document to PDF format and save it to a designated Google Drive folder. The script is triggered automatically whenever there is an edit in the associated Google Sheets document.

## Getting Started

### 1. Set up Google Apps Script Project

1. Open your Google Sheets document.
2. Click on "Extensions" -> "Apps Script."
3. Copy and paste the provided script into the script editor.
4. Save the project.

### 2. Configure Script Parameters

Modify the following variables in the script to match your requirements:

- `spreadsheetId`: The ID of your Google Sheets document.
- `sheetName`: The name of the sheet to be exported.
- `folderId`: The ID of the Google Drive folder where the PDF will be saved.
- `topMargin`: Set the top margin for the PDF (default is 0.238 inches).
- `sideMargin`: Set the side margin for the PDF (default is 0.238 inches).
- `fileName`: The name you want for the exported PDF file.

### 3. Authorize the Script

After setting up the script, run the `exportSheetToPDF` function manually once to authorize the script and grant necessary permissions.

### 4. Set up Trigger

Click on the clock icon in the Apps Script editor, add a new trigger, and choose the `onEdit` function to run whenever there is an edit in the Google Sheets document.

## Usage

Whenever an edit is made to the Google Sheets document, the `onEdit` trigger will execute the `exportSheetToPDF` function, exporting the specified sheet to PDF and saving it to the designated Google Drive folder.

## Note

- The script dynamically determines the data range based on columns B to F and the last row in the sheet.
- It adjusts margins and fits the content to the width and height of the PDF.

Feel free to customize the script further based on your specific needs. If you encounter any issues, refer to the [Google Apps Script documentation](https://developers.google.com/apps-script) for assistance.
