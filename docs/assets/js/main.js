document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("project-slider");
    const tabButtons = document.querySelectorAll(".tab-button");
    const glider = document.querySelector(".active-glider");

    // Initialize glider size/position
    function updateGlider(index) {
        const activeTab = tabButtons[index];
        if (activeTab && glider) {
            glider.style.width = `${activeTab.offsetWidth}px`;
            glider.style.transform = `translateX(${activeTab.offsetLeft - 4}px)`;
            
            tabButtons.forEach(btn => btn.classList.remove("active"));
            activeTab.classList.add("active");
        }
    }

    // Scroll slider viewport to specific slide index
    window.scrollToSlide = function(index) {
        if (!slider) return;
        const targetX = slider.offsetWidth * index;
        slider.scrollTo({
            left: targetX,
            behavior: "smooth"
        });
        updateGlider(index);
    }

    // Sync tabs dynamically as user swipes on mobile
    let isScrolling;
    slider.addEventListener("scroll", () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            // Find current slide based on scroll offset
            const index = Math.round(slider.scrollLeft / slider.offsetWidth);
            updateGlider(index);
        }, 100);
    });

    // Run initial setup
    updateGlider(0);
    
    // Recalculate if window resizes
    window.addEventListener("resize", () => updateGlider(Math.round(slider.scrollLeft / slider.offsetWidth)));
});