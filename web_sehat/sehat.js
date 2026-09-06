document.addEventListener("DOMContentLoaded", () => {
    // Handling Form Pendaftaran Janji Temu
    const form = document.getElementById("appointmentForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Terima kasih! Permintaan janji temu Anda telah terkirim. Tim RS Anaverse akan menghubungi WhatsApp Anda untuk konfirmasi nomor antrean.");
            form.reset();
        });
    }
});