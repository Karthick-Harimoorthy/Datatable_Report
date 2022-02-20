var tour = {
    id: 'hello-hopscotch10',
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
            target: "AppDataTable",
            placement: "top",
            title: "Work Report Data",
            content: "Displays the list of users with their work data for last and current week.",
            width: 450,
            xOffset: 300,
            yOffset: -50,
            arrowOffset: 225,
        },
        {
            target: "AppDataTable",
            placement: "top",
            title: "Child Data",
            content: "Clicking on + will show the planned and clock start and end time for last and current week.",
            width: 320,       
            xOffset: -8,
        },
        {
            target: "legend",
            placement: "left",
            title: "Legend Data",
            content: "Hovering on it will display the legends.",
            xOffset: 725,
            yOffset: -17,
        },        
        {
            target: "AppDataTable",
            placement: "top",
            title: "Searchpane Filters",
            content: "Contains filters of previous work diff and total diff with zero and non-zero as filters.",
            width: 350,
            xOffset: 300,
            yOffset: -350,
            arrowOffset: 175,
        },
        {
            target: "clear_column_filters",
            placement: "left",
            title: "Clear All",
            content: "Clears all the selected filter(s) in searchpane.",
            width: 310,
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
      calloutId = 'startTourCallout10',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch10:') === 0) {
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

