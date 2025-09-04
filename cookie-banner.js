// --- Universal Cookie Banner Script ---

// 1. Function to initialize Google Analytics
// This function will only be called after the user gives consent.
function initGoogleAnalytics() {
    console.log("Cookie consent granted. Initializing Google Analytics...");

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y005JT3FBH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y005JT3FBH');
</script>

}

// Run the main code after the page has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // 2. Define the CSS styles for the banner
    // The styles are embedded directly in the script to make it self-contained.
    const bannerStyles = `
        #cookie-consent-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            display: none; /* Hidden by default */
            align-items: center;
            justify-content: center;
            gap: 20px;
            z-index: 2000;
            flex-wrap: wrap;
            text-align: center;
            font-family: 'Poppins', sans-serif; /* Use the site's main font */
            /* Locally define color variables for style independence */
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

    // 3. Define the HTML content for the banner
    const bannerHTML = `
        <p>We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you agree to our use of cookies for analytics. <a href="/privacy.html">Learn more</a>.</p>
        <div class="cookie-buttons">
            <button id="decline-cookies" class="btn-cookie btn-cookie-decline">Decline</button>
            <button id="accept-cookies" class="btn-cookie btn-cookie-accept">Accept</button>
        </div>
    `;

    // 4. Inject the CSS onto the page
    const styleSheet = document.createElement("style");
    styleSheet.innerText = bannerStyles;
    document.head.appendChild(styleSheet);

    // 5. Inject the banner's HTML onto the page
    const bannerElement = document.createElement("div");
    bannerElement.id = "cookie-consent-banner";
    bannerElement.innerHTML = bannerHTML;
    document.body.appendChild(bannerElement);

    // 6. Run the consent check logic
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    const consentStatus = localStorage.getItem('cookie_consent');

    if (consentStatus === 'granted') {
        initGoogleAnalytics();
    } else if (consentStatus === 'denied') {
        // Do nothing if the user previously declined
    } else {
        // Show the banner if a choice has not yet been made
        bannerElement.style.display = 'flex';
    }

    // Click handlers for the buttons
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
