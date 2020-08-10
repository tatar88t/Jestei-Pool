function showPlaylistFeatures () {
    let trigger =document.querySelectorAll('.playlist__list-item-open');
    let playlistItem = document.querySelectorAll('.playlist__list-item');


    const createFeatures = () => {
        let attrUp = "img/up-shevron.png";
        let attrDown = "img/down-shevron.png";

        playlistItem.forEach(item => {
          let playlistFeatures = item.parentNode.insertBefore(document.createElement('div'), item.nextSibling);
            playlistFeatures.classList.add('playlist__features');
            let stars = item.querySelector('.playlist__list-item-stars');
            // console.log(stars.innerHTML)
            playlistFeatures.innerHTML =
                `
            <div class="playlist__list-item-icon_implicit">
                <img src="./img/r-sign-icon.png">
            </div>
            <div class="playlist__list-item-code_implicit">101</div>
            <div class="playlist__list-item-code_implicit">5A</div>
            <div class="playlist__list-item-stars_implicit">
                ${stars.innerHTML}
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
            </div>

        `
        })
        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                btn.parentNode.nextSibling.classList.toggle('playlist__features_active');

                if (btn.childNodes[1].getAttribute('src') === attrDown) {
                btn.childNodes[1].setAttribute("src", attrUp);
                } else {
                    btn.childNodes[1].setAttribute("src", attrDown);
                }

                window.addEventListener('resize', () => {
                    btn.parentNode.nextSibling.classList.remove('playlist__features_active');
                    btn.childNodes[1].setAttribute("src", attrDown);
                })

            })
        })

    }
    createFeatures();

}
export default showPlaylistFeatures;