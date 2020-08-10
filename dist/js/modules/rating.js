function rating() {
    let stars = document.querySelectorAll('.playlist__list-item-stars label');

    stars.forEach(star => star.addEventListener('click', (e) => {
        e.preventDefault();
        let chosen = document.querySelectorAll('.playlist__list-item-stars label:hover, .playlist__list-item-stars label:hover ~ label');
        chosen.forEach(mark => {
            console.log(mark)
            mark.style.cssText = "background-position: 0px -21px"
        })
    }))
}
export default rating;