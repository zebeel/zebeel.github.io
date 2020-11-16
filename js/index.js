$( document ).ready(function(){
    eventOnloadIndex()
    showOlderPosts(5)

    function eventOnloadIndex() {
        $(".post-preview").addClass('hide')
    }

    $("#oder-posts").click(function (e) {
        showOlderPosts(10)
    })

    function showOlderPosts(n) {
        let count = 0
        for(let post of $(".post-preview")) {
            if (count < n && post.classList.contains('hide')) {
                post.classList.remove('hide')
                count ++
            }
        }
        if(count < n) {
            $("#oder-posts").addClass("disabled")
        }
    }
})