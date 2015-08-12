angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'home/modal/preview.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div> My other page </div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"col-md-3\">\n" +
    "  <h3>Widgets</h3>\n" +
    "  <button class=\"btn btn-primary btn-block\" ng-click=\"addRadio()\">Radio</button>\n" +
    "  <button class=\"btn btn-primary btn-block\" ng-click=\"addCheckbox()\">Checkbox</button>\n" +
    "</div>\n" +
    "<div class=\"col-md-9\">\n" +
    "  <div>\n" +
    "    <button class=\"btn btn-default btn-lg pull-right\" ng-click='preview()'>Preview</button>\n" +
    "    <h2>Survey Title: <input type=\"input\" ng-model='surveyTitle'></h2>\n" +
    "  </div>\n" +
    "  <div ng-repeat='widget in widgets' class=\"well well-lg\">\n" +
    "    <span class=\"glyphicon glyphicon-remove-sign pull-right\" ng-click=\"remove($index)\"></span>\n" +
    "    <div>Type: {{widget.type | uppercase}}</div>\n" +
    "    <input class='form-control' type=\"input\" ng-model='widget.question' placeholder=\"What question would you like to ask?\">\n" +
    "    <input class='form-control' type=\"input\" ng-model='widget.options'placeholder=\"Enter a comma seperated list of options\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/modal/preview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/modal/preview.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <h3 class=\"modal-title\">{{surveyTitle}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div ng-repeat='widget in widgets' class=\"well well-lg\" ng-if=\"isShowWorthy(widget)\">\n" +
    "    <h6>{{widget.question}}</h6>\n" +
    "    <div class=\"{{widget.type}}\" ng-repeat='item in splitOptions(widget.options)'>\n" +
    "      <label>\n" +
    "        <input type=\"{{widget.type}}\" name=\"{{$parent.$index}}\">\n" +
    "        {{item}}\n" +
    "      </label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Close</button>\n" +
    "</div>\n" +
    "");
}]);
