document.addEventListener("DOMContentLoaded", function() {
    // Показываем сообщение при загрузке страницы
    var popup = document.getElementById("message-popup");
    popup.style.display = "flex";

    // Закрываем сообщение при нажатии на кнопку
    var closeButton = document.getElementById("close-popup");
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const marqueeContent = document.querySelector(".marquee-content");

    // Дублируем текст для бесшовного эффекта
    if (marqueeContent) {
        const clone = marqueeContent.cloneNode(true);
        marqueeContent.parentNode.appendChild(clone);
    }
});


$(document).ready(function() {
    // Инициализация плагина TwentyTwenty
    $(".twentytwenty-container").twentytwenty({
        default_offset_pct: 0.5, // Изначальная позиция разделителя (по центру)
        orientation: 'horizontal' // Направление ползунка: горизонтальное
    });

    // Логика для переключения изображений с кнопками
    $(".preset-btn").on("click", function() {
        var index = $(this).data("index");

        // Сменить изображения в зависимости от нажатой кнопки
        var untreatedImg = "images/untreated" + index + ".jpg";
        var processedImg = "images/processed" + index + ".jpg";

        // Обновить изображения
        $("#untreated-img").attr("src", untreatedImg);
        $("#processed-img").attr("src", processedImg);

        // Сделать активной текущую кнопку
        $(".preset-btn").removeClass("active");
        $(this).addClass("active");

        // Перезапустить плагин, чтобы он обновил разделительную линию
        $(".twentytwenty-container").twentytwenty();
    });

    // Изначально делать первую кнопку активной
    $(".preset-btn").first().addClass("active");
});
