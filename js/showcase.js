document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dummy Data (Dữ liệu mẫu) ---
    // Trong thực tế, dữ liệu này có thể được fetch từ API hoặc Google Sheets
    const showcaseData = [
        {
            brandName: "VinFast",
            package: "Diamond",
            videos: [
                { 
                    id: "vf1", 
                    type: "youtube", 
                    embedUrl: "https://www.youtube.com/embed/d3_1yZUSkBM?si=12345", 
                    title: "VinFast VF8 lăn bánh tại Niigata" 
                },
                { 
                    id: "vf2", 
                    type: "youtube", 
                    embedUrl: "https://www.youtube.com/embed/39udgGPyYMg?si=67890", 
                    title: "Review xe điện bởi khách quốc tế" 
                }
            ]
        },
        {
            brandName: "Vietnam Airlines",
            package: "Diamond",
            videos: [
                { 
                    id: "vna1", 
                    type: "youtube", 
                    embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0?si=abcd", 
                    title: "Đồng hành cùng JCI ASPAC 2026" 
                }
            ]
        },
        {
            brandName: "Trung Nguyên Legend",
            package: "Gold",
            videos: [
                { 
                    id: "tn1", 
                    type: "youtube", 
                    embedUrl: "https://www.youtube.com/embed/L_jWHffIx5E?si=efgh", 
                    title: "Cà phê năng lượng tại Nhật Bản" 
                }
            ]
        },
        {
            brandName: "Gốm Sứ Minh Long",
            package: "Silver",
            videos: [
                { 
                    id: "ml1", 
                    type: "youtube", 
                    embedUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk?si=klmn", 
                    title: "Tinh hoa gốm Việt" 
                }
            ]
        },
        {
            brandName: "Biti's Hunter",
            package: "Premium",
            videos: [
                { 
                    id: "bh1", 
                    type: "youtube", 
                    embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?si=opqr", 
                    title: "Bước chân tự hào" 
                },
                { 
                    id: "bh2", 
                    type: "youtube", 
                    embedUrl: "https://www.youtube.com/embed/y6120QOlsfU?si=stuv", 
                    title: "Trải nghiệm gian hàng Biti's" 
                }
            ]
        }
    ];

    const container = document.getElementById('showcaseContainer');
    const searchInput = document.getElementById('searchInput');
    const packageFilter = document.getElementById('packageFilter');

    // --- Render Logic ---
    function renderShowcase(data) {
        container.innerHTML = ''; // Clear current

        if (data.length === 0) {
            container.innerHTML = '<div class="no-results">Không tìm thấy nhãn hàng nào phù hợp với bộ lọc.</div>';
            return;
        }

        data.forEach(brand => {
            // Tạo section cho mỗi nhãn hàng
            const section = document.createElement('div');
            section.className = 'brand-section';

            // Tiêu đề nhãn hàng
            const header = document.createElement('div');
            header.className = 'brand-header';
            header.innerHTML = `
                <h2 class="brand-name">${brand.brandName}</h2>
                <span class="brand-package">${brand.package}</span>
            `;
            section.appendChild(header);

            // Grid chứa video
            const grid = document.createElement('div');
            grid.className = 'video-grid';

            brand.videos.forEach(video => {
                const card = document.createElement('div');
                card.className = 'video-card';
                
                // Mặc định dùng iframe (phù hợp Youtube/Tiktok embed)
                card.innerHTML = `
                    <div class="video-wrapper">
                        <iframe 
                            src="${video.embedUrl}" 
                            title="${video.title}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="video-title">${video.title}</div>
                `;
                grid.appendChild(card);
            });

            section.appendChild(grid);
            container.appendChild(section);
        });
    }

    // --- Filter Logic ---
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedPackage = packageFilter.value;

        const filteredData = showcaseData.filter(brand => {
            const matchSearch = brand.brandName.toLowerCase().includes(searchTerm);
            const matchPackage = selectedPackage === 'all' || brand.package === selectedPackage;
            return matchSearch && matchPackage;
        });

        renderShowcase(filteredData);
    }

    // Event Listeners
    searchInput.addEventListener('input', applyFilters);
    packageFilter.addEventListener('change', applyFilters);

    // Initial Render
    renderShowcase(showcaseData);
});
