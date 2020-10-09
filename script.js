let likes = 0;
setInterval(() => {
    const heart = document.querySelector('svg[aria-label="Like"]').parentNode;
    const arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
    if (heart) {
        heart.click()
        likes++;
        console.log(`You've liked ${likes} post(s)`);
    }
    arrow.click();
}, 2000);
