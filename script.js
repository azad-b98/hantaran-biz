    tailwind.config = {
      theme: {
        extend: {
          colors: {
            ivory: "#FAF7F2",
            champagne: "#C9A96E",
            rose: "#C98F91",
            brown: "#3B2A25",
            cream: "#F2E9DE",
            sage: "#8A9880"
          },

          fontFamily: {
            display: ["Cormorant Garamond", "serif"],
            sans: ["DM Sans", "sans-serif"]
          },

          boxShadow: {
            luxury: "0 20px 60px rgba(59,42,37,0.12)"
          }
        }
      }
    }

    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {

      mobileMenu.classList.toggle("hidden");

    });


    document.querySelectorAll(".mobile-link").forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

      });

    });


    /* =========================================================
       SCROLL REVEAL
    ========================================================= */

    const revealElements =
      document.querySelectorAll(".reveal");

    const revealObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add("active");

              revealObserver.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(element => {

      revealObserver.observe(element);

    });


    /* =========================================================
       PRICE CALCULATOR
    ========================================================= */

    const qty = document.getElementById("qty");
    const service = document.getElementById("service");
    const estimate = document.getElementById("estimate");


    function calculatePrice() {

      const quantity =
        parseInt(qty.value);

      const price =
        parseInt(service.value);

      let total =
        quantity * price;


      /*
        Adjust package pricing to roughly reflect
        the supplied market package data.
      */

      if (service.value === "40") {

        const packagePrices = {

          3: 150,
          4: 190,
          5: 250,
          6: 280,
          7: 275,
          8: 350,
          9: 450,
          10: 450,
          12: 575

        };

        total =
          packagePrices[quantity] || total;

      }


      if (service.value === "20") {

        total =
          quantity * 20;

      }


      if (service.value === "30") {

        total =
          quantity * 30;

      }


      if (service.value === "95") {

        total =
          quantity * 95;

      }


      estimate.textContent =
        "RM" + total.toLocaleString("ms-MY");

    }


    qty.addEventListener(
      "change",
      calculatePrice
    );

    service.addEventListener(
      "change",
      calculatePrice
    );


    calculatePrice();


    /* =========================================================
       NAVBAR BACKGROUND
    ========================================================= */

    window.addEventListener("scroll", () => {

      const header =
        document.querySelector("header");

      if (window.scrollY > 30) {

        header.classList.add(
          "shadow-sm"
        );

      } else {

        header.classList.remove(
          "shadow-sm"
        );

      }

    });
