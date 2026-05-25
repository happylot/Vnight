document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky Header ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for header
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Lead Form Submission Logic ---
    const leadForm = document.getElementById('leadForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');

    // MOCK CREDENTIALS - PLEASE REPLACE THESE WITH ACTUAL VALUES
    const GOOGLE_SHEETS_WEBHOOK_URL = ''; // e.g., 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
    const TELEGRAM_BOT_TOKEN = ''; // e.g., '123456789:ABCDefghIJKlmnOPQRstuvwxyz'
    const TELEGRAM_CHAT_ID = ''; // e.g., '-1001234567890' hay '12345678'

    leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Cập nhật trạng thái UI
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'ĐANG GỬI...';
        submitBtn.disabled = true;
        formMessage.style.display = 'none';
        formMessage.className = 'form-message'; // reset

        // Lấy dữ liệu
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            package: document.getElementById('package').options[document.getElementById('package').selectedIndex].text,
            timestamp: new Date().toLocaleString('vi-VN')
        };

        try {
            // Validate sơ bộ
            if(!formData.name || !formData.phone) {
                throw new Error("Vui lòng điền Tên và Số điện thoại");
            }

            // Gửi dữ liệu (Chạy song song cả 2 task)
            const tasks = [];

            if (GOOGLE_SHEETS_WEBHOOK_URL) {
                tasks.push(sendToGoogleSheets(formData));
            } else {
                console.warn("Chưa cấu hình Google Sheets Webhook");
            }

            if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
                tasks.push(sendToTelegram(formData));
            } else {
                console.warn("Chưa cấu hình Telegram Bot");
            }

            // Đợi tất cả (nếu có cấu hình)
            if (tasks.length > 0) {
                await Promise.allSettled(tasks);
            } else {
                // Giả lập delay nếu chưa có API thật để user thấy hiệu ứng
                await new Promise(r => setTimeout(r, 1000));
            }

            // Thành công
            showMessage('Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm.', 'success');
            leadForm.reset();

        } catch (error) {
            console.error("Lỗi submit form:", error);
            showMessage(error.message || 'Có lỗi xảy ra, vui lòng thử lại sau.', 'error');
        } finally {
            // Khôi phục nút
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    // --- Helpers ---
    function showMessage(msg, type) {
        formMessage.innerText = msg;
        formMessage.className = `form-message ${type}`;
    }

    async function sendToGoogleSheets(data) {
        // Thông thường Google Apps Script nhận POST qua FormData hoặc x-www-form-urlencoded
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        return fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
            method: 'POST',
            body: formData
        }).then(res => {
            if(!res.ok) throw new Error("Lỗi gửi Google Sheet");
            return res;
        });
    }

    async function sendToTelegram(data) {
        const text = `
🎯 <b>LEAD MỚI - VIETNAM NIGHT 2026</b>
- <b>Tên:</b> ${data.name}
- <b>SĐT:</b> ${data.phone}
- <b>Email:</b> ${data.email || 'Không có'}
- <b>Gói quan tâm:</b> ${data.package}
- <b>Thời gian:</b> ${data.timestamp}
        `;

        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        }).then(res => {
            if(!res.ok) throw new Error("Lỗi gửi Telegram");
            return res.json();
        });
    }
});
