function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'skills/member.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'skillsMember',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}