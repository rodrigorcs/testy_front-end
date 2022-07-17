# ![alt text](https://raw.githubusercontent.com/rcstudiossa/testy_front-end/main/src/assets/logo-testy.svg "Testy Logo")

**Check it out on** [testy-rodrigo.vercel.app](https://testy-rodrigo.vercel.app/)

The goal is to have a website where you can check where you fit when it comes to **introvert or extrovert**, based on your answers from the test.
> It is a simple project made on free-time for exploring good practicies of coding in ReactJS + Typescript. There is no commercial use intended.

## How to use:
It's very simple, 
1. Go to the [testy website](https://testy-rodrigo.vercel.app/);
2. Click on "Take me to the test";
3. Read the instructions;
4. Click on "Start the test!";
5. Read the question and answer them by clicking on one of the answer cards, hit "next";
6. After answering the questions, click on "See results";
7. Now you know how introvert/extrovert you are!

## How to run it locally
1. Clone the [project](https://github.com/rcstudiossa/testy_front-end)
2. Open the terminal in the project folder
3. Run `yarn` or `npm install`
4. Run `yarn dev` or `npm run dev`

For a better DX, I recommend the following VS Code extensions for this project:
- Material Icon Theme;
- ESLint
- Prettier
- vscode-styled-components

## Scope
As it is a small project made on free time of 5 days, some things are priority but others are not :D
###### Priorities
- UI/UX
- Components scalability
- Theming scalability
- Clean code and linting
- Responsivity
- Testing

###### Non-priorities
- Security / Auth
- Browser compatibility
- Robust errors/exceptions handling


## Stack:
###### Main stack
- Typescript
- ReactJS
- Vite
- Styled-components

###### Other dependencies
- Axios
- Polished
- Framer Motion
- Prettier
- ESLint

## Customization
For putting your vibe into it, go to the theme folder and there you have:
- `colors.ts`: For defining every **color** used in the app
- `spacing.ts`: For defining **margins** and **paddings**
- `sizing.ts`: For defining **font sizes**, etc.
- `global.ts`: For font-family and **override the base styling** (e.g. `<li>` without bullet-points :D)

###### Example
How the `/components/QuestionForm` styling looks:
```css
[...]
  padding: ${({ theme }) => theme.spacing.regular};
  background-color: ${({ theme }) => theme.colors.neutral.n600};
  color: ${({ theme }) => theme.colors.neutral.n200};
  border-radius: ${({ theme }) => theme.sizing.xxsmall};
  border: 1px solid ${({ theme }) => theme.colors.neutral.n500};
[...]
```
How the `/theme/sizing` looks:
```js
const sizes = {
  xxxsmall: "0.25em",
  xxsmall: "0.5em",
  xsmall: "0.625em",
  small: "0.75em",
  regular: "1em",
  large: "1.25em",
  xlarge: "1.5em",
  xxlarge: "2em",
  xxxlarge: "3.5em",
};
```

###### CSS "Debugging"
Are you trying to find where is that component you are looking at?
Go to `/theme/global.ts` and uncomment lines 12 and 13:
```css
    /* background: rgb(100 0 0 / 0.1) !important;
    border: 1px solid rgb(100 0 0) !important; */
```

## Next Steps
For the front-end, I will work on some minor changes, responsivity, and testing (unit-test and E2E using Jest).

I am working on the back-end, for now it is using a mock api providing data from questions and answers.

The Figma file will also be available soon.

---

Feel free to reach out if you need some help :)


[Rodrigo Santos](mailto:rodrigo.costa.ssa@gmail.com).

> rodrigo.costa.ssa@gmail.com

> +49 1573 3990846 | +55 71 99315-8381

> linkedin.com/in/rodrigocosta-eng
