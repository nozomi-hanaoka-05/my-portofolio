// ページ遷移
// ---logoクリックでTOPへジャンプ
$(".myName").click(function(){
            window.location.href = "index.html";
        })

// ---navのプロフィールクリックでindex.htmlのmineへ
$(function(){
    $('[href="#mine"]').on("click", function(e){
        const path = window.location.pathname;
        // このページの中に#mineがあるかチェック
        // index.htmlの#mineへジャンプ
        if(path.includes('works.html','works_p.html')){
        e.preventDefault();
        window.location.href = 'index.html#mine';
    };
   
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
});