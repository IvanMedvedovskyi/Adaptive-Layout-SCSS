<!-- Initialize Swiper -->
    var swiper = new Swiper(".mySwiper", {
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoHeight: true,
    breakpointsBase: window,
    renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
},
},
});
І