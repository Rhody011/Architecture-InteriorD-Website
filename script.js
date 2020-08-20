window.onload=function(){
    let menuButton = document.getElementById('hamburger-menu');
menuButton.addEventListener('click', function(){
    let sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('toggle')){
        sidebar.classList.remove('toggle');
    } else {
        sidebar.classList.add('toggle');
    }
});
  };