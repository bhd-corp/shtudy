let sun = document.getElementById('sun');
let h1 = document.getElementById('logo');
let bars = document.getElementById('bars');
let cat = document.getElementById('cat');
let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let fri = document.getElementById('fri');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let star = document.getElementById('star');
let rg = document.getElementById('rg');
let ru = document.getElementById('ru');
let rn = document.getElementById('rn');
let t = document.getElementById('t');
let body = document.getElementById('body');
let div = document.getElementById('div');



let uesr = document.getElementById('user');
let g = document.getElementById('g');
let a = document.getElementById('div2');
let q = document.getElementById('rq');



sun.addEventListener('click', function(){
	sun.style.color = '#fff';
	body.style.backgroundColor = '#000';
	bars.style.color = '#fff';
	tue.style.color = '#000';
	uesr.style.color  = '#fff';
	tue.style.backgroundColor = '#fff';
	a.style.border = '5px solid #fff';
	sun.style.color = '#fff';
	q.style.color= '#fff';
	h1.style.color = '#fff';
	g.style.color = '#fff';
	t.style.color = '#fff';
	cat.style.color = '#fff';
	mon.style.color = '#000';
	mon.style.backgroundColor = '#fff';
	wed.style.color = '#000';
	wed.style.backgroundColor = '#fff';
	thu.style.color = '#000';
	thu.style.backgroundColor = '#fff';
	fri.style.color = '#000';
	fri.style.backgroundColor = '#fff';
	ru.style.color = '#fff';
	rg.style.color = '#fff';
	div.style.border = '5px solid #fff';
});


wed.addEventListener('click', function(){
	let ll = document.getElementById('ll');
	let wd = document.getElementById('wd');
	ll.style.display = 'none';
	wd.style.display = 'block';
});

save.addEventListener('click', function(){
	let ll = document.getElementById('ll');
	let wd = document.getElementById('wd');
	ll.style.display = 'block';
	wd.style.display = 'none';
});
thu.addEventListener('click', function(){
	let ll = document.getElementById('ll');
	let wd = document.getElementById('thq');
	ll.style.display = 'none';
	wd.style.display = 'block';
});
let save2 = document.getElementById('save2');
save2.addEventListener('click', function(){
	let ll = document.getElementById('ll');
	let thqq = document.getElementById('thq');
	ll.style.display = 'block';
	thqq.style.display = 'none';
});