var Illustractions = (function($) {

  var attachActions = function(actions) {

    $.each(actions, function(trigger, target) {

      // Extract the triggers and targets from the configuration. The format is:
      //   '[event] #[elementId]': '[event] #[elementId]'
      var triggerEvent = trigger.split(' ')[0];
      var triggerElement = trigger.split(' ')[1];
      var targetAction = target.split(' ')[0];
      var targetElement = target.split(' ')[1];

      // Attach the target actions to the trigger elements. Something like:
      //   $('#button').on('click', function() { $('#modal')['show'](); });
      $(triggerElement).on(triggerEvent, function() {
        $(targetElement)[targetAction]();
      });

    });

  };

  var init = function(image, actions) {

    // Retrieve the image and inject it into the selected element(s).
    $.get(image, function(data) {
      $(document.body).append(data.documentElement);
      attachActions(actions);
    });

  };

  return { init: init };

}(jQuery));
