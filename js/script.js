document.querySelectorAll(".book-card").forEach(card => {
    card.addEventListener("click", function () {
        const button = card.querySelector("a.button");

        if (button && button.href) {
            window.location.href = button.href;
        }
    });
});
/* ==========================================================
   PEOPLE PAGE — HIGHLIGHT CAST BY BOOK
========================================================== */

const peoplePageCards =
    document.querySelectorAll(".person-card[data-books]");

if (peoplePageCards.length > 0) {
    const pageParameters =
        new URLSearchParams(window.location.search);

    const selectedBook =
        pageParameters.get("book");

    if (selectedBook) {
        const filterMessage =
            document.querySelector("#book-filter-message");

        if (filterMessage) {
            filterMessage.textContent =
                `Characters appearing in Book ${selectedBook} are highlighted below.`;

            filterMessage.classList.add("is-visible");
        }

        peoplePageCards.forEach(card => {
            const includedBooks = card.dataset.books
                .trim()
                .split(/\s+/)
                .filter(Boolean);

            const excludedBooks = (card.dataset.excludeBooks || "")
                .trim()
                .split(/\s+/)
                .filter(Boolean);

            const appearsInAllBooks =
                includedBooks.includes("all");

            const appearsInSelectedBook =
                includedBooks.includes(selectedBook);

            const isExcludedFromSelectedBook =
                excludedBooks.includes(selectedBook);

            const appearsInStory =
                !isExcludedFromSelectedBook &&
                (appearsInAllBooks || appearsInSelectedBook);

            card.classList.toggle("is-in-book", appearsInStory);
            card.classList.toggle("is-not-in-book", !appearsInStory);
        });
    }
}

    const developmentStatus =
        document.getElementById("developmentStatus");

    if (developmentStatus) {
        const statusMessages = [
            "In Development",
            "Project Name Revealed",
            "This Is My Last Warning"
        ];

        let currentStatus = 0;

        developmentStatus.addEventListener("click", () => {
            currentStatus =
                (currentStatus + 1) % statusMessages.length;

            developmentStatus.textContent =
                statusMessages[currentStatus];

            developmentStatus.classList.toggle(
                "is-revealed",
                currentStatus === 2
            );

            developmentStatus.setAttribute(
                "aria-label",
                currentStatus === 2
                    ? "Next book title: this Is My Last Warning. Click to reset."
                    : "Reveal the title of the next book"
            );

            developmentStatus.classList.remove("animate");
                void developmentStatus.offsetWidth; // Restart animation
            developmentStatus.classList.add("animate");
        });
        const secretButtons = document.querySelectorAll(".site-secret-button");

secretButtons.forEach((button) => {
    const originalText = button.textContent.trim();
    const labelText =
        button.dataset.secretLabel || "Secret Revealed";
    const secretText =
        button.dataset.secretText || "Something is hidden here.";

    const messages = [
        originalText,
        labelText,
        secretText
    ];

    let currentMessage = 0;

    button.addEventListener("click", () => {
        currentMessage =
            (currentMessage + 1) % messages.length;

        button.textContent = messages[currentMessage];

        button.classList.toggle(
            "is-label",
            currentMessage === 1
        );

        button.classList.toggle(
            "is-revealed",
            currentMessage === 2
        );

        button.setAttribute(
            "aria-expanded",
            currentMessage === 2 ? "true" : "false"
        );

        button.classList.remove("animate");

        // Restarts the animation.
        void button.offsetWidth;

        button.classList.add("animate");
    });
});
    }