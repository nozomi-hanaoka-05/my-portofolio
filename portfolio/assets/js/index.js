// ページ遷移
// ---logoクリックでTOPへジャンプ
$(".myName").click(function(){
            window.location.href = "index.html";
        })

// ---works.htmlへジャンプ 
$("#work_jump").click(function(){
    window.location.href = "works.html";
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
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;

    // 1つだけ開閉したい → クリックしたコンテンツだけ操作する
    if (content.style.maxHeight) {
      // 開いていたら閉じる
      content.style.maxHeight = null;
    } else {
      // 閉じていたら開く
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
