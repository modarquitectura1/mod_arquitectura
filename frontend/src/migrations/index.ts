import * as migration_20260929_161332_initial from './20260929_161332_initial';

export const migrations = [
  {
    up: migration_20260929_161332_initial.up,
    down: migration_20260929_161332_initial.down,
    name: '20260929_161332_initial'
  },
];
