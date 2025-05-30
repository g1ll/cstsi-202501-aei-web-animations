import simpleParallax from "simple-parallax-js/vanilla";


let images = document.querySelectorAll('.sp1 img');
new simpleParallax(images[0],
    {
        scale: 4,
        orientation: 'left'
    }
);

new simpleParallax(images[1], {
    scale: 3,
    orientation: 'right'
});

new simpleParallax(images[2], {
    orientation: 'down right',
    scale: 2.5,
    delay:.5
});

new simpleParallax(images[3], {
    orientation: 'up left',
    scale: 2
});

let imagesSp2 = document.querySelectorAll('.sp2 img:nth-child(1)');
new simpleParallax(imagesSp2,
    {
        scale: 2,
        orientation: 'down',
        overflow:true
    }
);

new simpleParallax(document.querySelector('.sp2 img:nth-child(2)'),
    {
        scale: 2,
        orientation: 'up',
        overflow:true
    }
);

new simpleParallax(document.querySelector('.sp2 img:nth-child(3)'),
    {
        scale: 2.5,
        orientation: 'down',
        overflow:true
    }
);

new simpleParallax(document.querySelector('.sp2 img:nth-child(4)'),
    {
        scale: 2,
        orientation: 'up',
        overflow:true
    }
);