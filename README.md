
# Layout Extension

* Node <Object>
    * classes <String>
    * id <String> // @id from data object for indexing purposes
    * data <Object> // original data object from library
    * linksToHere <Object> // Hash table of links
    * linksFromHere <Object>
    * height <Number> // Below are used in template
    * width <Number>
    * opacity <Number>
    * px <Number> // Following are used by d3
    * py <Number>
    * x <Number>
    * y <Number>
    * index <Number>
    * weight <Number>
    * group <Number> // index of steps away from source
* Reaction <Node>
    * d <Number> // distance of control point
    * deg <Number> // degree of control point 1 toward reactants
    * cp1 <Number> // coordinates of control point 1, reactants side
    * cp2 <Number> // coordinates of control point 2, products side
    * centroid <Object> // coordinates of centroid for products and reactants
    * reactants <Object> // All reactant compounds
    * products <Object> // All product compounds
* Species <Node>
    * reactions <Object> // hash of all reactions associated with compound

# Data Model

* Node <Object>
    * classes <String>
    * id <String> // @id from data object for indexing purposes
    * data <Object> // original data object from library
    * linksToHere <Object> // Hash table of links
    * linksFromHere <Object>
    * height <Number> // Below are used in template
    * width <Number>
    * opacity <Number>
    * px <Number> // Following are used by d3
    * py <Number>
    * x <Number>
    * y <Number>
    * index <Number>
    * weight <Number>
    * group <Number> // index of steps away from source
* Reaction <Node>
    * d <Number> // distance of control point
    * deg <Number> // degree of control point 1 toward reactants
    * cp1 <Number> // coordinates of control point 1, reactants side
    * cp2 <Number> // coordinates of control point 2, products side
    * centroid <Object> // coordinates of centroid for products and reactants
    * reactants <Object> // All reactant compounds
    * products <Object> // All product compounds
* Compound <Node>
    * reactions <Object> // hash of all reactions associated with compound

