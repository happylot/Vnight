document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        vi: {
            htmlLang: 'vi',
            pageTitle: 'Vietnam Night 2026 - JCI ASPAC Niigata',
            pageDescription: 'Không gian truyền thông để giới thiệu văn hóa Việt Nam và sản phẩm Made in Vietnam tại Niigata, Nhật Bản.',
            ogImageAlt: 'Vietnam Night 2026 hero background',
            navWhy: 'Tại sao',
            navPrivileges: 'Quyền lợi',
            navPackages: 'Gói tài trợ',
            navShowcase: 'Showcase',
            navContact: 'Liên hệ',
            heroKicker: 'Thư ngỏ kêu gọi đồng hành cùng',
            heroTitle: 'VIETNAM NIGHT 2026<br>ĐƯA THƯƠNG HIỆU VIỆT VƯƠN TẦM',
            heroRibbon: 'ASPAC JCI 2026 • NIIGATA, JAPAN',
            heroSubtitle: 'Không gian truyền thông nổi bật để giới thiệu văn hóa Việt Nam, sản phẩm Made in Vietnam và câu chuyện thương hiệu tới cộng đồng doanh nhân quốc tế tại Niigata, Nhật Bản.',
            heroLocation: '<i class="fas fa-map-marker-alt"></i> Niigata, Nhật Bản',
            heroHighlight: 'Mỗi chapter một đặc sản, cùng nhau mang tinh hoa Việt Nam đến Nhật Bản.',
            heroCta: 'ĐĂNG KÝ TÀI TRỢ NGAY',
            heroSecondaryCta: 'XEM GÓI TÀI TRỢ',
            heroPosterNote: 'Key visual chủ đạo cho chiến dịch Vietnam Night 2026.',
            whyTitle: 'Tại Sao Nên Đồng Hành?',
            whyCard1Title: 'Sân Khấu Văn Hóa Quốc Tế',
            whyCard1Body: 'Vietnam Night là dịp để văn hóa Việt, câu chuyện vùng miền và sản phẩm Made in Vietnam xuất hiện trong một bối cảnh quốc tế giàu cảm xúc.',
            whyCard2Title: 'Tôn Vinh Bản Sắc Việt',
            whyCard2Body: 'Âm nhạc, áo dài, đặc sản và sản phẩm địa phương sẽ được kể lại bằng ngôn ngữ hình ảnh gần gũi, giúp thương hiệu gắn với tinh thần Việt Nam đương đại.',
            whyCard3Title: 'Hiện Diện Đúng Khán Giả',
            whyCard3Body: 'Chương trình tập trung tạo hiện diện thương hiệu chỉn chu, gần gũi và giàu thiện cảm với cộng đồng doanh nhân quốc tế tham dự ASPAC.',
            privilegesTitle: 'Quyền Lợi Đặc Quyền',
            privilegeCard1Title: '<i class="fas fa-gem"></i> Gói Tài Trợ Truyền Thông Sự Kiện',
            privilegeCard1Item1: '<strong>Hiện diện thương hiệu:</strong> thương hiệu xuất hiện trong không gian Vietnam Night gắn với tinh thần văn hóa và sản phẩm Việt.',
            privilegeCard1Item2: '<strong>Nội dung giới thiệu:</strong> có thể trình chiếu video, hình ảnh hoặc câu chuyện thương hiệu trong phần truyền thông của sự kiện.',
            privilegeCard1Item3: '<strong>Khu vực trưng bày:</strong> ưu tiên sắp xếp vị trí giới thiệu sản phẩm và nhận giới thiệu tổng quan từ chương trình.',
            privilegeCard2Title: '<i class="fas fa-box-open"></i> Gói Đồng Hành Sản Phẩm Việt',
            privilegeCard2Item1: '<strong>Trải nghiệm sản phẩm:</strong> trưng bày, giới thiệu, sampling hoặc bán trực tiếp các sản phẩm Made in Vietnam cho khách tham dự.',
            privilegeCard2Item2: '<strong>Kể chuyện xuất xứ:</strong> nhấn mạnh nguồn gốc địa phương, chất liệu văn hóa và giá trị thương hiệu đằng sau từng sản phẩm.',
            privilegeCard2Item3: '<strong>Tư liệu truyền thông:</strong> ghi nhận hình ảnh, nội dung trải nghiệm thực tế của sản phẩm trong bối cảnh tại Nhật Bản.',
            supportTitle: 'HỖ TRỢ ĐẶC BIỆT TỪ BAN TỔ CHỨC',
            supportBody: 'Chương trình ưu tiên <strong>quảng bá văn hóa Việt Nam và sản phẩm Made in Vietnam</strong> thông qua không gian trưng bày, truyền thông tại chỗ và hiện diện hình ảnh xuyên suốt Vietnam Night. Đội ngũ JCI Vietnam sẽ hỗ trợ điều phối và giới thiệu sản phẩm tại gian hàng.',
            shippingNoteTitle: 'Quy định vận chuyển sản phẩm',
            shippingNoteBody: 'Mỗi đơn vị đăng ký được hỗ trợ tối đa <strong>3kg sản phẩm</strong>. Phần phát sinh vượt mức sẽ tính thêm <strong>500.000 VNĐ/kg</strong> cho chi phí vận chuyển trọn gói.',
            packagesTitle: 'Các Gói Tài Trợ',
            startFeature1: '<i class="fas fa-file-lines"></i> <span><strong>Trưng bày leaflet:</strong> đặt leaflet thương hiệu tại khu vực giới thiệu sản phẩm của chương trình.</span>',
            startFeature2: '<i class="fas fa-id-card"></i> <span><strong>Thu thập khách quan tâm:</strong> ban tổ chức hỗ trợ collect <strong>10 namecard</strong> của khách quan tâm đến mặt hàng của doanh nghiệp.</span>',
            startCta: 'Chọn Gói Này',
            basicFeature1: '<i class="fas fa-bullhorn"></i> <span><strong>Nhận diện thương hiệu:</strong> Logo backdrop chung, 01 bài fanpage ASPAC 2026, logo trong digital brochure.</span>',
            basicFeature2: '<i class="fas fa-store"></i> <span><strong>Trưng bày sản phẩm:</strong> Sampling hoặc bán trực tiếp trong khu vực Vietnam Night, logo hiển thị trên màn hình LED.</span>',
            basicFeature3: '<i class="fas fa-seedling"></i> <span><strong>Câu chuyện Made in Vietnam:</strong> Nhấn mạnh nguồn gốc, đặc sản và tinh thần văn hóa của sản phẩm được mang đi giới thiệu.</span>',
            basicCta: 'Chọn Gói Này',
            featuredBadge: 'PREMIUM EXPERIENCE',
            mediumFeature1: '<i class="fas fa-star" style="color: #ff9900;"></i> <span><strong>Bao gồm toàn bộ quyền lợi gói BASIC</strong> và tăng cường chiều sâu truyền thông:</span>',
            mediumFeature2: '<i class="fas fa-video"></i> <span><strong>Video giới thiệu:</strong> 10 giây trong video intro sự kiện, 01 video trải nghiệm sản phẩm bởi khách quốc tế.</span>',
            mediumFeature3: '<i class="fas fa-map-marked-alt"></i> <span><strong>Hình ảnh tại Nhật Bản:</strong> 08 video review dọc ghi hình tại các bối cảnh nổi bật để tôn giá trị sản phẩm Việt.</span>',
            mediumFeature4: '<i class="fas fa-user-tie"></i> <span><strong>Hỗ trợ tại chỗ:</strong> 01 MC/PG/PB hỗ trợ giới thiệu sản phẩm và câu chuyện thương hiệu tại gian hàng.</span>',
            mediumFeature5: '<i class="fas fa-award"></i> <span><strong>Vinh danh tại sự kiện:</strong> nhấn mạnh vai trò đồng hành cùng hoạt động quảng bá Việt Nam tại ASPAC.</span>',
            mediumCta: 'Chọn Gói Này',
            contactTitle: 'Đồng Hành Cùng Chúng Tôi',
            contactBody: 'Kính mời Quý Doanh nghiệp cùng tạo nên một đêm Vietnam Night giàu bản sắc tại Nhật Bản, nơi văn hóa Việt Nam và sản phẩm Made in Vietnam được giới thiệu chỉn chu tới bạn bè quốc tế.',
            contactOrg: '<i class="fas fa-building text-gold"></i> Đơn vị tổ chức: JCI Grace',
            contactSponsor: '<i class="fas fa-handshake text-gold"></i> Bảo trợ thông tin: JCI Vietnam',
            contactMsYen: '<i class="fas fa-phone-volume text-gold"></i> Ms Hải Yến: 096 152 1688',
            contactEmail: '<i class="fas fa-envelope text-gold"></i> Email: ceo@matchingvietnam.com',
            transferTitle: 'Hướng Dẫn Chuyển Khoản',
            transferBody: 'Quý đối tác có thể chuyển khoản theo thông tin dưới đây và gửi xác nhận để ban tổ chức hỗ trợ đối soát nhanh.',
            transferBank: '<strong>Ngân hàng:</strong> Vietcombank',
            transferAccountName: '<strong>Chủ tài khoản:</strong> CLB DOANH NHAN TRE THE GIOI TAI VIET NAM',
            transferAccountNumber: '<strong>Số tài khoản:</strong> 1050120408',
            transferBranch: '<strong>Chi nhánh:</strong> VCB THU DUC-PGD LINH TRUNG',
            transferMemo: '<strong>Nội dung CK:</strong> JCI Grace VNN JP',
            formTitle: 'Đăng Ký Nhận Tư Vấn',
            placeholderCompany: 'Tên công ty',
            placeholderName: 'Người liên hệ',
            placeholderPhone: 'Số điện thoại',
            placeholderEmail: 'Email',
            placeholderIndustry: 'Ngành nghề',
            placeholderProduct: 'Sản phẩm / dịch vụ chính',
            placeholderPlannedProducts: 'Sản phẩm dự kiến mang đi là gì',
            packageOptionNone: '-- Chọn gói quan tâm --',
            packageOptionStart: 'Gói Start (3.000.000 VNĐ)',
            packageOptionBasic: 'Gói Basic (6.000.000 VNĐ)',
            packageOptionMedium: 'Gói Premium (10.000.000 VNĐ)',
            connectionGoalsLabel: 'Mong muốn kết nối',
            connectionGoalSales: 'Bán hàng',
            connectionGoalInvestor: 'Nhà đầu tư',
            connectionGoalSupplier: 'Tìm nhà cung cấp',
            submitBtn: 'GỬI THÔNG TIN',
            submitting: 'ĐANG GỬI...',
            validationError: 'Vui lòng điền Tên công ty, Người liên hệ và Số điện thoại.',
            formSuccess: 'Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm.',
            toastSuccess: 'Thông tin đã được gửi thành công.',
            fallbackError: 'Có lỗi xảy ra, vui lòng thử lại sau.',
            submitError: 'Không gửi được thông tin. Vui lòng thử lại sau.',
            modalTitleSuccess: 'Đăng ký thành công',
            modalTitleError: 'Chưa gửi được thông tin',
            modalAction: 'Đóng',
            footerText: '&copy; 2026 JCI Vietnam. All rights reserved.',
            timestampLocale: 'vi-VN'
        },
        en: {
            htmlLang: 'en',
            pageTitle: 'Vietnam Night 2026 - JCI ASPAC Niigata',
            pageDescription: 'A cultural showcase for Vietnamese identity and Made in Vietnam products in Niigata, Japan.',
            ogImageAlt: 'Vietnam Night 2026 hero image',
            navWhy: 'Why Us',
            navPrivileges: 'Benefits',
            navPackages: 'Packages',
            navShowcase: 'Showcase',
            navContact: 'Contact',
            heroKicker: 'An invitation to partner with',
            heroTitle: 'VIETNAM NIGHT 2026<br>TAKE VIETNAMESE BRANDS FURTHER',
            heroRibbon: 'ASPAC JCI 2026 • NIIGATA, JAPAN',
            heroSubtitle: 'A curated communication platform to present Vietnamese culture, Made in Vietnam products, and authentic brand stories to the international ASPAC audience in Niigata, Japan.',
            heroLocation: '<i class="fas fa-map-marker-alt"></i> Niigata, Japan',
            heroHighlight: 'Each chapter brings a specialty. Together we bring the best of Vietnam to Japan.',
            heroCta: 'REGISTER TO SPONSOR',
            heroSecondaryCta: 'VIEW PACKAGES',
            heroPosterNote: 'Campaign key visual for Vietnam Night 2026.',
            whyTitle: 'Why Join Vietnam Night?',
            whyCard1Title: 'An International Cultural Stage',
            whyCard1Body: 'Vietnam Night creates a meaningful setting where Vietnamese culture, regional stories, and Made in Vietnam products can be presented with emotion and identity.',
            whyCard2Title: 'Celebrate Vietnamese Identity',
            whyCard2Body: 'Music, ao dai, local specialties, and product stories help brands connect with a contemporary and memorable image of Vietnam.',
            whyCard3Title: 'Audience Fit Over Hype',
            whyCard3Body: 'The program focuses on building thoughtful brand presence and goodwill with international delegates attending ASPAC.',
            privilegesTitle: 'Sponsor Advantages',
            privilegeCard1Title: '<i class="fas fa-gem"></i> Event Communication Sponsorship',
            privilegeCard1Item1: '<strong>Brand presence:</strong> your brand appears inside Vietnam Night with strong links to Vietnamese culture and products.',
            privilegeCard1Item2: '<strong>Storytelling content:</strong> videos, visuals, or brand narratives can be included in the event communication flow.',
            privilegeCard1Item3: '<strong>Display priority:</strong> priority placement for product showcase and general introduction by the program.',
            privilegeCard2Title: '<i class="fas fa-box-open"></i> Vietnamese Product Partnership',
            privilegeCard2Item1: '<strong>Product experience:</strong> display, sampling, or direct selling of Made in Vietnam products for international attendees.',
            privilegeCard2Item2: '<strong>Origin storytelling:</strong> highlight local roots, cultural value, and the story behind each product.',
            privilegeCard2Item3: '<strong>Communication assets:</strong> capture product experience content in the context of Japan.',
            supportTitle: 'SPECIAL SUPPORT FROM THE ORGANIZING TEAM',
            supportBody: 'The program prioritizes <strong>Vietnamese culture and Made in Vietnam products</strong> through display spaces, live communication support, and a strong visual presence throughout Vietnam Night. The JCI Vietnam team will help coordinate and introduce products on-site.',
            shippingNoteTitle: 'Product shipping policy',
            shippingNoteBody: 'Each registered participant is supported for up to <strong>3kg of products</strong>. Any excess weight will be charged at <strong>500,000 VND/kg</strong> for full-service shipping.',
            packagesTitle: 'Sponsorship Packages',
            startFeature1: '<i class="fas fa-file-lines"></i> <span><strong>Leaflet display:</strong> place your brand leaflet at the product showcase area during the program.</span>',
            startFeature2: '<i class="fas fa-id-card"></i> <span><strong>Interested leads:</strong> the organizing team will help collect <strong>10 name cards</strong> from guests interested in your product category.</span>',
            startCta: 'Choose This Package',
            basicFeature1: '<i class="fas fa-bullhorn"></i> <span><strong>Brand visibility:</strong> shared backdrop logo, 1 ASPAC 2026 fanpage post, and logo placement in the digital brochure.</span>',
            basicFeature2: '<i class="fas fa-store"></i> <span><strong>Product showcase:</strong> sampling or direct sales within the Vietnam Night area, plus logo visibility on the LED screen.</span>',
            basicFeature3: '<i class="fas fa-seedling"></i> <span><strong>Made in Vietnam storytelling:</strong> communicate the origin, specialty value, and cultural spirit behind the products you bring.</span>',
            basicCta: 'Choose This Package',
            featuredBadge: 'PREMIUM EXPERIENCE',
            mediumFeature1: '<i class="fas fa-star" style="color: #ff9900;"></i> <span><strong>Everything in BASIC</strong> with deeper communication support:</span>',
            mediumFeature2: '<i class="fas fa-video"></i> <span><strong>Video content:</strong> 10 seconds in the event intro video and 1 product-experience video with international guests.</span>',
            mediumFeature3: '<i class="fas fa-map-marked-alt"></i> <span><strong>Japan-based imagery:</strong> 8 vertical review videos filmed in strong local backdrops to elevate Vietnamese product value.</span>',
            mediumFeature4: '<i class="fas fa-user-tie"></i> <span><strong>On-site support:</strong> 1 MC/PG/PB to help present the product and brand story at your booth.</span>',
            mediumFeature5: '<i class="fas fa-award"></i> <span><strong>Recognition at the event:</strong> your partnership is positioned as support for promoting Vietnam at ASPAC.</span>',
            mediumCta: 'Choose This Package',
            contactTitle: 'Partner With Us',
            contactBody: 'We welcome your company to help shape a culturally rich Vietnam Night in Japan, where Vietnamese culture and Made in Vietnam products are introduced with care to international friends.',
            contactOrg: '<i class="fas fa-building text-gold"></i> Organizer: JCI Grace',
            contactSponsor: '<i class="fas fa-handshake text-gold"></i> Information Sponsor: JCI Vietnam',
            contactMsYen: '<i class="fas fa-phone-volume text-gold"></i> Ms Hai Yen: 096 152 1688',
            contactEmail: '<i class="fas fa-envelope text-gold"></i> Email: ceo@matchingvietnam.com',
            transferTitle: 'Bank Transfer Guide',
            transferBody: 'You can complete the bank transfer using the details below and send confirmation so the organizing team can reconcile your payment quickly.',
            transferBank: '<strong>Bank:</strong> Vietcombank',
            transferAccountName: '<strong>Account name:</strong> CLB DOANH NHAN TRE THE GIOI TAI VIET NAM',
            transferAccountNumber: '<strong>Account number:</strong> 1050120408',
            transferBranch: '<strong>Branch:</strong> VCB THU DUC-PGD LINH TRUNG',
            transferMemo: '<strong>Transfer note:</strong> JCI Grace VNN JP',
            formTitle: 'Request Sponsorship Consultation',
            placeholderCompany: 'Company name',
            placeholderName: 'Contact person',
            placeholderPhone: 'Phone number',
            placeholderEmail: 'Email',
            placeholderIndustry: 'Industry',
            placeholderProduct: 'Main product / service',
            placeholderPlannedProducts: 'What products are you planning to bring?',
            packageOptionNone: '-- Select a package of interest --',
            packageOptionStart: 'Start Package (3,000,000 VND)',
            packageOptionBasic: 'Basic Package (6,000,000 VND)',
            packageOptionMedium: 'Premium Package (10,000,000 VND)',
            connectionGoalsLabel: 'Connection goals',
            connectionGoalSales: 'Sales',
            connectionGoalInvestor: 'Investors',
            connectionGoalSupplier: 'Find suppliers',
            submitBtn: 'SUBMIT INFORMATION',
            submitting: 'SENDING...',
            validationError: 'Please fill in company name, contact person, and phone number.',
            formSuccess: 'Your information has been sent successfully. We will contact you soon.',
            toastSuccess: 'Submission sent successfully.',
            fallbackError: 'Something went wrong. Please try again later.',
            submitError: 'Unable to send your information. Please try again later.',
            modalTitleSuccess: 'Submission successful',
            modalTitleError: 'Submission failed',
            modalAction: 'Close',
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
        heroKicker: 'text',
        heroTitle: 'html',
        heroRibbon: 'text',
        heroSubtitle: 'text',
        heroLocation: 'html',
        heroHighlight: 'text',
        heroCta: 'text',
        heroSecondaryCta: 'text',
        heroPosterNote: 'text',
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
        shippingNoteTitle: 'text',
        shippingNoteBody: 'html',
        packagesTitle: 'text',
        startFeature1: 'html',
        startFeature2: 'html',
        startCta: 'text',
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
        contactMsYen: 'html',
        contactEmail: 'html',
        transferTitle: 'text',
        transferBody: 'text',
        transferBank: 'html',
        transferAccountName: 'html',
        transferAccountNumber: 'html',
        transferBranch: 'html',
        transferMemo: 'html',
        formTitle: 'text',
        packageOptionNone: 'text',
        packageOptionStart: 'text',
        packageOptionMedium: 'text',
        packageOptionBasic: 'text',
        connectionGoalsLabel: 'text',
        connectionGoalSales: 'text',
        connectionGoalInvestor: 'text',
        connectionGoalSupplier: 'text',
        submitBtn: 'text',
        resultModalTitle: 'text',
        resultModalAction: 'text',
        footerText: 'html'
    };

    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('nav-links');
    const leadForm = document.getElementById('leadForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    const toastNotification = document.getElementById('toastNotification');
    const resultModal = document.getElementById('resultModal');
    const resultModalBackdrop = document.getElementById('resultModalBackdrop');
    const resultModalCard = resultModal.querySelector('.result-modal-card');
    const resultModalClose = document.getElementById('resultModalClose');
    const resultModalTitle = document.getElementById('resultModalTitle');
    const resultModalMessage = document.getElementById('resultModalMessage');
    const resultModalAction = document.getElementById('resultModalAction');
    const resultModalIcon = document.getElementById('resultModalIcon');
    const langButtons = document.querySelectorAll('.lang-btn');
    const metaDescription = document.getElementById('metaDescription');
    const ogTitle = document.getElementById('ogTitle');
    const ogDescription = document.getElementById('ogDescription');
    const ogImageAlt = document.getElementById('ogImageAlt');
    const twitterTitle = document.getElementById('twitterTitle');
    const twitterDescription = document.getElementById('twitterDescription');
    const companyInput = document.getElementById('company');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const industryInput = document.getElementById('industry');
    const productInput = document.getElementById('product');
    const packageSelect = document.getElementById('package');
    const plannedProductsInput = document.getElementById('plannedProducts');
    const connectionGoalInputs = document.querySelectorAll('input[name="connectionGoals"]');

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

    [resultModalBackdrop, resultModalClose, resultModalAction].forEach((element) => {
        element.addEventListener('click', closeResultModal);
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
            company: companyInput.value.trim(),
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),
            industry: industryInput.value.trim(),
            product: productInput.value.trim(),
            package: packageSelect.options[packageSelect.selectedIndex].text,
            connectionGoals: Array.from(connectionGoalInputs)
                .filter((input) => input.checked)
                .map((input) => input.value),
            plannedProducts: plannedProductsInput.value.trim(),
            timestamp: new Date().toLocaleString(strings.timestampLocale)
        };

        try {
            if (!formData.company || !formData.name || !formData.phone) {
                throw new Error(strings.validationError);
            }

            await submitLead(formData);

            showMessage(strings.formSuccess, 'success');
            showToast(strings.toastSuccess, 'success');
            showResultModal(strings.modalTitleSuccess, strings.formSuccess, 'success');
            leadForm.reset();
        } catch (error) {
            console.error('Lỗi submit form:', error);
            const errorMessage = error.message || strings.fallbackError;
            showMessage(errorMessage, 'error');
            showToast(errorMessage, 'error');
            showResultModal(strings.modalTitleError, errorMessage, 'error');
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

        companyInput.placeholder = strings.placeholderCompany;
        nameInput.placeholder = strings.placeholderName;
        phoneInput.placeholder = strings.placeholderPhone;
        emailInput.placeholder = strings.placeholderEmail;
        industryInput.placeholder = strings.placeholderIndustry;
        productInput.placeholder = strings.placeholderProduct;
        plannedProductsInput.placeholder = strings.placeholderPlannedProducts;
        connectionGoalInputs[0].value = strings.connectionGoalSales;
        connectionGoalInputs[1].value = strings.connectionGoalInvestor;
        connectionGoalInputs[2].value = strings.connectionGoalSupplier;

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

    function showResultModal(title, message, type) {
        resultModalTitle.textContent = title;
        resultModalMessage.textContent = message;
        resultModalAction.textContent = translations[currentLanguage].modalAction;
        resultModalCard.classList.toggle('is-error', type === 'error');
        resultModalIcon.innerHTML = type === 'error'
            ? '<i class="fas fa-circle-exclamation"></i>'
            : '<i class="fas fa-check"></i>';
        resultModal.classList.add('is-open');
        resultModal.setAttribute('aria-hidden', 'false');
    }

    function closeResultModal() {
        resultModal.classList.remove('is-open');
        resultModal.setAttribute('aria-hidden', 'true');
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
