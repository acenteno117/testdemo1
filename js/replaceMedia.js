$(document).ready(function() {
  $(window).resize(function() {
    // $(this).width();
    reloadReplacement();
  });

  // Reload replacement function
  function reloadReplacement() {
    // Loop in Section tags
    $("section").each(function(index, value) {
      // Variables
      var thisPath = "";
      var pageName = "";

      // Reset property
      $(this).removeAttr("style");

      // Get Background CSS Property value
      var backgroundImageURL = $(this).css("background-image");
      // Get Background-Image CSS Property value
      var backgroundURL = $(this).css("background");

      // Get URL from Background CSS Property
      backgroundURL = backgroundURL
      .replace(/.*\s?url\([\'\"]?/, "")
      .replace(/[\'\"]?\).*/, "");
      // Get URL from Background-Image CSS Property
      backgroundImageURL = backgroundImageURL
      .replace(/.*\s?url\([\'\"]?/, "")
      .replace(/[\'\"]?\).*/, "");

      // If image is set in Background CSS property
      if (backgroundURL.match("^file:///")) {
        // Get full path of page
        thisPath = $(location).attr("href");
        // Get page name
        pageName = "/" + thisPath.split("/").slice(-1)[0];

        // Remove page name from full path
        thisPath = thisPath.replace(pageName, "");

        // Replace ^media_src^
        backgroundURL = backgroundURL
        .replace(thisPath + "/css/", "")
        .replace("%5E", "")
        .replace("%5E", "")
        .replace("media_src_", "img/");

        // Set image file
        $(this).css({ "background-image": "url(" + backgroundURL + ")" });
      }
      // End If image is set in Background CSS property

      // If image is set in Background-Image CSS property
      if (backgroundImageURL.match("^file:///")) {
        // Get full path of page
        thisPath = $(location).attr("href");
        // Get page name
        pageName = "/" + thisPath.split("/").slice(-1)[0];

        // Remove page name from full path
        thisPath = thisPath.replace(pageName, "");

        // Replace ^media_src^
        backgroundURL = backgroundURL
        .replace(thisPath + "/css/", "")
        .replace("%5E", "")
        .replace("%5E", "")
        .replace("media_src_", "img/");

        // Set image file
        $(this).css({ "background-image": "url(" + backgroundURL + ")" });
      }
      // End If image is set in Background-Image CSS property
    });
    // End Loop in Section tags

    // Loop in Div tags
    $("div").each(function(index, value) {
      // Variables
      var thisPath = "";
      var pageName = "";

      // Reset property
      $(this).removeAttr("style");

      // Get Background CSS Property value
      var backgroundImageURL = $(this).css("background-image");
      // Get Background-Image CSS Property value
      var backgroundURL = $(this).css("background");

      // Get URL from Background CSS Property
      backgroundURL = backgroundURL
      .replace(/.*\s?url\([\'\"]?/, "")
      .replace(/[\'\"]?\).*/, "");
      // Get URL from Background-Image CSS Property
      backgroundImageURL = backgroundImageURL
      .replace(/.*\s?url\([\'\"]?/, "")
      .replace(/[\'\"]?\).*/, "");

      // If image is set in Background CSS property
      if (backgroundURL.match("^file:///")) {
        // Get full path of page
        thisPath = $(location).attr("href");
        // Get page name
        pageName = "/" + thisPath.split("/").slice(-1)[0];

        // Remove page name from full path
        thisPath = thisPath.replace(pageName, "");

        // Replace ^media_src^
        backgroundURL = backgroundURL
        .replace(thisPath + "/css/", "")
        .replace("%5E", "")
        .replace("%5E", "")
        .replace("media_src_", "img/");

        // Set image file
        $(this).css({ "background-image": "url(" + backgroundURL + ")" });
      }
      // End If image is set in Background CSS property

      // If image is set in Background-Image CSS property
      if (backgroundImageURL.match("^file:///")) {
        // Get full path of page
        thisPath = $(location).attr("href");
        // Get page name
        pageName = "/" + thisPath.split("/").slice(-1)[0];

        // Remove page name from full path
        thisPath = thisPath.replace(pageName, "");

        // Replace ^media_src^
        backgroundURL = backgroundURL
        .replace(thisPath + "/css/", "")
        .replace("%5E", "")
        .replace("%5E", "")
        .replace("media_src_", "img/");

        // Set image file
        $(this).css({ "background-image": "url(" + backgroundURL + ")" });
      }
      // End If image is set in Background-Image CSS property
    });
    // End Loop in Div tags

    // Loop in Img tags
    $("img").each(function(index, value) {
      // Variables
      var thisPath = "";
      var pageName = "";

      // Get Background CSS Property value
      var imageSrc = $(this).attr("src");

      // Get full path of page
      thisPath = $(location).attr("href");
      // Get page name
      pageName = "/" + thisPath.split("/").slice(-1)[0];

      // Remove page name from full path
      thisPath = thisPath.replace(pageName, "");

      // If image is set with ^media_src^
      if (imageSrc.indexOf("^media_src_") === 0) {
        // Replace ^media_src^
        imageSrc = imageSrc
        .replace("^", "")
        .replace("^", "")
        .replace("media_src_", "/img/");
        // Set image file
        $(this).attr("src", thisPath + imageSrc);
      }
      // End If image is set with ^media_src^
    });
    // End If image is set in Background CSS property
  }
  // End Reload replacement function

  // Run function
  reloadReplacement();
});
