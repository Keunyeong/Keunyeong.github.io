const list = [
  {
    image: "img/keunyeong.JPG",
    content: `안녕하세요. <span class="fetch">$</span>
    <span class="leedocs">Leedocs</span> 를 방문해 주셔서 감사합니다.`,
    isRead: true,
    talker: "host",
  },
  {
    image: "img/keunyeong.JPG",
    content: `<span class="fetch">$</span>
    <span class="leedocs">Leedocs</span> 는
    <span class="highlight">Keunyeong LEE</span>(이근영) 의 Documents를
    의미합니다.`,
    isRead: true,
    talker: "host",
  },
  {
    content: `<span class="highlight">Keunyeong LEE</span>(이근영)을 간단하게 소개해주세요.`,
    talker: "guest",
  },
  {
    image: "img/keunyeong.JPG",
    content: `
    <img
      src="img/Javascript-shield.svg"
      alt="JAVASCRIPT_LOGO"
      height="16px"
    />
    <span class="highlight">Javascript</span>를 가장 자신있게 사용하는 Front-end 개발자 입니다.`,
    isRead: true,
    talker: "host",
  },
  {
    image: "img/keunyeong.JPG",
    content: `
    👍  팀원의 의견에 귀기울이고 모든 의견을 소중하게 생각하는 개발자,</br>
    👍  문제가 생겼을 때 회의를 통해 결정할 줄 아는 개발자,</br>
    👍  실제 배포 단계와 사용자의 사용을 고려하여 개발하는 개발자,</br>
    👍  개선방향을 정리하고 효율적인 코드를 위해 학습하는 개발자,</br> 입니다.
    `,
    isRead: true,
    talker: "host",
  },
  {
    content: `개발을 위해 어떻게 학습하였나요?`,
    talker: "guest",
  },
];

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
document.querySelector("nav").addEventListener("click", () => {
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
  document.querySelector("main").scrollTop =
    document.querySelector("main").scrollHeight;
});
document.querySelector("main").addEventListener("click", () => {
  const count = Number(sessionStorage.getItem("listCount")) + 1;
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
  document.querySelector("main").scrollTop =
    document.querySelector("main").scrollHeight;
});

// document.querySelector("main").innerHTML = list
//   .map((data, index) => {
//     if (data.talker === "host") {
//       return `<div class="talk_box">
//     <div class="avatar">
//       <img src=${data.image} alt="TALKER" />
//     </div>
//     <div class="ballon">
//       <img class="tail" src="img/tail.svg" alt="TAIL" />
//       <p class="content">
//         ${data.content}
//       </p>
//       <div class="bookmark">읽음 - line ${index + 1}</div>
//     </div>
//   </div>`;
//     } else {
//       return `<div class="talk_box guest">
//     <div class="ballon">
//       <img class="tail_right" src="img/tail_right.svg" alt="TAIL" />
//       <p class="content">
//         ${data.content}
//       </p>
//     </div>
//   </div>`;
//     }
//   })
//   .join("");
