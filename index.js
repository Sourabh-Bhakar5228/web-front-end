$(document).ready(function () {
  // Add click event listener to navigation items
  $("nav a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });

  // Fetch data from dummy API
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    success: function (response) {
      // Example: Display fetched data in console
      console.log(response);
    },
    error: function (xhr, status, error) {
      console.error(status, error);
    },
  });
});
