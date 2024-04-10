document.addEventListener('DOMContentLoaded', function() {

    function setHeroMargin() {
        const hero = document.querySelector('.hero');
        const screenWidth = window.innerWidth;
        let marginValue = '0';

        if (screenWidth >= 768 && screenWidth <= 1024) {
            const additionalMargin = screenWidth - 768 + 80;
            marginValue = additionalMargin + 'px';
        }

        hero.style.marginBottom = marginValue;
    }

    setHeroMargin();

    window.addEventListener('resize', setHeroMargin);
});
