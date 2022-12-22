import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import View from './View';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import schema from './schema';

const Edit = (props) => {
  const { selected, onChangeBlock, block, data } = props;
  return (
    <div>
      <View {...props} />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          block={block}
          title={schema.title}
          schema={schema}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </div>
  );
};

export default Edit;
