# houseware---frontend-engineering-octernship-KevinA-cpu

### Instructions

To run the project locally do the following steps:

1. Clone the repository

```
git clone https://github.com/HousewareHQ/houseware---frontend-engineering-octernship-KevinA-cpu.git
```

2. Navigate to the app directory

```
cd app
```

3. Install the necessary dependencies

```
npm install
```

4. Start the web

```
npm start
```

5. Find the web at

```
http://localhost:3000
```

### Assumptions

- Any character is allow, only stop the user from going to screen 2 when they enter nothing or enter only white space

- Capital case and lower case are considered different

- The success header will be rendered when the user have successfully remove all duplicate characters, along with the original string and the new string

### Demo


https://user-images.githubusercontent.com/69845869/226922708-187cd463-9bc9-4555-88b3-f1b154b914ee.mp4


### Additional Features

The web is hosted using Firebase: https://houseware-dupcharemov.web.app/

### Remarks

Thank you Houseware for creating such a fantastic opportunity for us students to have a chance to brush up our ReactJS skill, whatever the results, I just wish the team to keep on keeping on and creating even more opportunity for us students to have an internship. Once again thank you so much for your work and effort!

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10422677&assignment_repo_type=AssignmentRepo)

## Houseware

### Company information

Houseware's vision is to empower the next generation of knowledge workers by putting the data warehouse in their hands, in the language they speak. Houseware is purpose-built for the Data Cloud’s untouched creators, empowering internal apps across organizations.

### Why participate in an Octernship with Houseware

Houseware is changing the way the data warehouse is leveraged, and we want you to help build Houseware! Our team came together to answer the singular question, "how can we flip the value of the data warehouse to the ones who really need it, to the ones who drive decisions".

In this role, you'll have the opportunity to work as a Frontend engineer with the Houseware team on multiple customer-facing projects. You'd be involved with delivering the optimal user experience for the end user, while taking complete ownership of engineering challenges - this would include communicating with the stakeholders, setting the right expectations, and ensuring top quality for the code & the product being shipped.

### Octernship role description

We're looking for frontend developers to join the Houseware team.

We are hell-bent on building a forward-looking product, something that constantly pushes us to think by first principles and question assumptions, building a team that is agile in adapting and ever curious. While fast-paced execution is one of the prerequisites in this role, equally important is the ability to pause and take stock of where product/engineering is heading from a long-term perspective. Your initiative is another thing that we would expect to shine through here, as you continuously navigate through ambiguous waters while working with vigor on open-ended questions - all to solve problems for and empathize with the end users.

| Octernship info     | Timelines and Stipend |
| ------------------- | --------------------- |
| Assignment Deadline | 26 March 2023         |
| Octernship Duration | 3-6 Months            |
| Monthly Stipend     | $600 USD              |

### Recommended qualifications

- You have a solid problem-solving framework.
- You know Javascript and the Browser ecosystem very well; we love polyglot programmers and have services written in Go and Python.
- We write React; Typescript, so we expect you to be well versed with React. If you have worked with Typescript or any typed language before, it's a plus.

If you love to optimize web vitals, do SSR, have worked with Bundlers, and multi-threading in JS excites you, we can’t wait to talk.

### Eligibility

To participate, you must be:

- A [verified student](https://education.github.com/discount_requests/pack_application) on Global Campus

- 18 years or older

- Active contributor on GitHub (monthly)

# Assignment

## Duplicate character remover

### Task instructions

Develop an app in reactjs, with two screens.

- Screen 1: Provide an input field and a button with text 'Submit'.

  - User should be able to put in any value in the input field. Clicking on the button should redirect user to screen 2.
  - If the input field is empty or has only space characters, the user should be shown an alert asking them to provide a non-empty value. In this scenario, we should not redirect the user to screen 2.

- Screen 2: Let's iterate over each character of the string and render them as a card on the UI. Each card should have the character, and a delete icon on top. Clicking on the delete icon should delete all duplicate instances of the chosen character in the string. We should make sure that only the clicked instance of the character remains on the screen.
  - Cards for the same characters should have the same background color.
  - If there are no more characters with greater than 1 appearance in the string, we shall render a success header.
  - We should also show the original string and the new resultant string.
  - We should provide a back button to go back to screen 1.
  - If the user goes back to screen 1, the input field should be cleared/empty.

### Task Expectations

- The user shouldn't be allowed to go to screen 2 without providing a non-empty value in the input field on screen 1.
- On Screen 2, clicking on a card delete icon should delete all other appearance of the character in the string.
- The cards shown on the screen should also be updated.
  - Let's say if the original string is `aabcaccda`. Clicking on the first `a` should leave the string as `abcccd`.
  - Let's say the original string is `baebdeb`. Clicking on the character `b` at index 3 (0 index), should result in `aebde`.
- Once all the duplicate appearances in the string are removed, the user should see a success header with the original string & the resultant string.
- The project should be written in JS or Typescript with React. Feel free to use any component library, any other packages, css libraries etc.
- _Your time is better utilised solving the actual problem rather than re-inventing the wheel._
- Make sure you do write a readme & a PR description on how to run the project locally.

### Task submission

Students are expected to use the [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) when working on their project.

1. Making changes on the auto generated `feedback` branch to complete the task
2. Using the auto generated **Feedback Pull Request** for review and submission
3. Using GitHub Discussions to ask any relevant questions regarding the project

### Resources

- [React - Getting started](https://reactjs.org/docs/getting-started.html)
- [Create-react-app](https://create-react-app.dev/)
