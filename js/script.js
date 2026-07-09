document.querySelectorAll(".book-card").forEach(card => {
    card.addEventListener("click", function () {
        const button = card.querySelector("a.button");

        if (button && button.href) {
            window.location.href = button.href;
        }
    });
});