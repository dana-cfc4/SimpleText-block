import View from './View';
import Edit from './Edit';

import presentationSVG from '@plone/volto/icons/presentation.svg';

export default (config) => {
  const simpletextblockConfig = {
    id: 'SimpleTextBlock',
    title: 'Simple Text View',
    icon: presentationSVG,
    group: 'common',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.SimpleTextBlock = simpletextblockConfig;

  return config;
};
