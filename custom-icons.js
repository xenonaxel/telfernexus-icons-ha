var icons = {
  "climate":[0,0,128,128,"M57,78.3v-7.3h-9v-4h9v-6h-9v-4h9v-7h-9v-4h9v-7h-9v-4h9v-5.3c0-3.6-2.6-6.8-6.1-7.3s-7.9,2.9-7.9,7.1v48.7c-3.7,2.2-6.3,6.1-6.9,10.7h27.8c-.6-4.6-3.2-8.4-6.9-10.7h0Z M64,0C28.7,0,0,28.7,0,64s28.7,64,64,64,64-28.7,64-64S99.3,0,64,0ZM96,41.2l17.8,17.8h-35.6s17.8-17.8,17.8-17.8ZM50,111.3c-11.6,0-21-9.4-21-21s2.7-11.8,7-15.6V30.7c0-7.9,6.6-14.4,14.7-14s13.3,6.9,13.3,14.4v43.5c4.3,3.8,7,9.4,7,15.6,0,11.6-9.4,21-21,21h0ZM96,86.8l-17.8-17.8h35.6l-17.8,17.8Z "],
  }

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };
