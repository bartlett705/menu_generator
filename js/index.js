// Constants
var FIRST_COURSE_MIN = 4;
var FIRST_COURSE_RAND_RANGE = 3;
var SECOND_COURSE_MIN = 3;
var SECOND_COURSE_RAND_RANGE = 3;

// Helpful functions

function pick_a(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function get_shroom() {
  return pick_a(shrooms) + ' mushrooms';
}
function silly_animals() {
  return pick_a(animals) + ' & ' + pick_a(animals) + ' ';
}
function non_plural(str) {
    if ((str.slice(-1) === 's') && (str.slice(-2) != 's')) {
	return str.slice(0, -1)
    }
    else {
	return str
    }
}

// Pantry

var shrooms = ['porcini', 'shiitake', 'crimini', 'king trumpet', 'oyster', 'button', 'ushimeji', 'black trumpet', 'wood-ear'];
var ingredients = ['cats', 'dogs', 'rice', 'mice', 'flowers', 'beer', get_shroom(), 'watercress', 'mugwort', 'hippies', 'salamander', 'sunchoke', 'skirt steak', 'candy-cane beets', 'tri-color carrots', 'heirloom tomatoes', 'new potatoes', 'gnocchi', 'scallions', 'cebollitas', 'pork jowl', 'guanciale', 'iberico ham', get_shroom()];
var sauces = ['sauce', 'dip', 'ranch', 'reduction'];
var preps = ['braised', 'grilled', 'smoked', 'baked', 'broasted', 'char-grilled', 'filet of', 'a la king', 'rockafeller', 'almandine', 'fresh off the bar-bee', 'from the farm'];

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
    $('#section1').append('<li><div class = "menu-item"></div></li>');
}
for (var idx = 0; idx < seconds; idx++) {
    $('#section2').append('<li><div class = "menu-item"></div></li>');
}
$('.menu-item').each(function(index) {
  var result = '';
  prep = pick_a(preps);
  console.log(prep + ' at index ' + preps.indexOf(prep));
  var dish_length = Math.floor(Math.random() * 4);
  console.log('dish length: ' + dish_length);
  if (preps.indexOf(prep) >= 7) {
    result = result.concat(pick_a(ingredients) + ' ' + prep);

  } else {
    result = result.concat(prep + ' ' + pick_a(ingredients));
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
  result = result.concat('with ' + pick_a(ingredients));
  result = result.concat(' and ' + non_plural(pick_a(ingredients)) + ' ' + pick_a(sauces));

// The conditionals on either side of append(result) add a bullet to the left or right of each menu item, if appropriate for the layout.
   
if (layout === 'layout-left') {
	$(this).append('<span class="fa"></span>');
}
    $(this).append(result);
    if (layout === 'layout-right') {
	$(this).append('<span class="fa fa-right"></span>');
}
});
var fa_bullet = pick_a(bullets);
$('span').addClass(fa_bullet);
