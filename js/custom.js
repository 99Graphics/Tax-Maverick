var btn = $('#backto-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// Sticky Menu Js
jQuery(window).scroll(function () {
      console.log(jQuery (window).scrollTop())
      if (jQuery(window).scrollTop() > 150) {
        jQuery('.header-area').addClass('navbar-fixed');
      }
      if (jQuery(window).scrollTop() < 150) {
        jQuery('.header-area').removeClass('navbar-fixed');
      }
});



var currentMonth = 0,
    currentYear = 2021,
    monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'september', 'October', 'November', 'December'];
    $dayList = $('.days');

var addDayElement = function(date, $container) {
  var element = $(document.createElement('div')).addClass('date');
  if (date.getMonth() !== currentMonth) { element.addClass('out-of-scope'); }
  element.text(date.getDate());
  $container.append(element);
};

var getFirstLastDates = function(date) {
  var startDate, endDate;
  //First, find the first Monday prior to the beginning of the current month.
  startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  while (startDate.getDay() !== 1) { startDate.setDate(startDate.getDate() - 1); }
  //Now, find the Sunday nearest the last day of the current month.
  endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  while (endDate.getDay() !== 0) { endDate.setDate(endDate.getDate() + 1); }
  return [startDate, endDate];
};

var renderDays = function(dateRange) {
  $dayList.empty();
  var startDate = dateRange[0],
      endDate = dateRange[1],
      currentDate = startDate;
  
  while (currentDate <= endDate) {
    addDayElement(currentDate, $dayList);
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

var loadCalendar = function(date) {
  $('.headline .month').text(monthMap[currentMonth]);
  $('.headline .year').text(currentYear);
  renderDays(getFirstLastDates(date));
};

//start us off on the current month & date;
loadCalendar(new Date());

$('.days').on('click', '.date', function(e) {
  $('.date').removeClass('selected');
  $(this).addClass('selected');
});

$('.click-left').on('click', function(e) {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  loadCalendar(new Date(currentYear, currentMonth));
});

$('.click-right').on('click', function(e) {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  loadCalendar(new Date(currentYear, currentMonth));
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});