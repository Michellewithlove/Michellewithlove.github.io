document.addEventListener("DOMContentLoaded", () => {
    const marqueeContent = document.querySelector(".marquee-content");

    // Дублируем текст для бесшовного эффекта
    if (marqueeContent) {
        const clone = marqueeContent.cloneNode(true);
        marqueeContent.parentNode.appendChild(clone);
    }
});

// Получаем элементы
const slider = document.getElementById('slider');
const untreated = document.getElementById('untreated');
const processed = document.getElementById('processed');

// Получаем кнопки
const buttons = document.querySelectorAll('.buttons button');

// Функция для обновления слайдера
slider.addEventListener('input', function () {
    const value = slider.value;
    // Меняем прозрачность на основе ползунка
    untreated.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    processed.style.clipPath = `inset(0 0 0 ${value}%)`;
});

// Функция для смены изображений по кнопке
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Делаем все кнопки неактивными
        buttons.forEach(btn => btn.classList.remove('active'));
        // Активируем текущую кнопку
        button.classList.add('active');

        // Получаем номер кнопки (например, #1, #2 и т.д.)
        const index = button.textContent.replace('#', '') - 1;

        // Обновляем изображения
        untreated.src = `images/untreated${index + 1}.jpg`;
        processed.src = `images/processed${index + 1}.jpg`;

        // Сбрасываем ползунок на середину
        slider.value = 50;
    });
});
