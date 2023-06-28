function optionHover() {
    const optionList = document.querySelectorAll('.option ');
    const eventTypes = ['mouseenter', 'mouseleave', 'touchstart', 'touchend'];

    function hoverSubNav(event) {
        event.stopPropagation();
        if (window.innerWidth <= 768 && event.type == 'touchstart') {
            this.classList.add('option--hover');
        } else if (window.innerWidth <= 768 && event.type == 'touchend') {
            this.classList.remove('option--hover');
        } else if (window.innerWidth > 768 && event.type == 'mouseenter') {
            this.classList.add('option--hover');
        } else if (window.innerWidth > 768 && event.type == 'mouseleave') {
            this.classList.remove('option--hover');
        }
    };

    eventTypes.forEach(e => optionList.forEach(item => item.addEventListener(e, hoverSubNav)));
}

export { optionHover };