 // Sidebar Toggle
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.overlay');
            
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            
            if (sidebar.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        // Close sidebar on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const sidebar = document.getElementById('sidebar');
                if (sidebar.classList.contains('active')) {
                    toggleSidebar();
                }
            }
        });
// Toggle Brands
function toggleBrands() {
    const grid = document.getElementById('brandsGrid');
    const btn = document.getElementById('brandsToggle');
    const text = btn.querySelector('span');

    grid.classList.toggle('show-extra');
    btn.classList.toggle('expanded');

    const isOpen = grid.classList.contains('show-extra');
    text.textContent = isOpen ? 'Hide' : 'Show all';
}

// Toggle Equipment
function toggleEquipment() {
    const grid = document.getElementById('equipmentGrid');
    const btn = document.getElementById('equipmentToggle');
    const text = btn.querySelector('span');

    grid.classList.toggle('show-extra');
    btn.classList.toggle('expanded');

    const isOpen = grid.classList.contains('show-extra');
    text.textContent = isOpen ? 'Hide' : 'Show all';
}
        // Tab switching
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        let brandSwiper;
let equipmentSwiper;

function initSwipers() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1024) {
        if (!brandSwiper) {
            brandSwiper = new Swiper('.brands-swiper', {
                slidesPerView: "auto",
                spaceBetween: 16,
                pagination: { el: '.swiper-pagination', clickable: true },
            });
        }
        if (!equipmentSwiper) {
            equipmentSwiper = new Swiper('.equipment-swiper', {
                slidesPerView: "auto",
                spaceBetween: 16,
                pagination: { el: '.swiper-pagination', clickable: true },
            });
        }
    } else {
        // Destroy swipers if we go back to desktop
        if (brandSwiper) {
            brandSwiper.destroy(true, true);
            brandSwiper = null;
        }
        if (equipmentSwiper) {
            equipmentSwiper.destroy(true, true);
            equipmentSwiper = null;
        }
    }
}

// Run on load and resize
window.addEventListener('load', initSwipers);
window.addEventListener('resize', initSwipers);



document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.tabs-container.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        freeMode: true,
    });
});
