/**
 * TTWORBYTES Master Header
 *
 * The header is generated from this single file so that changes only
 * need to be made once.
 */

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector("#site-header");

    if (!headerContainer) {
        console.warn("TTWORBYTES header: No #site-header element was found.");
        return;
    }

    /*
     * Set the current page by adding data-page to the body:
     *
     * <body data-page="home">
     * <body data-page="books">
     * <body data-page="games">
     */
    const currentPage = document.body.dataset.page || "";

    const navigationItems = [
        {
            label: "Home",
            href: "index.html",
            page: "home"
        },
        {
            label: "Books",
            href: "books.html",
            page: "books"
        },
        {
            label: "Games",
            href: "games.html",
            page: "games"
        },
        {
            label: "Characters",
            href: "characters.html",
            page: "characters"
        },
        {
            label: "Timeline",
            href: "this-is-my-timeline.html",
            page: "timeline"
        },
        {
            label: "News",
            href: "news.html",
            page: "news"
        },
        {
            label: "About",
            href: "about.html",
            page: "about"
        },
        {
            label: "Contact",
            href: "contact.html",
            page: "contact"
        }
    ];

    const navigationLinks = navigationItems
        .map((item) => {
            const isCurrentPage = item.page === currentPage;

            return `
                <li class="master-nav__item">
                    <a
                        class="master-nav__link${isCurrentPage ? " is-current" : ""}"
                        href="${item.href}"
                        ${isCurrentPage ? 'aria-current="page"' : ""}
                    >
                        ${item.label}
                    </a>
                </li>
            `;
        })
        .join("");

    headerContainer.innerHTML = `
        <header class="master-header" id="master-header">
            <div class="master-header__inner">

                <a
                    class="master-brand"
                    href="index.html"
                    aria-label="TTWORBYTES home"
                >
                    <img
                        class="master-brand__logo"
                        src="images/ttworbytes-logo-02.png"
                        alt=""
                        width="52"
                        height="52"
                    >

                    <span class="master-brand__name">
                        TTWORBYTES
                    </span>
                </a>

                <button
                    class="master-menu-button"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-controls="master-navigation"
                    aria-expanded="false"
                >
                    <span class="master-menu-button__line"></span>
                    <span class="master-menu-button__line"></span>
                    <span class="master-menu-button__line"></span>
                </button>

                <nav
                    class="master-nav"
                    id="master-navigation"
                    aria-label="Main navigation"
                >
                    <ul class="master-nav__list">
                        ${navigationLinks}
                    </ul>
                </nav>

            </div>
        </header>
    `;

    const header = document.querySelector("#master-header");
    const menuButton = document.querySelector(".master-menu-button");
    const navigation = document.querySelector("#master-navigation");
    const navigationLinksElements =
        navigation.querySelectorAll(".master-nav__link");

    function closeMenu() {
        menuButton.classList.remove("is-open");
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        document.body.classList.remove("menu-open");
    }

    function openMenu() {
        menuButton.classList.add("is-open");
        navigation.classList.add("is-open");
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close navigation menu");
        document.body.classList.add("menu-open");
    }

    menuButton.addEventListener("click", () => {
        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navigationLinksElements.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 980) {
            closeMenu();
        }
    });

    function updateHeaderOnScroll() {
        header.classList.toggle("has-scrolled", window.scrollY > 20);
    }

    updateHeaderOnScroll();

    window.addEventListener("scroll", updateHeaderOnScroll, {
        passive: true
    });
});