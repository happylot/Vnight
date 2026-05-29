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

    // --- Mobile Menu ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('nav-links');
    
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

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

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

    const LEAD_API_ENDPOINT = '/api/lead.php';

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

            await submitLead(formData);

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
            throw new Error(result?.message || 'Không gửi được thông tin. Vui lòng thử lại sau.');
        }

        return result;
    }
});
