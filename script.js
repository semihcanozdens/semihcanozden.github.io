// Typing effect fonksiyonu
function typingEffect(elementId, text, speed, callback) {
    let i = 0;
    let element = document.getElementById(elementId);
    
    // İlk başta blinker'ı aktif et
    element.style.borderRight = "3px solid #00ff00";

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Yazı tamamlandığında blinker'ı kapat
            element.style.borderRight = "none";
            if (callback) {
                callback(); // Eğer callback varsa, callback fonksiyonunu çağır
            }
        }
    }
    type();
}

// Yazı animasyonlarını başlat
typingEffect('typing-effect', 'Semih Can Ozden', 150, function() {
    typingEffect('typing-effect2', 'Software Developer', 200, function() {
        // İkinci cümle tamamlandıktan sonra yapılacak işlemler (opsiyonel)
    });  // İlk yazı bittiğinde ikinci yazıyı başlat
});
