/**
 * TTWORBYTES Master Footer
 *
 * The footer is generated from this file so that navigation
 * and footer wording only need to be maintained in one place.
 */

document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.querySelector("#site-footer");

    if (!footerContainer) {
        console.warn(
            "TTWORBYTES footer: No #site-footer element was found."
        );
        return;
    }

    const currentYear = new Date().getFullYear();

    footerContainer.innerHTML = `
        <footer class="master-footer">

            <div class="master-footer__inner">

                <div class="master-footer__top">

                    <section
                        class="master-footer__brand"
                        aria-labelledby="footer-brand-title"
                    >
                        <a
                            class="master-footer__brand-link"
                            href="index.html"
                            aria-label="TTWORBYTES home"
                        >
                            <img
                                class="master-footer__logo"
                                src="images/ttworbytes-logo-02.png"
                                alt=""
                                width="58"
                                height="58"
                            >

                            <span
                                class="master-footer__name"
                                id="footer-brand-title"
                            >
                                TTWORBYTES
                            </span>
                        </a>

                        <p class="master-footer__tagline">
                            Great gameplay.<br>
                            Great stories.
                        </p>

                        <p class="master-footer__description">
                            Original games and stories created by Neil Amess.
                        </p>
                    </section>

                    <nav
                        class="master-footer__group"
                        aria-labelledby="footer-explore-title"
                    >
                        <h2
                            class="master-footer__heading"
                            id="footer-explore-title"
                        >
                            Explore
                        </h2>

                        <ul class="master-footer__links">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="books.html">Books</a>
                            </li>
                            <li>
                                <a href="games.html">Games</a>
                            </li>
                            <li>
                                <a href="people.html">Characters</a>
                            </li>
                            <li>
                                <a href="this-is-my-timeline.html">
                                    Timeline
                                </a>
                            </li>
                            <li>
                                <a href="news.html">News</a>
                            </li>
                        </ul>
                    </nav>

                    <nav
                        class="master-footer__group"
                        aria-labelledby="footer-stories-title"
                    >
                        <h2
                            class="master-footer__heading"
                            id="footer-stories-title"
                        >
                            Stories
                        </h2>

                        <ul class="master-footer__links">
                            <li>
                                <a href="this-is-my.html">
                                    This Is My…
                                </a>
                            </li>
                            <li>
                                <a href="kevalien.html">
                                    The Ke’Valien Trilogy
                                </a>
                            </li>
                            <li>
                                <a href="books.html">
                                    Discover All Books
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <nav
                        class="master-footer__group"
                        aria-labelledby="footer-about-title"
                    >
                        <h2
                            class="master-footer__heading"
                            id="footer-about-title"
                        >
                            About
                        </h2>

                        <ul class="master-footer__links">
                            <li>
                                <a href="about.html">Neil Amess</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                            <li>
                                <a href="privacy.html">Privacy</a>
                            </li>
                        </ul>
                    </nav>

                </div>

                <div class="master-footer__divider"></div>

                <div class="master-footer__bottom">

                    <p class="master-footer__copyright">
                        © ${currentYear} Neil Amess.
                        All rights reserved.
                    </p>

                    <p class="master-footer__credit">
                        Stories worth discovering.
                        Games worth playing.
                    </p>

                    <button
                        class="master-footer__top-button"
                        type="button"
                        aria-label="Return to the top of the page"
                    >
                        <span aria-hidden="true">↑</span>
                        Back to Top
                    </button>

                </div>

            </div>

        </footer>
    `;

    const topButton = footerContainer.querySelector(
        ".master-footer__top-button"
    );

    topButton.addEventListener("click", () => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? "auto" : "smooth"
        });
    });
});