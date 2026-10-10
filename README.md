# Магазин: структура по слоям (ДЗ 52)

Интернет-магазин на React и Redux Toolkit, код организован по слоям.

## Структура src

- `app/` — хранилище Redux и хуки `useAppDispatch`, `useAppSelector`
- `features/products/` — каталог товаров (model, components)
- `features/cart/` — корзина (model, components)
- `pages/` — страницы `HomePage` и `CartPage`
- `components/` — общие компоненты (`Header`)
- `shell/` — оболочка, которая показывает описание проекта и оборачивает приложение

Пустые файлы (`api/`, `lib/`, `Modal.jsx`, `Footer.jsx` и т.п.) оставлены как заготовки структуры.

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес, который покажет Vite (обычно http://localhost:5173).
