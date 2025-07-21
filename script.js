document.addEventListener('DOMContentLoaded', () => {
    // --- MENU DE NAVEGAÇÃO DINÂMICO ---
    const navLinks = document.querySelectorAll('.main-nav .nav-list a');
    const sections = document.querySelectorAll('main section[id]');

    const activateNavLink = () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerOffset = 80;

            if (window.scrollY >= sectionTop - headerOffset && window.scrollY < sectionTop + sectionHeight - headerOffset) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => link.classList.remove('active'));

        if (currentSectionId) {
            const activeLink = document.querySelector(`.main-nav .nav-list a[href="#${currentSectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', activateNavLink);
    activateNavLink();

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // --- SLIDESHOW SEÇÃO SOBRE ---
    const aboutImageContainer = document.querySelector('.about-image');
    const slideshowImages = document.querySelectorAll('.slideshow-image');
    let currentSlide = 0;
    let slideshowInterval;
    const intervalTime = 3000;

    const showSlide = (index) => {
        slideshowImages.forEach((img) => img.classList.remove('active-slide'));
        slideshowImages[index].classList.add('active-slide');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slideshowImages.length;
        showSlide(currentSlide);
    };

    const startSlideshow = () => {
        slideshowInterval = setInterval(nextSlide, intervalTime);
    };

    const stopSlideshow = () => {
        clearInterval(slideshowInterval);
    };

    if (aboutImageContainer) {
        aboutImageContainer.addEventListener('mouseenter', () => {
            stopSlideshow();
            slideshowImages[currentSlide].classList.add('hover-grow');
        });

        aboutImageContainer.addEventListener('mouseleave', () => {
            startSlideshow();
            slideshowImages[currentSlide].classList.remove('hover-grow');
        });

        aboutImageContainer.addEventListener('click', () => {
            if (slideshowInterval) {
                stopSlideshow();
                slideshowInterval = null;
                slideshowImages[currentSlide].classList.add('hover-grow');
            } else {
                startSlideshow();
                slideshowImages[currentSlide].classList.remove('hover-grow');
            }
        });
    }

    showSlide(currentSlide);
    startSlideshow();


    // --- BOTÃO FLUTUANTE WHATSAPP COM MENSAGEM PERSONALIZADA ---
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const messageBox = document.getElementById('message-box');

    whatsappBtn.addEventListener('mouseenter', () => {
        messageBox.style.display = 'flex';
    });

    whatsappBtn.addEventListener('mouseleave', () => {
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    });

    window.sendWhatsAppMessage = () => {
        const message = document.getElementById('whatsapp-message').value;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '5521995067999'; 
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };
});
