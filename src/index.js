import SimpleTextBlock from './SimpleTextBlock';

const applyConfig = (config) => {
  return [SimpleTextBlock].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
