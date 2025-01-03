const questions = [
  {
    category: "Javascript",
    questions: [
      {
        question:
          "کدام کلمه کلیدی برای تعریف یک متغیر در جاوااسکریپت استفاده می‌شود؟",
        options: ["let", "var", "const", "همه موارد"],
        correctAnswer: 3,
      },
      {
        question: "کدام یک از موارد زیر یک نوع داده اولیه در جاوااسکریپت نیست؟",
        options: ["boolean", "number", "string", "function"],
        correctAnswer: 3,
      },
      {
        question: "کدام متد برای پیدا کردن یک عنصر در یک آرایه استفاده می‌شود؟",
        options: ["find()", "filter()", "map()", "reduce()"],
        correctAnswer: 0,
      },
      {
        question: "کدام عملگر مقایسه‌ای تطابق نوع داده‌ای را نیز بررسی می‌کند؟",
        options: ["==", "!=", "===", "!=="],
        correctAnswer: 2,
      },
      {
        question:
          "کدام متد برای الحاق دو یا چند آرایه به یکدیگر استفاده می‌شود؟",
        options: ["concat()", "join()", "merge()", "link()"],
        correctAnswer: 0,
      },
      {
        question: "کدام یک از موارد زیر یک حلقه معتبر در جاوااسکریپت است؟",
        options: ["for", "while", "do-while", "همه موارد"],
        correctAnswer: 3,
      },
      {
        question: "کدام متد برای تبدیل یک رشته به یک آرایه استفاده می‌شود؟",
        options: ["split()", "join()", "slice()", "splice()"],
        correctAnswer: 0,
      },
      {
        question:
          "کدام متد برای بررسی اینکه آیا یک آرایه شامل یک عنصر خاص است، استفاده می‌شود؟",
        options: ["includes()", "indexOf()", "findIndex()", "همه موارد"],
        correctAnswer: 0,
      },
      {
        question:
          "کدام کلمه کلیدی برای متوقف کردن اجرای یک حلقه و ادامه دادن با حلقه بعدی استفاده می‌شود؟",
        options: ["continue", "break", "stop", "exit"],
        correctAnswer: 0,
      },
      {
        question:
          "کدام متد برای برداشتن آخرین عنصر از یک آرایه استفاده می‌شود؟",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "React",
    questions: [
      {
        question:
          "کدام یک از موارد زیر برای حالت‌دهی به کامپوننت‌ها در ری‌اکت استفاده می‌شود؟",
        options: [
          "this.setState()",
          "this.state()",
          "this.setProps()",
          "this.updateState()",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "کدام یک از موارد زیر برای رد کردن داده‌ها به یک کامپوننت فرزند استفاده می‌شود؟",
        options: ["props", "state", "context", "refs"],
        correctAnswer: 0,
      },
      {
        question:
          "کدام یک از متدهای چرخه حیات برای بارگذاری اولیه کامپوننت استفاده می‌شود؟",
        options: [
          "componentDidMount",
          "componentWillMount",
          "componentDidUpdate",
          "componentWillUnmount",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "کدام یک از موارد زیر برای رندر کردن شرطی در ری‌اکت استفاده می‌شود؟",
        options: ["if", "switch", "conditional", "همه موارد"],
        correctAnswer: 3,
      },
      {
        question: "کدام یک از موارد زیر یک هوک در ری‌اکت است؟",
        options: ["useState", "useEffect", "useContext", "همه موارد"],
        correctAnswer: 3,
      },
      {
        question:
          "کدام یک از موارد زیر برای افزودن یک کلاس به یک عنصر در ری‌اکت استفاده می‌شود؟",
        options: ["class", "className", "classList", "cssClass"],
        correctAnswer: 1,
      },
      {
        question:
          "کدام یک از هوک‌های ری‌اکت برای مدیریت اثرات جانبی استفاده می‌شود؟",
        options: ["useSideEffects", "useEffects", "useEffect", "useSideEffect"],
        correctAnswer: 2,
      },
      {
        question:
          "کدام یک از متدهای ری‌اکت برای بروزرسانی یک کامپوننت فرزند استفاده می‌شود؟",
        options: [
          "shouldComponentUpdate",
          "componentDidUpdate",
          "componentWillUpdate",
          "componentDidReceiveProps",
        ],
        correctAnswer: 3,
      },
      {
        question:
          "کدام یک از موارد زیر برای مدیریت حافظه داخلی در کامپوننت‌ها استفاده می‌شود؟",
        options: ["state", "props", "context", "storage"],
        correctAnswer: 0,
      },
      {
        question:
          "کدام یک از هوک‌های ری‌اکت برای استفاده از کانتکست استفاده می‌شود؟",
        options: [
          "useContextProvider",
          "useReactContext",
          "useContext",
          "useProvider",
        ],
        correctAnswer: 2,
      },
    ],
  },

  {
    category: "Html",
    questions: [
      {
        question: "کدام تگ برای تعریف یک پاراگراف استفاده می‌شود؟",
        options: ["<div>", "<p>", "<h1>", "<span>"],
        correctAnswer: 1,
      },
      {
        question: "کدام تگ برای نمایش یک تصویر استفاده می‌شود؟",
        options: ["<img>", "<image>", "<picture>", "<src>"],
        correctAnswer: 0,
      },
      {
        question:
          "کدام تگ برای ایجاد یک لینک به یک صفحه وب دیگر استفاده می‌شود؟",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1,
      },
      {
        question: "کدام تگ برای تعریف یک تیتر استفاده می‌شود؟",
        options: ["<title>", "<header>", "<h1>", "<head>"],
        correctAnswer: 2,
      },
      {
        question: "کدام تگ برای تعریف بدنه مستند استفاده می‌شود؟",
        options: ["<body>", "<html>", "<head>", "<section>"],
        correctAnswer: 0,
      },
      {
        question: "کدام ویژگی برای تعیین رنگ متن استفاده می‌شود؟",
        options: ["color", "font-color", "text-color", "style"],
        correctAnswer: 0,
      },
      {
        question: "کدام تگ برای ایجاد یک جدول استفاده می‌شود؟",
        options: ["<table>", "<tab>", "<tr>", "<td>"],
        correctAnswer: 0,
      },
      {
        question: "کدام تگ برای درج یک خط افقی استفاده می‌شود؟",
        options: ["<hr>", "<line>", "<br>", "<hline>"],
        correctAnswer: 2,
      },
      {
        question: "کدام تگ برای نمایش یک بخش از کد استفاده می‌شود؟",
        options: ["<code>", "<pre>", "<script>", "<kbd>"],
        correctAnswer: 0,
      },
      {
        question: "کدام تگ برای ایجاد یک کادر متن ورودی استفاده می‌شود؟",
        options: ["<input>", "<textarea>", "<form>", "<textbox>"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "Css",
    questions: [
      {
        question: "کدام ویژگی برای تنظیم رنگ متن استفاده می‌شود؟",
        options: ["font-color", "text-color", "color", "text-style"],
        correctAnswer: 2,
      },
      {
        question: "کدام ویژگی برای تنظیم فاصله بین خطوط متن استفاده می‌شود؟",
        options: ["line-height", "spacing", "letter-spacing", "word-spacing"],
        correctAnswer: 0,
      },
      {
        question: "کدام ویژگی برای تنظیم حاشیه خارجی عنصر استفاده می‌شود؟",
        options: ["padding", "margin", "border", "outline"],
        correctAnswer: 1,
      },
      {
        question: "کدام ویژگی برای نمایش یک عنصر به صورت بلوک استفاده می‌شود؟",
        options: [
          "display: inline",
          "display: block",
          "display: hidden",
          "display: none",
        ],
        correctAnswer: 1,
      },
      {
        question: "کدام مقدار برای پنهان کردن یک عنصر استفاده می‌شود؟",
        options: [
          "visibility: hide",
          "display: none",
          "display: invisible",
          "visibility: none",
        ],
        correctAnswer: 1,
      },
      {
        question: "کدام ویژگی برای تنظیم تصویر پس‌زمینه استفاده می‌شود؟",
        options: [
          "background-color",
          "background-image",
          "background-position",
          "background-repeat",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "کدام مقدار برای تنظیم یک عنصر در مرکز افقی صفحه استفاده می‌شود؟",
        options: [
          "text-align: center",
          "margin: auto",
          "margin: 0 auto",
          "padding: 0 auto",
        ],
        correctAnswer: 2,
      },
      {
        question: "کدام ویژگی برای تنظیم فاصله داخلی عنصر استفاده می‌شود؟",
        options: ["padding", "margin", "border", "outline"],
        correctAnswer: 0,
      },
      {
        question: "کدام ویژگی برای تنظیم فاصله بین حروف استفاده می‌شود؟",
        options: [
          "letter-spacing",
          "word-spacing",
          "line-spacing",
          "text-spacing",
        ],
        correctAnswer: 0,
      },
      {
        question: "کدام ویژگی برای تنظیم فونت استفاده می‌شود؟",
        options: ["font-family", "font-style", "font-size", "همه موارد"],
        correctAnswer: 3,
      },
    ],
  },
];
