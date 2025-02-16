document.addEventListener("DOMContentLoaded", function () {
    const btnYes = document.querySelector(".yes-button");
    const btnNo = document.querySelector(".no-button");

    const prompts = [
        "серьезно?",
        "реально ты сейчас всерьез??",
        "ну пожалуйста лера",
        "пжпжпж",
        "не оставляй меня одного!",
        "мне грустно без тебя и одинок",
        "мне плохо без тебя",
        "очень очень плохо без тебя",
        "я люблю тебя пожалуйста лера",
        "простии меня я хочу быть с тобой ❤️"
    ];

    let promptIndex = 0;

    function handleNoClick() {
        btnNo.textContent = prompts[promptIndex];
        promptIndex = (promptIndex + 1) % prompts.length;

        // Увеличиваем кнопку "Да"
        const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
        btnYes.style.fontSize = `${currentSize * 1.2}px`;
    }

    function handleYesClick() {
        window.location.href = "yes_page.html";
    }

    // Привязываем обработчики событий
    btnNo.addEventListener("click", handleNoClick);
    btnYes.addEventListener("click", handleYesClick);
});
