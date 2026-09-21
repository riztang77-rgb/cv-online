# RasaNusa Restaurant — Versi Pemula

Website ini adalah **prototype frontend** yang bisa langsung dibuka di Chrome. Tidak membutuhkan XAMPP, database, Composer, atau backend.

## Struktur folder
- `index.html` = halaman utama
- `assets/css/style.css` = semua CSS website pelanggan
- `assets/js/app.js` = JavaScript keranjang sederhana
- `pages/` = halaman menu, detail, keranjang, checkout, pesanan, reservasi, promo, galeri, tentang, kontak
- `admin/` = dashboard admin
- `admin/css/admin.css` = CSS dashboard admin
- `assets/images/` = tempat foto makanan/restoran

## Cara menjalankan
1. Extract ZIP.
2. Buka folder `restaurant_pemula`.
3. Klik dua kali `index.html`.
4. Untuk admin, buka `admin/index.html`.

## Catatan
Foto masih memakai emoji/placeholder agar project tetap ringan. Kalau mau memakai foto asli, masukkan gambar ke `assets/images/` lalu ubah bagian gambar di HTML.

Fitur keranjang menggunakan `sessionStorage` hanya untuk demo frontend. Untuk website jualan sungguhan, bagian login, database, pembayaran, WhatsApp, Google Maps, upload gambar, dan status pesanan perlu backend/database.
