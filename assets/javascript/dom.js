// render game board
function resetDom() {
  makeBodyBlank();

  // set up page
  containerFluid = addContainerToBody();
  row = addOuterRow();

  // adds game title row
  addGameTitle(row);

  // the column for game play
  gameColumn = addGameColumn(row);

  // adds rows for game board sections
  availableCharactersRow = addAvailableCharactersRow(gameColumn);
  chosenCharactersRow = addChosenCharactersRow(gameColumn);
  addStatsRow(gameColumn);
  enemyCharactersRow = addEnemyCharactersRow(gameColumn);

  // available characters row
  addDirectionsForAvailableCharacters(availableCharactersRow);

  // append available characters to availableCharactersRow
  addDrWho(availableCharactersRow);

  addDalek(availableCharactersRow);
  
  addCybermen(availableCharactersRow);
  
  addSontaran(availableCharactersRow);
 
  // add columns to chosenCharactersRow
  // first column for your character
  addYourCharactersColumn(chosenCharactersRow);

  // second column for the defender
  defenderColumn = addDefenderColumn(chosenCharactersRow);
  
  // add attack button to defenderColumn
  addAttackButton(defenderColumn);
  
  // add restart button
  addRestartButton(defenderColumn);

  // add heading for enemyCharactersRow
  addEnemyCharactersHeading(enemyCharactersRow);
}

function makeBodyBlank() {
  // reset DOM to have nothing in it
  $('body').html('');
}

function addContainerToBody() {
  // add container for everything to live
  var containerFluid = $('<div>');
  containerFluid.addClass('container-fluid');
  // the containerFluid lives inside the body
  $('body').append(containerFluid);
  return containerFluid;
}

function addOuterRow() {
  // add row inside containerFluid so we have columns
  var row = $('<div>');
  row.addClass('row');
  
  // the row lives inside containerFluid
  containerFluid.html(row);
  return row;
}

function addGameTitle(row) {
  // add title to the top of the row
  // first add a column for the title to live in
  var gameTitleColumn = $('<div>');

  // this column pushes right in md+ screens
  gameTitleColumn.addClass('col-md-4 col-md-push-8');

  // add title
  var gameTitle = $('<h1>');
  gameTitle.text('Dr. Who RPG');

  // gameTitle lives inside gameTitleColumn
  gameTitleColumn.html(gameTitle);

  // append gameTitleColumn to top of row
  row.append(gameTitleColumn);
}

function addGameColumn(row) {
  // add column for game board to live in
  // this is the title's partner
  var gameColumn = $('<div>');
  // this column pulls left in md+ screens
  gameColumn.addClass('col-md-8 col-md-pull-4');
  // append this column to the row
  row.append(gameColumn);
  return gameColumn;
}

function addAvailableCharactersRow(gameColumn) {
  // add row for available characters
  var availableCharactersRow = $('<div>');
  availableCharactersRow.addClass('row available-characters');

  // add availableCharactersRow to gameColumn
  gameColumn.append(availableCharactersRow);
  return availableCharactersRow;
}

function addChosenCharactersRow(gameColumn) {
  // add row for chosen characters, both your character and the defender
  var chosenCharactersRow = $('<div>');
  chosenCharactersRow.addClass('row');

  // add chosenCharactersRow to gameColumn
  gameColumn.append(chosenCharactersRow);
  return chosenCharactersRow;
}

function addStatsRow(gameColumn) {
  var statsRow = $('<div>');
  statsRow.addClass('row stats text-center');

  // add to gameColumn
  gameColumn.append(statsRow);
}

function addEnemyCharactersRow(gameColumn) {
  // add row for enemy characters
  var enemyCharactersRow = $('<div>');
  enemyCharactersRow.addClass('row enemy-characters hidden');

  // add enemyCharactersRow to gameColumn
  gameColumn.append(enemyCharactersRow);
  return enemyCharactersRow;
}

function addDirectionsForAvailableCharacters(availableCharactersRow) {
  // add directions to available characters row
  var availableCharactersDirections = $('<h3>');
  availableCharactersDirections.addClass('directions');
  availableCharactersDirections.text('choose a character...');

  // append the directions to the availableCharactersRow
  availableCharactersRow.append(availableCharactersDirections);
}


// dr who characters

function addDrWho(availableCharactersRow) {
  var drWhoColumn = $('<div>');
  drWhoColumn.addClass('col-xs-6 col-sm-3 character drWho');
  drWhoColumn.attr('data-hp', drWho.health);
  availableCharactersRow.append(drWhoColumn);
 
  // add thumbnail
  var drWhoThumbnail = $('<div>');
  drWhoThumbnail.addClass('thumbnail');
  drWhoColumn.append(drWhoThumbnail);

  // append image
  drWhoThumbnail.append(
    '<img src=' + drWho.image + ' alt="' +
    drWho.name + ' icon">'
  );

  // append caption
  var drWhoCaption = $('<div>');
  drWhoCaption.addClass('caption');
  drWhoThumbnail.append(drWhoCaption);

  // add caption heading
  var drWhoCaptionHeading = $('<h5>');
  drWhoCaptionHeading.addClass('text-info');
  drWhoCaptionHeading.text(drWho.name);
  drWhoCaption.append(drWhoCaptionHeading);

  // add caption text
  var drWhoCaptionText = $('<p>');
  drWhoCaptionText.text(drWho.health);
  drWhoCaption.append(drWhoCaptionText);
}


function addDalek(availableCharactersRow) {
  var dalekColumn = $('<div>');
  dalekColumn.addClass('col-xs-6 col-sm-3 character dalek');
  dalekColumn.attr('data-hp', dalek.health);
  availableCharactersRow.append(dalekColumn);

  // add thumbnail
  var dalekThumbnail = $('<div>');
  dalekThumbnail.addClass('thumbnail');
  dalekColumn.append(dalekThumbnail);

  // append image
  dalekThumbnail.append(
    '<img src=' + dalek.image + ' alt="' +
    dalek.name + ' icon">'
  );

  // append caption
  var dalekCaption = $('<div>');
  dalekCaption.addClass('caption');
  dalekThumbnail.append(dalekCaption);

  // add caption heading
  var dalekCaptionHeading = $('<h5>');
  dalekCaptionHeading.addClass('text-info');
  dalekCaptionHeading.text(dalek.name);
  dalekCaption.append(dalekCaptionHeading);

  // add caption text
  var dalekCaptionText = $('<p>');
  dalekCaptionText.text(dalek.health);
  dalekCaption.append(dalekCaptionText);
}


function addCybermen(availableCharactersRow) {
  var cybermenColumn = $('<div>');
  cybermenColumn.addClass('col-xs-6 col-sm-3 character cybermen');
  cybermenColumn.attr('data-hp', cybermen.health);
  availableCharactersRow.append(cybermenColumn);

  // add thumbnail
  var cybermenThumbnail = $('<div>');
  cybermenThumbnail.addClass('thumbnail');
  cybermenColumn.append(cybermenThumbnail);

  // append image
  cybermenThumbnail.append(
    '<img src=' + cybermen.image + ' alt="' +
    cybermen.name + ' icon">'
  );

  // append caption
  var cybermenCaption = $('<div>');
  cybermenCaption.addClass('caption');
  cybermenThumbnail.append(cybermenCaption);

  // add caption heading
  var cybermenCaptionHeading = $('<h5>');
  cybermenCaptionHeading.addClass('text-info');
  cybermenCaptionHeading.text(cybermen.name);
  cybermenCaption.append(cybermenCaptionHeading);
 
  // add caption text
  var cybermenCaptionText = $('<p>');
  cybermenCaptionText.text(cybermen.health);
  cybermenCaption.append(cybermenCaptionText);
}


function addSontaran(availableCharactersRow) {
  var sontaranColumn = $('<div>');
  sontaranColumn.addClass('col-xs-6 col-sm-3 character sontaran');
  sontaranColumn.attr('data-hp', sontaran.health);
  availableCharactersRow.append(sontaranColumn);

  // add thumbnail
  var sontaranThumbnail = $('<div>');
  sontaranThumbnail.addClass('thumbnail');
  sontaranColumn.append(sontaranThumbnail);

  // append image
  sontaranThumbnail.append(
    '<img src=' + sontaran.image + ' alt="' +
    sontaran.name + ' icon">'
  );

  // append caption
  var sontaranCaption = $('<div>');
  sontaranCaption.addClass('caption');
  sontaranThumbnail.append(sontaranCaption);

  // add caption heading
  var sontaranCaptionHeading = $('<h5>');
  sontaranCaptionHeading.addClass('text-info');
  sontaranCaptionHeading.text(sontaran.name);
  sontaranCaption.append(sontaranCaptionHeading);

  // add caption text
  var sontaranCaptionText = $('<p>');
  sontaranCaptionText.text(sontaran.health);
  sontaranCaption.append(sontaranCaptionText);
}

// end of dr who characters


function addYourCharactersColumn(chosenCharactersRow) {
  var yourCharacterColumn = $('<div>');
  yourCharacterColumn.addClass('col-xs-6 your-character hidden');

  // heading
  var yourCharacterColumnHeading = $('<h3>');
  yourCharacterColumnHeading.text('Your Character');

  // put the heading inside the div
  yourCharacterColumn.html(yourCharacterColumnHeading);

  // append yourCharacterColumn to choseCharactesRow
  chosenCharactersRow.append(yourCharacterColumn);
}

function addDefenderColumn(chosenCharactersRow) {
  var defenderColumn = $('<div>');
  defenderColumn.addClass('col-xs-6 defender hidden');

  // heading
  var defenderColumnHeading = $('<h3>');
  defenderColumnHeading.text('Defender');

  // put the heading inside the div
  defenderColumn.append(defenderColumnHeading);

  // append the defender column to the chosenCharactersRow
  chosenCharactersRow.append(defenderColumn);
  return defenderColumn;
}

function addAttackButton(defenderColumn) {
  var attackButton = $('<button>');
  attackButton.addClass('btn btn-default attack pull-left');
  attackButton.text('Attack');

  // append attackButton to defenderColumn
  defenderColumn.append(attackButton);

  // add some breaks so things look appealing
  // these only matter for xs views
  defenderColumn.append(
    '<br class="visible-xs">' +
    '<br class="visible-xs">' +
    '<br class="visible-xs">'
  );
}

function addRestartButton(defenderColumn) {
  var restartButton = $('<button>');
  restartButton.addClass('btn btn-default restart pull-left');
  restartButton.text('Restart');

  // append restartButton to defenderColumn
  defenderColumn.append(restartButton);

  // add some breaks so things look appealing
  // these only matter for xs views
  defenderColumn.append(
    '<br>' +
    '<br>' +
    '<br>'
  );
}

function addEnemyCharactersHeading(enemyCharactersRow) {
  var enemyCharactersHeading = $('<h3>');
  enemyCharactersHeading.addClass('heading');
  enemyCharactersHeading.text('Enemies Available to Attack');

  enemyCharactersRow.html(enemyCharactersHeading);
}


