$(document).ready(function () {
    $("#switch-lang .en").addClass("menu__img--active");
    $("#switch-lang img").click(function () {
        $("#switch-lang img")
            .removeClass("menu__img--active")
            .eq($(this).index())
            .addClass("menu__img--active");
    });
    $(".hamburger").click(function () {
        if ($("menu__list").hasClass("hidden")) {
            $("#navigation").attr("class", "visible animated slideInLeft");
        } else {
            $("#navigation").attr("class", "hidden animated slideOutLeft");
        }
        $(this).toggleClass("open");
    });

    $("#navigation").click(function () {
        if ($("#navigation").hasClass("visible")) {
            $(".menu").toggleClass("open");
        } else {
        }
        $(this).attr("class", "slideOutLeft hidden");
    });

    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find(".burger-menu_button", ".burger-menu_lines");
        let links = menu.find(".menu__link");

        button.on("click", (e) => {
            e.preventDefault();
            toggleMenu();
        });

        links.on("click", () => toggleMenu());
        overlay.on("click", () => toggleMenu());

        function toggleMenu() {
            menu.toggleClass("burger-menu_active");
        }
    }
    burgerMenu(".burger-menu");
});
