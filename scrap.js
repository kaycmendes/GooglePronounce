let html = document.querySelector('.audiobox');
let btn = document.querySelector('.btn');
// let firstTwoLetters ='ap';

btn.addEventListener('click', async () => {
    let input = document.querySelector('input');

    let word = input.value.toLowerCase();

    function getTwoLetters(words) {
        return words.substring(0, 2);
    }
    let TwoLetters = await getTwoLetters(word);
    let videobox =
        `
    <video controls autoplay name='media'>
    <source class="audiobox" src="http://ssl.gstatic.com/dictionary/static/pronunciation/2019-10-21/audio/${TwoLetters}/${word}_en_us_1.mp3" type="audio/mpeg">
    </video>
    `;
    html.innerHTML = videobox;
});



