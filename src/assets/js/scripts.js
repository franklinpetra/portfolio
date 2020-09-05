 
/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing //
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked //
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll //
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar //
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top //
    navbarCollapse();
    // Collapse the navbar when page is scrolled //
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict //

    // This is the creation of a ball that follows the mouse //
        var canvas = document.querySelector("#myCanvas");
        var context = canvas.getContext("2d");

        var mouseX = 0;
        var mouseY = 0;

        canvas.addEventListener("mousemove", setMousePosition, false);

        function setMousePosition(e) {
            var canvasPos = getPosition(canvas);
            mouseX = e.clientX - canvasPos.x;
            mouseY = e.clientY - canvasPos.y;
        }       

        function update() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
            context.fillStyle = "#FF6A6A";
            context.fill();
            
            requestAnimationFrame(update);
        }
        update()

        function getPosition(el) {
            var xPosition = 0;
            var yPosition = 0;

        while (el) {
            xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            el = el.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
        }       
    // 30,000 particles by Justin Winbdle //
    var NUM_PARTICLES = ( ( ROWS = 100 ) * ( COLS = 300 ) ),
    THICKNESS = Math.pow( 80, 2 ),
    SPACING = 3,
    MARGIN = 100,
    COLOR = 220,
    DRAG = 0.95,
    EASE = 0.25,
    
    /*
    
    used for sine approximation, but Math.sin in Chrome is still fast enough :)http://jsperf.com/math-sin-vs-sine-approximation

    B = 4 / Math.PI,
    C = -4 / Math.pow( Math.PI, 2 ),
    P = 0.225,

    */

    container,
    particle,
    canvas,
    mouse,
    stats,
    list,
    ctx,
    tog,
    man,
    dx, dy,
    mx, my,
    d, t, f,
    a, b,
    i, n,
    w, h,
    p, s,
    r, c
    ;

particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0
};

function init() {

  container = document.getElementById( 'container' );
  canvas = document.createElement( 'canvas' );
  
  ctx = canvas.getContext( '2d' );
  man = false;
  tog = true;
  
  list = [];
  
  w = canvas.width = COLS * SPACING + MARGIN * 2;
  h = canvas.height = ROWS * SPACING + MARGIN * 2;
  
  container.style.marginLeft = Math.round( w * -0.5 ) + 'px';
  container.style.marginTop = Math.round( h * -0.5 ) + 'px';
  
  for ( i = 0; i < NUM_PARTICLES; i++ ) {
    
    p = Object.create( particle );
    p.x = p.ox = MARGIN + SPACING * ( i % COLS );
    p.y = p.oy = MARGIN + SPACING * Math.floor( i / COLS );
    
    list[i] = p;
  }

  container.addEventListener( 'mousemove', function(e) {

    bounds = container.getBoundingClientRect();
    mx = e.clientX - bounds.left;
    my = e.clientY - bounds.top;
    man = true;
    
  });
  
  if ( typeof Stats === 'function' ) {
    document.body.appendChild( ( stats = new Stats() ).domElement );
  }
  
  container.appendChild( canvas );
}

function step() {

  if ( stats ) stats.begin();

  if ( tog = !tog ) {

    if ( !man ) {

      t = +new Date() * 0.001;
      mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
      my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
    }
      
    for ( i = 0; i < NUM_PARTICLES; i++ ) {
      
      p = list[i];
      
      d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
      f = -THICKNESS / d;

      if ( d < THICKNESS ) {
        t = Math.atan2( dy, dx );
        p.vx += f * Math.cos(t);
        p.vy += f * Math.sin(t);
      }

      p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
      p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

    }

  } else {

    b = ( a = ctx.createImageData( w, h ) ).data;

    for ( i = 0; i < NUM_PARTICLES; i++ ) {

      p = list[i];
      b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = COLOR, b[n+3] = 255;
    }

    ctx.putImageData( a, 0, 0 );
  }

  if ( stats ) stats.end();

  requestAnimationFrame( step );
}

init();
step();