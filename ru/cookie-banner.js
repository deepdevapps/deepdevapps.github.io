// --- Универсальный скрипт баннера Cookie ---

// 1. Функция для инициализации Google Analytics
// Эта функция будет вызвана только после того, как пользователь даст согласие.
function initGoogleAnalytics() {
    console.log("Согласие на использование файлов cookie получено. Инициализация Google Analytics...");

<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y005JT3FBH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y005JT3FBH');
</script>

}

// Запустить основной код после полной загрузки страницы
document.addEventListener('DOMContentLoaded', () => {

    // 2. Определить стили CSS для баннера
    // Стили встроены непосредственно в скрипт, чтобы сделать его самодостаточным.
    const bannerStyles = `
        #cookie-consent-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            display: none; /* Скрыто по умолчанию */
            align-items: center;
            justify-content: center;
            gap: 20px;
            z-index: 2000;
            flex-wrap: wrap;
            text-align: center;
            font-family: 'Poppins', sans-serif; /* Использовать основной шрифт сайта */
            /* Локально определить переменные цвета для независимости стиля */
            --primary: #6C5CE7;
            --primary-dark: #5649C0;
            --dark: #2D3436;
            --gray: #636E72;
        }
        #cookie-consent-banner p {
            margin: 0;
            font-size: 15px;
            color: var(--gray);
            flex-grow: 1;
            max-width: 700px;
        }
        #cookie-consent-banner p a {
            color: var(--primary);
            font-weight: 600;
            text-decoration: none;
        }
        #cookie-consent-banner p a:hover {
            text-decoration: underline;
        }
        .cookie-buttons {
            display: flex;
            gap: 15px;
            flex-shrink: 0;
        }
        .btn-cookie {
            padding: 12px 28px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 15px;
            font-family: 'Poppins', sans-serif;
        }
        .btn-cookie-accept {
            background-color: var(--primary);
            color: white;
        }
        .btn-cookie-accept:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
        }
        .btn-cookie-decline {
            background-color: #E2E8F0;
            color: var(--dark);
        }
        .btn-cookie-decline:hover {
            background-color: #CBD5E0;
        }
        @media (max-width: 768px) {
            #cookie-consent-banner {
                flex-direction: column;
            }
        }
    `;

    // 3. Определить HTML-содержимое для баннера
    const bannerHTML = `
        <p>Мы используем файлы cookie для улучшения вашего опыта и анализа нашего трафика. Нажимая «Принять», вы соглашаетесь на использование нами файлов cookie для аналитики. <a href="/privacy.html">Узнать больше</a>.</p>
        <div class="cookie-buttons">
            <button id="decline-cookies" class="btn-cookie btn-cookie-decline">Отклонить</button>
            <button id="accept-cookies" class="btn-cookie btn-cookie-accept">Принять</button>
        </div>
    `;

    // 4. Внедрить CSS на страницу
    const styleSheet = document.createElement("style");
    styleSheet.innerText = bannerStyles;
    document.head.appendChild(styleSheet);

    // 5. Внедрить HTML баннера на страницу
    const bannerElement = document.createElement("div");
    bannerElement.id = "cookie-consent-banner";
    bannerElement.innerHTML = bannerHTML;
    document.body.appendChild(bannerElement);

    // 6. Запустить логику проверки согласия
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    const consentStatus = localStorage.getItem('cookie_consent');

    if (consentStatus === 'granted') {
        initGoogleAnalytics();
    } else if (consentStatus === 'denied') {
        // Ничего не делать, если пользователь ранее отказался
    } else {
        // Показать баннер, если выбор еще не сделан
        bannerElement.style.display = 'flex';
    }

    // Обработчики кликов для кнопок
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'granted');
        bannerElement.style.display = 'none';
        initGoogleAnalytics();
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'denied');
        bannerElement.style.display = 'none';
    });
});