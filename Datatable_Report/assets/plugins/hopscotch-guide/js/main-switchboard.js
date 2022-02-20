var tour = {
    id: 'hello-hopscotch',
    steps: [
        {
            target: "profile_configuration",
            placement: "bottom",
            title: "Profile Configuration",
            content: "Configuration of weekly profiles to be applied to a group to set repeatable work hours weekly.",
        },
        {
            target: "department_configuration",
            placement: "bottom",
            title: "Department Configuration",
            content: "Creation and configuration of groups to set users against and apply a common profile.",
        },
        {
            target: "screen_configuration",
            placement: "bottom",
            title: "Screen Configuration",
            content: "Configuration of Building/Department dashboards, which will be displayed on the shop floor.",
        },
        {
            target: "planned_overtime",
            placement: "bottom",
            title: "Future Work Schedule",
            content: "Page to set the work schedule for groups or users for the three to six-week period from now.",
        },
        {
            target: "future_overtime",
            placement: "bottom",
            title: "Schedule Change",
            content: "Page to modify the planned work and the reason for any group or user for the period of last week up to two-weeks from now.",
        },       
        {
            target: "work_report",
            placement: "bottom",
            title: "Work Report",
            content: "Dashboard to review the last and current week of work vs planned data for all users and groups.",
        }, 
        {
            target: "screen_selection",
            placement: "bottom",
            title: "Screen Selection",
            content: "List of Building/Department dashboards to view 2-week work schedule to be displayed on the shop floor.",
        },
        {
            target: "user_calendar",
            placement: "bottom",
            title: "Calendar",
            content: "Page to select and review the future work schedule of a user or group.",
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
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch:') === 0) {
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

