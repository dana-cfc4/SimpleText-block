import React from 'react';
import './editor.less';

const View = (props) => {
  const { data } = props;

  return (
    <div className={`${data.colorChoices} ${data.formattingOptions}`}>
      {props.data.text}
    </div>
  );
};

export default View;
