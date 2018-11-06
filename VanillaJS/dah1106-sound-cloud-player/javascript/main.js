/* 1. 검색 */

/* 2. SoundCloud API  사용하기 */
console.log(SC);
const SoundCloudAPI = {
  init: () => {
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },
  getTrack: (keyword) => {
    SC.get("/tracks", {
      q: keyword
    }).then(function(tracks) {
      console.log(tracks);
    });
  }
};

SoundCloudAPI.init();
SoundCloudAPI.getTrack('happy');
// find all sounds of buskers licensed under 'creative commons share alike'

/* 3. 카드 보여주기 */

/* 4. Playlist 에 추가하고 실제로 재생하기 */
