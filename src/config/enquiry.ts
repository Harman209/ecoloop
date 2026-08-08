/**
 * ECOLOOP Enquiry & Google Sheets Configuration
 * 
 * To connect to your Google Sheet:
 * 1. Create a Google Sheet with columns:
 *    Timestamp | Full Name | Phone | Email | Product | Quantity | Customer Type | Address | City | PIN Code | Message
 * 2. In Google Sheet, go to Extensions -> Apps Script
 * 3. Paste the Google Apps Script code provided in the README / setup guide.
 * 4. Click 'Deploy' -> 'New deployment' -> Select 'Web app'
 *    - Execute as: 'Me'
 *    - Who has access: 'Anyone'
 * 5. Paste the generated Web App URL below into GOOGLE_SHEET_WEBHOOK_URL (or set VITE_GOOGLE_SHEET_URL in .env).
 */

export const ENQUIRY_CONFIG = {
  // Connected Google Apps Script Web App URL
  GOOGLE_SHEET_WEBHOOK_URL:
    'https://script.google.com/macros/s/AKfycbz6MXddUMQ1K9YaYD_5wskSNPVehWp6k3_FpW-L8ovJMmcRp9Aj2r6q8DGvtb9VPXZOaQ/exec',
  
  // School coordinator contact for fallback/direct WhatsApp (optional)
  COORDINATOR_PHONE: '919876543210',
  SCHOOL_EMAIL: 'ecoloop.ssdps@gmail.com',
};
