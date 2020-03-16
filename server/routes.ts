import Routes from 'next-routes';

const routes = new Routes();

export default routes
  .add('/', 'index')
  .add('/play', 'game')
  .add('/leaderboard', 'leaderboard');
