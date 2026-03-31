// ページ遷移
// ---logoクリックでTOPへジャンプ
$(".myName").click(function(){
            window.location.href = "index.html";
        })

// ---navのプロフィールクリックでindex.htmlのmineへ
$(function(){
    $('[href="#profile"]').on("click", function(e){
        const path = window.location.pathname;
<<<<<<< HEAD
        // このページの中に#mineがあるかチェック
        // index.htmlの#mineへジャンプ
        if(path.includes('works_j.html')||path.includes('works_p.html')){
        e.preventDefault();
        window.location.href = 'index.html#mine';
    };
   
=======

        // いずれかのページに含まれているかチェック
        if(path.includes('works.html') || path.includes('works_p.html')){
            e.preventDefault();
            window.location.href = 'index.html#mine';
        }
>>>>>>> works_php
    });
});

// ---プロフィールのアコーディオン部分の挙動
const titles = document.querySelectorAll(".accordion_title");

titles.forEach((title) => {
  title.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // 親要素へのイベント伝播を止める

    const content = title.nextElementSibling;

    // クラスを切り替える
    content.classList.toggle("is-open");

    // 開閉のロジック
    if (content.classList.contains("is-open")) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1"; // 明示的に操作
    } else {
      content.style.maxHeight = "0px";
      content.style.opacity = "0";
    }
  });
<<<<<<< HEAD
});

// ---Workアコーディオンの挙動--- //
$(function() {
  $('.nav_item').on('click', function(){
    const $targetNav = $(this).find('.work_nav');
    $targetNav.toggleClass('active');
  });
});

// --navそれぞれのジャンプ先-- //
$("#javascript").click(function(){
    window.location.href = "works.html";
})

$("#php").click(function(){
    window.location.href = "works.html";
})
=======
});
>>>>>>> works_php
