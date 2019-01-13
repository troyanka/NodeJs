$( document ).ready(function() {

    console.log('usersList.js is ready');
    // document.querySelector('.tableRow').addEventListener('click',function(e){
    //     window.location.href = "/users/edit/"+ e.target.dataset.id
    // })
    $('.tableRow').click(function() {

       console.log("row was clicked");

       const id = $(this).data('id');
       console.log(id);

       window.location.href = "/users/edit/"+id;

    });
});
