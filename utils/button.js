import Cursor from "./cursor";
// initialize custom cursor
const cursor = new Cursor(document.querySelector(".cursor"));

// initialize the buttons
const button = document.querySelectorAll("button");

// while button hover some movement will happen
button.forEach((button) => {
  button.addEventListener("mouseenter", () => cursor.enter());
  button.addEventListener("mouseleave", () => cursor.leave());
});
