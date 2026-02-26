//Javascript for Greenhead Website
//Change log:
//added yardstick list
//added yardstick calc
//added famous people popup
//added yardstick autofill
//changed yardstick calc to work with minutes and seconds not just seconds

//------------------------------------yardstick list----------------------------------------

function get_yardstick() {
    let boats_left = ""     //declaring variables
    let count = 0       
    let input = document.getElementById('search_bar').value;        //getting search request from HTML
    input=input.toLowerCase();      //making input lowercase
    let all_boats = document.getElementsByClassName('boat');        //getting all boats in the list
    for (i = 0; i < all_boats.length; i++) {        //seasrcheng through list and hiding all list items that dont meet the search criteria
        if (all_boats[i].innerHTML.toLowerCase().includes(input)) {
            all_boats[i].style.display="list-item";  
            boats_left = all_boats[i].innerHTML;        //recording which  boats are left for autofill
            count++;        //counting how many boats have been hidden for autofill
        }
        else {
            all_boats[i].style.display="none";      //hiding boats
        }
    }
    if (count == 1) {
        autofill_yardstick(boats_left);     //checking to see if only one is left and calling subroutine if True
    }
}

//-----------------------autofiling the yardstick box when only one intem is left in the list----------------------------

function autofill_yardstick(boats_left) {
    boats_left = boats_left.slice(-11);     //filtering the input untill only yardstick is left
    if (boats_left[0] == ">") {
        boats_left = boats_left.slice(1);
    }
    boats_left = (boats_left.split("<"))[0]
    document.getElementById("Yardstick_Adjuster_input").value = (boats_left);       //autofilling yardstick
    Adjust_time()
    
}

//----------------------------------------calculating yardstick adjusted time-------------------------------------

function Adjust_time() {    
    let yardstick = document.getElementById("Yardstick_Adjuster_input").value;      //Getting yardstick from HTML input
    let minutes = document.getElementById("Yardstick_Adjuster_input_time_minutes").value;       //Getting minutes from HTML input
    let seconds = document.getElementById("Yardstick_Adjuster_input_time_seconds").value;       //Getting seconds from HTML input
    let time = (Number(minutes)*60) + Number(seconds);      //changing into seconds
    let adjusted_time = (time/yardstick*1000);      //adjusting seconds
    let adj_minutes = Math.floor(adjusted_time/60);     //changing back to minutes
    let adj_seconds = Math.floor(adjusted_time - (adj_minutes*60));        //calculating seconds
    //alert(adj_seconds);
    if (Number(adj_seconds) < 9) {
        //alert("Here");
        document.getElementById("Adjusted_time").value = String(adj_minutes) + ":0" + String(adj_seconds);       //writing result to HTML form    
    }
    else {
        //console.log("there");

        document.getElementById("Adjusted_time").value = String(adj_minutes) + ":" + String(adj_seconds);       //writing result to HTML form    
    }
}

//-----------------------------------------Famous people page popups------------------------------------------------

function robert() {
    var image = document.getElementById("image_box");       //getting image object
    image.src = "images/famous people/robert schaidt.jpeg";     //seting source to the corresponding image 
    document.getElementById("text_box").innerHTML = "It's pretty hard to mention the Laser class without mentioning Robert Scheidt. The Brazilian has won 9 World Championships, 3 Olympic medals in the Laser (2 Gold + 1 Silver) and is an ideal for Laser sailors worldwide. Beyond the Laser, Scheidt has gone on to success in other classes such as the Star, and RC44.";     //adding text info to text box object
}
function ben() {
    var image = document.getElementById("image_box");
    image.src = "images/famous people/Ben Ainslie.jpg";
    document.getElementById("text_box").innerHTML = "Known as the greatest Olympic sailor of all time, Ben Ainslie kicked off his streak of Olympic medals in the Laser class. Despite a long time rivalry with Robert Scheidt, Ainslie was still able to achieve incredible results including 2 Olympic, 4 World and 5 European Championship medals.";
}
function glenn() {
    var image = document.getElementById("image_box");
    image.src = "images/famous people/Glenn Bourke.jpg";
    document.getElementById("text_box").innerHTML = "This Australian sailor is a bit less well known then some of the others who were in contention for this list, but with 3 World Champion titles, Glenn Bourke is the 3rd most successful sailor at this event. Through the publication of his book 'Championship Laser Racing', Bourke surely influenced a number of Laser sailors beyond his time.";
}
function john() {
    var image = document.getElementById("image_box");
    image.src = "images/famous people/John Bertrand.jpg";
    document.getElementById("text_box").innerHTML = "A man who has had a significant influence in my sailing career, John Bertrand (not to be confused with the Australian John Bertrand), was the first multi-winner of the Laser World Championships. Even in the early days of the Laser class, he was well known for his strenuous physical preparation, and attention to detail.";
}
function nick() {
    var image = document.getElementById("image_box");
    image.src = "images/famous people/Nick Thompson.jpg";
    document.getElementById("text_box").innerHTML = "Although he never medalled at the Olympics, Nick Thompson has been one of the most consistent sailors of his generation at the Laser World Championships. Having 2 medals of each colour, Nick was known for his consistency across a range of conditions, and was never far off the podium in any regatta.";
}
function paul() {
    var image = document.getElementById("image_box");
    image.src = "images/famous people/Paul Goodison.jpg";
    document.getElementById("text_box").innerHTML = "Alongside his Olympic Gold Medal, Brit Paul Goodison holds the record for the most European Championships won (5!), on top of his 2009 World Championship title. For me, Goodison had one of the biggest influences on my Laser career through his book; 'RYA Laser Handbook'. I’ve read this book cover to cover at least 5 times, and many of my early sailing techniques were derived from Goodison's tips.";
}
function pavlos() {
    var image = document.getElementById("image_box");
    image.src = "images/famous people/Pavlos Kontides.jpeg";
    document.getElementById("text_box").innerHTML = "Not only does Kontides hold 2 World Championship titles, he was also the first ever Olympic medallist from his native Cyprus. Add to those results two European Championship titles, and Kontides is well deserving of making this list.";
}
function tom() {
    var image = document.getElementById("image_box");
    image.src = "images/famous people/Tom Slingsby.jpeg";
    document.getElementById("text_box").innerHTML = "This number 2 spot on this list is a little contentious, but since we’re considering the top 10 Laser sailors, we will need to go off the achievements of each sailor in the Laser only. With that said, Tom Slingsby, with 5 World Championships to his name, is the clear number 2. Also boasting an Olympic Gold Medal, Slingsby changed the game with his aggressive, physical, ‘low groove’ sailing in strong wind. When the wind was up, Slingsby was said to have been virtually untouchable on the water.";
}
function tonci() {
    var image = document.getElementById("image_box");
    image.src = "images/famous people/Tonci Stipnovic.jpeg";
    document.getElementById("text_box").innerHTML = "With two Olympic silver medals, and 4 European Champion titles, Tonci Stipanovic has been at the pinnacle of the Laser class for well over a decade. Having raced in one of the most competitive periods in class history, Stipanovic’s results easily land him on this list.";
}