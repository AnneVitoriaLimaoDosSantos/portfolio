   <!-- =====================
         JAVASCRIPT
    ====================== -->

    <script>

        /*
        =====================================
        MENU MOBILE
        =====================================
        */

        const menuButton =
            document.getElementById("menuButton");

        const menu =
            document.getElementById("menu");


        menuButton.addEventListener(
            "click",
            function () {

                menu.classList.toggle("active");

            }
        );


        /*
        Fecha o menu quando clicar
        em algum link.
        */

        const menuLinks =
            menu.querySelectorAll("a");


        menuLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        menu.classList.remove("active");

                    }
                );

            }
        );


        /*
        =====================================
        ANIMAÇÃO AO ROLAR A PÁGINA
        =====================================
        */

        const elements =
            document.querySelectorAll(".reveal");


        function revealElements() {

            const windowHeight =
                window.innerHeight;

            elements.forEach(
                function (element) {

                    const elementTop =
                        element.getBoundingClientRect().top;

                    const visiblePoint = 120;

                    if (
                        elementTop <
                        windowHeight - visiblePoint
                    ) {

                        element.classList.add("active");

                    }

                }
            );

        }


        window.addEventListener(
            "scroll",
            revealElements
        );


        revealElements();

    </script>

</body>
</html>