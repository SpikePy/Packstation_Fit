var dimension_1
var dimension_2
var dimension_3

// Define slot dimensions
width  = 35
depth  = 60
height = [8, 18, 37, 65]

// Sort dimensions by size
slot_s  = [width, depth, height[0]].sort(function(a, b){return a-b})
slot_m  = [width, depth, height[1]].sort(function(a, b){return a-b})
slot_l  = [width, depth, height[2]].sort(function(a, b){return a-b})
slot_xl = [width, depth, height[3]].sort(function(a, b){return a-b})

function determine() {
  dimension_1 = parseInt(document.getElementById("dimension_1").value)
  dimension_2 = parseInt(document.getElementById("dimension_2").value)
  dimension_3 = parseInt(document.getElementById("dimension_3").value)

  dimensions = [dimension_1, dimension_2, dimension_3].sort(function(a, b){return a-b})

  if (isNaN(dimension_1) || isNaN(dimension_2) || isNaN(dimension_3) )
  {
    text = 'Insert Dimensions'
    result.value = text
    result.title = text
  }
  else
  {
    switch (true) {
      case dimensions[0] <= slot_s[0] && dimensions[1] <= slot_s[1] && dimensions[2] <= slot_s[2]:
        slot_result = 'S'
        break;
      case dimensions[0] <= slot_m[0] && dimensions[1] <= slot_m[1] && dimensions[2] <= slot_m[2]:
        slot_result = 'M'
        break;
      case dimensions[0] <= slot_l[0] && dimensions[1] <= slot_l[1] && dimensions[2] <= slot_l[2]:
        slot_result = 'L'
        break;
      case dimensions[0] <= slot_xl[0] && dimensions[1] <= slot_xl[1] && dimensions[2] <= slot_xl[2]:
        slot_result = 'XL'
        break;
      default:
        slot_result = 'To Big'
        // slot_result = 'Package does not fit into Packstation!'
      }

    result.style.backgroundColor = "rgb(220, 220, 220)"
    result.value = slot_result
    // result.title = slot_result
    // Make result cell blink once for 200ms
    setTimeout(() => {
      result.style.backgroundColor = "rgb(240, 240, 240)"
    }, 200);

  }
}
