// --- WidgetBot Setup ---
const widgetBotScript = document.createElement('script');
widgetBotScript.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
widgetBotScript.async = true;
widgetBotScript.defer = true;
widgetBotScript.onload = function () {
  new Crate({
    server: '1334985396127404113', // ID เซิร์ฟเวอร์ของคุณ
    
    // ใส่ ID ของช่อง หรือ ID ของหมวดหมู่ที่ต้องการซ่อนใน array นี้
    deny: [
        '1337872901935726654',
        '1334985396731514881',
        '1334985396731514884',
        '1334985396890632344',
        '1334985397037563965',
        '1366476856391630940',
        '1366477115242975312',
        '1334985397037563973',
        '1334985397175980166', // <-- เพิ่มลูกน้ำตรงนี้
        '1334985396580257853',
        '1334985396580257854',
        '1334985396580257855',
        '1334985396580257856'
    ]

  });
};
document.head.appendChild(widgetBotScript);


document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);

        themeToggle.addEventListener('click', () => {
            let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    hamburgerButton.addEventListener('click', () => {
        hamburgerButton.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('noscroll');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerButton.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('noscroll');
        });
    });

    // Slideshow Logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (slides.length === 0 || dots.length === 0) return;
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        if (slides.length === 0) return;
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startSlideShow() {
        stopSlideShow();
        slideInterval = setInterval(nextSlide, 5000);
    }



    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    if (slides.length > 0 && dots.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.getAttribute('data-slide'));
                showSlide(slideIndex);
                startSlideShow();
            });
        });
        startSlideShow();
    }

    // Language Translation
    const translations = {
        en: { nav_features: "Features", nav_shop: "Shop", nav_commands: "Commands", nav_support: "Support", hero_title: "The Ultimate Tic-Tac-Toe Experience.", hero_subtitle: "Challenge your friends or our smart AI. Simple, fun, and competitive.", hero_cta_add: "Add to Discord", hero_cta_vote: "Vote for Bot", features_title: "Powerful Features", feature_1_title: "Play with Friends or Bot", feature_1_desc: "Challenge a friend for a classic match or test your skills against our smart AI.", feature_2_title: "Leaderboards & Stats", feature_2_desc: "Track your wins, losses, and draws. Climb the leaderboard to become the champion.", feature_3_title: "Multi-Language Support", feature_3_desc: "Play in Thai, English, or Japanese. The bot adapts to your preferred language.", commands_title: "All Commands", cmd_play: "Starts a game with another player.", cmd_playbot: "Starts a game against the AI bot.", cmd_stop: "Stops the current game.", cmd_leaderboard: "Shows the server's top players.", cmd_stats: "View your or another player's stats.", cmd_setlanguage: "Changes the bot's language.", footer_terms: "Terms of Service", footer_privacy: "Privacy Policy", follow_us: "Follow our developer" },
        th: { nav_features: "ฟีเจอร์", nav_shop: "ร้านค้า", nav_commands: "คำสั่ง", nav_support: "สนับสนุน", hero_title: "สุดยอดประสบการณ์ Tic-Tac-Toe", hero_subtitle: "ท้าทายเพื่อนของคุณหรือ AI อัจฉริยะของเรา เรียบง่าย สนุก และแข่งขันได้", hero_cta_add: "เพิ่มเข้าสู่ Discord", hero_cta_vote: "โหวตให้บอท", features_title: "ฟีเจอร์เด่น", feature_1_title: "เล่นกับเพื่อนหรือบอท", feature_1_desc: "ท้าทายเพื่อนในเกมคลาสสิก หรือทดสอบฝีมือของคุณกับ AI อัจฉริยะ", feature_2_title: "กระดานผู้นำและสถิติ", feature_2_desc: "ติดตามการชนะ, แพ้, และเสมอ ไต่อันดับเพื่อเป็นแชมป์เปี้ยน", feature_3_title: "รองรับหลายภาษา", feature_3_desc: "เล่นได้ทั้งภาษาไทย, อังกฤษ, หรือญี่ปุ่น บอทจะปรับตามภาษาที่คุณต้องการ", commands_title: "คำสั่งทั้งหมด", cmd_play: "เริ่มเกมกับผู้เล่นอื่น", cmd_playbot: "เริ่มเกมกับบอท AI", cmd_stop: "หยุดเกมปัจจุบัน", cmd_leaderboard: "แสดงอันดับผู้เล่นสูงสุด", cmd_stats: "ดูสถิติของคุณหรือผู้เล่นอื่น", cmd_setlanguage: "เปลี่ยนภาษาของบอท", footer_terms: "ข้อกำหนดในการให้บริการ", footer_privacy: "นโยบายความเป็นส่วนตัว", follow_us: "ติดตามผู้พัฒนา" },
        ja: { nav_features: "特徴", nav_shop: "ショップ", nav_commands: "コマンド", nav_support: "サポート", hero_title: "究極の三目並べ体験", hero_subtitle: "友達や賢いAIに挑戦しよう。シンプルで楽しく、競争力があります。", hero_cta_add: "Discordに追加", hero_cta_vote: "ボットに投票", features_title: "強力な機能", feature_1_title: "友達やボットと対戦", feature_1_desc: "クラシックなマッチで友達に挑戦したり、賢いAIでスキルを試したりできます。", feature_2_title: "リーダーボードと統計", feature_2_desc: "勝ち、負け、引き分けを追跡します。リーダーボードを駆け上がってチャンピオンを目指しましょう。", feature_3_title: "多言語対応", feature_3_desc: "タイ語、英語、日本語でプレイできます。ボットはあなたの好みの言語に適応します。", commands_title: "すべてのコマンド", cmd_play: "他のプレイヤーとゲームを開始します。", cmd_playbot: "AIボットと対戦します。", cmd_stop: "現在のゲームを停止します。", cmd_leaderboard: "サーバーのトッププレイヤーを表示します。", cmd_stats: "自分または他のプレイヤーの統計を表示します。", cmd_setlanguage: "ボットの言語を変更します。", footer_terms: "利用規約", footer_privacy: "プライバシーポリシー", follow_us: "開発者をフォロー" }
    };
    const langSwitcher = document.getElementById('lang-switcher');
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang]?.[key]) { el.textContent = translations[lang][key]; }
        });
        localStorage.setItem('xo-arena-lang', lang);
        langSwitcher.value = lang;
    };
    langSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
    setLanguage(localStorage.getItem('xo-arena-lang') || 'en');

    // Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
