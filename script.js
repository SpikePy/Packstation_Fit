var package_height
var package_width
var package_depth

// Define slot dimensions
slot_height = [8, 18, 37, 65]
slot_width  = 35
slot_depth  = 60

// Define Colors
color_fail    = "rgb(235, 220, 220)"
color_success = "rgb(220, 245, 220)"

// Sort dimensions by size
slot_s  = [slot_width, slot_depth, slot_height[0]].sort(function(a, b){return a-b})
slot_m  = [slot_width, slot_depth, slot_height[1]].sort(function(a, b){return a-b})
slot_l  = [slot_width, slot_depth, slot_height[2]].sort(function(a, b){return a-b})
slot_xl = [slot_width, slot_depth, slot_height[3]].sort(function(a, b){return a-b})

function determine() {
  package_height = parseInt(document.getElementById("package_height").value)
  package_width = parseInt(document.getElementById("package_width").value)
  package_depth = parseInt(document.getElementById("package_depth").value)

  dimensions = [package_height, package_width, package_depth].sort(function(a, b){return a-b})

  if (isNaN(package_height) || isNaN(package_width) || isNaN(package_depth) )
  {
    result.style.backgroundColor = color_fail
    text = 'Insert Dimensions'
    result.value = text
    result.title = text
  }
  else
  {
    switch (true) {
      case dimensions[0] <= slot_s[0] && dimensions[1] <= slot_s[1] && dimensions[2] <= slot_s[2]:
        result.value = 'S'
        result.style.backgroundColor = color_success
        break;
      case dimensions[0] <= slot_m[0] && dimensions[1] <= slot_m[1] && dimensions[2] <= slot_m[2]:
        result.value = 'M'
        result.style.backgroundColor = color_success
        break;
      case dimensions[0] <= slot_l[0] && dimensions[1] <= slot_l[1] && dimensions[2] <= slot_l[2]:
        result.value = 'L'
        result.style.backgroundColor = color_success
        break;
      case dimensions[0] <= slot_xl[0] && dimensions[1] <= slot_xl[1] && dimensions[2] <= slot_xl[2]:
        result.value = 'XL'
        result.style.backgroundColor = color_success
        break;
      default:
        result.style.backgroundColor = color_fail
        result.value = 'To Big'
        // slot_result = 'Package does not fit into Packstation!'
      }
  }
}
