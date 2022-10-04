# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is an interactive comment section that allows a user to

- CREATE posts,
- READ posts
- UPDATE/EDIT posts  
- DELETE posts
- Reply to posts and
- also to upvote and downvote coments

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.

### Screenshot

![Site preview](./screenshot.png)

### Links

- Solution URL: [solution URL](https://github.com/quadri101/interactive-comments-FEM)
- Live Site URL: [live site URL](https://62f4d5f0942d2009048de6b3--spiffy-beijinho-02d854.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Local storage

### What I learned

- basics of react and JSX syntax
- functional components
- props and state management
- mapping data to components
- rendering tree
- basic Hooks in react (useState and useEffect)
- conditional rendering
- usage of forms in react

```React JSX component with props, useState and useEffect
function Comments() {
const [comments, setComments] = useState(
JSON.parse(localStorage.getItem("comment-data")) || data.comments
);

useEffect(() => {
localStorage.setItem("comment-data", JSON.stringify(comments));
}, [comments]);

function addScore(id) {
setComments((prevComments) => add(prevComments, id));
}

function subtractScore(id) {
setComments((prevComments) => subtract(prevComments, id));
}

const sortedComments = comments.sort((comment1, comment2) => {
return comment2.score - comment1.score;
});

const commentObjects = sortedComments.map((comment) => (
<Message
  comments={comments}
  setComments={setComments}
  getID={getID}
  currentUser={data.currentUser}
  addScore={addScore}
  subtractScore={subtractScore}
  key={comment.id}
  {...comment}
/>
));

return (
<div className="comments">
  {commentObjects}
  <MessageForm
    type="new-comment"
    comments={comments}
    setComments={setComments}
    getID={() => nanoid()}
    currentUser={data.currentUser}
    variant="create"
    buttonText="send"
    {...data.currentUser}
  />
</div>
);
}
```

### Continued development

I'm learning about libraries and more advanced concepts in react such as redux, formik, react-typescript, react-query and frontend testing with Jest

### Useful resources

- [scrimba.com](https://scrimba.com) - The site where i watched the free react tutorial. Very interactive and ensures that you get to practice what you're learning

## Author

- Frontend Mentor - [@master-shifu0](https://www.frontendmentor.io/profile/master-shifu0)
- Twitter - [@quadri101](https://www.twitter.com/quadri101)
