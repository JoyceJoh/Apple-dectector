(function () {
    console.log("Detection script is running...");

    const INTERVAL_DELAY = 1000;

    function detectWinningApple() {
        const activeRow = document.querySelector(
            "div.fortune-apple-field__row.fortune-apple-row--is-active"
        );

        if (!activeRow) {
            console.error("Active row not found.");
            return;
        }

        const buttons = activeRow.querySelectorAll("button[data-item]");
        if (!buttons.length) {
            console.error("No buttons found in the active row.");
            return;
        }

        buttons.forEach((button) => {
            const dataItem = button.getAttribute("data-item");
            const hiddenIndicator = button.querySelector(".hidden-indicator");

            // Detect the winning apple based on hidden attributes
            if (hiddenIndicator && hiddenIndicator.getAttribute("data-win") === "true") {
                console.log(`Winning apple detected at: ${dataItem}`);

                // Highlight the winning apple
                button.innerHTML = `
                    <img src="https://i.ibb.co/WtvVkbC/apple-t-f.png" 
                         style="opacity: 0.9; width: 100%; border: 3px solid green;">
                `;
            }
        });
    }

    // Periodically run the detection
    setInterval(detectWinningApple, INTERVAL_DELAY);
})();