var tour = {
    id: 'hello-hopscotch1',
    steps: [                          
        {
            target: "screen_selection_data",
            placement: "bottom",
            title: "Screen Selection",
            content: "List of buttons based on the screens currently configured.",
            yOffset: -30,
            xOffset: 120,
        },
        {
            target: "screen_selection_data",
            placement: "bottom",
            title: "Screen Selection",
            content: "The top text is the name of the screen while the bottom text is a list of all departments found on the screen.",
            yOffset: -30,
            xOffset: 120,
        }       
    ],
    showPrevButton: true,
    scrollTopMargin: 100
},

/* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},

init = function() {
  var startBtnId = 'startTourBtn1',
      calloutId = 'startTourCallout1',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

    if (state && state.indexOf('hello-hopscotch1:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(tour);
  }
  else {
    // Looking at the page for the first(?) time.
    //setTimeout(function() {
    //  mgr.createCallout({
    //    id: calloutId,
    //    target: startBtnId,
    //    placement: 'right',
    //    title: 'Take a tour',
    //    content: 'Start by taking a tour!',
    //    yOffset: -25,
    //    arrowOffset: 20,
    //    width: 240
    //  });
    //}, 100);
  }

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });
};

init();

