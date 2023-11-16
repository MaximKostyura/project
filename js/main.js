var openAccordion = null;

function toggleAccordion(element) {
    var content = element.querySelector('.accordion-content');
    var sign = element.querySelector('.accordion-sign');

    if (openAccordion && openAccordion !== element) {
        openAccordion.querySelector('.accordion-content').style.display = "none";
        openAccordion.querySelector('.accordion-sign').innerHTML = getSVG('plus');
    }

    if (content.style.display === "block" || content.style.display === "") {
        content.style.display = "none";
        sign.innerHTML = getSVG('plus');
        openAccordion = null;
    } else {
        content.style.display = "block";
        sign.innerHTML = getSVG('minus');
        openAccordion = element;
    }
}

function getSVG(type) {
    // Код SVG неизменен
}

document.addEventListener('DOMContentLoaded', function () {
    var accordions = document.querySelectorAll('.accordion-item');
    var firstAccordion = accordions[0];
    toggleAccordion(firstAccordion);
});

function getSVG(type) {
    if (type === 'plus') {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_1473_4469)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99577 0.833008C10.456 0.833008 10.8291 1.2061 10.8291 1.66634V9.16634H18.3291C18.7893 9.16634 19.1624 9.53944 19.1624 9.99967C19.1624 10.4599 18.7893 10.833 18.3291 10.833H10.8291V18.333C10.8291 18.7932 10.456 19.1663 9.99577 19.1663C9.53553 19.1663 9.16243 18.7932 9.16243 18.333V10.833H1.66243C1.2022 10.833 0.829102 10.4599 0.829102 9.99967C0.829102 9.53944 1.2022 9.16634 1.66243 9.16634H9.16243V1.66634C9.16243 1.2061 9.53553 0.833008 9.99577 0.833008Z" fill="#7772F1"/>
                </g>
                <defs>
                    <clipPath id="clip0_1473_4469">
                        <rect width="20" height="20" fill="white" transform="translate(-0.00390625)"/>
                    </clipPath>
                </defs>
            </svg>
        `;
    } else if (type === 'minus') {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_1473_4472)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.829102 10.0003C0.829102 9.54009 1.2022 9.16699 1.66243 9.16699V10.0003V10.8337C1.2022 10.8337 0.829102 10.4606 0.829102 10.0003ZM18.3291 10.0003L18.329 10.8337H1.66243V10.0003V9.16699H18.3286L18.3291 10.0003ZM18.3291 10.0003L18.329 10.8337C18.7893 10.8337 19.1624 10.4606 19.1624 10.0003C19.1624 9.54009 18.7888 9.16699 18.3286 9.16699L18.3291 10.0003Z" fill="#7772F1"/>
                </g>
                <defs>
                    <clipPath id="clip0_1473_4472">
                        <rect width="20" height="20" fill="white" transform="translate(-0.00390625)"/>
                    </clipPath>
                </defs>
            </svg>
        `;
    }
}
var btn = document.getElementById('btn');

function leftClick() {
    btn.style.left = '0';
    btn.classList.add('active');
}

function rightClick() {
    btn.style.left = '168px';
    btn.classList.remove('active');
}


$(function () {
    $('.testimonials__slider').slick({
        arrows: false,
    })
    $('.testimonials__perv').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')

    })
})



