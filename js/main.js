const list = [
  {
    image: "img/keunyeong.JPG",
    content: `안녕하세요. <span class="fetch">$</span>
    <span class="leedocs">Leedocs</span> 를 방문해 주셔서 감사합니다.<br/>
    페이지 중앙을 <span class="highlight">클릭</span>하여 대화를 읽어주세요.<br/>
    로고를 제외한 색이 다른 글자를 누르면 상세페이지가 열립니다.`,
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
  {
    image: "img/keunyeong.JPG",
    content: `
    21년 4월부터 5개월간 <a class="highlight2" href="https://velog.io/@leedocs/%EA%B5%AD%EB%B9%84%EA%B5%90%EC%9C%A1%EC%97%90%EC%9D%B4%EC%BD%98%EC%95%84%EC%B9%B4%EB%8D%B0%EB%AF%B8%ED%94%84%EB%A1%A0%ED%8A%B8%EC%95%A4%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%96%91%EC%84%B1%EA%B3%BC%EC%A0%95" target="_blank">[에이콘아카데미]프론트엔드 개발자 양성과정</a> 을 수료하였습니다.
    `,
    isRead: true,
    talker: "host",
  },
  {
    image: "img/keunyeong.JPG",
    content: `
    이후 <a class="highlight2" href="https://leedocs.notion.site/React-8513815981e1474ca08f069f9ce01dc9" target="_blank">[스파르타코딩클럽]프론트엔드의 꽃 react</a> 온라인 강의를 통해 리엑트를 조금 알게 되었습니다.
    `,
    isRead: true,
    talker: "host",
  },
  {
    image: "img/keunyeong.JPG",
    content: `
    react 를 더 학습하고 다양한 직무분야의 팀원들과 기업과의 연계 프로젝트를 하기 위해 지원하여
    `,
    isRead: true,
    talker: "host",
  },
  {
    image: "img/keunyeong.JPG",
    content: `
    21년 11월부터 22년 3월까지<br/><a class="highlight2" href="https://velog.io/@leedocs/series/K-Digital-Training%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4" target="_blank">[패스트캠퍼스]스타트업트랙 프론트엔드 개발자 양성 과정(블로그 기록)</a>을 🎖 <span class="highlight">우수 수료생</span><a class="highlight3" href="https://blog.naver.com/fastcampus/222651113796" target="_blank">(인터뷰)</a>으로 <br/> 수료하였습니다.
    `,
    isRead: true,
    talker: "host",
  },
  {
    image: "img/keunyeong.JPG",
    content: `
    코딩에 대한 열정으로 22년 2월에 열린 <br/> <a class="highlight3" href="https://velog.io/@leedocs/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EA%B8%B0-%ED%95%B4%EC%BB%A4%ED%86%A4" target="_blank">[패스트캠퍼스 x 점핏] 해커톤</a> 에 참여하여 좋은 팀원들과 무수면 2박3일 코딩을 하여 <br/> 🏆<span class="highlight">최우수상</span> 을 수상하기도 하였습니다.
    `,
    isRead: true,
    talker: "host",
  },
  {
    content: `지금까지 개발한 프로젝트를 소개해주세요.`,
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
  const rate = ((count + 1) / list.length) * 100;
  document.querySelector(".rate").style.width = rate + "%";
});
document.querySelector("main").addEventListener("click", () => {
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
