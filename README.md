# Twilio SMS for Google Sheets

This guide shows you how to quickly set up a Google Sheet to use to send scheduled SMS messages.

## You Will Need
Twilio Account SID, Auth Token and phone number. You can find your Account SID and Auth Token when you first log-in to the Twilio Console here: https://www.twilio.com/console. You can purchase, or find your existing Twilio phone number here: https://www.twilio.com/console/phone-numbers/incoming.

A Google Apps account, so you can create a Google Sheet.

## Instructions
1. Create a new Google Sheet and Give it 4 Columns.  
    1. "To Phone Number"
    2. "Message Body"
    3. "Status"
    4. "When"
    
    Make sure the format of the cells is set to "Plain text", except for the "When" column. Make sure those cells are formatted using the format circled in the following image:

    ![Cell Format](/assets/images/cellFormat.png)

2. In the sheet menu select "Tools" then "< > Script editor". This will open a new browser tab for writing your script.
3. In the new browser tab select File -> New -> Script file. Name the script "app" and click the Ok button.
4. You now have a new script called `app.gs` on the left side menu. Click on `app.gs` if you are not automatically brought into that file.
5. Copy the code [here](app.gs) and past it into your `app.gs` file and save your `app.gs` file.
6. Add the Moments library to your script by going to Resources -> Libraries like shown here:

    ![Libraries](/assets/images/libraries.png)

    Copy this code: **Mcun7NPepfBJFDW-iuQnbdo147xIduJpS**

    Paste the code into Add a Library and click the add, then Save button like in the following image:

    ![Add Moment Lib](/assets/images/addMoment.png)

    The Moments library allows your script to access the timzone data in your Google Sheet's settings. You can change the Spreadsheet timezone by going back to the Spreadsheet, click "File" then "Spreadsheet settings..."

7. Time to add the necessary properties, so your code will work. Back on the browser tab where you've been writing your code click the "File" menu, then "Project properties", then click the "Script properties" tab in the window that pops up. This is where you will need your Twilio Account SID, Auth Token, and phone number. Plus you will be setting several other properties. Using the image below as your guide. Add the same exact properties you see in the image. Replace the blurred out parts for your specific information. 

    The `DateFormat` you should keep the same value that is in the image. 

    The `spreadsheetUrl` is the URL back over in your spreadsheet browser tab. Copy the full URL except for anything after the word "edit". **NOTE!**: When you first run this script your spreadsheet should request edit access for the script, as if you're sharing editing rights with another user. You should allow this or the script won't work.

    ![Sheet Properties Example](/assets/images/SheetProperties.png)

