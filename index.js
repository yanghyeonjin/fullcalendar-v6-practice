document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    customButtons: {
      addSchedule: {
        text: "일정 등록",
        click: function () {
          alert("일정 등록 하세요!");
        },
      },
    },

    dayCellContent: function (arg) {
      const { date } = arg;
      return date.getDate();
    },

    footerToolbar: {
      start: "dayGridMonth,timeGridWeek,listWeek,dayGridWeek,multiMonthYear",
      center: "",
      end: "",
    },

    headerToolbar: {
      start: "addSchedule",
      center: "title",
      end: "today prevYear,prev,next,nextYear",
    },
    height: 1300,

    initialView: "dayGridMonth",

    locale: "ko",

    navLinks: true,
    navLinkDayClick: "timeGridWeek",

    stickyHeaderDates: true,
    selectable: true,
    select: function (selectionInfo) {
      const { start, end } = selectionInfo;
      console.log("start", getKrDate(start));
      console.log("end", getKrDate(end));
    },

    validRange: function (nowDate) {
      const addedTwoMonth = nowDate.getMonth() + 2;
      const twoMonthAddDate = new Date(nowDate).setMonth(addedTwoMonth);

      return {
        start: nowDate,
        end: twoMonthAddDate,
      };
    },
  });

  calendar.render();
});
