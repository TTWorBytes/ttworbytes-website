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