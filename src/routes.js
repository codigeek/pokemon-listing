/* eslint-disable */
import { lazy } from 'react';
import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';

const pokemon = {
  list: lazy(() => import('views/pokemon/list/PokemonList')),
  detail: lazy(() => import('views/pokemon/detail/PokemonDetail')),
};

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/pokemon`
    },
    {
      path: `${appRoot}/pokemon`,
      component: pokemon.list,
      label: 'Pokemón',
      icon: 'sun'
    },
    {
      path: `${appRoot}/pokemon-detail`,
      component: pokemon.detail,
      label: 'Pokemón detail',
      hideInMenu: true,
    }
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
