import React from 'react';
import './shell.css';

// Оболочка показывает, что демонстрирует проект, и оборачивает рабочее приложение.
const INFO = {
  number: 52,
  title: "Магазин: структура по слоям",
  description: "Тот же магазин с организацией кода по слоям: app, features, pages, components, services.",
  shows: ["Срез products и cart с model, components, api, lib", "Хранилище и типизированные хуки в app/"],
  how: ["Добавляйте товары в корзину и переходите на страницу корзины"],
  files: "src/\n├── app/\n│   ├── hooks.js\n│   └── store.js\n├── components/\n│   ├── Button.jsx\n│   ├── Footer.jsx\n│   ├── Header.jsx\n│   └── Modal.jsx\n├── features/\n│   ├── cart/\n│   │   ├── api/\n│   │   │   └── cartApi.js\n│   │   ├── components/\n│   │   │   └── CartItem.jsx\n│   │   ├── lib/\n│   │   │   └── helpers.js\n│   │   ├── model/\n│   │   │   └── cartSlice.js\n│   │   └── index.js\n│   └── products/\n│       ├── api/\n│       │   └── productsApi.js\n│       ├── components/\n│       │   └── ProductList.jsx\n│       ├── lib/\n│       │   └── helpers.js\n│       ├── model/\n│       │   └── productsSlice.js\n│       └── index.js\n├── layouts/\n├── pages/\n│   ├── CartPage.jsx\n│   ├── HomePage.jsx\n│   ├── ProductPage.jsx\n│   └── ProfilePage.jsx\n├── routes/\n├── services/\n│   ├── api/\n│   │   ├── endpoints/\n│   │   └── baseApi.js\n│   └── storage/\n├── shared/\n│   ├── assets/\n│   ├── config/\n│   └── styles/\n├── shell/\n│   ├── DemoShell.jsx\n│   └── shell.css\n├── utils/\n├── App.jsx\n├── index.css\n└── main.jsx",
};

const DemoShell = ({ children }) => (
  <div className="shell">
    <header className="shell-header">
      <p className="shell-tag">ДЗ {INFO.number}</p>
      <h1 className="shell-title">{INFO.title}</h1>
      <p className="shell-description">{INFO.description}</p>
    </header>

    <div className="shell-info">
      <section className="shell-box">
        <h2>Что показывает</h2>
        <ul>
          {INFO.shows.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="shell-box">
        <h2>Как проверить</h2>
        <ul>
          {INFO.how.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>

    <h2 className="shell-section-title">Работа приложения</h2>
    <main className="shell-stage">{children}</main>

    <h2 className="shell-section-title">Структура src</h2>
    <pre className="shell-files">{INFO.files}</pre>
  </div>
);

export default DemoShell;
