// Keywords to filter music videos
const musicKeywords = ["official music video", "lyrics", "audio", "cover", "single", "album", "remix", "concert",  "MV", "lofi", "song", "lyrical", "music"];

function hideVideos() {
    // Hide videos with aria-label="Official Artist Channel"
    const artistChannelDivs = document.querySelectorAll('div[aria-label="Official Artist Channel"]');
    artistChannelDivs.forEach(div => {
      const videoItem = div.closest('ytd-rich-item-renderer') || div.closest('ytd-grid-video-renderer');
      if (videoItem) {
        videoItem.style.display = 'none';
      }
    });
  
    // Hide videos with titles containing music keywords
    const videoTitles = document.querySelectorAll('a#video-title-link');
    videoTitles.forEach(title => {
      if (musicKeywords.some(keyword => title.textContent.toLowerCase().includes(keyword))) {
        const videoItem = title.closest('ytd-rich-item-renderer') || title.closest('ytd-grid-video-renderer');
        if (videoItem) {
          videoItem.style.display = 'none';
        }
      }
    });
  }
  
  // Run the hideVideos function when the page loads and when new videos are loaded
  window.addEventListener('load', hideVideos);
  const observer = new MutationObserver(hideVideos);
  observer.observe(document, { childList: true, subtree: true });