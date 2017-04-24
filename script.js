const model = {
    "lineLeftBottom" : document.getElementById('lineLeftBottom'),
    "lineLeftTop" : document.getElementById('lineLeftTop'),
    "lineRightBottom" : document.getElementById('lineRightBottom'),
    "lineRightTop" : document.getElementById('lineRightTop'),
    "dynamites" : Array.from(document.getElementsByClassName('dynamite')),
    "dynamitesTop1" : Array.from(document.getElementsByClassName('dynamite--top-1')),
    "dynamitesTop2" : Array.from(document.getElementsByClassName('dynamite--top-2')),
    "dynamitesTop3" : Array.from(document.getElementsByClassName('dynamite--top-3')),
    "dynamitesTop4" : Array.from(document.getElementsByClassName('dynamite--top-4')),
    "mainRoad" : document.getElementById('mainRoad'),
    "stickVertical" : document.getElementById('stickVertical'),
    "stickHorizontal" : document.getElementById('stickHorizontal'),
    "fire" : document.getElementById('fire')
}

const operator = {
    "pushStick" : function() {
        model.stickVertical.style.top = "-3px";
        model.stickHorizontal.style.top = "-20px";
    },
    "fireDynamites" : function(dynamites) {
        dynamites.forEach(function(dynamite) {
            dynamite.classList.add('boom');
            operator.hideDynamites(dynamite);
        }, this);
    },
    "hideDynamites" : function(dynamite) {
        setTimeout(function() {
            dynamite.classList.add('hide');
        }, 100);
    },
    "demolishBridge" : function() {
        model.mainRoad.style.top = '395px';
        model.lineLeftBottom.style.top = '350px';
        model.lineRightBottom.style.top = '350px';

        model.lineLeftTop.style.top = '350px';
        model.lineRightTop.style.top = '350px';
    },
    "eventListeners" : function() {
        model.fire.addEventListener('click', function() {
           console.log('FIRE IN THE HOOOOOLE');
           operator.pushStick();
           operator.fireDynamites(model.dynamitesTop4);
           setTimeout(function() {
                operator.fireDynamites(model.dynamitesTop3);
           }, 100);
           setTimeout(function() {
                operator.fireDynamites(model.dynamitesTop2);
           }, 200);
           setTimeout(function() {
                operator.fireDynamites(model.dynamitesTop1);
           }, 300);
           setTimeout(function() {
                operator.demolishBridge();
           }, 300);
        });
    }
}

const view = {
    "initDisplay" : function() {
        operator.eventListeners();
    }
}
view.initDisplay();