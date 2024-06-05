
// onScroll header sticks on top
let lastScrollTop = 0;
            navbar = document.getElementById("header");
        window.addEventListener("scroll", function(){
            var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop){
                header.style.top = "-60px";
            } else{
                header.style.top = "0";
            }
            lastScrollTop = scrollTop
        }) 
 
 // open and close side menu bar
 function opensidemenu()
 {
     document.getElementById('sidebarleftmenu').style.height="100%";
     document.getElementById('mainpage').style.marginLeft="0px";	
 }


let head = document.getElementById('head');
head.addEventListener('click', ()=> {
    document.getElementById('sidebarleftmenu').style.height="0";
    document.getElementById('mainpage').style.marginLeft="0px";	
})

// Modal box
const openBtn = document.getElementById('chat-btn');
const modal = document.getElementById('modal-container');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Open modal on click
openBtn.addEventListener('click', ()=> {
    modal.style.display = 'block';
});


// Close modal on click
closeBtn.addEventListener('click', ()=> {
    modal.style.display = 'none';
});

// Close modal on click outside 
window.addEventListener('click', (e) => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
})














