const btn = document.querySelectorAll('.block__btn');
const title = document.querySelectorAll('.block__title');


$(btn).click(function() {
    var parent = $(this).parent().parent().parent();
    const title = (parent[0].children[1].children[1].textContent);
    let id = (this.id);
    $(id("good__")).each(function() {
        $(this).html($(this).html().split("good__").join(""));
    });
    console.log(id);


    const price = parseInt(parent[0].children[2].children[1].textContent);

})