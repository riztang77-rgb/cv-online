/* =========================================================
   RIZZ STORE — ecom.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");

    if(navToggle && mainNav){

        navToggle.addEventListener("click", () => {

            const open = mainNav.classList.toggle("open");

            navToggle.classList.toggle("open", open);

            navToggle.setAttribute(
                "aria-expanded",
                open
            );

        });


        mainNav.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("open");
                navToggle.classList.remove("open");

                navToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       SCROLL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold:.12,
                rootMargin:"0px 0px -50px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       SCROLLSPY
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main > section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link[data-nav]"
        );

    const spyObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        const id =
                            entry.target.id;

                        navLinks.forEach(link => {

                            link.classList.toggle(
                                "active",
                                link.getAttribute("href")
                                === `#${id}`
                            );

                        });

                    }

                });

            },
            {
                rootMargin:"-45% 0px -50% 0px"
            }
        );


    sections.forEach(section => {

        spyObserver.observe(section);

    });


    /* =====================================================
       HERO DOT
    ===================================================== */

    const dots =
        document.querySelectorAll(
            ".hero-dots .dot"
        );

    let dotIndex = 0;

    if(dots.length){

        setInterval(() => {

            dots[dotIndex]
                .classList.remove("active");

            dotIndex =
                (dotIndex + 1) % dots.length;

            dots[dotIndex]
                .classList.add("active");

        },3200);

    }


    /* =====================================================
       CART
    ===================================================== */

    let cart =
        JSON.parse(
            localStorage.getItem("rizzCart")
        ) || [];


    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    const cartBtn =
        document.getElementById("cartBtn");

    const cartModal =
        document.getElementById("cartModal");

    const buyCartBtn =
        document.getElementById("buyCartBtn");


    function formatRupiah(number){

        return new Intl.NumberFormat(
            "id-ID",
            {
                style:"currency",
                currency:"IDR",
                minimumFractionDigits:0
            }
        ).format(number);

    }


    function saveCart(){

        localStorage.setItem(
            "rizzCart",
            JSON.stringify(cart)
        );

    }


    function updateCartCount(){

        const totalQuantity =
            cart.reduce(
                (total,item) =>
                    total + item.quantity,
                0
            );

        if(cartCount){

            cartCount.textContent =
                totalQuantity;

        }

    }


    function renderCart(){

        if(!cartItems) return;

        if(cart.length === 0){

            cartItems.innerHTML = `
                <div class="empty-cart">
                    Keranjang kamu masih kosong.
                </div>
            `;

            if(cartTotal){
                cartTotal.textContent =
                    "Rp0";
            }

            if(buyCartBtn){
                buyCartBtn.disabled = true;
            }

            return;

        }


        cartItems.innerHTML = "";


        let total = 0;


        cart.forEach((item,index) => {

            const subtotal =
                item.price * item.quantity;

            total += subtotal;


            const div =
                document.createElement("div");

            div.className =
                "cart-item";


            div.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${formatRupiah(item.price)}
                    </p>

                </div>

                <div class="quantity-controls">

                    <button
                        data-minus="${index}">
                        −
                    </button>

                    <strong>
                        ${item.quantity}
                    </strong>

                    <button
                        data-plus="${index}">
                        +
                    </button>

                </div>

                <button
                    class="remove-cart"
                    data-remove="${index}">

                    Hapus

                </button>

            `;


            cartItems.appendChild(div);

        });


        if(cartTotal){

            cartTotal.textContent =
                formatRupiah(total);

        }

        if(buyCartBtn){

            buyCartBtn.disabled = false;

        }


        cartItems
            .querySelectorAll("[data-minus]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.minus
                            );

                        if(cart[index].quantity > 1){

                            cart[index].quantity--;

                        }else{

                            cart.splice(index,1);

                        }

                        saveCart();
                        renderCart();
                        updateCartCount();

                    }
                );

            });


        cartItems
            .querySelectorAll("[data-plus]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.plus
                            );

                        cart[index].quantity++;

                        saveCart();
                        renderCart();
                        updateCartCount();

                    }
                );

            });


        cartItems
            .querySelectorAll("[data-remove]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.remove
                            );

                        cart.splice(index,1);

                        saveCart();
                        renderCart();
                        updateCartCount();

                    }
                );

            });

    }


    function addToCart(button){

        const name =
            button.dataset.product;

        const price =
            Number(button.dataset.price);


        const productCard =
            button.closest(".product-card");

        const image =
            productCard
                ?.querySelector("img")
                ?.src || "";


        const existing =
            cart.find(
                item => item.name === name
            );


        if(existing){

            existing.quantity++;

        }else{

            cart.push({
                name:name,
                price:price,
                quantity:1,
                image:image
            });

        }


        saveCart();

        updateCartCount();

        renderCart();


        button.classList.add("added");

        setTimeout(() => {

            button.classList.remove("added");

        },400);

    }


    document
        .querySelectorAll("[data-add-cart]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    addToCart(button);

                }
            );

        });


    updateCartCount();

    renderCart();


    if(cartBtn){

        cartBtn.addEventListener(
            "click",
            () => {

                cartModal.classList.add("show");

                renderCart();

            }
        );

    }


    /* =====================================================
       BUY CART
    ===================================================== */

    if(buyCartBtn){

        buyCartBtn.addEventListener(
            "click",
            () => {

                if(cart.length === 0) return;


                const total =
                    cart.reduce(
                        (sum,item) =>
                            sum +
                            item.price *
                            item.quantity,
                        0
                    );


                const username =
                    localStorage.getItem(
                        "rizzUsername"
                    ) || "Pelanggan";


                alert(
                    `Terima kasih ${username}!\n\n` +
                    `Total belanja: ${formatRupiah(total)}\n\n` +
                    `Pesanan kamu siap diproses.`
                );


                cart = [];

                saveCart();
                updateCartCount();
                renderCart();

                cartModal.classList.remove(
                    "show"
                );

            }
        );

    }


    /* =====================================================
       WISHLIST
    ===================================================== */

    let wishlist =
        JSON.parse(
            localStorage.getItem(
                "rizzWishlist"
            )
        ) || [];


    const wishlistCount =
        document.getElementById(
            "wishlistCount"
        );

    const wishlistBtn =
        document.getElementById(
            "wishlistBtn"
        );

    const wishlistModal =
        document.getElementById(
            "wishlistModal"
        );

    const wishlistItems =
        document.getElementById(
            "wishlistItems"
        );


    function saveWishlist(){

        localStorage.setItem(
            "rizzWishlist",
            JSON.stringify(wishlist)
        );

    }


    function updateWishlistCount(){

        if(wishlistCount){

            wishlistCount.textContent =
                wishlist.length;

        }

    }


    function renderWishlist(){

        if(!wishlistItems) return;


        if(wishlist.length === 0){

            wishlistItems.innerHTML = `
                <div class="empty-cart">
                    Belum ada produk yang kamu sukai.
                </div>
            `;

            return;

        }


        wishlistItems.innerHTML =
            wishlist.map(
                (item,index) => `

                <div class="cart-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            ${formatRupiah(item.price)}
                        </p>

                    </div>

                    <button
                        class="remove-cart"
                        data-wish-remove="${index}">

                        Hapus

                    </button>

                </div>

            `
            ).join("");


        wishlistItems
            .querySelectorAll(
                "[data-wish-remove]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        wishlist.splice(
                            Number(
                                button.dataset.wishRemove
                            ),
                            1
                        );

                        saveWishlist();

                        updateWishlistCount();

                        renderWishlist();

                        updateWishButtons();

                    }
                );

            });

    }


    function updateWishButtons(){

        document
            .querySelectorAll(".wish-btn")
            .forEach(button => {

                const name =
                    button.dataset.product;

                const liked =
                    wishlist.some(
                        item =>
                            item.name === name
                    );

                button.classList.toggle(
                    "active",
                    liked
                );

            });

    }


    document
        .querySelectorAll(".wish-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const name =
                        button.dataset.product;

                    const price =
                        Number(
                            button.dataset.price
                        );

                    const productCard =
                        button.closest(
                            ".product-card"
                        );

                    const image =
                        productCard
                            ?.querySelector("img")
                            ?.src || "";


                    const existing =
                        wishlist.find(
                            item =>
                                item.name === name
                        );


                    if(existing){

                        wishlist =
                            wishlist.filter(
                                item =>
                                    item.name !== name
                            );

                    }else{

                        wishlist.push({
                            name:name,
                            price:price,
                            image:image
                        });

                    }


                    saveWishlist();

                    updateWishlistCount();

                    updateWishButtons();

                    renderWishlist();

                }
            );

        });


    if(wishlistBtn){

        wishlistBtn.addEventListener(
            "click",
            () => {

                wishlistModal.classList.add(
                    "show"
                );

                renderWishlist();

            }
        );

    }


    updateWishlistCount();

    updateWishButtons();


    /* =====================================================
       MODAL CLOSE
    ===================================================== */

    document
        .querySelectorAll("[data-close]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.close;

                    document
                        .getElementById(id)
                        ?.classList.remove(
                            "show"
                        );

                }
            );

        });


    document
        .querySelectorAll(".modal-overlay")
        .forEach(overlay => {

            overlay.addEventListener(
                "click",
                event => {

                    if(event.target === overlay){

                        overlay.classList.remove(
                            "show"
                        );

                    }

                }
            );

        });


    /* =====================================================
       USERNAME
    ===================================================== */

    const accountBtn =
        document.getElementById(
            "accountBtn"
        );

    const accountModal =
        document.getElementById(
            "accountModal"
        );

    const usernameInput =
        document.getElementById(
            "usernameInput"
        );

    const saveUsername =
        document.getElementById(
            "saveUsername"
        );

    const savedUser =
        document.getElementById(
            "savedUser"
        );


    function loadUsername(){

        const username =
            localStorage.getItem(
                "rizzUsername"
            );


        if(username){

            usernameInput.value =
                username;

            savedUser.textContent =
                `Halo, ${username}!`;

        }

    }


    if(accountBtn){

        accountBtn.addEventListener(
            "click",
            () => {

                accountModal.classList.add(
                    "show"
                );

                loadUsername();

            }
        );

    }


    if(saveUsername){

        saveUsername.addEventListener(
            "click",
            () => {

                const username =
                    usernameInput.value.trim();


                if(!username){

                    alert(
                        "Silakan masukkan username."
                    );

                    return;

                }


                localStorage.setItem(
                    "rizzUsername",
                    username
                );


                savedUser.textContent =
                    `Halo, ${username}!`;

            }
        );

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const searchButton =
        document.getElementById(
            "searchButton"
        );


    function searchProducts(){

        const keyword =
            searchInput.value
                .toLowerCase()
                .trim();


        const products =
            document.querySelectorAll(
                ".product-card"
            );


        products.forEach(product => {

            const name =
                (
                    product.dataset.name ||
                    product
                        .querySelector("h3")
                        ?.textContent ||
                    ""
                ).toLowerCase();


            if(
                keyword === "" ||
                name.includes(keyword)
            ){

                product.classList.remove(
                    "search-hidden"
                );

            }else{

                product.classList.add(
                    "search-hidden"
                );

            }

        });


        if(keyword){

            document
                .getElementById("bestselling")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        }

    }


    if(searchButton){

        searchButton.addEventListener(
            "click",
            searchProducts
        );

    }


    if(searchInput){

        searchInput.addEventListener(
            "keydown",
            event => {

                if(event.key === "Enter"){

                    searchProducts();

                }

            }
        );

    }


    /* =====================================================
       NEWSLETTER / EMAIL
    ===================================================== */

    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );

    const newsletterSuccess =
        document.getElementById(
            "newsletterSuccess"
        );


    if(newsletterForm){

        newsletterForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const email =
                    document
                        .getElementById(
                            "emailInput"
                        )
                        .value
                        .trim();


                if(!email){

                    alert(
                        "Masukkan email terlebih dahulu."
                    );

                    return;

                }


                localStorage.setItem(
                    "rizzEmail",
                    email
                );


                newsletterSuccess.classList.add(
                    "show"
                );


                newsletterForm.reset();


                setTimeout(
                    () => {

                        newsletterSuccess.classList.remove(
                            "show"
                        );

                    },
                    4000
                );

            }
        );

    }


    /* =====================================================
       COUNTDOWN
    ===================================================== */

    const cdDays =
        document.getElementById("cd-days");

    const cdHours =
        document.getElementById("cd-hours");

    const cdMins =
        document.getElementById("cd-mins");

    const cdSecs =
        document.getElementById("cd-secs");


    if(cdDays){

        let totalSeconds =
            (2 * 24 * 3600) +
            (14 * 3600) +
            (36 * 60) +
            45;


        const pad =
            number =>
                String(number)
                    .padStart(2,"0");


        setInterval(() => {

            if(totalSeconds <= 0){

                totalSeconds =
                    (2 * 24 * 3600) +
                    (14 * 3600) +
                    (36 * 60) +
                    45;

            }


            totalSeconds--;


            const days =
                Math.floor(
                    totalSeconds / 86400
                );

            const hours =
                Math.floor(
                    (totalSeconds % 86400) / 3600
                );

            const mins =
                Math.floor(
                    (totalSeconds % 3600) / 60
                );

            const secs =
                totalSeconds % 60;


            cdDays.textContent =
                pad(days);

            cdHours.textContent =
                pad(hours);

            cdMins.textContent =
                pad(mins);

            cdSecs.textContent =
                pad(secs);

        },1000);

    }


    /* =====================================================
       TESTIMONIAL
    ===================================================== */

    const testiGrid =
        document.querySelector(
            ".testi-grid"
        );

    const prevBtn =
        document.getElementById(
            "testiPrev"
        );

    const nextBtn =
        document.getElementById(
            "testiNext"
        );


    function shiftTestimonials(direction){

        if(!testiGrid) return;


        const cards =
            Array.from(
                testiGrid.children
            );


        if(direction === "next"){

            testiGrid.appendChild(
                cards[0]
            );

        }else{

            testiGrid.insertBefore(
                cards[cards.length - 1],
                cards[0]
            );

        }

    }


    if(prevBtn){

        prevBtn.addEventListener(
            "click",
            () =>
                shiftTestimonials("prev")
        );

    }


    if(nextBtn){

        nextBtn.addEventListener(
            "click",
            () =>
                shiftTestimonials("next")
        );

    }


    /* =====================================================
       HEADER SHADOW
    ===================================================== */

    const header =
        document.getElementById(
            "siteHeader"
        );


    function headerScroll(){

        if(!header) return;


        header.style.boxShadow =
            window.scrollY > 8
                ? "0 12px 30px -22px rgba(0,0,0,.8)"
                : "none";

    }


    document.addEventListener(
        "scroll",
        headerScroll,
        {passive:true}
    );


    headerScroll();

});