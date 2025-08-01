function formatDate(dateString) {
    // Parse date string: "2024 Aug 22 at 07:04 AM"
    const parts = dateString.split(' ');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    const time = parts[4] + ' ' + parts[5];
    
    // Convert month abbreviation to number
    const monthMap = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
        'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
        'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    };
    
    const monthNum = monthMap[month];
    
    // Return short format: DD/MM/YYYY
    return `${day}/${monthNum}/${year}`;
}

function createImageGallery(images, post) {
    if (!images || images.length === 0) return '';
    
    let galleryClass = 'single';
    let displayImages = images;
    let showMoreElement = '';

    if (images.length === 2) {
        galleryClass = 'multiple grid-2';
    } else if (images.length === 3) {
        galleryClass = 'multiple grid-3';
    } else if (images.length === 4) {
        galleryClass = 'multiple grid-4';
    } else if (images.length > 4) {
        galleryClass = 'multiple gallery';
        displayImages = images.slice(0, 6);
        
        if (images.length > 6) {
            const lastIndex = displayImages.length - 1;
            showMoreElement = `data-remaining="${images.length - 5}" class="show-more-images"`;
            displayImages = displayImages.slice(0, 5);
        }
    }

    const imagesHtml = displayImages.map((img, index) => {
        const fullUrl = CONFIG.baseUrl + img;
        const clickHandler = `onclick="openLightbox('${fullUrl}', ${post.id}, ${index})"`;
        if (images.length > 6 && index === displayImages.length - 1) {
            return `<img src="${fullUrl}" alt="Post image ${index + 1}" ${showMoreElement} ${clickHandler}>`;
        }
        return `<img src="${fullUrl}" alt="Post image ${index + 1}" ${clickHandler}>`;
    }).join('');

    return `
        <div class="post-images ${galleryClass}">
            ${imagesHtml}
        </div>
    `;
}

function renderPosts() {
    const container = document.getElementById('posts-container');
    
    const postsHtml = postsData.map(post => {
        const locationHtml = post.location ? 
            `<div class="post-location">${post.location}</div>` : '';
        
        const imagesHtml = createImageGallery(post.images, post);
        
        return `
            <article class="post">
                <div class="post-card">
                    <div class="post-header">
                        <div class="post-date">${post.at}</div>
                        ${locationHtml}
                    </div>
                    <div class="post-content">
                        <p>${post.content}</p>
                    </div>
                    ${imagesHtml}
                </div>
            </article>
        `;
    }).join('');
    
    container.innerHTML = postsHtml;
}

// Lightbox functionality
let currentImages = [];
let currentIndex = 0;
let currentPostId = null;

function openLightbox(imageSrc, postId, imageIndex) {
    const post = postsData.find(p => p.id === postId);
    if (!post || !post.images) return;

    currentImages = post.images.map(img => CONFIG.baseUrl + img);
    currentIndex = imageIndex;
    currentPostId = postId;

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const counter = document.getElementById('lightbox-counter');
    
    lightboxImage.src = currentImages[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % currentImages.length;
    } else {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    }
    
    const lightboxImage = document.getElementById('lightbox-image');
    const counter = document.getElementById('lightbox-counter');
    
    lightboxImage.src = currentImages[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    
    // Add smooth scrolling effect
    const posts = document.querySelectorAll('.post');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    posts.forEach(post => {
        observer.observe(post);
    });

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateLightbox('prev');
            } else if (e.key === 'ArrowRight') {
                navigateLightbox('next');
            }
        }
    });
});