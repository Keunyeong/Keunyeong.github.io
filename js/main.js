const list = [
  {
    image: "img/keunyeong.jpg",
    content: `안녕하세요. <span class="fetch">$</span>
    <span class="leedocs">Leedocs</span> 를 방문해 주셔서 감사합니다.`,
    isRead: true,
  },
  {
    image: "img/keunyeong.jpg",
    content: `<span class="fetch">$</span>
    <span class="leedocs">Leedocs</span> 는
    <span class="highlight">Keunyeong LEE</span>(이근영) 의 Documents를
    의미합니다.`,
    isRead: true,
  },
  {
    image: "img/keunyeong.jpg",
    content: `<span class="fetch">$</span>
    <span class="leedocs">Leedocs</span> 는
    <img
      src="img/Javascript-shield.svg"
      alt="JAVASCRIPT_LOGO"
      height="16px"
    />
    <span class="highlight">Javascript</span>를 사용하여 제작되었습니다.`,
    isRead: true,
  },
];

document.querySelector("main").innerHTML = list
  .map((data, index) => {
    return `<div class="talk_box">
    <div class="avatar">
      <img src=${data.image} alt="TALKER" />
    </div>
    <div class="ballon">
      <img class="tail" src="img/tail.svg" alt="TAIL" />
      <p class="content">
        ${data.content}
      </p>
      <div class="bookmark">읽음 - line ${index + 1}</div>
    </div>
  </div>`;
  })
  .join("");
