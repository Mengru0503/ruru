$(document).ready(function() {
    // 捲動特效
    $(window).scroll(function() {
        // 回到頂部按鈕顯示/隱藏
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
        
        // 動畫元素
        $('.animate-on-scroll').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 100) {
                $(this).addClass('show');
            }
        });
        
        // 技能進度條
        $('.skill-progress').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position) {
                var width = $(this).data('width') + '%';
                $(this).css('width', width);
            }
        });
        
        // 時間軸項目動畫
        $('.timeline-item').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 50) {
                $(this).css('opacity', '1');
            }
        });
    });
    
    // 觸發首次捲動事件，以顯示可見的元素
    $(window).scroll();
    
    // 平滑捲動到錨點
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = this.hash;
        var $target = $(target);
        
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
    
    // 回到頂部按鈕點擊事件
    $('.back-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
