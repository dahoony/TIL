const cardList_div = document.querySelector("#card_list");
const search_text = document.querySelector("#search_text");
const search_btn = document.querySelector("#search_btn");

/* 2. SoundCloud API  사용하기 */
console.log(SC);
const SoundCloudAPI = {
  init: () => {
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },
  getTrack: keyword => {
    SC.get("/tracks", {
      q: keyword
    }).then(function(tracks) {
      console.log(tracks);
      SoundCloudAPI.renderTrack(tracks);
    });
  }
};
SoundCloudAPI.init();

/* 검색 */
search_btn.addEventListener("click", () => {
  SoundCloudAPI.getTrack(search_text.value);
});

search_text.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    SoundCloudAPI.getTrack(search_text.value);
  }
});

/* 3. 카드 보여주기 */
SoundCloudAPI.renderTrack = tracks => {
  cardList_div.innerHTML = null;
  tracks.forEach(track => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("div");
    image.classList.add("image");

    const img = document.createElement("img");
    img.classList.add("image_img");
    
    img.src = (track.artwork_url || 'https://lorempixel.com/290/290/abstract');
    image.appendChild(img);

    const content = document.createElement("div");
    content.classList.add("content");

    const header = document.createElement("div");
    header.classList.add("header");

    const a = document.createElement("a");
    a.href = track.permalink_url;
    a.target = "_blank";
    a.text = track.title;

    header.appendChild(a);
    content.appendChild(header);

    const button_div = document.createElement("div");
    button_div.classList.add("ui", "bottom", "attached", "button", "js-button");

    const icon = document.createElement("i");
    icon.classList.add("add", "icon");

    const span = document.createElement("span");
    span.innerText = "Add to playlist";

    button_div.appendChild(icon);
    button_div.appendChild(span);

    card.appendChild(image);
    card.appendChild(content);
    card.appendChild(button_div);
    console.log(card);

    cardList_div.appendChild(card);
  });
};

/* 4. Playlist 에 추가하고 실제로 재생하기 */
