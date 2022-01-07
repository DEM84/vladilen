const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const dataContainer = document.querySelector("#data-container");

const renderPost = (postId) => {
  const post = fetch(`${POSTS_URL}/${postId}`);

  const postHTML = document.createElement("div");
  const postTitle = document.createElement("h1");
  const postText = document.createElement("p");

  postHTML.className = "post";
  postHTML.id = "post";

  dataContainer.append(postHTML);

  postTitle.className = "post__title";

  postText.className = "post__text";

  postHTML.append(postTitle);
  postHTML.append(postText);

  const postCommentsText = document.createElement("b");
  postCommentsText.className = "post__comments-text";
  postCommentsText.textContent = "Комментарии";
  postHTML.append(postCommentsText);

  const postComments = document.createElement("div");
  postComments.className = "post__comments";
  postHTML.append(postComments);

  post
    .then((response) => response.json())
    .then((obj) => {
      postTitle.innerText = obj.title;

      postText.innerHTML = obj.body;
    })
    .catch((error) => {
      console.error("error:", error);
    });

  const comments = fetch(`${COMMENTS_URL}?postId=${postId}`);

  comments
    .then((responses) => responses.json())
    .then((coms) => {
      console.log("coms", coms);

      const commentHTML = coms.map((comment) => {
        createComment(comment);
      });
    })
    .catch((error) => {
      console.error("error:", error);
    });

  const createComment = (obj) => {
    console.log("obj name:", obj.name);

    const postComment = document.createElement("div");
    postComment.className = "post-comment";
    postComments.append(postComment);

    const postCommentAutor = document.createElement("span");
    postCommentAutor.className = "post-comment__author";

    const postCommentAutorA = document.createElement("a");
    postCommentAutorA.href = `mailto:${obj.email}`;
    postCommentAutorA.target = "_blank";
    postCommentAutorA.innerText = obj.email;
    postCommentAutor.append(postCommentAutorA);
    postComment.append(postCommentAutor);

    const postCommentText = document.createElement("span");
    postCommentText.className = "post-comment__text";
    postCommentText.textContent = obj.body;
    postComment.append(postCommentText);
  };
};

renderPost(1);
