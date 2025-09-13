# Домашняя работа №3

Необходимо реализовать отображение модального окна с использованием compound components, добавить фильтрацию постов по длине заголовка, свертывание комментариев и оптимизации через HOC и хуки.

Задание:

1. Compound Components:

   - Modal с подкомпонентами (Header, Body, Footer) → src/shared/ui/Modal/

2. HOC withLoading:

   - HOC → src/shared/lib/hoc/

   - Применяется к PostList

3. Свертывание/разворачивание комментариев:

  - CommentList.tsx → src/widgets/CommentList/ui/

  - Используй useState, useCallback

4. Фильтр по длине заголовка:

  - PostLengthFilter → src/features/PostLengthFilter/ui/

  - filterByLength.ts → src/features/PostLengthFilter/lib/

5. Оптимизации:

   - useMemo, useCallback в PostList
