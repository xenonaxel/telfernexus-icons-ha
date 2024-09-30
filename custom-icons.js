var icons = {
  "climate":[0,0,128,128,"m56.887 78.367v-7.2578l-8.8867 0.003906v-3.5547h8.8867v-7.1094l-8.8867-0.003907v-3.5547h8.8867v-7.1133h-8.8867v-3.5547h8.8867v-7.1133l-8.8867 0.003906v-3.5547h8.8867v-5.332c0-3.9219-3.1914-7.1133-7.1133-7.1133-3.9219 0-7.1094 3.1914-7.1094 7.1133v48.145c-3.7578 2.1797-6.4258 6.0234-6.9883 10.523h28.199c-0.5625-4.5-3.2305-8.3438-6.9883-10.527z m64 0c-35.348 0-64 28.652-64 64 0 35.344 28.652 64 64 64 35.344 0 64-28.656 64-64 0-35.348-28.656-64-64-64zm32 40.887 17.777 17.777-35.555 0.003907zm-46.223 71.113c-11.762 0-21.332-9.5703-21.332-21.332 0-6.2969 2.7578-11.949 7.1133-15.855l-0.003906-44.59c0-7.8438 6.3789-14.223 14.223-14.223s14.223 6.3789 14.223 14.223v44.59c4.3516 3.9062 7.1133 9.5586 7.1133 15.855 0 11.762-9.5703 21.332-21.336 21.332zm46.223-24.887-17.777-17.781h35.555z "],
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
