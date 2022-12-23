Feature: Job search functionality
  As user I want to search different jobs in cv library website

  Scenario Outline: verify Job Search Result Using Different DataSet
    Given I am on homepage
    When I accept privacy policy
    And I enter job title "<jobTitle>"
    And I enter location "<location>"
    And I enter distance "<distance>"
    And I click on more search options
    And I enter minimum salary"<minSalary>"
    And I enter maximum salary"<maxSalary>"
    And I select salary type"<salaryType>"
    And I select job type"<jobType>"
    And I click on find job button
    Then Verify the result message "<textVerify>"
    Examples:
      | jobTitle     | location      | distance      | minSalary | maxSalary | salaryType | jobType   | textVerify                                  |
      | Tester       | Harrow        | up to 5 miles | 30000     | 500000    | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill |
      | Retail Sales | London        | up to 1 mile  | 3000      | 25000     | Per annum  | Part Time | Part Time Retail Sales jobs in London       |
      | Nursing      | Manchester    | up to 2 miles | 3000      | 25000     | Per annum  | Permanent | Permanent Nursing jobs in Manchester        |
      | Nursing      | Norfolk       | up to 5 miles | 3000      | 25000     | Per annum  | Permanent | Permanent Nursing jobs in Norfolk           |
      | Electrician  | Scotland      | up to 2 miles | 3000      | 25000     | Per annum  | Permanent | Permanent Electrician jobs in Scotland      |
      | Plumber      | Great Britain | up to 2 miles | 3000      | 25000     | Per annum  | Permanent | Permanent Plumber jobs in Great Britain     |

