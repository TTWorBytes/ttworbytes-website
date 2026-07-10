document.querySelectorAll(".book-card").forEach(card => {
    card.addEventListener("click", function () {
        const button = card.querySelector("a.button");

        if (button && button.href) {
            window.location.href = button.href;
        }
    });
});
/* Highlight characters connected to a selected book. */

const peoplePageCards = document.querySelectorAll(".person-card[data-books]");

if (peoplePageCards.length > 0) {
    const pageParameters = new URLSearchParams(window.location.search);
    const selectedBook = pageParameters.get("book");

    if (selectedBook) {
        const filterMessage = document.querySelector("#book-filter-message");

        if (filterMessage) {
            filterMessage.textContent =
                `Characters appearing in Book ${selectedBook} are highlighted below.`;

            filterMessage.classList.add("is-visible");
        }

        peoplePageCards.forEach(card => {
            const books = card.dataset.books
                .split(/\s+/)
                .filter(Boolean);

            if (books.includes(selectedBook)) {
                card.classList.add("is-in-book");
            } else {
                card.classList.add("is-not-in-book");
            }
        });
    }
}