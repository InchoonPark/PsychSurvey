Session.setDefault("questions", "IEQuestions");
Template.registerHelper("questions", function() {
  return Session.get("questions");
});
