/* =========================================================
   RIZZ STORE — LOGIN.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const errorBox = document.getElementById("loginError");
    const googleButton = document.getElementById("googleLogin");


    /* =========================================
       CEK EMAIL
    ========================================= */

    function validEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }


    /* =========================================
       LOGIN
    ========================================= */

    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const email = emailInput.value.trim();


            if (!email) {

                showError("Email Google wajib diisi.");

                emailInput.focus();

                return;

            }


            if (!validEmail(email)) {

                showError(
                    "Masukkan alamat email yang valid."
                );

                emailInput.focus();

                return;

            }


            /* Simpan email */

            localStorage.setItem(
                "rizzEmail",
                email
            );


            /* Ambil nama dari email */

            const username =
                email
                    .split("@")[0]
                    .replace(/[._-]/g, " ");


            const formattedUsername =
                username
                    .split(" ")
                    .filter(Boolean)
                    .map(word =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1)
                    )
                    .join(" ");


            localStorage.setItem(
                "rizzUsername",
                formattedUsername
            );


            /* Efek loading */

            const button =
                loginForm.querySelector(
                    ".login-button"
                );


            if (button) {

                button.disabled = true;

                button.textContent =
                    "Memproses...";

            }


            setTimeout(() => {

                window.location.href =
                    "index.html";

            }, 800);

        });

    }


    /* =========================================
       GOOGLE BUTTON
    ========================================= */

    if (googleButton) {

        googleButton.addEventListener(
            "click",
            () => {

                emailInput.focus();

                emailInput.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }


    /* =========================================
       ERROR
    ========================================= */

    function showError(message) {

        if (!errorBox) return;

        errorBox.textContent = message;

        errorBox.classList.remove("show");

        void errorBox.offsetWidth;

        errorBox.classList.add("show");

    }


    /* =========================================
       HILANGKAN ERROR SAAT MENGETIK
    ========================================= */

    if (emailInput) {

        emailInput.addEventListener(
            "input",
            () => {

                if (errorBox) {

                    errorBox.classList.remove(
                        "show"
                    );

                }

            }
        );

    }


    /* =========================================
       ENTER
    ========================================= */

    if (emailInput) {

        emailInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    loginForm?.requestSubmit();

                }

            }
        );

    }

});