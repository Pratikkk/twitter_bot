let reTwetts = 0;
setInterval(() => {
    const heart = document.querySelector('div[data-testid="retweet"]');
    const arrow = document.querySelector('div[data-testid="retweetConfirm"]');
    if (heart) {
        heart.click();
        
        reTwetts++;
        arrow.click();
        window.scroll({
  top: 0,
  left: 100,
  behavior: 'smooth'
});
        
        console.log(`You've liked ${reTwetts} post(s)`);
    }
    
    
}, 2000);













/////// NEW CODE //////////////


var jq = $; 


setInterval(function() { 
jq('div[data-testid="retweet"]').click();
jq ('div[data-testid="retweetConfirm"]').click();

}, 2000);

 
