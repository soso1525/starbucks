
/**
 * Youtube IFrame
 */
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api"; // 외부 스크립트 라이브러리 추가 <sript src="https://www.youtube.com/iframe_api"></script>

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // script 태그 중 가장 첫 번째 script 보다 먼저 삽입.

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 가로 세로 크기는 지정할 필요 없음.
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.mute();
}
