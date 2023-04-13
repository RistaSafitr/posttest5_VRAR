var container = document.querySelector('#container');
var panorama1 = new PANOLENS.ImagePanorama('images/gambar1.jpg');
var panorama2 = new PANOLENS.ImagePanorama('images/gambar2.jpg');
var panorama3 = new PANOLENS.ImagePanorama('images/gambar3.jpg');
var panorama4 = new PANOLENS.ImagePanorama('images/gambar4.jpg');

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama1, panorama2, panorama3, panorama4);

var textureLoader = new THREE.TextureLoader();

var customInfospot = textureLoader.load('images/next.png', function (){
    var infospot1 = new PANOLENS.Infospot(350, 'images/next.png');
    infospot1.position.set(0, 1500, 3000);
    infospot1.addEventListener('click', function(){
        onButtonClick(panorama2);
    });
    panorama1.add(infospot1);

    var infospot2 = new PANOLENS.Infospot(350, 'images/next.png');
    infospot2.position.set(3000, 0, 0);
    infospot2.addEventListener('click', function(){
        onButtonClick(panorama3);
    });
    panorama2.add(infospot2);

    var infospot3 = new PANOLENS.Infospot(350, 'images/next.png');
    infospot3.position.set(0, 0, 5000);
    infospot3.addEventListener('click', function(){
        onButtonClick(panorama4);
    });
    panorama3.add(infospot3);

    var infospot4 = new PANOLENS.Infospot(350, 'images/next.png');
    infospot4.position.set(-3000, 0, 0);
    infospot4.addEventListener('click', function(){
        onButtonClick(panorama1);
    });
    panorama4.add(infospot4);
});


var bar = document.querySelector( '#bar' );
function onProgressUpdate ( event ) {
    var percentage = event.progress.loaded / event.progress.total * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100){
        bar.classList.add( 'hide' );
        setTimeout(function(){
            bar.style.width = 0;
        }, 1000);
    }
}

function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
}

panorama1.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);
panorama4.addEventListener('progress', onProgressUpdate);
