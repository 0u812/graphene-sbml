angular.module('sg.graphene.sbml.templates', ['templates/context-menus.html', 'templates/details.html', 'templates/sbml.html', 'templates/toolbar.html']);

angular.module('templates/context-menus.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/context-menus.html',
    '<div ng-repeat="node in model.nodes.species" class="dropdown position-fixed" id="speciesMenu{{node.id}}">\n' +
    '  <ul class="dropdown-menu" role="menu">\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="1" ng-click="node.fixed = !node.fixed">Lock/Unlock Species</a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="1" ng-click="node.model.makeAliasNode(node)">Create Alias Node</a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="2" ng-click="node.delete()">Delete Species</a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '<div ng-repeat="node in model.nodes.alias" class="dropdown position-fixed" id="aliasMenu{{node.id}}">\n' +
    '  <ul class="dropdown-menu" role="menu">\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="1" ng-click="node.fixed = !node.fixed">Lock/Unlock Alias</a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="2" ng-click="node.delete()">Delete Alias</a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '<div ng-repeat="node in model.nodes.reactions" class="dropdown position-fixed" id="reactionMenu{{node.id}}">\n' +
    '  <ul class="dropdown-menu" role="menu">\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="1" ng-click="node.fixed = !node.fixed">Lock/Unlock Reaction</a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="2" ng-click="node.delete()">Delete Reaction</a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '');
}]);

angular.module('templates/details.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/details.html',
    '<form class="form-horizontal" role="form">\n' +
    '  <h4>Details</h4>\n' +
    '  <div class="form-group">\n' +
    '    <div class="row">\n' +
    '      <label class="col-sm-4 control-label">ID:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.data._id"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <label class="col-sm-4 control-label">Name:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.data._name"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <h4>Display</h4>\n' +
    '  <div class="form-group">\n' +
    '    <div class="row">\n' +
    '      <label class="col-sm-4 control-label">Stroke:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <spectrum-colorpicker format="hex" ng-model="AppState.selected.display.stroke"></spectrum-colorpicker>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <label class="col-sm-4 control-label">Stroke-Width:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.display.strokeWidth"></input>\n' +
    '        <input type="range" min="0" max="10" ng-model="AppState.selected.display.strokeWidth"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row" ng-if="!AppState.selected.data._id">\n' +
    '      <label class="col-sm-4 control-label">Font-Size:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.display.text.size"></input>\n' +
    '        <input type="range" min="5" max="30" ng-model="AppState.selected.display.text.size"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row" ng-if="!AppState.selected.data._id">\n' +
    '      <label class="col-sm-4 control-label">Font:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.display.text.font"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row" ng-if="!AppState.selected.centroid">\n' +
    '      <label class="col-sm-4 control-label">Gradient Start:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <spectrum-colorpicker format="hex" ng-model="AppState.selected.display.gradient.start"></spectrum-colorpicker>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row" ng-if="!AppState.selected.centroid">\n' +
    '      <label class="col-sm-4 control-label">Gradient Stop:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <spectrum-colorpicker format="hex" ng-model="AppState.selected.display.gradient.stop"></spectrum-colorpicker>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('templates/sbml.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/sbml.html',
    '<div ng-controller="SbmlLayoutCtrl">\n' +
    '  <div class="row" ng-include="\'templates/toolbar.html\'">\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <ng-include src="\'templates/context-menus.html\'"></ng-include>\n' +
    '    <div ng-class="{\'col-sm-9\': AppState.selected.id, \'col-sm-12\': !AppState.selected.id}" class="well">\n' +
    '      <svg\n' +
    '        zoomable="AppState.zoom"\n' +
    '        xmlns="http://www.w3.org/2000/svg"\n' +
    '        ng-attr-height="{{imports.height || \'800px\'}}"\n' +
    '        ng-attr-width="{{imports.width || \'100%\'}}"\n' +
    '        ng-click="clickHandler($event);"\n' +
    '        >\n' +
    '        <style>\n' +
    '        svg .node.species {\n' +
    '          stroke: #FFB800;\n' +
    '        }\n' +
    '        svg .link {\n' +
    '          stroke: black;\n' +
    '          stroke-width: 3px;\n' +
    '        }\n' +
    '        svg .link.modifier {\n' +
    '          stroke-dasharray: 5, 5;\n' +
    '        }\n' +
    '        /*\n' +
    '        svg .link.selected {\n' +
    '          stroke: #FF0000;\n' +
    '        }*/\n' +
    '        svg marker {\n' +
    '          overflow: visible;\n' +
    '        }\n' +
    '        svg .null-symbol {\n' +
    '          fill: none;\n' +
    '          stroke: black;\n' +
    '          stroke-width: 3px;\n' +
    '        }\n' +
    '        </style>\n' +
    '        <defs>\n' +
    '          <marker\n' +
    '            case-sensitive="refX,refY" \n' +
    '            id="production" \n' +
    '            viewBox="0 0 10 10" \n' +
    '            ng-attr-refX="{{-2}}"\n' +
    '            ng-attr-refY="{{0}}" \n' +
    '            markerWidth="10" \n' +
    '            markerHeight="10" \n' +
    '            orient="auto">\n' +
    '            <path \n' +
    '              fill="url({{$window.location.href}}#markerGradient)" \n' +
    '              stroke="#0013FF" \n' +
    '              transform="rotate(-90)" \n' +
    '              ng-attr-d="{{sgGeo.arrow({size: 10, type: \'triangle-down\'})}}">\n' +
    '            </path>\n' +
    '          </marker>\n' +
    '          <marker \n' +
    '            case-sensitive="refX,refY" \n' +
    '            id="degradation" \n' +
    '            viewBox="0 0 10 10" \n' +
    '            ng-attr-refX="{{-2}}"\n' +
    '            ng-attr-refY="{{0}}" \n' +
    '            markerWidth="10" \n' +
    '            markerHeight="10" \n' +
    '            orient="auto">\n' +
    '            <path \n' +
    '              fill="url({{$window.location.href}}#markerGradient)" \n' +
    '              stroke="#0013FF" \n' +
    '              transform="rotate(-90)" \n' +
    '              ng-attr-d="{{sgGeo.arrow({size: 10, type: \'triangle-down\'})}}"></path>\n' +
    '          </marker>\n' +
    '          <marker \n' +
    '            case-sensitive="refX,refY" \n' +
    '            id="modifier" \n' +
    '            viewBox="0 0 10 10" \n' +
    '            markerWidth="30"\n' +
    '            markerHeight="30" \n' +
    '            ng-attr-refX="{{-0.4}}" \n' +
    '            ng-attr-refY="{{0}}" \n' +
    '            orient="auto">\n' +
    '            <path \n' +
    '              stroke="black" \n' +
    '              stroke-width="0.3" \n' +
    '              fill="none" \n' +
    '              ng-attr-d="{{sgGeo.arrow({size: 1, type: \'circle\'})}}">\n' +
    '            </path>\n' +
    '          </marker>\n' +
    '          <linearGradient ng-repeat="node in model.nodes.species" id="speciesGradient-{{node.id}}">\n' +
    '            <stop offset="5%" ng-attr-stop-color="{{node.display.gradient.start}}"></stop>\n' +
    '            <stop offset="95%" ng-attr-stop-color="{{node.display.gradient.stop}}"></stop>\n' +
    '          </linearGradient>\n' +
    '          <linearGradient ng-repeat="node in model.nodes.alias" id="aliasGradient-{{node.id}}">\n' +
    '            <stop offset="5%" ng-attr-stop-color="{{node.display.gradient.start}}"></stop>\n' +
    '            <stop offset="95%" ng-attr-stop-color="{{node.display.gradient.stop}}"></stop>\n' +
    '          </linearGradient>\n' +
    '          <linearGradient id="markerGradient">\n' +
    '            <stop offset="5%" stop-color="rgb(97, 116, 255)"></stop>\n' +
    '            <stop offset="95%" stop-color="#FFF"></stop>\n' +
    '          </linearGradient>\n' +
    '        </defs>\n' +
    '        <g ng-attr-transform="translate({{translate.x || 0}}, {{translate.y || 0}})scale({{scale || 1}})">\n' +
    '          <g \n' +
    '            class="link"\n' +
    '            ng-repeat="link in model.links.product"\n' +
    '            context-menu\n' +
    '            data-target="reactionMenu{{link.reaction.id}}"\n' +
    '            >\n' +
    '            <path\n' +
    '              class="pointer"\n' +
    '              ng-click="clickHandler(link.reaction, $event)"\n' +
    '              ng-attr-d="\n' +
    '                M {{link.x1}} {{link.y1}}\n' +
    '                C\n' +
    '                {{link.reaction.getCp(2).x}} {{link.reaction.getCp(2).y}}\n' +
    '                {{link.cp2.x}} {{link.cp2.y}}\n' +
    '                {{link.x2}} {{link.y2}}\n' +
    '              "\n' +
    '              marker-end="url({{$window.location.href}}#production)"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-stroke="{{link.reaction.display.stroke}}"\n' +
    '              ng-attr-stroke-width="{{link.reaction.display.strokeWidth}}"\n' +
    '              fill="none"\n' +
    '            />\n' +
    '            <g\n' +
    '              ng-if="link.reaction.selected"\n' +
    '            >\n' +
    '              <line\n' +
    '                stroke="red"\n' +
    '                stroke-dasharray="1, 1"\n' +
    '                ng-attr-x1="{{link.x2}}"\n' +
    '                ng-attr-y1="{{link.y2}}"\n' +
    '                ng-attr-x2="{{link.cp2.x}}"\n' +
    '                ng-attr-y2="{{link.cp2.y}}"\n' +
    '              />\n' +
    '              <circle\n' +
    '                stroke="red"\n' +
    '                ng-attr-cx="{{link.cp2.x}}"\n' +
    '                ng-attr-cy="{{link.cp2.y}}"\n' +
    '                ng-attr-r="{{7}}"\n' +
    '                fill="white"\n' +
    '                sg-drag\n' +
    '                sg-drag-begin="link.cp2"\n' +
    '                sg-drag-move="_.bind(link.updateCp2, link)"\n' +
    '                style="cursor: pointer;"\n' +
    '              />\n' +
    '            </g>\n' +
    '            <line\n' +
    '              ng-if="false"\n' +
    '              class="reaction production link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              marker-end="url({{$window.location.href}}#production)"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}"\n' +
    '              ng-attr-x2="{{link.x2}}"\n' +
    '              ng-attr-y2="{{link.y2}}">\n' +
    '            </line>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            class="link pointer"\n' +
    '            ng-repeat="link in model.links.reactant" \n' +
    '            context-menu\n' +
    '            data-target="reactionMenu{{link.reaction.id}}"\n' +
    '          >\n' +
    '            <path\n' +
    '              class="pointer"\n' +
    '              ng-click="clickHandler(link.reaction, $event)"\n' +
    '              ng-attr-d="\n' +
    '                M {{link.x1}} {{link.y1}}\n' +
    '                C \n' +
    '                {{link.cp1.x}} {{link.cp1.y}}\n' +
    '                {{link.reaction.getCp(1).x}} {{link.reaction.getCp(1).y}}\n' +
    '                {{link.x2}} {{link.y2}}\n' +
    '              "\n' +
    '              fill="none"\n' +
    '              ng-attr-stroke="{{link.reaction.display.stroke}}"\n' +
    '              ng-attr-stroke-width="{{link.reaction.display.strokeWidth}}"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '            />\n' +
    '            <g\n' +
    '              ng-if="link.reaction.selected"\n' +
    '            >\n' +
    '              <line\n' +
    '                stroke="red"\n' +
    '                stroke-dasharray="1, 1"\n' +
    '                ng-attr-x1="{{link.x1}}"\n' +
    '                ng-attr-y1="{{link.y1}}"\n' +
    '                ng-attr-x2="{{link.cp1.x}}"\n' +
    '                ng-attr-y2="{{link.cp1.y}}"\n' +
    '              />\n' +
    '              <circle\n' +
    '                stroke="red"\n' +
    '                ng-attr-cx="{{link.cp1.x}}"\n' +
    '                ng-attr-cy="{{link.cp1.y}}"\n' +
    '                ng-attr-r="{{7}}"\n' +
    '                fill="white"\n' +
    '                sg-drag\n' +
    '                sg-drag-begin="link.cp1"\n' +
    '                sg-drag-move="_.bind(link.updateCp1, link)"\n' +
    '                style="cursor: pointer;"\n' +
    '              />\n' +
    '            </g>\n' +
    '            <line \n' +
    '              ng-if="false"\n' +
    '              ng-class="{selected: isSelected}"\n' +
    '              class="reaction reactant link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}"\n' +
    '              ng-attr-x2="{{link.x2}}"\n' +
    '              ng-attr-y2="{{link.y2}}">\n' +
    '            </line>\n' +
    '          </g>\n' +
    '          <g ng-repeat="link in lines.modifier">\n' +
    '            <path \n' +
    '              class="modifier link" \n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-d={{sgGeo.linkArc(link)}}\n' +
    '              fill="none"\n' +
    '              ></path>\n' +
    '            <line \n' +
    '              ng-class="{selected: isSelected}" \n' +
    '              class="modifier link" \n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}" \n' +
    '              ng-attr-x2="{{link.x2}}" \n' +
    '              ng-attr-y2="{{link.y2}}"\n' +
    '              marker-end="url({{$window.location.href}}#modifier)">\n' +
    '            </line>\n' +
    '          </g>\n' +
    '          <g\n' +
    '            ng-repeat="link in lines.source" \n' +
    '            >\n' +
    '            <path \n' +
    '              class="source link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-d={{linkArc(link)}}\n' +
    '              fill="none"\n' +
    '              ></path>\n' +
    '            <line\n' +
    '              class="source link"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}" \n' +
    '              ng-attr-x2="{{link.x2}}" \n' +
    '              ng-attr-y2="{{link.y2}}"></line>\n' +
    '          </g>\n' +
    '          <g\n' +
    '            ng-repeat="link in lines.sink"\n' +
    '            >\n' +
    '            <path \n' +
    '              class="sink link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-d={{linkArc(link)}}\n' +
    '              fill="none"\n' +
    '              ></path>\n' +
    '            <line\n' +
    '              class="sink link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}" \n' +
    '              ng-attr-x2="{{link.x2}}" \n' +
    '              ng-attr-y2="{{link.y2}}"\n' +
    '              marker-end="url({{$window.location.href}}#production)"></line>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            sg-drag\n' +
    '            sg-drag-begin="node"\n' +
    '            sg-drag-move="_.bind(node.updatePosition, node)"\n' +
    '            sg-drag-finish="_.bind(node.model.broadcast, node.model)"\n' +
    '            ng-repeat="node in model.nodes.species"\n' +
    '            context-menu\n' +
    '            data-target="speciesMenu{{node.id}}"\n' +
    '            ng-click="clickHandler(node, $event)"\n' +
    '            ng-attr-opacity="{{node.opacity}}"\n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})"\n' +
    '            style="cursor: move;"\n' +
    '            >\n' +
    '            <rect \n' +
    '              ng-attr-stroke="{{node.display.stroke}}"\n' +
    '              ng-attr-stroke-width="{{node.display.strokeWidth}}"\n' +
    '              ng-attr-x="{{-node.width/2}}"\n' +
    '              ng-attr-y="{{-node.height/2}}"\n' +
    '              ng-attr-width="{{node.width}}" \n' +
    '              ng-attr-height="{{node.height}}"\n' +
    '              ng-attr-ry="{{node.height/2}}"\n' +
    '              ng-attr-fill="url({{$window.location.href}}#speciesGradient-{{node.id}})"\n' +
    '              >\n' +
    '            </rect>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x - node.width/2, y: node.y}" sg-drag-move="_.bind(node.resizeWidthLeft, node)" sg-drag-finish="_.bind(node.model.broadcast, node.model)" ng-attr-x1="{{-node.width/2}}" ng-attr-y1="{{-node.height/2 - 2.5}}" ng-attr-x2="{{-node.width/2}}" ng-attr-y2="{{node.height/2 + 2.5}}" stroke="red" stroke-width="5px" style="cursor: ew-resize;"></line>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x + node.width/2, y: node.y}" sg-drag-move="_.bind(node.resizeWidthRight, node)" sg-drag-finish="_.bind(node.model.broadcast, node.model)" ng-attr-x1="{{node.width/2}}" ng-attr-y1="{{-node.height/2 - 2.5}}" ng-attr-x2="{{node.width/2}}" ng-attr-y2="{{node.height/2 + 2.5}}" stroke="red" stroke-width="5px" style="cursor: ew-resize;"></line>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x, y: node.y - node.height/2}" sg-drag-move="_.bind(node.resizeHeightBottom, node)" sg-drag-finish="_.bind(node.model.broadcast, node.model)" ng-attr-x1="{{-node.width/2}}" ng-attr-y1="{{-node.height/2}}" ng-attr-x2="{{node.width/2}}" ng-attr-y2="{{-node.height/2}}" stroke="red" stroke-width="5px" style="cursor: ns-resize;"></line>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x, y: node.y + node.height/2}" sg-drag-move="_.bind(node.resizeHeightTop, node)" sg-drag-finish="_.bind(node.model.broadcast, node.model)" ng-attr-x1="{{-node.width/2}}" ng-attr-y1="{{node.height/2}}" ng-attr-x2="{{node.width/2}}" ng-attr-y2="{{node.height/2}}" stroke="red" stroke-width="5px" style="cursor: ns-resize;"></line>\n' +
    '            <g\n' +
    '              ng-if="node.fixed"\n' +
    '              ng-attr-transform="translate({{node.width/2}},{{-node.height/2}}) scale(0.005)"\n' +
    '            >\n' +
    '              <path d="M448 1568v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68zm320-672h512v-192q0-106-75-181t-181-75-181 75-75 181v192z"/>\n' +
    '            </g>\n' +
    '            <text\n' +
    '              ng-attr-style="\n' +
    '                font-size: {{node.display.text.size}}px;\n' +
    '                font-family: {{node.display.text.font}};\n' +
    '                font-weight: bolder;\n' +
    '                text-anchor: middle;\n' +
    '                dominant-baseline: middle;\n' +
    '              "\n' +
    '            >{{node.data._name || node.data._id | truncateTo:100}}</text>\n' +
    '            <title>ID: {{node.id}}, Name: {{node.name}}</title>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            sg-drag\n' +
    '            sg-drag-begin="node"\n' +
    '            sg-drag-move="_.bind(node.updatePosition, node)"\n' +
    '            sg-drag-finish="_.bind(node.model.broadcast, node.model)"\n' +
    '            ng-repeat="node in model.nodes.alias"\n' +
    '            context-menu\n' +
    '            data-target="aliasMenu{{node.id}}"\n' +
    '            ng-click="clickHandler(node, $event)"\n' +
    '            ng-attr-opacity="{{node.opacity}}"\n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})"\n' +
    '            style="cursor: move;"\n' +
    '            >\n' +
    '            <rect \n' +
    '              style="\n' +
    '                stroke-width: 3px;\n' +
    '                size: 300px;\n' +
    '              "\n' +
    '              ng-attr-stroke="{{node.display.stroke}}";\n' +
    '              ng-attr-x="{{-node.width/2}}"\n' +
    '              ng-attr-y="{{-node.height/2}}"\n' +
    '              ng-attr-width="{{node.width}}" \n' +
    '              ng-attr-height="{{node.height}}"\n' +
    '              ng-attr-ry="{{node.height/2}}"\n' +
    '              ng-attr-fill="url({{$window.location.href}}#aliasGradient-{{node.id}})"\n' +
    '              >\n' +
    '            </rect>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x - node.width/2, y: node.y}" sg-drag-move="_.bind(node.resizeWidthLeft, node)" sg-drag-finish="_.bind(node.model.broadcast, node.model)" ng-attr-x1="{{-node.width/2}}" ng-attr-y1="{{-node.height/2 - 2.5}}" ng-attr-x2="{{-node.width/2}}" ng-attr-y2="{{node.height/2 + 2.5}}" stroke="red" stroke-width="5px" style="cursor: ew-resize;"></line>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x + node.width/2, y: node.y}" sg-drag-move="_.bind(node.resizeWidthRight, node)" sg-drag-finish="_.bind(node.model.broadcast, node.model)" ng-attr-x1="{{node.width/2}}" ng-attr-y1="{{-node.height/2 - 2.5}}" ng-attr-x2="{{node.width/2}}" ng-attr-y2="{{node.height/2 + 2.5}}" stroke="red" stroke-width="5px" style="cursor: ew-resize;"></line>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x, y: node.y - node.height/2}" sg-drag-move="_.bind(node.resizeHeightBottom, node)" sg-drag-finish="_.bind(node.model.broadcast, node.model)" ng-attr-x1="{{-node.width/2}}" ng-attr-y1="{{-node.height/2}}" ng-attr-x2="{{node.width/2}}" ng-attr-y2="{{-node.height/2}}" stroke="red" stroke-width="5px" style="cursor: ns-resize;"></line>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x, y: node.y + node.height/2}" sg-drag-move="_.bind(node.resizeHeightTop, node)" sg-drag-finish="_.bind(node.model.broadcast, node.model)" ng-attr-x1="{{-node.width/2}}" ng-attr-y1="{{node.height/2}}" ng-attr-x2="{{node.width/2}}" ng-attr-y2="{{node.height/2}}" stroke="red" stroke-width="5px" style="cursor: ns-resize;"></line>\n' +
    '            <g\n' +
    '              ng-if="node.fixed"\n' +
    '              ng-attr-transform="translate({{node.width/2}},{{-node.height/2}}) scale(0.005)"\n' +
    '            >\n' +
    '              <path d="M448 1568v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68zm320-672h512v-192q0-106-75-181t-181-75-181 75-75 181v192z"/>\n' +
    '            </g>\n' +
    '            <text\n' +
    '              ng-attr-style="\n' +
    '                font-size: {{node.display.text.size}}px;\n' +
    '                font-family: {{node.display.text.font}};\n' +
    '                font-weight: bolder;\n' +
    '                text-anchor: middle;\n' +
    '                dominant-baseline: middle;\n' +
    '              "\n' +
    '            >{{node.aliasOf.data._name || node.aliasOf.data._id}}</text>\n' +
    '            <title>ID: {{node.id}}, Name: {{node.name}}</title>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            draggable \n' +
    '            ng-repeat="node in model.nodes.reactions" \n' +
    '            context-menu\n' +
    '            data-target="reactionMenu{{node.id}}"\n' +
    '          >\n' +
    '            <circle \n' +
    '              ng-class="node.classes" \n' +
    '              class="node" \n' +
    '              ng-attr-r="{{4}}"\n' +
    '              fill="black" \n' +
    '              stroke="black"\n' +
    '              ng-attr-opacity="{{imports.showReactionNodes ? 1 : 0}}"\n' +
    '              ng-attr-transform="translate({{node.x}},{{node.y}})"\n' +
    '              >\n' +
    '              <title>ID: {{node.id}}, Name: {{node.name}}</title>\n' +
    '            </circle>\n' +
    '            <g\n' +
    '              ng-if="node.selected"\n' +
    '            >\n' +
    '              <g\n' +
    '                ng-if="node.fixed"\n' +
    '                ng-attr-transform="translate({{node.x}},{{node.y}}) scale(0.005)"\n' +
    '                >\n' +
    '                <path d="M448 1568v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68zm320-672h512v-192q0-106-75-181t-181-75-181 75-75 181v192z"/>\n' +
    '              </g>\n' +
    '              <line\n' +
    '                stroke="red"\n' +
    '                stroke-dasharray="1, 1"\n' +
    '                ng-attr-x1="{{node.getCp(1).x}}"\n' +
    '                ng-attr-y1="{{node.getCp(1).y}}"\n' +
    '                ng-attr-x2="{{node.getCp(2).x}}"\n' +
    '                ng-attr-y2="{{node.getCp(2).y}}"\n' +
    '              />\n' +
    '              <circle\n' +
    '                sg-drag\n' +
    '                sg-drag-begin="node.getCp(1)"\n' +
    '                sg-drag-move="_.bind(node.updateCp1, node)"\n' +
    '                stroke="red"\n' +
    '                ng-attr-cx="{{node.getCp(1).x}}"\n' +
    '                ng-attr-cy="{{node.getCp(1).y}}"\n' +
    '                ng-attr-r="{{7}}"\n' +
    '                fill="white"\n' +
    '              />\n' +
    '              <circle\n' +
    '                sg-drag\n' +
    '                sg-drag-begin="node.getCp(2)"\n' +
    '                sg-drag-move="_.bind(node.updateCp2, node)"\n' +
    '                stroke="red"\n' +
    '                ng-attr-cx="{{node.getCp(2).x}}"\n' +
    '                ng-attr-cy="{{node.getCp(2).y}}"\n' +
    '                ng-attr-r="{{7}}"\n' +
    '                fill="white"\n' +
    '              />\n' +
    '            </g>\n' +
    '            <text class="node-label">{{}}</text>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            draggable \n' +
    '            ng-repeat="node in sourceNodes" \n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})">\n' +
    '            <g class="null-symbol">\n' +
    '              <circle \n' +
    '                class = "node"\n' +
    '                ng-class="{fixed: node.fixed, selected: node.selected}" \n' +
    '                ng-attr-r="{{node.height / 2}}"\n' +
    '                fill="white">\n' +
    '              </circle>\n' +
    '              <line \n' +
    '                class = "node"\n' +
    '                ng-class="{fixed: node.fixed, selected: node.selected}" \n' +
    '                ng-attr-x1="{{-10}}" \n' +
    '                ng-attr-y1="{{10}}"\n' +
    '                ng-attr-x2="{{10}}" \n' +
    '                ng-attr-y2="{{-10}}">\n' +
    '              </line>\n' +
    '            </g>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            draggable \n' +
    '            ng-repeat="node in sinkNodes" \n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})">\n' +
    '            <g class="null-symbol">\n' +
    '              <circle \n' +
    '                ng-attr-r="{{node.height / 2}}"\n' +
    '                class = "node"\n' +
    '                ng-class="{fixed: node.fixed, selected: node.selected}" \n' +
    '                fill="white"\n' +
    '                >\n' +
    '              </circle>\n' +
    '              <line \n' +
    '                class = "node"\n' +
    '                ng-class="{fixed: node.fixed, selected: node.selected}" \n' +
    '                ng-attr-x1="{{-10}}" \n' +
    '                ng-attr-y1="{{10}}"\n' +
    '                ng-attr-x2="{{10}}" \n' +
    '                ng-attr-y2="{{-10}}">\n' +
    '              </line>\n' +
    '            </g>\n' +
    '          </g>\n' +
    '        </g>\n' +
    '      </svg>\n' +
    '    </div>\n' +
    '    <div ng-if="AppState.selected.id" class="col-sm-3">\n' +
    '      <ng-include src="\'templates/details.html\'">\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('templates/toolbar.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/toolbar.html',
    '<span>Click Mode:</span>\n' +
    '<span class="btn-group">\n' +
    '  <button class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'selected\'" tooltip="Select Node" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    <i class="fa fa-location-arrow fa-flip-horizontal"></i>\n' +
    '  </button>\n' +
    '  <button class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'fixed\'" tooltip="Lock Node" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    <i class="fa fa-lock"></i>\n' +
    '  </button>\n' +
    '</span>\n' +
    '<button class="btn btn-default btn-sm no-padding" ng-model="AppState.clickMode" btn-radio="\'addSpecies\'" tooltip="Add Species Node" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '  <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUCSURBVGhD7ZjJc1RVFMazdOmSpcssXbrkT2DJ0iVLl+y6pRQtlRKlAC3ElNJJQ2SSeZKADGE0TBJkVGYUBEQqRVndH/eXcw99+/WNSSQy6DtVp957957hO+d+975+3VVKKaWUUkop/wup9Kq7Utf0Sk1vhvvqv6bEtzyvx9RPJ5W+5lvVvsZwtU8aS9+uS++skN4NOrdfeu8b0/dXSh+ssquPMY8d9vjl4j3RWuPSaFE9eiXCmbgEx+4AfDAbOCgAAAO4D1dLHwWdt0aa/63pJ+tMP13fuvc57LDHD3/iEC+Xx7QxXFnWfCNCG19YxuA0UgxEx1LQH681YAs2SAuDLt4kfbZZ+nyL6ZKt0hdBufoY89hhjx/+xEmLGWtlQlNnR4hjS+x8G3gCsuwkoHN0keSLNhogQC7dJvXskL76Tvp6p7RswLQWryjjzGOHPX74E4d4xCU+eciXK4T9EaHmpUgblhbupsDpIF39crsBAlx9t7T8e2nFHmnlPtNVQVfvt6uPMY8d9vjhTxziETcthLwd1Ko1boQ98WqE2y62YVvG3nU4C5fplAOnm727WoABuvaAtP6QtCHoxsOmm4607hlnHjvsvSDiEM8LIQ/5yOurkeIKTe6JkNuFXZ+C5wSBn3TFqULHHDidBQzAALr1B2n7MWlH0J3HpYETLeWZceaxwx4//InjhRDfqUVe8oOjvYjGSMcqcO66ActWBA9n6RJL379XWjNoALYcNVCA3H1K2vujtO+0NHjG9OBPrXvGmccOe/zwJw7xiEt88pCvWERKp7BXZ0ToJpXe5kwm5ixvp00RPMtO16DEtiHr7J4Aav+wgT1yThq6IB27KB2/JJ342a48M848dtjjhz9xiEdc4heLSOkEvlhA+4nk/GepONI43uCi0yYHftdJ66gDB+jJAHj4inTmqnT2mnTuul15Zpx57LwQ/ImTK8LpBA7wgMupFAqoRugmDKTdd+qwsTgK4ajThmRQwMHTWToNQABfvCld/k26clu6GpQrz4wzjx32+HkRxCOu04l85CW/UyldhWwBzn2OMT9x0u6vO2icZTOy/PD66HkDQ4cv3DCg1+9It+5Jt+9Ld/6wK8+MM48d9vjhTxziEZf45ElXwU8mcPleyBaQow9c5NzmpOAI5AShW2zIQ2eN26cvW2d/+dVAAvjeQ+nPEWnkkV15Zpx57LDHD3/iEI+4xCcP+chL/hyNsgXwGucFgiEvFTYRLxsCcW6n9CHh4ch7KHE+AKK7N+9Kvz+QHgTQj/7SqHDlmXHmscMeP/yJ4wU4jchHXvKDAzzgAh84/5sr8NLvgZf9FJr9NO8BOjmZ9wD2Dn5q3gOj3wCTfxPTOZb/n76JvfNF8OQb501cKCB88TCB+l4Y67cQSZxOcHaqfgvlwJM//1uoOTNCN+G7M/zKu+sGLFWxCKfT8/81Ggqo67UIvSXVemNxauRFOJ3SDxm65IXQuan8HiCP0yYHPjR6KEJul0q/pvHFkxqzbHDveXyRkTeljWn4Fvi7v1zC5pjR7vCCfRNP5MO+SCVXToBn8a+EnzQdWmtsjhDHl/jXypNNXVSWNi2GzsFZuogCDIXLfu9z2GGfgu6kSqqBNhPpfFFG90RvYyAftKUsNQBYdsD4v3CAYxNy9THmscM+R5FOneSfWjnhyKrUmrN4eTwzDV+I4dodIZRSSimllFJKKS+gdHU9Bn5unaj7juCnAAAAAElFTkSuQmCC"></img>\n' +
    '</button>\n' +
    '<span class="btn-group" dropdown>\n' +
    '  <button class="btn btn-default btn-sm no-padding" ng-model="AppState.clickMode" btn-radio="\'addUniUniReaction\'" tooltip="Add Uni-Uni Reaction" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI6SURBVGhD7ZQ/aFNRFMYzdtMx25MWNNohcasxQ0bHIqiZJJNkcOjY7b3Ndnq0DUaN8BrJS2hFgoMoOAgiHVy6iHGy0KFdhA4OEmLO5z33Xmxf8vJHI9LC+cHHO9x7ufc79553EoIgCIIgCIIgnFrcJi7Y8GzihbTnNanibiNph84WOoEG4DXoyA2x7AaYsVMTgbKTRGU+b+SMfk1U03mtwBl5iDKScusoqq83TmzcJGClEnIbdMNuNRT20HuW8/HiFvDyrpGKe5vXm/Cd83aZAUE2023dbuPNfbA6W3eOEFxbtNMR1OFLEUN/q5BeqwRTdtsBlNEAr+4B7z3g45oRx2qsV8u9s8tMpt3nhT3srAKfmkYq7rRu/kDlUuTJ+MBYM9MoJF+VVeRGVdlk9M2z4c/bwP4HI455jOfW58wF42l6Ud88G//2xYhjNUZP0kt6kcWtUynWxNRS/0cdGXtMgh5dLumS2VkBvr4Fvh8YccxjPPd43tOLVQLFYQmgmlnWiyyqJebjDUwj2uV97REabMzlx75AebZoFpevJHW59JUQWgWoEopszHDtxhv5Q4V0yC9qt40A15n5WcvtDvsHOrXsIfxzx2VHQbakDfOts1Tc28z6dnoAPvhkpxmlgS6kRQ/6674frDupbi3X1rd9oguxeVpzFuyyY+hhagHVqx6LyhfHtrlJ4bb52/iYzhMHbcwWuN61VNnw69ip/4NJgNqT9P5TiRtSwYaCIAiCIAiCIAiCIPwzEolfL4xAnj2Ztn4AAAAASUVORK5CYII="></img>\n' +
    '  </button>\n' +
    '  <button style="height: 50px;" class="btn btn-default btn-sm dropdown-toggle" tooltip="Additional Reaction Types" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    <span class="caret"></span>\n' +
    '  </button>\n' +
    '  <ul style="min-width: 50px;" class="dropdown-menu" role="menu">\n' +
    '    <li style="width: 50px;">\n' +
    '      <a class="btn btn-default btn-sm no-padding" ng-model="AppState.clickMode" btn-radio="\'addUniBiReaction\'" tooltip="Add Uni-Bi Reaction" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '        <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM9SURBVGhD7VlNaBNBFM6xx14EPaWHgqW1TUEK8VaUlgg59NiT9Bg8RU+Ch92bJ/EkOebQ/ECpxG0MpRgsiKiokJMUTxVEAiL0JLE0med7b962aZ1N0V3NBPaDj9mdfRu+N/PmzdtMIsZ/AtRTi8zd5Jh0jQaglpo4at7cg1e3gHi4k22TI/LYfnSb2Ra07gN8KmjiNTtRS46Lib1Q3mwa3ua08G+vNeka+9TWXE7M7IVqpHPw/g7A5w2AH1806Zr6tq+5YmYvlDeXCZwBL5UXM3sBxeQYx/uZNXBQy3Zg89KUmNkJpwTzThUmVH1ulQVLFoIXWftGn8WWYM0tq0duRe26FQAiOsDpEmqXJzB1ukTlTab5pWHCKcL4WbG/sazaYm4nnIrKG4X7rKqCmNoJnIUxnIGWUTzSDx8rwSE0OHz2xdQ+UGZB8XtG4cdUD8TcLjjrKo3iDsyiT0h28oo9cMqwguI7JsHUj89ddi5s+EBteh7qVxepla7QGJxx1AE+z7AdLlxyhF/6U1B52msubcPLVaw1bgO13ebyG9hMhtqyKR2ahSNxtGkTE9NwQPG7LPzjQ6w5Huv2w104al7fo5pEzHQGqfYK7np33yhKiCMJTklhq/CeWrw/ZaNazgZclJ8NB667aeRJ9NcdgO/vdEv31L91ZUVME26lV+wXGkQMCxZ9qh+d4b6y2qaBkJ8MD9VYyPHo08iTeAK1dE/9jYXjuHRL3fYpUYHUI2/o/xlZ2PhQ3nRm4Ax4s2timnDLveANqJ8UOhw+hme0cKPcaSnGj57f2KeYZ9F9a6DzbLkDGxeOYxVDYMqtdM/ZiHS8UxiZZ4GIqVOyTyRQTybThztLbR5xyUIkXj2dWRWTvwI7jNkm0Akso8U0PCiVKm8mTzHPbd/Ih8F55YPvBBV46PA9fsk2SAEXXH3qnRgzHM5KlBkqSrATmEJNDvQz0rCKGhQmOMo1k/ATqqqY2wsdLibxRA4j+/8DHTQTkabYfwFctFhem8Uzbf4m5nWg/5UIzEr43O5/JXyQM/53gM5QJ19s/V9mI3U+QLs3pVJyID4fGCbi84FhIz4fsAEjcT5wHqw7H4gRI0YMQSLxCzTNd1hwqyCBAAAAAElFTkSuQmCC"></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li style="width: 50px;">\n' +
    '      <a class="btn btn-default btn-sm no-padding" ng-model="AppState.clickMode" btn-radio="\'addBiUniReaction\'" tooltip="Add Bi-Uni Reaction" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '        <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMYSURBVGhD7VhBaBNREO0xRy+CntJDQWltIkgh3orSUqEHjzlJj8FT9VTwsLl5Ek/SYy5NC6USt6WG0GBAxIoKOUnxVEEkIIInCaZ1xnl/pyHZ/MQ0lfan7IPh7/5Mdt/Mn5n/d0YiRIhwzsBbyWkjlXhMp4YDXEiOHpTv7PGbewxplOZrMER/dh+H5fkqVx8xf14ORK6NEYX4BVVxF+RPpvhdJiD+/W0guJY52kxkVM1d0HYqwx8eMH9ZZ/71NRBcY654M6tq7oL8xFzXFfCTi6rmLjgXj5l478yBOm9cvqpqboO2EmlDWKsQv5pvet/LUzq7ShWRnLfOl8wfXAQXroxK6cxCyB9LYS6bp6fZVeam5KnmrfHwlFchvN9mgIq3Su7nBtCxAm1CBS/Hbu8TiHmEjd0ACO15eXY70eHlIIltBkCojkRX9a6Q58TOtAgI0cd2A1Qk3EBS1TsgyT8qz/gpK7bUSy8MLoxf560b0xh1anDIy++ChNUAI7TbLS8CA1RPigOepT9ZgXPYn/JMkV+nZVO9zxgPy7O7vBE/Wcgi5oVo9YiMt2KqEki1GNKn5KnYLYeEfMUQ//RENtdnwfjxIR+Ub+1h81W1wYAQECPW5OVCZADiYQnCr7ly5oAJz4P0txLzj/fBiHvMb17ruXp9ASEhyVsbyPNWkfxYYRPntD2VMd6H50EewIh7zG9PneyQiRcJcS2v/8MAqrbu8OSPz/VcAX9yQVWPD4n3OXjr6OUnCiMcTVao45sDMX6wc3sfMW9It+RAozhb5/WLg5Vj8fyCkK1bybSEgA1tVQgSivsw6PlYqlGaqRmPaxUCeXox8c89xwrx9FIbgVZBWRSCqmpF04AelScMlFLyJxYR82Yc1PPZNVruIN0Uid8+zkTQQfjp7elAy2XBTlwE3jzGrnrqwLHZStwI5VTNXSA8bOQlht382A935sSAjgMcKpFRdgnhztxv7cwFleMoB+Sg5urnpK0zZ4zQzlw/VebMEHXmzhrnojNn4j2UA/WXQ9aZM4Qtnbmhga0zFyFChAgRIriLkZG/CSEQxoTHynEAAAAASUVORK5CYII="></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li style="width: 50px;">\n' +
    '      <a class="btn btn-default btn-sm no-padding" ng-model="AppState.clickMode" btn-radio="\'addBiBiReaction\'" tooltip="Add Bi-Bi Reaction" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '        <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAORSURBVGhD7Vk9bNNQEO7YkRGmdkCiCy1j2BiLlIGxE2LsWDYEg70xMnbM0PxIFVIIFaqQKrogQGLoWDGBxFCJJUICNZVrH/fdOzeO8+zYieMaKZ/0KdbzPb+7dz9+viwtUBLoYOOB8HhlWYf+D1B3Y9U7enhKHx8TePG+fgZD9Hb1cXlUP6GTF0Tfdg35WozortxQkVFUyVVB726NvmwbxX99MsQ1jwVv17dVzKCKrgre1bbp61OiH/tEf38a4hpjh/ddFTPI7aoSEPTWNxM90NvYUbGcrioR1FhZlk2MbWy/Wz+n17fWVCynq0qC06R7TodWg4P1LVFYQ5s+1Ed3H8jsqjlBlG3SE7flv2Ieu20ikA2QHKTunVXORxcMerdrMimKJFf9OYi5qiA4DboRV3aMTe9MxbMBrhKFLa5yWsGWWcxvOPt0UybMCKcd7FgVD9nxd1U0O2yukp2KPrh5cRa6dhawF5bd9uXJyLMjLGINgbvnfbcuwDuoIrmhIZQcPrymis6OMQ+M0O9CGRXNBFQWt+2d2p8X0n+p4rMDMY+wsS8EeqdOizIlurMX1Fi+b3/OkJDTKcVgosvbg3MkuopbwUY+YuXP7fM9nk+uGFdk+MQB19oVUHK4ITlV/ArpFcfr8/1NkePEhSEyaV4wOzlICYPLz9G8QDm0yzF5t/ESU9HygJiPlkBWAlWJPcAMx1oYD/gXY/iFTER5nl/UO2UqIFQ4pDpQDAoOFTOEQeZehGyMjDX9w7zVay5ASXyOChXZ+SHNzsfHnT1vcC1hEweUGJZXiwEwymoYyIlb1Jt2GqBqRBPZFkaId8kLm3FCLp1afUqFHHu57tuVGvTj4cHGrSUdR8QIfp6Kzh+szDO7IkyURM4JFR3BpONDaAQKA9aQSUUjtZ6jJE6oKrifevqUN7HfEK8UWaGwKzi02RYVmpKYqQUjRrC89TkRFhpWnGgpxwC/oWKZMXFDhH5HxWdHktvhchWZCiZcxp9rKGE0XWMNzSyhduZ4obEDXFEuTvNE7hKb1JkzFSRciA9qBb2A2IN8KBxX/Ip5v4kndeaQgCJYACQP5EsvuSrl6kpcZ2cOxsCrUkalQg2/2KJfZvHQHkHVOnNszBryDAZkajpfd2cuDZmazkmdud9v5tOZy4pcoY3OnCisrrI2UUtG7tCe2EQtGVUO7UzI/P9AlZHp/4Gqo2qhvcACCywQYmnpHxYqZpeFejlqAAAAAElFTkSuQmCC"></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</span>\n' +
    '<span>Auto Layout:</span>\n' +
    '<span class="btn-group">\n' +
    '  <button class="btn btn-default btn-sm" ng-click="layout.force.stop()" tooltip="Stop Auto-Layout" tooltip-placement="right" tooltip-append-to-body="true" tooltip-popup-delay="1000">\n' +
    '    <i class="fa fa-stop"></i>\n' +
    '  </button>\n' +
    '  <button class="btn btn-default btn-sm" ng-click="layout.start()" tooltip="Start Auto-Layout" tooltip-placement="right" tooltip-append-to-body="true" tooltip-popup-delay="1000">\n' +
    '    <i class="fa fa-play"></i>\n' +
    '  </button>\n' +
    '  <button class="btn btn-default btn-sm" btn-checkbox ng-model="AppState.menu.layout" tooltip="Auto-Layout Settings" tooltip-placement="right" tooltip-append-to-body="true" tooltip-popup-delay="1000">\n' +
    '    <i class="fa fa-wrench"></i>\n' +
    '  </button>\n' +
    '</span>\n' +
    '<div class="col-sm-6 col-sm-offset-3" collapse="!AppState.menu.layout">\n' +
    '  <form>\n' +
    '  <label>Charge</label>\n' +
    '  <input class="form-control" type="number" ng-model="layout.charge" step="10" min="-5000" max="0"></input>\n' +
    '  <label>Gravity</label>\n' +
    '  <input class="form-control" type="number" ng-model="layout.gravity" min="0" max="1" step="0.1"></input>\n' +
    '  <label>Link Distance</label>\n' +
    '  <input class="form-control" type="number" ng-model="layout.linkDistance" min="0" max="100" step="1"></input>\n' +
    '  <label>Max Links In</label>\n' +
    '  <input class="form-control" type="number" ng-model="max.links.in" min="1" max="100" step="1"></input>\n' +
    '  <label>Max Links Out</label>\n' +
    '  <input class="form-control" type="number" ng-model="max.links.out" min="1" max="100" step="1"></input>\n' +
    '  <label>Zoom</label>\n' +
    '  <input class="form-control" type="checkbox" ng-model="AppState.zoom"></input>\n' +
    '  <label>Show Modifiers</label>\n' +
    '  <input class="form-control" type="checkbox" ng-model="linkModifiers"></input>\n' +
    '  </form>\n' +
    '</div>\n' +
    '');
}]);
