document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.addEventListener('click', () => {
        let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Language Translation (เพิ่มคำแปลสำหรับ Title และ Subtitle) ---
    const translations = {
        en: {
            shop_title: "Shop",
            shop_subtitle: "Exclusive items from NosuTeam.",
            product1_name: "Nosu 1st Anniversary LINE Sticker",
            product1_price: "THB 31",
            buy_button: "Buy Now"
        },
        th: {
            shop_title: "ร้านค้า",
            shop_subtitle: "สินค้าสุดพิเศษจาก NosuTeam",
            product1_name: "สติ๊กเกอร์ไลน์ Nosu ครบรอบ 1 ปี",
            product1_price: "฿31",
            buy_button: "ซื้อเลย"
        },
        ja: {
            shop_title: "ショップ",
            shop_subtitle: "NosuTeamからの限定アイテム",
            product1_name: "ノス1周年記念LINEスタンプ",
            product1_price: "THB 31",
            buy_button: "今すぐ購入"
        }
    };

    const langSwitcher = document.getElementById('lang-switcher');
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang]?.[key]) {
                el.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('xo-arena-lang', lang);
        langSwitcher.value = lang;
    };
    langSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
    setLanguage(localStorage.getItem('xo-arena-lang') || 'en');
});
