var tour = {
    id: 'hello-hopscotch8',
    steps: [                          
        {
            target: "UserDD",
            placement: "bottom",
            title: "User List",
            content: "Contains list of all users.", 
            width: 200,
            arrowOffset: 100,
        },
        {
            target: "GroupDD",
            placement: "bottom",
            title: "Group List",
            content: "Contains list of all the different groups.",
            arrowOffset: 100,
        },
        {
            target: "submit",
            placement: "right",
            title: "Submit",
            content: "Redirects to calendar view page with the selected user or group.",
            xOffset: 15,
            yOffset: -30,
            arrowOffset: 40,
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
  var startBtnId = 'startTourBtn8',
      calloutId = 'startTourCallout8',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch8:') === 0) {
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

