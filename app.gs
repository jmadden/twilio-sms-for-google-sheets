// Gets predefined properties for this script. See: File -> Project properties -> Script properties
var prop = PropertiesService.getScriptProperties();

// Returns a specific Google Sheet by URL.
var spreadSheet = SpreadsheetApp.openByUrl(prop.getProperty('spreadsheetUrl'));

// Defines how we want the date to be formatted for scheduling.
var dateFormat = prop.getProperty('DateFormat');

// Returns the specific sheet/tab inside a Google Sheed doc.
var sheet = spreadSheet.getSheets()[0];

// The Row where data starts. This skips the headers row.
var startRow = 2; 

// Returns the number of rows with values in this sheet.
var numRows = sheet.getLastRow() - 1;

// Returns all the data to be processed in this sheet. i.e. to # and message body.
var data = sheet.getRange(startRow, 1, numRows, 4).getValues();

// Whenever this function is called it will send an SMS using Twilio
// if all of the required parameters are passed into the function.
function sendSms(to, body) {
  
  // URL used for sending request to Twilio's Messages API. Be sure to include your Account SID
  var messages_url = "https://api.twilio.com/2010-04-01/Accounts/"+prop.getProperty('ACCOUNT_SID')+"/Messages.json";
  
  // Parameters needed to send an SMS.
  var payload = {
    "To": "+"+to,
    "Body" : body,
    "From" : prop.getProperty('TWNUM')
  };
  
  // Contains the method of communicating with the API (POST) and the parameters needed to build a message.
  var options = {
    "method" : "post",
    "payload" : payload
  };
  
  // Authorize your account to send this message.
  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode(prop.getProperty('ACCOUNT_SID')+":"+prop.getProperty('AUTH_TOKEN'))
  };

  UrlFetchApp.fetch(messages_url, options)
}

// This function loops through your Google Sheet and uses the sendSms() function to send messages.
function sendAll() {
  
  // For loop through your Google Sheet's data.
  for (i in data) {
    
    var row = data[i];
    
    // Returns the Google Sheet's timezone info as an object.
    var when = Moment.moment.tz(data[i][3], dateFormat, spreadSheet.getSpreadsheetTimeZone());
    
    var now = new Date();
    
    // Compares the current time to the "When" time in the sheet. 
    // Sends SMS if "When" time is older or equal to the current time.
    if (isNaN(when) || !when.isValid() || (when.toDate() >= now)){  
    
      // Try sending SMS.
      try {
        response_data = sendSms(row[0], row[1]);
        status = "sent";
      } catch(err) {
        Logger.log(err);
        status = "error";
      }
      sheet.getRange(startRow + Number(i), 3).setValue(status);
    }
  }
}

// Runs the full script.
function runApp() {
  sendAll();
}
