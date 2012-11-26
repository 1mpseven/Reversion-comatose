function cls(){
	document.body.innerHTML = "";
}

function add(obj){
	document.body.innerHTML = document.body.innerHTML + obj;
}

function screen_video(obj){
		text='<video autoplay loop="loop" class="full2"><source src="'+obj+'" type='
		text=text+"'"
		text=text+'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
		text=text+"'></video>"
		add(text)
}

function load_war_map(obj,obj2){
	load_3dlevel(obj,"full","jpg");
	load_monster(obj2,"full","png");
	load_hud()
	load_sense_control(obj,obj2)
}

function load_hud(){
	add('<img src="hud/mech24.png" class="full">')
}


function load_sense_control(obj,obj2){
	add('<div onmousedown=uleft("'+obj+'","'+obj2+'"); class="sleft"></div>');
    add('<div onmousedown=uright("'+obj+'","'+obj2+'");  class="sright"></div>');
}

function uleft(obj,obj2){
	left(obj)
	left2(obj2)
}

function uright(obj,obj2){
	right(obj)
	right2(obj2)
}

function right(modl) {
    a = (ii - 1)
    if (ii == 61) {
        document.getElementById(modl+'60').style.visibility = "hidden";
        document.getElementById(modl+'1').style.visibility = "visible";
        ii = 2;

    } else {
        document.getElementById(modl + a).style.visibility = "hidden";
        document.getElementById(modl + ii).style.visibility = "visible";
        ii++;
        //ii=ii+6;
    }
}

function left(modr) {
    a = (ii - 1)
    if (ii == 1) {
        document.getElementById(modr+'1').style.visibility = "hidden";
        document.getElementById(modr+'60').style.visibility = "visible";
        ii = 60;

    } else {
        document.getElementById(modr + a).style.visibility = "visible";
        document.getElementById(modr + ii).style.visibility = "hidden";
        ii--;
        //ii=ii-6;
    }
}

function right2(modl) {
    aa = (iii - 1)
    if (iii == 61) {
        document.getElementById(modl+'60').style.visibility = "hidden";
        document.getElementById(modl+'1').style.visibility = "visible";
        iii = 2;

    } else {
        document.getElementById(modl + aa).style.visibility = "hidden";
        document.getElementById(modl + iii).style.visibility = "visible";
        iii++;
        //ii=ii+6;
    }
}

function left2(modr) {
    aa = (iii - 1)
    if (iii == 1) {
        document.getElementById(modr+'1').style.visibility = "hidden";
        document.getElementById(modr+'60').style.visibility = "visible";
        iii = 60;

    } else {
        document.getElementById(modr + aa).style.visibility = "visible";
        document.getElementById(modr + iii).style.visibility = "hidden";
        iii--;
        //ii=ii-6;
    }
}


function load_3dlevel(model,st,frm) { //model ïåðåìåííàÿ îáîçíà÷àþùàÿ ïóòü ê ôàéëó ñ 2.5d ìîäåëüþ
    add('<img id="'+ model +'1" src="'+model+'/x (1).'+frm+'" class="'+st+'" style="visibility:visible">') //2.5d ìîæåëü ñîñòîèò èç 360 êàðòèíîê ñ íàçâàíèåì "õ /([íîìåð êàðòèíêè îò 1 äî 360],[ñòèëü êàðòèíêè],[ôîðìàò êàðòèíîê ïðåðåíäåðà â ìîäåëå])"
    for (var i = 2; i <= 60; i++) { 
    add('<img id="'+ model + i + '" src="'+model+'/x (' + i + ').'+frm+'" class="'+st+'" style="visibility:hidden"> ') 
    } //íàçâàíèå ïàïêè åñòü íàçâàíèå 2.5d ìîäåëè
}

function load_monster(model,st,frm) { //model ïåðåìåííàÿ îáîçíà÷àþùàÿ ïóòü ê ôàéëó ñ 2.5d ìîäåëüþ
    add('<img id="'+ model +'1" src="'+model+'/x (1).'+frm+'" class="'+st+'" onclick="hit_monster()" style="visibility:visible">') //2.5d ìîæåëü ñîñòîèò èç 360 êàðòèíîê ñ íàçâàíèåì "õ /([íîìåð êàðòèíêè îò 1 äî 360],[ñòèëü êàðòèíêè],[ôîðìàò êàðòèíîê ïðåðåíäåðà â ìîäåëå])"
    for (var i = 2; i <= 60; i++) { 
    add('<img id="'+ model + i + '" src="'+model+'/x (' + i + ').'+frm+'" class="'+st+'" onclick="hit_monster()" style="visibility:hidden"> ') 
    } //íàçâàíèå ïàïêè åñòü íàçâàíèå 2.5d ìîäåëè
}

function hit_monster(){
	alert('hit_monter')
}