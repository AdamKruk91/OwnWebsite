var big_photo = document.getElementById('big_photo');

var miniature = document.getElementById('miniature');

miniature.onclick = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    while(target != this) {

        if (target.nodeName == 'A') {
            ShowMiniatures(target.href, target.title);
            return false;
        }

        target = target.parentNode;
    }
}

function ShowMiniatures(href, title) {
    big_photo.src = href;
    big_photo.alt = title;
}

var imgs = miniature.getElementsByTagName('img');

for(var i=0; i<imgs.length; i++) {
    var url = imgs[i].parentNode.href;
    var img = document.createElement('img');
    img.src = url;
}