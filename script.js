const google = `https://www.google.com/search?q=검색&ie=UTF-8`;
const naver = `https://search.naver.com/search.naver?ie=UTF-8&query=검색`;
const youtube = `https://www.youtube.com/results?search_query=검색`;
const daum = `https://search.daum.net/search?w=tot&q=검색`;

const engine = document.getElementById('engine');
const btn = document.getElementById('searchBtn');
const input = document.getElementById('input');

btn.onclick = () => search();
input.onkeyup = (ev) => {
    if (ev.key === "Enter") {
        search();
    }
}

const search = () => {
    let url;
    switch (engine.value) {
        case "g":
            url = google;
            break;
        case "n":
            url = naver;
            break;
        case "y":
            url = youtube;
            break;
        case "d":
            url = daum;
            break;
    }
    url = url.replaceAll("검색", input.value);
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = url;
    a.click();
}