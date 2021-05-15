$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 2,
  "name": "SignUp to upskil elearning",
  "description": "",
  "id": "signup-to-upskil-elearning",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify the signup to upskill elearning",
  "description": "",
  "id": "signup-to-upskil-elearning;verify-the-signup-to-upskill-elearning",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user should be on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User clicks on SignUp link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Select Teach Course Radio button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter mandatory details firstname \"\u003cfirstname\u003e\", lastname \"\u003clastname\u003e\", e-mail \"\u003ce-mail\u003e\", Username \"\u003cusername\u003e\", pass \"\u003cpassword\u003e\",Confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Confirmation message will be populated in next screen and should have firstname \"\u003cfirstname\u003e\" and lastname \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on top right corner",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Validate the email \"\u003ce-mail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User navigates to Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "clicks on Compose",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Send To \"sneha\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter Subject",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter mail body",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on Send message",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate the acknowledgement",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "signup-to-upskil-elearning;verify-the-signup-to-upskill-elearning;",
  "rows": [
    {
      "cells": [
        "firstname",
        "username",
        "lastname",
        "e-mail",
        "password",
        "sendTo"
      ],
      "line": 26,
      "id": "signup-to-upskil-elearning;verify-the-signup-to-upskill-elearning;;1"
    },
    {
      "cells": [
        "tomg",
        "tomg",
        "saha",
        "praksaha@in.ibm.com",
        "Etihad@2021",
        "sneha"
      ],
      "line": 27,
      "id": "signup-to-upskil-elearning;verify-the-signup-to-upskill-elearning;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3468469200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "This step will always execute before my test case",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open the upskill elearning website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.open_the_upskill_elearning_website()"
});
formatter.result({
  "duration": 3920208100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify the signup to upskill elearning",
  "description": "",
  "id": "signup-to-upskil-elearning;verify-the-signup-to-upskill-elearning;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@featuretag"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user should be on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User clicks on SignUp link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Select Teach Course Radio button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter mandatory details firstname \"tomg\", lastname \"saha\", e-mail \"praksaha@in.ibm.com\", Username \"tomg\", pass \"Etihad@2021\",Confirm password",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Confirmation message will be populated in next screen and should have firstname \"tomg\" and lastname \"saha\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on top right corner",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Validate the email \"praksaha@in.ibm.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User navigates to Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "clicks on Compose",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Send To \"sneha\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter Subject",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter mail body",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on Send message",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate the acknowledgement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 30814300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_clicks_on_SignUp_link()"
});
formatter.result({
  "duration": 3173399900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.select_Teach_Course_Radio_button()"
});
formatter.result({
  "duration": 132709400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomg",
      "offset": 35
    },
    {
      "val": "saha",
      "offset": 52
    },
    {
      "val": "praksaha@in.ibm.com",
      "offset": 67
    },
    {
      "val": "tomg",
      "offset": 99
    },
    {
      "val": "Etihad@2021",
      "offset": 112
    }
  ],
  "location": "stepDefinition.enter_mandatory_details_firstname_something_lastname_something_email_something_username_something_pass_somethingconfirm_password_something(String,String,String,String,String)"
});
formatter.result({
  "duration": 836089000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.clicks_on_Register_button()"
});
formatter.result({
  "duration": 2165214300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomg",
      "offset": 81
    },
    {
      "val": "saha",
      "offset": 101
    }
  ],
  "location": "stepDefinition.confirmation_message_will_be_populated_in_next_screen_and_should_have_firstname_something_and_lastname_something(String,String)"
});
formatter.result({
  "duration": 91271300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_clicks_on_top_right_corner()"
});
formatter.result({
  "duration": 70657200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "praksaha@in.ibm.com",
      "offset": 20
    }
  ],
  "location": "stepDefinition.validate_the_email_something(String)"
});
formatter.result({
  "duration": 170620700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_navigates_to_homepage()"
});
formatter.result({
  "duration": 1739675800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.clicks_on_compose()"
});
formatter.result({
  "duration": 4009902700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sneha",
      "offset": 15
    }
  ],
  "location": "stepDefinition.enter_send_to_something(String)"
});
formatter.result({
  "duration": 1354428700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.enter_subject()"
});
formatter.result({
  "duration": 102352600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.enter_mail_body()"
});
formatter.result({
  "duration": 10214349000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.click_on_send_message()"
});
formatter.result({
  "duration": 3990570700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_the_acknowledgement()"
});
formatter.result({
  "duration": 59949000,
  "status": "passed"
});
formatter.after({
  "duration": 128200,
  "status": "passed"
});
});