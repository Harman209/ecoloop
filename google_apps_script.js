/**
 * ECOLOOP — GOOGLE APPS SCRIPT CODE
 * 
 * Paste this into Google Sheets -> Extensions -> Apps Script:
 */

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ECOLOOP Webhook Active', timestamp: new Date().toLocaleString() }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var contents = e.postData ? e.postData.contents : '{}';
    var data = JSON.parse(contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString(),
      data.id || 'ENC-' + Math.floor(Math.random() * 900000 + 100000),
      data.fullName || '',
      data.phoneNumber || '',
      data.email || '',
      data.product || '',
      data.quantity || '1',
      data.customerType || 'Individual',
      data.address || '',
      data.city || 'Jalandhar',
      data.pinCode || '',
      data.message || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
