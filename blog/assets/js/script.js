// Gallery state
let currentImageIndex = {};

// Initialize galleries for all posts
function initializeGalleries() {
    postsData.forEach(post => {
        currentImageIndex[post.id] = 0;
    });
}

// Keep timestamp as is from original data
function formatDate(dateString) {
    return dateString;
}

// Create post HTML
function createPostHTML(post) {
    const hasMultipleImages = post.images.length > 1;
    const displayDate = formatDate(post.at);
    
    return `
        <article class="post-card">
            <div class="box">
                <div class="content">
                    <div class="mb-3">
                        <div class="is-flex is-justify-content-space-between is-align-items-start mb-2">
                            <p class="has-text-grey is-size-7">
                                <i class="fas fa-clock mr-1"></i>${displayDate}
                            </p>
                            ${post.location ? `
                                <p class="has-text-grey is-size-7">
                                    <i class="fas fa-map-marker-alt mr-1"></i>${post.location}
                                </p>
                            ` : ''}
                        </div>
                    </div>
                    <div>${post.content}</div>
                </div>
            </div>
            
            ${post.images && post.images.length > 0 ? `
                <div class="gallery-container">
                    <img src="${post.images[0]}" 
                         alt="Post ${post.id}" 
                         class="gallery-main-image" 
                         data-gallery="${post.id}">
                    
                    ${hasMultipleImages ? `
                        <button class="gallery-nav prev" onclick="prevImage(${post.id})">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="gallery-nav next" onclick="nextImage(${post.id})">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <div class="gallery-dots">
                            ${post.images.map((_, index) => 
                                `<div class="gallery-dot ${index === 0 ? 'is-active' : ''}" 
                                      onclick="showImage(${post.id}, ${index})"></div>`
                            ).join('')}
                        </div>
                    ` : ''}
                    
                    <div class="gallery-counter">
                        <span class="current-image">1</span> / <span class="total-images">${post.images.length}</span>
                    </div>
                </div>
            ` : ''}
        </article>
    `;
}

// Load all posts
function loadPosts() {
    const container = document.getElementById('posts-container');
    container.innerHTML = postsData.map(post => createPostHTML(post)).join('');
}

// Gallery functions
function showImage(postId, index) {
    const post = postsData.find(p => p.id === postId);
    if (!post || !post.images || index < 0 || index >= post.images.length) return;
    
    currentImageIndex[postId] = index;
    
    // Update main image
    const mainImage = document.querySelector(`[data-gallery="${postId}"]`);
    mainImage.src = post.images[index];
    
    // Update counter
    const counter = mainImage.parentElement.querySelector('.current-image');
    if (counter) {
        counter.textContent = index + 1;
    }
    
    // Update dots
    const container = mainImage.parentElement;
    const dots = container.querySelectorAll('.gallery-dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('is-active');
        } else {
            dot.classList.remove('is-active');
        }
    });
}

function nextImage(postId) {
    const post = postsData.find(p => p.id === postId);
    if (!post || !post.images) return;
    
    const nextIndex = (currentImageIndex[postId] + 1) % post.images.length;
    showImage(postId, nextIndex);
}

function prevImage(postId) {
    const post = postsData.find(p => p.id === postId);
    if (!post || !post.images) return;
    
    const prevIndex = (currentImageIndex[postId] - 1 + post.images.length) % post.images.length;
    showImage(postId, prevIndex);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        // Find the gallery that's most visible in viewport
        let mostVisibleGallery = null;
        let maxVisibleArea = 0;
        
        postsData.forEach(post => {
            const img = document.querySelector(`[data-gallery="${post.id}"]`);
            if (img) {
                const rect = img.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                // Calculate visible area
                const visibleTop = Math.max(0, rect.top);
                const visibleBottom = Math.min(viewportHeight, rect.bottom);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                const visibleArea = visibleHeight * rect.width;
                
                if (visibleArea > maxVisibleArea) {
                    maxVisibleArea = visibleArea;
                    mostVisibleGallery = post.id;
                }
            }
        });
        
        if (mostVisibleGallery) {
            if (e.key === 'ArrowLeft') {
                prevImage(mostVisibleGallery);
            } else if (e.key === 'ArrowRight') {
                nextImage(mostVisibleGallery);
            }
        }
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeGalleries();
    loadPosts();
});