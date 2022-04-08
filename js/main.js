import { list } from "./data.js";

sessionStorage.setItem("listCount", 0);
document.querySelector("main").innerHTML = `<div class="talk_box">
    <div class="avatar">
      <img src=${list[0].image} alt="TALKER" />
    </div>
    <div class="ballon">
      <img class="tail" src="img/tail.svg" alt="TAIL" />
      <p class="content">
        ${list[0].content}
      </p>
      <div class="bookmark">읽음 - line 1</div>
    </div>
  </div>`;
document.querySelector("nav").addEventListener("click", (e) => {
  e.stopPropagation();
  let count = Number(sessionStorage.getItem("listCount"));
  while (count !== list.length - 1) {
    count++;
    if (list[count].talker === "host") {
      document.querySelector("main").insertAdjacentHTML(
        "beforeend",
        `<div class="talk_box">
      <div class="avatar">
        <img src=${list[count].image} alt="TALKER" />
      </div>
      <div class="ballon">
        <img class="tail" src="img/tail.svg" alt="TAIL" />
        <p class="content">
          ${list[count].content}
        </p>
        <div class="bookmark">읽음 - line ${count + 1}</div>
      </div>
    </div>`
      );
    } else {
      document.querySelector("main").insertAdjacentHTML(
        "beforeend",
        `<div class="talk_box guest">
      <div class="ballon">
      <img class="tail_right" src="img/tail_right.svg" alt="TAIL">
      <p class="content">
      ${list[count].content}
    </p>
      </div>
    </div>`
      );
    }
    sessionStorage.setItem("listCount", count);
  }
  setTimeout(() => {
    document.querySelector("main").scrollTop =
      document.querySelector("main").scrollHeight;
  }, 50);
  const rate = ((count + 1) / list.length) * 100;
  document.querySelector(".rate").style.width = rate + "%";
});
document.querySelector("main").addEventListener("click", (e) => {
  e.stopPropagation();
  const count = Number(sessionStorage.getItem("listCount")) + 1;
  const rate = ((count + 1) / list.length) * 100;
  document.querySelector(".rate").style.width = rate + "%";
  if (count === list.length) {
    return;
  }
  sessionStorage.setItem("listCount", count);
  if (list[count].talker === "host") {
    document.querySelector("main").insertAdjacentHTML(
      "beforeend",
      `<div class="talk_box">
    <div class="avatar">
      <img src=${list[count].image} alt="TALKER" />
    </div>
    <div class="ballon">
      <img class="tail" src="img/tail.svg" alt="TAIL" />
      <p class="content">
        ${list[count].content}
      </p>
      <div class="bookmark">읽음 - line ${count + 1}</div>
    </div>
  </div>`
    );
  } else {
    document.querySelector("main").insertAdjacentHTML(
      "beforeend",
      `<div class="talk_box guest">
    <div class="ballon">
    <img class="tail_right" src="img/tail_right.svg" alt="TAIL">
    <p class="content">
    ${list[count].content}
  </p>
    </div>
  </div>`
    );
  }
  // 스크롤 길이 값이 계산된 후 이동 되도록 동기 설정.
  setTimeout(() => {
    document.querySelector("main").scrollTop =
      document.querySelector("main").scrollHeight;
  }, 50);
});
