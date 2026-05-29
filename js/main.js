document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        vi: {
            htmlLang: 'vi',
            pageTitle: 'Vietnam Night 2026 - JCI ASPAC Niigata',
            pageDescription: 'Cơ hội vàng để giới thiệu sản phẩm và kết nối giao thương với hàng nghìn doanh nhân quốc tế tại Niigata, Nhật Bản.',
            ogImageAlt: 'Vietnam Night 2026 hero background',
            navWhy: 'Tại sao',
            navPrivileges: 'Quyền lợi',
            navPackages: 'Gói tài trợ',
            navShowcase: 'Showcase',
            navContact: 'Liên hệ',
            heroTitle: 'VIETNAM NIGHT 2026<br>ĐƯA THƯƠNG HIỆU VIỆT VƯƠN TẦM',
            heroSubtitle: 'Cơ hội vàng để giới thiệu sản phẩm và kết nối giao thương với hàng nghìn doanh nhân quốc tế tại Niigata, Nhật Bản.',
            heroLocation: '<i class="fas fa-map-marker-alt"></i> Niigata, Nhật Bản',
            heroCta: 'ĐĂNG KÝ TÀI TRỢ NGAY',
            whyTitle: 'Tại Sao Nên Đồng Hành?',
            whyCard1Title: 'Sân Chơi Quốc Tế',
            whyCard1Body: 'Hội nghị ASPAC JCI quy tụ hàng nghìn doanh nhân, nhà lãnh đạo trẻ và nhà đầu tư từ hơn 40 quốc gia và vùng lãnh thổ.',
            whyCard2Title: 'Quảng Bá Di Sản',
            whyCard2Body: 'Vietnam Night tôn vinh bản sắc Việt Nam thông qua âm nhạc, thời trang (Áo dài) và ẩm thực, gắn liền với thương hiệu của bạn.',
            whyCard3Title: 'Mạng Lưới Toàn Cầu',
            whyCard3Body: 'JCI là mạng lưới hơn 200.000 thành viên tại 120 quốc gia. Cơ hội quý giá để mở rộng hợp tác toàn cầu.',
            privilegesTitle: 'Quyền Lợi Đặc Quyền',
            privilegeCard1Title: '<i class="fas fa-gem"></i> Gói Tài Trợ Sự Kiện (Hiện kim)',
            privilegeCard1Item1: '<strong>Tầm nhìn toàn cầu:</strong> tham gia vào network lớn nhất thế giới về lãnh đạo trẻ, hiện diện trên các phương diện truyền thông tại Nhật Bản',
            privilegeCard1Item2: '<strong>Truyền thông đa phương tiện:</strong> Trình chiếu Video giới thiệu doanh nghiệp (1-3 phút) tại sân khấu chính.',
            privilegeCard1Item3: '<strong>Vị trí ưu tiên:</strong> Sở hữu gian hàng trưng bày sản phẩm tại khu vực trung tâm và được MC giới thiệu.',
            privilegeCard2Title: '<i class="fas fa-box-open"></i> Gói Thương Hiệu Đồng Hành',
            privilegeCard2Item1: '<strong>Trải nghiệm thực tế:</strong> Phát mẫu thử (sampling) hoặc bán sản phẩm trực tiếp cho khách quốc tế.',
            privilegeCard2Item2: '<strong>Số hóa thương hiệu:</strong> Sở hữu gian hàng trực tuyến trên nền tảng matchingvietnam.com.',
            privilegeCard2Item3: '<strong>Nội dung độc đáo:</strong> Nhận bộ video review sản phẩm thực hiện tại Nhật Bản.',
            supportTitle: 'HỖ TRỢ ĐẶC BIỆT TỪ BAN TỔ CHỨC',
            supportBody: 'Mức phí tài trợ đã bao gồm <strong>chi phí vận chuyển</strong> hàng hóa sang Nhật Bản. Đội ngũ JCI Vietnam sẽ <strong>hỗ trợ quảng bá trực tiếp</strong> tại gian hàng và phủ sóng truyền thông trên <strong>Fanpage chính thức</strong>.',
            packagesTitle: 'Các Gói Tài Trợ',
            basicFeature1: '<i class="fas fa-bullhorn"></i> <span><strong>Branding & Quảng bá:</strong> Logo Backdrop chung, 01 bài Fanpage ASPAC 2026, Logo Digital Brochure, 01 gian hàng trên MatchingVietnam.com.</span>',
            basicFeature2: '<i class="fas fa-store"></i> <span><strong>National Night:</strong> Phát mẫu thử (Sampling) hoặc bán trực tiếp, Logo hiển thị trên màn hình LED.</span>',
            basicFeature3: '<i class="fas fa-handshake"></i> <span><strong>Kết nối:</strong> Tiếp cận trực tiếp 2000-3000 đại biểu, nhận danh bạ nội bộ JCI Vietnam.</span>',
            basicCta: 'Chọn Gói Này',
            featuredBadge: 'PREMIUM EXPERIENCE',
            mediumFeature1: '<i class="fas fa-star" style="color: #ff9900;"></i> <span><strong>Bao gồm toàn bộ quyền lợi gói BASIC</strong> và bổ sung:</span>',
            mediumFeature2: '<i class="fas fa-video"></i> <span><strong>Truyền thông video:</strong> 10s trong video intro sự kiện, 01 video khách hàng nước ngoài trải nghiệm sản phẩm.</span>',
            mediumFeature3: '<i class="fas fa-map-marked-alt"></i> <span><strong>Marketing bản địa:</strong> 08 video review dọc thực hiện tại các thắng cảnh nổi tiếng của Nhật Bản.</span>',
            mediumFeature4: '<i class="fas fa-user-tie"></i> <span><strong>Hỗ trợ chuyên nghiệp:</strong> 01 MC/PG/PB trực tiếp giới thiệu sản phẩm tại gian hàng.</span>',
            mediumFeature5: '<i class="fas fa-award"></i> <span><strong>Vinh danh:</strong> Tổ chức vinh danh nhà tài trợ trang trọng tại sự kiện.</span>',
            mediumCta: 'Chọn Gói Này',
            contactTitle: 'Đồng Hành Cùng Chúng Tôi',
            contactBody: 'Kính mời Quý Doanh nghiệp cùng tạo nên một đêm Vietnam Night bùng nổ tại Nhật Bản, khẳng định vị thế thương hiệu Việt trên trường quốc tế.',
            contactOrg: '<i class="fas fa-building text-gold"></i> Đơn vị tổ chức: JCI Grace',
            contactSponsor: '<i class="fas fa-handshake text-gold"></i> Bảo trợ thông tin: JCI Vietnam',
            contactHotline: '<i class="fas fa-phone text-gold"></i> Hotline: 0909802998',
            contactEmail: '<i class="fas fa-envelope text-gold"></i> Email: ceo@matchingvietnam.com',
            formTitle: 'Đăng Ký Nhận Tư Vấn',
            placeholderName: 'Tên Doanh Nghiệp / Người liên hệ',
            placeholderPhone: 'Số điện thoại',
            placeholderEmail: 'Email',
            packageOptionNone: '-- Chọn gói quan tâm --',
            packageOptionMedium: 'Gói Medium (10.000.000 VNĐ)',
            packageOptionBasic: 'Gói Basic (6.000.000 VNĐ)',
            submitBtn: 'GỬI THÔNG TIN',
            submitting: 'ĐANG GỬI...',
            validationError: 'Vui lòng điền Tên và Số điện thoại',
            formSuccess: 'Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm.',
            toastSuccess: 'Thông tin đã được gửi thành công.',
            fallbackError: 'Có lỗi xảy ra, vui lòng thử lại sau.',
            submitError: 'Không gửi được thông tin. Vui lòng thử lại sau.',
            footerText: '&copy; 2026 JCI Vietnam. All rights reserved.',
            timestampLocale: 'vi-VN'
        },
        en: {
            htmlLang: 'en',
            pageTitle: 'Vietnam Night 2026 - Sponsor with JCI ASPAC Niigata',
            pageDescription: 'A prime opportunity to showcase your brand and connect with international business leaders in Niigata, Japan.',
            ogImageAlt: 'Vietnam Night 2026 hero image',
            navWhy: 'Why Us',
            navPrivileges: 'Benefits',
            navPackages: 'Packages',
            navShowcase: 'Showcase',
            navContact: 'Contact',
            heroTitle: 'VIETNAM NIGHT 2026<br>TAKE VIETNAMESE BRANDS FURTHER',
            heroSubtitle: 'A prime opportunity to showcase your products and build cross-border business connections with international delegates in Niigata, Japan.',
            heroLocation: '<i class="fas fa-map-marker-alt"></i> Niigata, Japan',
            heroCta: 'BECOME A SPONSOR',
            whyTitle: 'Why Partner With Us?',
            whyCard1Title: 'International Stage',
            whyCard1Body: 'JCI ASPAC gathers thousands of entrepreneurs, young leaders, and investors from more than 40 countries and territories.',
            whyCard2Title: 'Culture Meets Branding',
            whyCard2Body: 'Vietnam Night celebrates Vietnamese identity through music, fashion, and cuisine, creating a memorable brand experience for your company.',
            whyCard3Title: 'Global Network',
            whyCard3Body: 'JCI connects more than 200,000 members in 120 countries, giving your business a strong platform for international partnerships.',
            privilegesTitle: 'Sponsor Advantages',
            privilegeCard1Title: '<i class="fas fa-gem"></i> Event Sponsorship Package (Cash)',
            privilegeCard1Item1: '<strong>Global visibility:</strong> Join the world’s largest young leadership network and gain communication exposure in Japan.',
            privilegeCard1Item2: '<strong>Multimedia promotion:</strong> Present a 1-3 minute company video on the main event stage.',
            privilegeCard1Item3: '<strong>Priority placement:</strong> Secure a premium booth in the central area and receive on-stage MC mentions.',
            privilegeCard2Title: '<i class="fas fa-box-open"></i> Brand Partnership Package',
            privilegeCard2Item1: '<strong>Hands-on sampling:</strong> Offer trial products or direct sales to international guests.',
            privilegeCard2Item2: '<strong>Digital brand presence:</strong> Own an online showcase booth on matchingvietnam.com.',
            privilegeCard2Item3: '<strong>Original content:</strong> Receive a set of product review videos produced in Japan.',
            supportTitle: 'SPECIAL SUPPORT FROM THE ORGANIZING TEAM',
            supportBody: 'The sponsorship fee already includes <strong>shipping support</strong> for product displays to Japan. The JCI Vietnam team will provide <strong>on-site promotion support</strong> at your booth and amplify your brand across the <strong>official fanpage</strong>.',
            packagesTitle: 'Sponsorship Packages',
            basicFeature1: '<i class="fas fa-bullhorn"></i> <span><strong>Branding & promotion:</strong> Shared backdrop logo, 1 ASPAC 2026 fanpage post, logo placement in the digital brochure, and 1 booth on MatchingVietnam.com.</span>',
            basicFeature2: '<i class="fas fa-store"></i> <span><strong>National Night:</strong> Sampling or direct sales at the venue, plus logo visibility on the LED screen.</span>',
            basicFeature3: '<i class="fas fa-handshake"></i> <span><strong>Networking:</strong> Reach 2,000-3,000 delegates directly and access the internal JCI Vietnam contact list.</span>',
            basicCta: 'Choose This Package',
            featuredBadge: 'PREMIUM EXPERIENCE',
            mediumFeature1: '<i class="fas fa-star" style="color: #ff9900;"></i> <span><strong>Everything in BASIC</strong> plus the following upgrades:</span>',
            mediumFeature2: '<i class="fas fa-video"></i> <span><strong>Video communication:</strong> 10 seconds in the event intro video and 1 testimonial video with international customers trying your product.</span>',
            mediumFeature3: '<i class="fas fa-map-marked-alt"></i> <span><strong>Local market content:</strong> 8 vertical review videos filmed at iconic destinations across Japan.</span>',
            mediumFeature4: '<i class="fas fa-user-tie"></i> <span><strong>Professional support:</strong> 1 MC/PG/PB to present and introduce your products at the booth.</span>',
            mediumFeature5: '<i class="fas fa-award"></i> <span><strong>Recognition:</strong> Formal sponsor appreciation during the event program.</span>',
            mediumCta: 'Choose This Package',
            contactTitle: 'Partner With Us',
            contactBody: 'We invite your company to help create an unforgettable Vietnam Night in Japan and elevate Vietnamese brands on the international stage.',
            contactOrg: '<i class="fas fa-building text-gold"></i> Organizer: JCI Grace',
            contactSponsor: '<i class="fas fa-handshake text-gold"></i> Information Sponsor: JCI Vietnam',
            contactHotline: '<i class="fas fa-phone text-gold"></i> Hotline: 0909802998',
            contactEmail: '<i class="fas fa-envelope text-gold"></i> Email: ceo@matchingvietnam.com',
            formTitle: 'Request Sponsorship Consultation',
            placeholderName: 'Company name / Contact person',
            placeholderPhone: 'Phone number',
            placeholderEmail: 'Email',
            packageOptionNone: '-- Select a package of interest --',
            packageOptionMedium: 'Medium Package (10,000,000 VND)',
            packageOptionBasic: 'Basic Package (6,000,000 VND)',
            submitBtn: 'SUBMIT INFORMATION',
            submitting: 'SENDING...',
            validationError: 'Please fill in your name and phone number.',
            formSuccess: 'Your information has been sent successfully. We will contact you soon.',
            toastSuccess: 'Submission sent successfully.',
            fallbackError: 'Something went wrong. Please try again later.',
            submitError: 'Unable to send your information. Please try again later.',
            footerText: '&copy; 2026 JCI Vietnam. All rights reserved.',
            timestampLocale: 'en-US'
        }
    };

    const textBindings = {
        navWhy: 'text',
        navPrivileges: 'text',
        navPackages: 'text',
        navShowcase: 'text',
        navContact: 'text',
        heroTitle: 'html',
        heroSubtitle: 'text',
        heroLocation: 'html',
        heroCta: 'text',
        whyTitle: 'text',
        whyCard1Title: 'text',
        whyCard1Body: 'text',
        whyCard2Title: 'text',
        whyCard2Body: 'text',
        whyCard3Title: 'text',
        whyCard3Body: 'text',
        privilegesTitle: 'text',
        privilegeCard1Title: 'html',
        privilegeCard1Item1: 'html',
        privilegeCard1Item2: 'html',
        privilegeCard1Item3: 'html',
        privilegeCard2Title: 'html',
        privilegeCard2Item1: 'html',
        privilegeCard2Item2: 'html',
        privilegeCard2Item3: 'html',
        supportTitle: 'text',
        supportBody: 'html',
        packagesTitle: 'text',
        basicFeature1: 'html',
        basicFeature2: 'html',
        basicFeature3: 'html',
        basicCta: 'text',
        featuredBadge: 'text',
        mediumFeature1: 'html',
        mediumFeature2: 'html',
        mediumFeature3: 'html',
        mediumFeature4: 'html',
        mediumFeature5: 'html',
        mediumCta: 'text',
        contactTitle: 'text',
        contactBody: 'text',
        contactOrg: 'html',
        contactSponsor: 'html',
        contactHotline: 'html',
        contactEmail: 'html',
        formTitle: 'text',
        packageOptionNone: 'text',
        packageOptionMedium: 'text',
        packageOptionBasic: 'text',
        submitBtn: 'text',
        footerText: 'html'
    };

    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('nav-links');
    const leadForm = document.getElementById('leadForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    const toastNotification = document.getElementById('toastNotification');
    const langButtons = document.querySelectorAll('.lang-btn');
    const metaDescription = document.getElementById('metaDescription');
    const ogTitle = document.getElementById('ogTitle');
    const ogDescription = document.getElementById('ogDescription');
    const ogImageAlt = document.getElementById('ogImageAlt');
    const twitterTitle = document.getElementById('twitterTitle');
    const twitterDescription = document.getElementById('twitterDescription');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const packageSelect = document.getElementById('package');

    const LEAD_API_ENDPOINT = '/api/lead.php';
    const LANGUAGE_STORAGE_KEY = 'aspac2026-language';
    let toastTimeoutId;
    let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'vi';

    if (!translations[currentLanguage]) {
        currentLanguage = 'vi';
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    langButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const nextLanguage = button.dataset.lang;
            if (!nextLanguage || nextLanguage === currentLanguage) {
                return;
            }

            currentLanguage = nextLanguage;
            localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
            applyLanguage(currentLanguage);
        });
    });

    leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const strings = translations[currentLanguage];
        const originalBtnText = strings.submitBtn;
        submitBtn.innerText = strings.submitting;
        submitBtn.disabled = true;
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';

        const formData = {
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            package: packageSelect.options[packageSelect.selectedIndex].text,
            timestamp: new Date().toLocaleString(strings.timestampLocale)
        };

        try {
            if (!formData.name || !formData.phone) {
                throw new Error(strings.validationError);
            }

            await submitLead(formData);

            showMessage(strings.formSuccess, 'success');
            showToast(strings.toastSuccess, 'success');
            leadForm.reset();
        } catch (error) {
            console.error('Lỗi submit form:', error);
            const errorMessage = error.message || strings.fallbackError;
            showMessage(errorMessage, 'error');
            showToast(errorMessage, 'error');
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    applyLanguage(currentLanguage);

    function applyLanguage(language) {
        const strings = translations[language];

        document.documentElement.lang = strings.htmlLang;
        document.title = strings.pageTitle;
        metaDescription.setAttribute('content', strings.pageDescription);
        ogTitle.setAttribute('content', strings.pageTitle);
        ogDescription.setAttribute('content', strings.pageDescription);
        ogImageAlt.setAttribute('content', strings.ogImageAlt);
        twitterTitle.setAttribute('content', strings.pageTitle);
        twitterDescription.setAttribute('content', strings.pageDescription);

        Object.entries(textBindings).forEach(([id, mode]) => {
            const element = document.getElementById(id);
            if (!element || strings[id] === undefined) {
                return;
            }

            if (mode === 'html') {
                element.innerHTML = strings[id];
            } else {
                element.textContent = strings[id];
            }
        });

        nameInput.placeholder = strings.placeholderName;
        phoneInput.placeholder = strings.placeholderPhone;
        emailInput.placeholder = strings.placeholderEmail;

        langButtons.forEach((button) => {
            button.classList.toggle('is-active', button.dataset.lang === language);
        });
    }

    function showMessage(msg, type) {
        formMessage.innerText = msg;
        formMessage.className = `form-message ${type}`;
    }

    function showToast(msg, type) {
        if (!toastNotification) {
            return;
        }

        window.clearTimeout(toastTimeoutId);
        toastNotification.innerText = msg;
        toastNotification.className = `toast-notification ${type} show`;

        toastTimeoutId = window.setTimeout(() => {
            toastNotification.className = 'toast-notification';
        }, 4200);
    }

    async function submitLead(data) {
        const response = await fetch(LEAD_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json().catch(() => null);
        if (!response.ok || !result?.ok) {
            throw new Error(result?.message || translations[currentLanguage].submitError);
        }

        return result;
    }
});
