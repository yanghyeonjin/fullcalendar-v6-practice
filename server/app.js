const express = require("express");
const app = express();
const port = 3000;		// 원하는 포트번호로 진행해도 무방.
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/events", (req, res) => {
    const events = [
        {
            title: "출근",
            start: "2024-08-03T09:00:00", // 시간까지 표시하려면 이렇게 표현!
            end: "2024-08-03T18:00:00",
            backgroundColor: "green",
            borderColor: "green",
            textColor: "white",
            display: "block",             // 종일 이벤트가 아닌 경우에는 display가 dot-list 형식으로 나와 배경색을 적용 X
                                          // 배경색이 적용될 수 있도록 display block 설정
        },
        {
            title: "개똥이랑 점심약속",
            start: "2024-08-08",
            end: "2024-08-09", // end 에 해당하는 날짜는 exclusive 날짜이다. (포함되지 않음)
            backgroundColor: "purple",
            borderColor: "purple",
            textColor: "white"
        },
    ];

    res.json(events);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});