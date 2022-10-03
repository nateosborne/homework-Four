function init() {
    $("#submit").on("click", function (e){
        e.preventDefault();
        let fn = $("#fName").val();
        let ln = $("#lName").val();

    if(fn == ""){
        alert("Enter your first name");
    }  else if(ln == ""){
        alert("Enter your last name");
    } else{
        alert("You have signed in");
    }

    });
}

$(document).ready(function() {
    init();
});

// $(document).ready(function() {
//     console.log("ready");
// });

// $(window).on("load", function(){
//     console.log("loaded");
//     Swal.fire("Any fool can use a computer");
    // Swal.fire({
    //     title: '<strong>HTML <u>example</u></strong>',
    //     icon: 'info',
    //     html:
    //       'You can use <b>bold text</b>, ' +
    //       '<a href="//sweetalert2.github.io">links</a> ' +
    //       'and other HTML tags',
    //     showCloseButton: true,
    //     showCancelButton: true,
    //     focusConfirm: false,
    //     confirmButtonText:
    //       '<i class="fa fa-thumbs-up"></i> Great!',
    //     confirmButtonAriaLabel: 'Thumbs up, great!',
    //     cancelButtonText:
    //       '<i class="fa fa-thumbs-down"></i>',
    //     cancelButtonAriaLabel: 'Thumbs down'
    //   })
    // $(".modal").css("display","none");
// });

