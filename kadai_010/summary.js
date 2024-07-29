$(document).ready(function() {
    // 色を変える
    $('#change-color').click(function() {
        $('#target').css('color', 'red');
    });

    // 文字を切り替える
    $('#change-text').click(function() {
        $('#target').text('Hello!');
    });

    // フェードアウトで文字を消す
    $('#fade-out').click(function() {
        $('#target').fadeOut();
    });

    // フェードインで文字を表示する
    $('#fade-in').click(function() {
        $('#target').fadeIn();
    });
});
