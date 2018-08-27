# Twilio SMS for Google Sheets

This guide shows you how to quickly set up a Google Sheet to use to send scheduled SMS messages.

## You Will Need
Twilio Account SID, Auth Token and phone number. You can find your Account SID and Auth Token when you first log-in to the Twilio Console here: https://www.twilio.com/console. You can purchase, or find your existing Twilio phone number here: https://www.twilio.com/console/phone-numbers/incoming.

A Google Apps account, so you can create a Google Sheet.

## Instructions
1. Create a new Google Sheet and Give it 4 Columns
    1. "To Phone Number"
    2. "Message Body"
    3. "Status"
    4. "When"
2. In the menu select "Tools" then "< > Script editor". This will open a new browser tab for writing your script.
3. In the new browser tab select File -> New -> Script file. Name the script "app" and click the Ok button.
4. You now have a new script called `app.gs` on the left side menu. Click on app.gs if you are not automatically brought into that file.
5. Copy the code [here]('/app.gs') and past it into your `app.gs` file.





![Sheet Properties Example](/assets/images/SheetProperties.png)
