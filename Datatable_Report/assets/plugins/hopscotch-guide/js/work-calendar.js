var tour = {
    id: 'hello-hopscotch9',
    steps: [                          
        {
            target: "todta_btn",
            placement: "left",
            title: "Today Button",
            content: "It shows current month data in calendar view.",   
            width: 310,
            yOffset: -10,
        },
        {
            target: "Calendar1",
            placement: "bottom",
            title: "Calendar View",
            content: "Displays the selected user or group's current month shift details.",
            width: 420,
            xOffset: 550,
            arrowOffset: 210,
        },
        {
            target: "Calendar1",
            placement: "bottom",
            title: "Calendar View",
            content: "Displays the month and year.",
            width: 220,
            xOffset: 650,
            yOffset: -420,
            arrowOffset: 110,
        },
        {
            target: "Calendar1",
            placement: "right",
            title: "Previous Month",
            content: "Previous arrow shows the previous month data in calendar.",
            width: 390,
            xOffset: -1490,
            yOffset: -10,
        },
        {
            target: "Calendar1",
            placement: "left",
            title: "Next Month",
            content: "Next arrow shows the next month data in calendar.",
            width: 340,
            xOffset: 1490,
            yOffset: -10,
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
  var startBtnId = 'startTourBtn',
      calloutId = 'startTourCallout9',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

    if (state && state.indexOf('hello-hopscotch9:') === 0) {        
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

