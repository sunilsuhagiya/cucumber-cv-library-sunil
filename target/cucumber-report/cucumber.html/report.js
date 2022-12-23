$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job search functionality",
  "description": "As user I want to search different jobs in cv library website",
  "id": "job-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept privacy policy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary\"\u003cminSalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary\"\u003cmaxSalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type\"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type\"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the result message \"\u003ctextVerify\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "minSalary",
        "maxSalary",
        "salaryType",
        "jobType",
        "textVerify"
      ],
      "line": 18,
      "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 19,
      "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;2"
    },
    {
      "cells": [
        "Retail Sales",
        "London",
        "up to 1 mile",
        "3000",
        "25000",
        "Per annum",
        "Part Time",
        "Part Time Retail Sales jobs in London"
      ],
      "line": 20,
      "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;3"
    },
    {
      "cells": [
        "Nursing",
        "Manchester",
        "up to 2 miles",
        "3000",
        "25000",
        "Per annum",
        "Permanent",
        "Permanent Nursing jobs in Manchester"
      ],
      "line": 21,
      "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;4"
    },
    {
      "cells": [
        "Nursing",
        "Norfolk",
        "up to 5 miles",
        "3000",
        "25000",
        "Per annum",
        "Permanent",
        "Permanent Nursing jobs in Norfolk"
      ],
      "line": 22,
      "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;5"
    },
    {
      "cells": [
        "Electrician",
        "Scotland",
        "up to 2 miles",
        "3000",
        "25000",
        "Per annum",
        "Permanent",
        "Permanent Electrician jobs in Scotland"
      ],
      "line": 23,
      "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;6"
    },
    {
      "cells": [
        "Plumber",
        "Great Britain",
        "up to 2 miles",
        "3000",
        "25000",
        "Per annum",
        "Permanent",
        "Permanent Plumber jobs in Great Britain"
      ],
      "line": 24,
      "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6503926600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept privacy policy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary\"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary\"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the result message \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 129936200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPrivacyPolicy()"
});
formatter.result({
  "duration": 25330701100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2165177700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 131558500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 180229500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 221389500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 352744300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 129887100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 125604800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 226283200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 196097000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.verifyTheResultMessage(String)"
});
formatter.result({
  "duration": 4824332300,
  "status": "passed"
});
formatter.after({
  "duration": 861038600,
  "status": "passed"
});
formatter.before({
  "duration": 3907669800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept privacy policy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Retail Sales\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter distance \"up to 1 mile\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary\"3000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary\"25000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type\"Part Time\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the result message \"Part Time Retail Sales jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 49800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPrivacyPolicy()"
});
formatter.result({
  "duration": 25267834900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Retail Sales",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2188066900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 190328900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 1 mile",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 195258300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 228418900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 306862400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 160960200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 148644000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 243340100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 236952800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time Retail Sales jobs in London",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.verifyTheResultMessage(String)"
});
formatter.result({
  "duration": 5381714400,
  "status": "passed"
});
formatter.after({
  "duration": 712183800,
  "status": "passed"
});
formatter.before({
  "duration": 3245024900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept privacy policy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Nursing\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Manchester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter distance \"up to 2 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary\"3000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary\"25000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the result message \"Permanent Nursing jobs in Manchester\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPrivacyPolicy()"
});
formatter.result({
  "duration": 25492071200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nursing",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2198410600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 199261300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 2 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 226307300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 166465200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 320343000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 175605400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 134773000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 198775400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 261833100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Nursing jobs in Manchester",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.verifyTheResultMessage(String)"
});
formatter.result({
  "duration": 7633584200,
  "status": "passed"
});
formatter.after({
  "duration": 669274800,
  "status": "passed"
});
formatter.before({
  "duration": 4258349400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept privacy policy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Nursing\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Norfolk\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary\"3000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary\"25000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the result message \"Permanent Nursing jobs in Norfolk\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPrivacyPolicy()"
});
formatter.result({
  "duration": 25531619000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nursing",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2274510400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Norfolk",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 176229800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 184187900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 184134700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 294387000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 180883600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 175726700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 229544600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 265839200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Nursing jobs in Norfolk",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.verifyTheResultMessage(String)"
});
formatter.result({
  "duration": 7922707800,
  "status": "passed"
});
formatter.after({
  "duration": 695613100,
  "status": "passed"
});
formatter.before({
  "duration": 3879503500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept privacy policy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Electrician\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Scotland\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter distance \"up to 2 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary\"3000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary\"25000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the result message \"Permanent Electrician jobs in Scotland\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPrivacyPolicy()"
});
formatter.result({
  "duration": 25208998000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electrician",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2106035300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scotland",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 95323100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 2 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 105093200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 93252600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 941785300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 99091100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 115308400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 144050900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 146355300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Electrician jobs in Scotland",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.verifyTheResultMessage(String)"
});
formatter.result({
  "duration": 5160889800,
  "status": "passed"
});
formatter.after({
  "duration": 665991700,
  "status": "passed"
});
formatter.before({
  "duration": 3977157700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept privacy policy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Plumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Great Britain\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter distance \"up to 2 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary\"3000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary\"25000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the result message \"Permanent Plumber jobs in Great Britain\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPrivacyPolicy()"
});
formatter.result({
  "duration": 25181978900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Plumber",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 42119313800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#keywords\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b844090c4156164117a3f4678893e4d9, findElement {using\u003did, value\u003dkeywords}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\sunil\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61500}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61500/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b844090c4156164117a3f4678893e4d9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat co.library.cv.utility.Utility.sendTextToElement(Utility.java:71)\r\n\tat co.library.cv.pages.HomePage.enterJobTitle(HomePage.java:62)\r\n\tat co.library.cv.cucumber.steps.JobSearchSteps.iEnterJobTitle(JobSearchSteps.java:26)\r\n\tat ✽.And I enter job title \"Plumber\"(jobsearch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Great Britain",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 2 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Plumber jobs in Great Britain",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.verifyTheResultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1332661300,
  "status": "passed"
});
});