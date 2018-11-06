const cardList_div = document.querySelector("#card_list");
const search_text = document.querySelector("#search_text");
const search_btn = document.querySelector("#search_btn");
const js_playlist = document.querySelector("#js-playlist");
const reset_btn = document.querySelector("#reset");

js_playlist.innerHTML = localStorage.getItem("playlist");

/* 검색 */
search_btn.addEventListener("click", () => {
  SoundCloudAPI.getTrack(search_text.value);
});

search_text.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    SoundCloudAPI.getTrack(search_text.value);
  }
});

//local reset
reset_btn.addEventListener("click", () => {
  localStorage.clear();
  js_playlist.innerHTML = null;
});

/* api 정의 및 사용 */
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
      SoundCloudAPI.renderTrack(tracks);
    });
  },
  renderTrack: tracks => {
    cardList_div.innerHTML = null;
    tracks.forEach(track => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("div");
      image.classList.add("image");

      const img = document.createElement("img");
      img.classList.add("image_img");

      img.src = track.artwork_url || "https://lorempixel.com/290/290/abstract";
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
      button_div.classList.add(
        "ui",
        "bottom",
        "attached",
        "button",
        "js-button"
      );

      const icon = document.createElement("i");
      icon.classList.add("add", "icon");

      const span = document.createElement("span");
      span.innerText = "Add to playlist";

      button_div.appendChild(icon);
      button_div.appendChild(span);

      button_div.addEventListener("click", () => {
        SoundCloudAPI.addPlayList(track.permalink_url);
      });

      card.appendChild(image);
      card.appendChild(content);
      card.appendChild(button_div);

      cardList_div.appendChild(card);
    });
  },
  addPlayList: trackURL => {
    SC.oEmbed(trackURL, {
      auto_play: true
    }).then(function(embed) {
      // 리스트 추가할 때 같은 거 있으면 제거하고싶음..
      const playboxes = document.querySelectorAll('#playbox');
      playboxes.forEach(box => {
          //같은것이 리스트에 있을 경우
          if(box.innerHTML.replace(/&amp;/g,'&') === embed.html){
            box.remove();      
          }
      });
      const playbox = document.createElement("div");
      playbox.setAttribute("id", "playbox");

      playbox.innerHTML = embed.html;
      js_playlist.insertBefore(playbox, js_playlist.firstChild);

      //Use local storage
      localStorage.setItem("playlist", js_playlist.innerHTML);
    });
  }
};

SoundCloudAPI.init();
