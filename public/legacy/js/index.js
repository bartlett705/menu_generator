// Constants
var FIRST_COURSE_MIN = 4;
var FIRST_COURSE_RAND_RANGE = 3;
var SECOND_COURSE_MIN = 3;
var SECOND_COURSE_RAND_RANGE = 3;

// randomized ingredients needed for pantry construction
var shrooms = ['porcini', 'shiitake', 'crimini', 'king trumpet', 'oyster', 'button', 'ushimeji', 'black trumpet', 'wood-ear'];
var oysters = ['kusshi', 'kumamoto', 'Point Reyes', 'Hog Island', 'Humboldt Gold', 'Hama Hama', 'shigoku', 'Netarts Bay' ];
var animals = ['Dog', "Cat", "Hare", "Crane", "Fox", "Hound", "Sheeba", "Whistle", "Wolf", "Musk Ox", "Blue Jay", "Cormorant", "Panda", "Doorknob", "Broomstick", "Knife", "Fiddle", "Jewel", "Lamp"];
var berries = ['lingonberries', 'cherries', 'marionberries', 'elderberries', 'white raspberries', 'huckleberries', 'bumbleberries'];

// Pantry
pantry = {
  'ingredients' : 
  ['flowers', 'craft beer', get_shroom(), 'watercress', 'mugwort', 'sunchoke', 'candy-cane beets', 'tri-color carrots', 'tomatoes', 'new potatoes', 'garlic', 'scallions', 'cebollitas', 'baby kale', 'fennel', 'river moss', get_berries(), get_berries(), get_berries(), 'pork jowl', 'guanciale', 'iberico ham', get_shroom(), get_shroom(), get_shroom(), 'brussels sprouts', 'yams', 'chayote squash', 'butternut squash', 'breakfast radishes', 'golden turnips', 'beets', 'celeriac'],
  'starches' : 
  ['%p arborrio rice', '%p black rice', '%p himilayan pink rice', '%p calrose rice', '%p haiga rice', '%p Vietnamese jasmine rice', '%p Texas basmati rice', 'mixed %p seasonal veggies', 'mashed %p potatoes', 'truffled %p potatoes', 'pomme puree', 'potatoes au-gratin', 'a hunk of crusty %p sourdough', 'a %p pain rustique', 'an entire loaf of %p white bread', '%p corn-pone', '%p gnocchi'], 
  'sauces' : 
  ['sauce', 'dip', 'ranch', 'reduction', 'bernaise', 'hollandaise', 'demi-glace', 'aspic', 'glaze'],
  'preps' : ['braised %p', 'grilled %p', 'smoked %p', 'baked %p', 'broasted %p', 'char-grilled %p', 'filet of %p', '%p a la king', '%p rockafeller', '%p almandine', '%p fresh off the bar-bee', '%p from the farm'],
  'first_proteins' : ["crispy pig's-ear", get_oyster(), get_oyster(), get_oyster(), "chestnuts", "shishito peppers", "toro", "uni", "burrata"], 'second_proteins' : ['skirt steak', 'cats', 'dogs', 'mice', 'hippies', 'salamander', 'Harris Ranch ribeye', 'rattlesnake', 'california condor', 'mountain lion', 'dung beetle', 'hand-trimmed jidori chicken', 'brined Duroc pork loin', 'Kurobuta pork belly', 'Wagyu filet mignon'],
  'mods' : ['locally-foraged', 'locally-sourced', 'heirloom', 'organic', 'non-GMO', 'fair-trade', 'gluten-free', 'vegan', 'responsibly-raised', 'humanely-harvested', "grandma's secret", "house-pickled", "preserved", "thousand-year", 'gently-fermented', 'aged', 'incredibly fresh', 'artisinal'],
  'garnish_phrases' : ['finished with ', 'topped with ', 'adorned with ', 'and ', 'and finally, ', 'garnished with ', 'set off with '],
  'garnishes' : ['a sprig of %p rosemary', 'a leaf of %p mint', '%p gold flakes', 'ground %p dried shrimp', '%p pomegranite seeds', 'candied %p walnuts', 'candied %p pecans', 'glazed %p pistachio crumble', 'house-made bacon bits', '%p picogreens', '%p femtogreens','%p puffed black rice', 'nanogreens'],
// Layout and restaurant name options
  'bullets' : ['fa-align-justify', 'fa-asterisk', 'fa-chevron-circle-right', 'fa-pagelines', 'fa-ra' , 'fa-spoon', 'fa-spoon', 'fa-spoon', 'fa-pagelines', 'fa-pagelines', 'fa-spoon'],
  'fonts' : ['font1', 'font2', 'font3'],
  'bgs' : ['bg0', 'bg1', 'bg2','bg3'],
  'layouts' : ['layout-left', 'layout-center', 'layout-right'],
  'places' : ["Roadhouse", "Dive", "Hide-away", "Grub Shack", "Bistro",  "Cafe", "Diner", "Tavern", "Gastropub", "House"],
  'names' : [silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), "Jill's ", "Bob's ", "Dave's ", "The ", "City ", "Famous ", "That ", "Hipster ", "Artisan ", "Local " ],
  'courses' : [
  ['Apps', 'Entrees'],
  ['Starters', 'Mains'],
  ['Small Bites', 'Share Plates']
]};


// Helpful functions

function pick_a(category) {
  console.log(category + pantry);
  var item = pantry[category][Math.floor(Math.random() * pantry[category].length)];
  if (pantry[category].length > 1) {
    pantry[category] = pantry[category].slice(0, pantry[category].indexOf(item)).concat(pantry[category].slice(pantry[category].indexOf(item) + 1));
  }
  return item;
}
function modded(str) {
  if (Math.random() < 0.2) {
    return pick_a('mods') + ' ' + str;
  }
  else {
    return str;
  }
}
function get_shroom() {
  return shrooms[Math.floor(Math.random() * shrooms.length)] + ' mushrooms';
}
function get_berries() {
  return berries[Math.floor(Math.random() * berries.length)];
}
function get_oyster() {
   return oysters[Math.floor(Math.random() * oysters.length)] + ' oysters';
}
function silly_animals() {
  return animals[Math.floor(Math.random() * animals.length)] + ' & ' + animals[Math.floor(Math.random() * animals.length)] + ' ';
}
function non_plural(str) {
  if (str.slice(-2) === 'es') {
    if (str.slice(-3) === 'ies') {
      return str.slice(0, -3) + 'y';
    }
    else { 
      return str.slice(0, -2);
    }
  }
  else if  (str.slice(-2) === 'ss') {
    return str;
  }
  else if (str.slice(-1) === 's') {
    return str.slice(0, -1);
  }
  else {
    return str;
  }
}

function compose_dish($_this, course) {
  var result = '';
  prep = pick_a('preps');
  var dish_length = Math.floor(Math.random() * 4);
  result = result.concat(prep).replace('%p', modded(pick_a(course+'_'+'proteins')));
  if (dish_length >= 2) {
    result = result.concat(', ');
  } else {
    result = result.concat(' ');
  }
  for (var idx = 0; idx < dish_length; idx++) {
    var ingredient = pick_a('ingredients');
    ingredient = modded(ingredient);
    if ((dish_length >= 1) && (idx === dish_length - 1)) {
      result = result.concat('and ' + ingredient);
    } else {
      result = result.concat(ingredient);
    }
    if (dish_length >= 2) {
      result = result.concat(', ');
    } else {
      result = result.concat(' ');
    }
    console.log(result);
  }
  var dice = Math.random();
  if ((dice > 0.6) || (dish_length <= 1)){
    result = result.concat('with ' + pick_a('starches')).replace('%p', modded(''));
    result = result.concat(' and ' + non_plural(modded(pick_a('ingredients'))) + ' ' + pick_a('sauces'));
  }
  else if (dice > 0.4) {
        result = result.concat('with ' + pick_a('starches')).replace('%p', modded(''));
      }
  else if (dice > 0.2) {
        result = result.concat(' with ' + non_plural(modded(pick_a('ingredients'))) + ' ' + pick_a('sauces'));
  }
  // Check for a trailing comma in the case where there are no sauces, starches 
  if (result.slice(-2) === ', ') {
    result = result.slice(0,-2);
  }
  if (Math.random() > 0.6) {
  result = result.concat(', ' + pick_a('garnish_phrases') + pick_a('garnishes')).replace('%p', modded(''));
}

// The conditionals on either side of append(result) add a bullet to the left or right of each menu item, if appropriate for the layout.
   
if (layout === 'layout-left') {
	$_this.append('<span class="fa"></span>');
}
    $_this.append(result);
    if (layout === 'layout-right') {
	$_this.append('<span class="fa fa-right"></span>');
}
}
// Roll for font, layout, color scheme, menu section names, and restaurant name
var layout = pick_a('layouts');  // Store this for later so we know where to insert bullets
$('body').addClass(layout);
$('body').addClass(pick_a('bgs'));
$('body').addClass(pick_a('fonts'));

var our_selection = pick_a('courses');
$('.course1').append(our_selection[0]);
$('.course2').append(our_selection[1]);
$('#venue').append(pick_a('names') + pick_a('places'));

// Roll for size of menu and insert divs for each menu item
var firsts = Math.floor(Math.random() * FIRST_COURSE_RAND_RANGE) + FIRST_COURSE_MIN;
var seconds = Math.floor(Math.random() * SECOND_COURSE_RAND_RANGE) + SECOND_COURSE_MIN;
for (var idx = 0; idx < firsts; idx++) {
    $('#section1').append('<li><div class = "first-course menu-item"></div></li>');
}
for (var idx = 0; idx < seconds; idx++) {
    $('#section2').append('<li><div class = "second-course menu-item"></div></li>');
}
$('.first-course').each(function(index) {
  var $_this = $(this);
  compose_dish($_this, 'first');
});
$('.second-course').each(function(index) {
    var $_this = $(this);
  compose_dish($_this, 'second');
  });

var fa_bullet = pick_a('bullets');
$('span').addClass(fa_bullet);
