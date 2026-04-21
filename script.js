document.addEventListener('DOMContentLoaded', () => {
    // 1. LocalStorage
    //Створюємо об'єкт
const systemObject = {
    platform: navigator.platform,
    browser: navigator.userAgent,
    time: new Date().toLocaleString()
};

//Перетворюємо об'єкт у рядок (JSON.stringify) і зберігаємо
localStorage.setItem('userSystem', JSON.stringify(systemObject));

//Дістаємо рядок і перетворюємо назад в об'єкт (JSON.parse)
const rawData = localStorage.getItem('userSystem');
const parsedData = JSON.parse(rawData);

//Виводимо  у футер
document.getElementById('storage-info').textContent = 
    `Система: ${parsedData.platform}, Браузер: ${parsedData.browser}`;

// 2. Відгуки роботодавців
const container = document.getElementById('reviews-container');

fetch('https://jsonplaceholder.typicode.com/posts/18/comments')
    .then(response => response.json())
    .then(data => {
        container.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'review-item';
            div.innerHTML = `<b>${item.email}</b><p style="font-size:0.8rem">${item.body}...</p>`;
            container.appendChild(div);
        });
    });

    // 3. Модальне вікно 
    const modal = document.getElementById('contact-modal');
    setTimeout(() => {
        if (!sessionStorage.getItem('closed')) modal.style.display = 'block';
    }, 60000);

    document.querySelector('.close-button').onclick = () => {
        modal.style.display = 'none';
        sessionStorage.setItem('closed', 'true');
    };

    // 4. Перемикач теми
    const btn = document.getElementById('theme-toggle');
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) document.body.classList.add('light-theme');

    btn.onclick = () => document.body.classList.toggle('light-theme');
});