$(document).ready(function () {
    var carouselOne = $('#myCarousel-1');
    var carouselTwo = $('#myCarousel-2');
    var carouselThree = $('#myCarousel-3')

    // Manually control carousel#1 with buttons
    $('#prevButton').click(function () {
        carouselOne.carousel('prev');
    });

    $('#nextButton').click(function () {
        carouselOne.carousel('next');
    });

    // Manually control carousel#2 with buttons
    $('#prevButton').click(function () {
        carouselTwo.carousel('prev');
    });

    $('#nextButton').click(function () {
        carouselTwo.carousel('next');
    });

    // Manually control carousel #3 with buttons
    $('#prevButton').click(function () {
        carouselThree.carousel('prev');
    });

    $('#nextButton').click(function () {
        carouselThree.carousel('next');
    });
//});

    // Functionality for the Zoom
    function imageZoom(imgID, resultID) {
        var img = document.getElementById(imgID);
        var result = document.getElementById(resultID);
        var lens, cx, cy;

        // Create lens:
        lens = document.createElement("div");
        lens.className = "img-zoom-lens";

        // Insert lens:
        img.parentElement.insertBefore(lens, img);

        // Calculate the ratio between result DIV and lens:
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;

        // Set background properties for the result DIV:
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

        // Execute a function when someone moves the cursor over the image or the lens:
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);

        // And also for touch screens:
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);

        function moveLens(e) {
            e.preventDefault();
            var pos = getCursorPos(e);
            var x = pos.x - (lens.offsetWidth / 2);
            var y = pos.y - (lens.offsetHeight / 2);

            if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
            if (x < 0) { x = 0; }
            if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
            if (y < 0) { y = 0; }

            lens.style.left = x + "px";
            lens.style.top = y + "px";

            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }

        function getCursorPos(e) {
            var a = img.getBoundingClientRect();
            var x = e.pageX - a.left;
            var y = e.pageY - a.top;
            x -= window.scrollX;
            y -= window.scrollY;
            return { x: x, y: y };
        }
    }

    // Call the imageZoom function when the document is ready
    document.addEventListener("DOMContentLoaded", function () {
        // Zoom effect for carousel #1
        imageZoom("myImage-1", "myResult");
        imageZoom("myImage-2", "myResult");
        imageZoom("myImage-3", "myResult");
        imageZoom("myImage-4", "myResult");
        imageZoom("myImage-5", "myResult");
        imageZoom("myImage-6", "myResult");
        imageZoom("myImage-7", "myResult");
        imageZoom("myImage-8", "myResult");
        imageZoom("myImage-9", "myResult");
        imageZoom("myImage-10", "myResult");
        imageZoom("myImage-11", "myResult");
        imageZoom("myImage-12", "myResult");
        imageZoom("myImage-13", "myResult");
        imageZoom("myImage-14", "myResult");
        imageZoom("myImage-15", "myResult");
        imageZoom("myImage-16", "myResult");
        imageZoom("myImage-17", "myResult");
        imageZoom("myImage-18", "myResult");
        imageZoom("myImage-19", "myResult");
        imageZoom("myImage-20", "myResult");
        imageZoom("myImage-21", "myResult");
        imageZoom("myImage-22", "myResult");
        imageZoom("myImage-23", "myResult");
        imageZoom("myImage-24", "myResult");
        imageZoom("myImage-25", "myResult");
        imageZoom("myImage-26", "myResult");
        imageZoom("myImage-27", "myResult");
        imageZoom("myImage-28", "myResult");

        // Zoom effect for carousel #2
        imageZoom("myImage-29", "myResult-2");
        imageZoom("myImage-30", "myResult-2");
        imageZoom("myImage-31", "myResult-2");
        imageZoom("myImage-32", "myResult-2");
        imageZoom("myImage-33", "myResult-2");
        imageZoom("myImage-34", "myResult-2");
        imageZoom("myImage-35", "myResult-2");

        // Zoom effect for carousel #3
        imageZoom("myImage-36", "myResult-3");
        imageZoom("myImage-37", "myResult-3");
        imageZoom("myImage-38", "myResult-3");
        imageZoom("myImage-39", "myResult-3");
        imageZoom("myImage-40", "myResult-3");
        imageZoom("myImage-41", "myResult-3");
        imageZoom("myImage-42", "myResult-3");
        imageZoom("myImage-43", "myResult-3");
    });
});