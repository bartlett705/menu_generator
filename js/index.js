// Constants
var FIRST_COURSE_MIN = 4;
var FIRST_COURSE_RAND_RANGE = 3;
var SECOND_COURSE_MIN = 3;
var SECOND_COURSE_RAND_RANGE = 3;

// Helpful functions

function pick_a(arr) {
  var item = arr[Math.floor(Math.random() * arr.length)];
  arr = arr.slice(0, arr.indexOf(item)).concat(arr.slice(arr.indexOf(item) + 1));
  console.log('Popping ' + item + ": " + arr);
  return item;
}
function modded(str) {
  if (Math.random() < 0.2) {
    return pick_a(mods) + ' ' + str;
  }
  else {
    return str;
  }
}
function get_shroom() {
  return pick_a(shrooms) + ' mushrooms';
}
function get_oyster() {
  return pick_a(oysters) + ' oysters';
}
function silly_animals() {
  return pick_a(animals) + ' & ' + pick_a(animals) + ' ';
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

// Pantry

var shrooms = ['porcini', 'shiitake', 'crimini', 'king trumpet', 'oyster', 'button', 'ushimeji', 'black trumpet', 'wood-ear'];
var oysters = ['kusshi', 'kumamoto', 'Point Reyes', 'Hog Island', 'Humboldt Gold', 'Hama Hama', 'shigoku', 'Netarts Bay' ];
var ingredients = ['flowers', 'craft beer', get_shroom(), 'watercress', 'mugwort', 'sunchoke', 'candy-cane beets', 'tri-color carrots', 'tomatoes', 'new potatoes', 'gnocchi', 'scallions', 'cebollitas', 'baby kale', 'fennel', 'river moss', 'lingonberries', 'cherries', 'marionberries', 'pork jowl', 'guanciale', 'iberico ham', get_shroom()];
var starches = ['arborrio rice', 'black rice', 'himilayan pink rice', 'calrose rice', 'haiga rice', 'Vietnamese jasmine rice', 'Texas basmati rice', 'mixed seasonal veggies', 'mashed potatoes', 'truffled potatoes', 'pomme puree', 'potatoes au-gratin', 'a hunk of crusty sourdough', 'a pain rustique', 'an entire loaf of white bread', 'corn-pone'];
var sauces = ['sauce', 'dip', 'ranch', 'reduction', 'bernaise', 'hollandaise', 'demi-glace', 'aspic', 'glaze'];
var preps = ['braised', 'grilled', 'smoked', 'baked', 'broasted', 'char-grilled', 'filet of', 'a la king', 'rockafeller', 'almandine', 'fresh off the bar-bee', 'from the farm'];
var proteins = {'first': ["crispy pig's-ear", get_oyster(), get_oyster(), get_oyster(), "chestnuts", "shishito peppers", "toro", "uni", "burrata"], 'second' : ['skirt steak', 'cats', 'dogs', 'mice', 'hippies', 'salamander', 'Harris Ranch ribeye', 'rattlesnake', 'california condor', 'mountain lion', 'dung beetle', 'hand-trimmed jidori chicken', 'brined Duroc pork loin', 'Kurobuta pork belly', 'Wagyu filet mignon']};
var mods = ['locally-foraged', 'locally-sourced', 'heirloom', 'organic', 'non-GMO', 'fair-trade', 'gluten-free', 'vegan', 'responsibly-raised', 'humanely-harvested', "grandma's secret", "house-pickled", "preserved", "thousand-year"];
var garnish_phrases = ['finished with ', 'topped with ', 'adorned with ', 'and ', 'and finally, ', 'garnished with ', 'set off with '];
var garnishes = ['a sprig of rosemary', 'a leaf of mint', 'gold flakes', 'ground dried shrimp', 'pomegranite seeds', 'candied walnuts', 'candied pecans', 'glazed pistachio crumble', 'house-made bacon bits', 'picogreens', 'femtogreens','puffed black rice', 'nanogreens'];
// Layout and restaurant name options
var bullets = ['fa-align-justify', 'fa-asterisk', 'fa-chevron-circle-right', 'fa-pagelines', 'fa-ra' , 'fa-spoon'];
var fonts = ['font1', 'font2', 'font3'];
var bgs = ['bg0', 'bg1', 'bg2','bg3'];
var layouts = ['layout-left', 'layout-center', 'layout-right'];
var places = ["Roadhouse", "Dive", "Hide-away", "Grub Shack", "Bistro",  "Cafe", "Diner", "Tavern", "Gastropub", "House"];
var animals = ['Dog', "Cat", "Hare", "Crane", "Fox", "Hound", "Sheeba", "Whistle", "Wolf", "Musk Ox", "Blue Jay", "Cormorant", "Panda", "Doorknob", "Broomstick", "Knife", "Fiddle", "Jewel", "Lamp"];
var names = [silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), silly_animals(), "Jill's ", "Bob's ", "Dave's ", "The ", "City ", "Famous ", "That ", "Hipster ", "Artisan ", "Local " ];
var courses = [
  ['Apps', 'Entrees'],
  ['Starters', 'Mains'],
  ['Small Bites', 'Share Plates']
];
function compose_dish($_this, course) {
  var result = '';
  prep = pick_a(preps);
  var dish_length = Math.floor(Math.random() * 4);
  if (preps.indexOf(prep) >= 7) {
    result = result.concat(modded(pick_a(proteins[course])) + ' ' + prep);

  } else {
    result = result.concat(prep + ' ' + modded(pick_a(proteins[course])));
  }
  if (dish_length >= 2) {
    result = result.concat(', ');
  } else {
    result = result.concat(' ');
  }
  for (var idx = 0; idx < dish_length; idx++) {
    var ingredient = pick_a(ingredients);
    while (result.indexOf(ingredient) > 0 ) {
      ingredient = pick_a(ingredients);
    }
    ingredient = modded(ingredient);
    if ((dish_length >= 1) && (idx === dish_length - 1)) {
      result = result.concat('and ' + ingredient);
    } else {
      result = result.concat(ingredient);
    }
    if (dish_length > 2) {
      result = result.concat(', ');
    } else {
      result = result.concat(' ');
    }
    console.log(result);
  }
  result = result.concat('with ' + modded(pick_a(starches)));
  result = result.concat(' and ' + non_plural(modded(pick_a(ingredients))) + ' ' + pick_a(sauces));
  result = result.concat(', ' + pick_a(garnish_phrases) + pick_a(garnishes));

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
var layout = pick_a(layouts);  // Store this for later so we know where to insert bullets
$('body').addClass(layout);
$('body').addClass(pick_a(bgs));
$('body').addClass(pick_a(fonts));

var our_selection = pick_a(courses);
$('.course1').append(our_selection[0]);
$('.course2').append(our_selection[1]);
$('#venue').append(pick_a(names) + pick_a(places));

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

var fa_bullet = pick_a(bullets);
$('span').addClass(fa_bullet);
