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

    "dynamiteLeft1" : document.getElementById('dynamiteLeft1'),
    "dynamiteLeft2" : document.getElementById('dynamiteLeft2'),
    "dynamiteLeft3" : document.getElementById('dynamiteLeft3'),
    "dynamiteLeft4" : document.getElementById('dynamiteLeft4'),

    "mainRoad" : document.getElementById('mainRoad'),

    "fire" : document.getElementById('fire')
}

const operator = {
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

    "eventListeners" : function() {
        model.fire.addEventListener('click', function() {
           console.log('FIRE IN THE HOOOOOLE');
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
        });

        dynamiteLeft1.addEventListener('transitionend', function() {
            console.log(this);
        });

        // model.dynamites.forEach(function(dynamite) {
        //     dynamite.addEventListener('transitionend', function(){
        //         operator.hideDynamites(dynamite);
        //     });
        // });

    }
}

const view = {
    "initDisplay" : function() {
        operator.eventListeners();
    }
}
view.initDisplay();