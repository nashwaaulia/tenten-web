"use strict";

document.addEventListener('DOMContentLoaded', function() {
    console.log('Product Modal JS loaded for current page');
    
    initProductModal();
    addModalStyles();
    AOS.init();
});

function initProductModal() {
    const productModal = document.getElementById('productModal');

    
    if (!productModal) {
        console.warn('Modal produk tidak ditemukan di halaman ini');
        return;
    }
    
    const detailButtons = document.querySelectorAll('.btn-detail');
    
    if (detailButtons.length === 0) {
        console.log('Tidak ada tombol detail ditemukan di halaman ini');
        return;
    }
    
    console.log(`Menemukan ${detailButtons.length} tombol detail di halaman ini`);
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productData = {
                name: this.getAttribute('data-name'),
                price: this.getAttribute('data-price'),
                image: this.getAttribute('data-image'),
                description: this.getAttribute('data-description')
            };
            
            console.log('Tombol produk diklik:', productData.name);
            
            if (!productData.name || !productData.image) {
                console.error('Data produk tidak lengkap');
                return;
            }
            
            showProductDetail(productData);
        });
    });
}

function showProductDetail(productData) {
    const modalImage = document.getElementById('modalProductImage');
    const modalName = document.getElementById('modalProductName');
    const modalPrice = document.getElementById('modalProductPrice');
    const modalDescription = document.getElementById('modalProductDescription');
    
    if (modalImage && modalName && modalPrice && modalDescription) {
        modalImage.src = productData.image;
        modalImage.alt = productData.name;
        modalName.textContent = productData.name;
        modalPrice.textContent = productData.price || 'Harga belum tersedia';
        modalDescription.textContent = productData.description || 'Deskripsi belum tersedia';
        
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    } else {
        console.error('Elemen modal tidak ditemukan');
    }
}

function addModalStyles() {
    if (document.getElementById('dynamic-modal-styles')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'dynamic-modal-styles';
    document.head.appendChild(style);
}

function debugProductModal() {
    console.log('=== Debug Product Modal ===');
    console.log('Modal element:', document.getElementById('productModal'));
    console.log('Detail buttons:', document.querySelectorAll('.btn-detail').length);
    console.log('Current page URL:', window.location.pathname);
    console.log('=======================');
}

window.ProductModal = {
    init: initProductModal,
    show: showProductDetail,
    debug: debugProductModal
};