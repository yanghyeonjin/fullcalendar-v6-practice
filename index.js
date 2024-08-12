document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
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

    // validRange: function (nowDate) {
    //   const addedTwoMonth = nowDate.getMonth() + 2;
    //   const twoMonthAddDate = new Date(nowDate).setMonth(addedTwoMonth);
    //
    //   return {
    //     start: nowDate,
    //     end: twoMonthAddDate,
    //   };
    // },

    events: {
      url: "http://localhost:3000/events",
      failure: function() {
        alert("이벤트 목록을 가져오다가 문제가 발생했습니다.");
      },
    }

  });

  calendar.render();
});
