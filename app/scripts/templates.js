angular.module('sg.graphene.sbml.templates', ['templates/context-menus.html', 'templates/sbml.html', 'templates/toolbar.html']);

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

angular.module('templates/sbml.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/sbml.html',
    '<div ng-controller="SbmlLayoutCtrl">\n' +
    '  <div class="row" ng-include="\'templates/toolbar.html\'">\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <ng-include src="\'templates/context-menus.html\'"></ng-include>\n' +
    '    <div class="col-sm-11 well">\n' +
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
    '        svg .node.selected {\n' +
    '          stroke: #FF0000;\n' +
    '        }\n' +
    '      \n' +
    '        svg .node.fixed{\n' +
    '          stroke: black;\n' +
    '          stroke-width: 5px;\n' +
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
    '              fill="url(#markerGradient)" \n' +
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
    '              fill="url(#markerGradient)" \n' +
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
    '            <stop offset="5%" stop-color="#FFDC9E"></stop>\n' +
    '            <stop offset="95%" stop-color="#FFF"></stop>\n' +
    '          </linearGradient>\n' +
    '          <linearGradient ng-repeat="node in model.nodes.alias" id="aliasGradient-{{node.id}}">\n' +
    '            <stop offset="5%" stop-color="#B0C0FF"></stop>\n' +
    '            <stop offset="95%" stop-color="#FFF"></stop>\n' +
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
    '              marker-end="url(#production)"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-stroke="{{link.reaction.selected ? \'red\' : \'black\'}}"\n' +
    '              ng-attr-stroke-width="{{\'3px\'}}"\n' +
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
    '              marker-end="url(#production)"\n' +
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
    '              ng-attr-stroke="{{link.reaction.selected ? \'red\' : \'black\'}}"\n' +
    '              ng-attr-stroke-width="{{\'3px\'}}"\n' +
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
    '              marker-end="url(#modifier)">\n' +
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
    '              marker-end="url(#production)"></line>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            sg-drag\n' +
    '            sg-drag-begin="node"\n' +
    '            sg-drag-move="_.bind(node.updatePosition, node)"\n' +
    '            ng-repeat="node in model.nodes.species"\n' +
    '            context-menu\n' +
    '            data-target="speciesMenu{{node.id}}"\n' +
    '            ng-click="clickHandler(node, $event)"\n' +
    '            ng-attr-opacity="{{node.opacity}}"\n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})"\n' +
    '            style="cursor: pointer;"\n' +
    '            >\n' +
    '            <rect \n' +
    '              ng-class="{fixed: node.fixed, selected: node.selected}"\n' +
    '              ng-attr-stroke="{{node.display.stroke}}"\n' +
    '              ng-attr-stroke-width="{{node.display.strokeWidth}}"\n' +
    '              ng-attr-x="{{-node.width/2}}"\n' +
    '              ng-attr-y="{{-node.height/2}}"\n' +
    '              ng-attr-width="{{node.width}}" \n' +
    '              ng-attr-height="{{node.height}}"\n' +
    '              ng-attr-ry="{{node.height/2}}"\n' +
    '              ng-attr-fill="url(#speciesGradient-{{node.id}})"\n' +
    '              >\n' +
    '            </rect>\n' +
    '            <text\n' +
    '              style="\n' +
    '                font-size: 14px;\n' +
    '                font-family: Georgia;\n' +
    '                font-weight: bolder;\n' +
    '                text-anchor: middle;\n' +
    '                dominant-baseline: middle;\n' +
    '              "\n' +
    '            >{{node.id | truncateTo:8}}</text>\n' +
    '            <title>ID: {{node.id}}, Name: {{node.name}}</title>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            sg-drag\n' +
    '            sg-drag-begin="node"\n' +
    '            sg-drag-move="_.bind(node.updatePosition, node)"\n' +
    '            ng-repeat="node in model.nodes.alias"\n' +
    '            context-menu\n' +
    '            data-target="aliasMenu{{node.id}}"\n' +
    '            ng-click="clickHandler(node, $event)"\n' +
    '            ng-attr-opacity="{{node.opacity}}"\n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})"\n' +
    '            style="cursor: pointer;"\n' +
    '            >\n' +
    '            <rect \n' +
    '              ng-class="{fixed: node.fixed, selected: node.selected}"\n' +
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
    '              ng-attr-fill="url(#aliasGradient-{{node.id}})"\n' +
    '              >\n' +
    '            </rect>\n' +
    '            <text\n' +
    '              style="\n' +
    '                font-size: 14px;\n' +
    '                font-family: Georgia;\n' +
    '                font-weight: bolder;\n' +
    '                text-anchor: middle;\n' +
    '                dominant-baseline: middle;\n' +
    '              "\n' +
    '            >{{node.aliasOf.id | truncateTo:8}}</text>\n' +
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
    '<button class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addSpecies\'" tooltip="Add Species Node" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '  Add Species\n' +
    '</button>\n' +
    '<span class="btn-group" dropdown>\n' +
    '  <button class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addUniUniReaction\'" tooltip="Add Reaction" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    Add Reaction\n' +
    '  </button>\n' +
    '  <button class="btn btn-default btn-sm dropdown-toggle" tooltip="Additional Reaction" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    <span class="caret"></span>\n' +
    '  </button>\n' +
    '  <ul class="dropdown-menu" role="menu">\n' +
    '    <li>\n' +
    '      <a class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addUniBiReaction\'">\n' +
    '        Uni-Bi Reaction\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addBiUniReaction\'">\n' +
    '        Bi-Uni Reaction\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addBiBiReaction\'">\n' +
    '        Bi-Bi Reaction\n' +
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
