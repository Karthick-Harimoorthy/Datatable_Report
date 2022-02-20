var tour = {
    id: 'hello-hopscotch11',
    steps: [
        {
            target: "next_14_days_data",
            placement: "top",
            title: "Planned Data",
            content: "List of all groups associated with configured department(s), and the next 14 days of planned work hours for each.",
            width: 650,
            xOffset: 120,
            yOffset: 100,
        },
        {
            target: "next_14_days_data",
            placement: "left",
            title: "Recent plan change",
            content: "If a group’s overtime record has been changed within the last 14 days then the table cell will be highlighted as green.",
            width: 600,
            xOffset: 1130,
            yOffset: -50,
        },
        {
            target: "user_exceptional_list",
            placement: "top",
            title: "User Exception List",
            content: "If any individual team member a part of the currently displayed department(s) has had their planned work hours alter and different from their assigned group in the last 14 days, they will be displayed here.",
            width: 700,
            arrowOffset: 100,
        }
    ],
    showPrevButton: true,
    scrollTopMargin: 100
},

    /* ========== */
    /* TOUR SETUP */
    /* ========== */
    addClickListener = function (el, fn) {
        if (el.addEventListener) {
            el.addEventListener('click', fn, false);
        }
        else {
            el.attachEvent('onclick', fn);
        }
    },

    init = function () {
        var startBtnId = 'startTourBtn11',
            calloutId = 'startTourCallout11',
            mgr = hopscotch.getCalloutManager(),
            state = hopscotch.getState();

        if (state && state.indexOf('hello-hopscotch11:') === 0) {
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

        addClickListener(document.getElementById(startBtnId), function () {
            if (!hopscotch.isActive) {
                mgr.removeAllCallouts();
                hopscotch.startTour(tour);
            }
        });
    };

init();