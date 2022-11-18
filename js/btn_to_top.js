const btntotop = document.querySelector('.btn-to-top');

btntotop.onclick = function () {
    // window.scrollTo(0,0);
    const offsetPosition = window.scrollTo(0,0);
    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

const scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)

const changeByScroll = document.querySelector('.btn-to-top');

window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset)
    if (window.pageYOffset > scrollMaxY*0.5) {
        changeByScroll.classList.add('appear_btn-to-top')
    } else changeByScroll.classList.remove('appear_btn-to-top')
});