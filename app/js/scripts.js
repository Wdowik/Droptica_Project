var search           = document.getElementById("search");
var abc              = document.getElementById("abc");
var x                = document.getElementById("x");

var number_menu       = 0;
var number_search     = 0;
var number_aboutlist  = 0;
var number_aboutlist2 = 0;
var number_right      = 0;

var more                    = document.getElementById("more");
var right_arrow             = document.getElementById("rightarrow");
var menu2                   = document.getElementById("menu2");
var exit_menu               = document.getElementById("exit_menu");
var menu_list               = document.getElementById("menulist");
var list                    = document.getElementById("run_aboutlist");
var about                   = document.getElementById("about");
var about1                  = document.getElementById("about1");
var about2                  = document.getElementById("about2");
var text                    = document.getElementById("text");
var inst                    = document.getElementById("in");
var twitter                 = document.getElementById("twitter");
var logo1                   = document.getElementById("logo1");
var email                   = document.getElementById("email2");
var contener                = document.getElementById("contener");
var firstBackground_color   = document.getElementById("firstbackground_color");
var secondBackground_color2 = document.getElementById("secondbackground_color2");
var thirdBackground_color3  = document.getElementById("thirdbackground_color3");
var background_color        = document.getElementById("background_color");
var background_color2       = document.getElementById("background_color2");
var background_color3       = document.getElementById("background_color3");
var header_text             = document.getElementById("header_text");

var photo            = document.getElementById("photo");
var right            = document.getElementById("right");
var left             = document.getElementById("left");
var runaboutlist2    = document.getElementById("runaboutlist2");

var first_info       = document.getElementById("first_info");
var second_info      = document.getElementById("second_info");
var third_info       = document.getElementById("third_info");

var triangle         = document.getElementById("triangle");

search.addEventListener("click", start_search);
x.addEventListener("click", start_search);
menu2.addEventListener("click", start_menu);
about.addEventListener("click", about_list);
about1.addEventListener("click", about_list);
about2.addEventListener("click", about_list2);
exit_menu.addEventListener("click", start_menu);
right.addEventListener("click", next_photoRight);
left.addEventListener("click", next_photoLeft);

window.addEventListener('load',   resize);
window.addEventListener('resize', resize);

function resize() {
    if (window.innerWidth > 766) {
        if(number_menu == 1){

        abc.style.display         = "none";
        search.style.display      = "inline";
        search.style.opacity      = "1";
        x.style.display           = "none";


        menu_list.style.display           = "none";

        inst.style.display                = "inline";
        twitter.style.display             = "inline";
        logo1.style.display               = "inline";
        exit_menu.style.display           = "none";
        
        firstBackground_color.style.display        = "none";
        secondBackground_color2.style.display      = "none";
        thirdBackground_color3.style.display       = "none";

        background_color.style.display              = "block";
        background_color2.style.display             = "block";
        background_color3.style.display             = "block";

        header_text.style.marginLeft      = "0px";

        email.style.display               = "none";

        more.style.display                = "flex";
        right_arrow.style.display         = "none";

        number_menu = 0;
    
            number_menu = 0;
        }
    } else if  (window.innerWidth < 762) {

        runaboutlist2.style.display     = "none";
        about2.style.background         = "none";
        about2.style.marginLeft         = "-17px";
        triangle.style.display          = "none";

        number_aboutlist = 0;

    }

    if (window.innerWidth > 1000) {
        inst.style.display                = "none";
        twitter.style.display             = "none";
    }

    if (window.innerWidth < 1000) {
        
        if(number_menu == 0){
            inst.style.display                = "block";
            twitter.style.display             = "block";

        }
    
    }

  }

window.onload = () => {
    abc.style.opacity = 1;
  }

function next_photoRight() {

    if(number_right == 0) {

        first_info.style.display    = "none";
        third_info.style.display    = "none";

        second_info.style.display   = "block";

        number_right++;
    } else if(number_right == 1) {

        first_info.style.display    = "none";
        second_info.style.display   = "none";

        third_info.style.display    = "block";

        number_right++;
    } else if(number_right == 2){

        second_info.style.display   = "none";
        third_info.style.display    = "none";

        first_info.style.display    = "block";

        number_right = 0;
    }
}  

function next_photoLeft() {

    if(number_right == 0) {
        first_info.style.display    = "none";
        third_info.style.display    = "none";

        second_info.style.display   = "block";

        number_right = 2;
    } else if(number_right == 1) {
        second_info.style.display   = "none";
        third_info.style.display    = "none";

        first_info.style.display    = "block";

        number_right--;
    } else if(number_right == 2) {
        first_info.style.display    = "none";
        second_info.style.display   = "none";

        third_info.style.display   = "block";

        number_right--;
    }
}  

function about_list2() {

    if(number_aboutlist2 == 1) {
        runaboutlist2.style.display     = "none";
        about2.style.background         = "none";
        about2.style.marginLeft         = "-17px";
        triangle.style.display          = "none";

        number_aboutlist2 = 0;
    } else {

        abc.style.display         = "none";
        search.style.display      = "inline";
        search.style.opacity      = "1";
        x.style.display           = "none";

        number_search = 0;

        runaboutlist2.style.display     = "block";
        runaboutlist2.style.marginLeft  = "-314px";
        runaboutlist2.style.marginTop   = "71px";
        about2.style.backgroundColor    = "#51758c";
        about2.style.marginLeft         = "114px";
        triangle.style.display          = "block";

        number_aboutlist2++;
    }
}

function about_list() {
    if(number_aboutlist == 1) {

        
        list.style.display = "none";
        about.style.display = "block";
        about1.style.display = "none";

        number_aboutlist = 0;
    } else {

        list.style.display   = "inline-block";
        about.style.display = "none";
        about1.style.display = "block";

        number_aboutlist = 1;
    }


}  

function start_menu() {

    if(number_menu == 1){
        abc.style.display         = "none";
        search.style.display      = "inline";
        search.style.opacity      = "1";
        x.style.display           = "none";


        menu_list.style.display           = "none";

        inst.style.display                = "inline";
        twitter.style.display             = "inline";
        logo1.style.display               = "inline";
        exit_menu.style.display           = "none";
        firstBackground_color.style.display        = "none";
        secondBackground_color2.style.display      = "none";
        thirdBackground_color3.style.display       = "none";

        background_color.style.display              = "block";
        background_color2.style.display             = "block";
        background_color3.style.display             = "block";

        header_text.style.marginLeft      = "0px";

        email.style.display               = "none";

        more.style.display                = "flex";
        right_arrow.style.display         = "none";

        number_menu = 0;
    } else {

        abc.style.display                 = "none";
        search.style.display              = "inline";
        x.style.display                   = "none";
        menu_list.style.display           = "inline-block";

        inst.style.display                = "none";
        twitter.style.display             = "none";
        logo1.style.display               = "none";
        exit_menu.style.display           = "inline";
        email.style.display               = "block";
        firstBackground_color.style.display        = "block";
        secondBackground_color2.style.display      = "block";
        thirdBackground_color3.style.display       = "block";
        background_color.style.display             = "none";
        background_color2.style.display             = "none";
        background_color3.style.display             = "none";
        header_text.style.marginLeft      = "-503px";

        more.style.display                = "none";
        right_arrow.style.display         = "block";

        number_menu = 1;
    }

}  

function start_search() {

    if(number_search == 1) {
        abc.style.display         = "none";
        search.style.display      = "inline";
        search.style.opacity      = "1";
        x.style.display           = "none";

        number_search = 0;
    } else {
        about2.style.background      = "none";
        runaboutlist2.style.display = "none";

        number_aboutlist = 0;

        abc.style.display         = "flex";

        x.style.display           = "inline";
        search.style.opacity      = "0";

        runaboutlist2.style.display     = "none";
        about2.style.background         = "none";
        about2.style.marginLeft         = "-17px";
        triangle.style.display          = "none";

        number_aboutlist2 = 0;

        number_search             = 1;
    }

}














