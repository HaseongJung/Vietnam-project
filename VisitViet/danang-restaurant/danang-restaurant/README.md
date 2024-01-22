# Dutago

- [x] Giới thiệu nhà hàng
- [ ] Giới thiệu các dịch vụ khác như khách sạn, điểm du lịch...
- [ ] Mở rộng phạm vi giới thiệu
- [ ] Mobile app?

## HOW TO RUN

### Prerequisites

1. Make sure you install packages with correct version below:

  - [node v16.20.0](https://nodejs.org/en/)
  - [npm 8.19.4](https://www.npmjs.com/)

2. In the project directory, install all dependencies packages with command `npm install`

3. Init database in local with command `npx prisma db push`

Building an init router to handle on Production site since Seeding data is not available on Production yet.

### Development

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

- Open local database:

  ```sh
  npx prisma studio
  ```

- Migration database for Model Schema updated:

  ```sh
  npx prisma migrate dev
  ```

- Sync with new Prisma schema by migration files:
  ```sh
  npx prisma db push
  ```
