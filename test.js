/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck TODO remove when fixed
function initPano2() {
  // Set up Street View and initially set it visible. Register the
  // custom panorama provider function. Set the StreetView to display
  // the custom panorama 'reception' which we check for below.
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("map"),
    { pano: "reception", visible: true },
  );

  panorama.registerPanoProvider(getCustomPanorama);
}

function initPano() {
   var agbar = new google.maps.LatLng(41.4035482, 2.1894355);
        // map = new google.maps.Map(document.getElementById('map'), {
        //     center: agbar,
        //     zoom: 14
        // });
  const panorama = new google.maps.StreetViewPanorama(
            document.getElementById('map'), {
                position: agbar,
                pov: {
                    heading: 34,
                    pitch: 10
                }
            });
    console.log('pano is: ' + panorama.getPano());

  panorama.registerPanoProvider(getCustomPanorama);
}
// Return a pano image given the panoID.
function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
  return (
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/" +
    "panoReception1024-" +
    zoom +
    "-" +
    tileX +
    "-" +
    tileY +
    ".jpg"
  );
}

// Construct the appropriate StreetViewPanoramaData given
// the passed pano IDs.
function getCustomPanorama(pano) {
  if (pano === "reception") {
    return {
      location: {
        pano: "reception",
        description: "Google Sydney - Reception",
      },
      links: [],
      // The text for the copyright control.
      copyright: "Imagery (c) 2010 Google",
      // The definition of the tiles for this panorama.
      tiles: {
        tileSize: new google.maps.Size(1024, 512),
        worldSize: new google.maps.Size(2048, 1024),
        // The heading in degrees at the origin of the panorama
        // tile set.
        centerHeading: 105,
        getTileUrl: getCustomPanoramaTileUrl,
      },
    };
  }
  // @ts-ignore TODO fix typings
  return null;
}

window.initPano = initPano;
