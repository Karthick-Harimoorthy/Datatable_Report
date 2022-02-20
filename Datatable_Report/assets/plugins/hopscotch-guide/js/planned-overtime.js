var tour = {
    id: 'hello-hopscotch3',
    nextOnTargetClick: true,
    steps: [                          
        {
            target: "groups-tab",
            placement: "bottom",
            title: "Groups",
            content: "Contains all the groups with it's assigned department.",  
            width: 370,
            xOffset: 50,
        },
        {
            target: "users-tab",
            placement: "bottom",
            title: "Users",
            content: "Contains all the users with it's assigned department and group.",
            width: 410,
            xOffset: 50,
        },
        {
            target: "future_overtime_plans",
            placement: "top",
            title: "Future Overtime Plans",
            content: "Displays the start and end time of the available future days.",
            width: 400,
            xOffset: 300,
            yOffset: 20,
            arrowOffset: 200,
        },
        {
            target: "Submit_btn",
            placement: "right",
            title: "Save Changes",
            content: "Used to save the data for the selected group or user.",
            width: 350,
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
  var startBtnId = 'startTourBtn3',
      calloutId = 'startTourCallout3',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch3:') === 0) {
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

