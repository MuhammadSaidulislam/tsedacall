// nVabvar

function set(name, path){
  document.getElementById('navbarDropdownMenuLink').innerHTML = `<img src="${path}" width="20px" height="20px" alt=""> ${name} `
}

// mobile slider
function openNav() {
    document.getElementById("mySidenav").style.width = "290px";
    document.getElementById('showOpen').style.display = "none";
    document.getElementById('closeNav').style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('showOpen').style.display = "block";
    document.getElementById('closeNav').style.display = "none";
  }
 
    $(document).ready(function() {
    $('#example').DataTable();
} );
