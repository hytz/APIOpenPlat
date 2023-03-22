import '@umijs/max';
import { Modal } from 'antd';
import React from 'react';
import {ProTable} from "@ant-design/pro-table/lib";
import {ProColumns} from "@ant-design/pro-components";
export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;
export type Props = {
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.InterfaceInfo>[];
};
const CreateModal: React.FC<Props> = (props) => {
  const {visible, columns, onCancel,onSubmit} = props;
  return (
    <Modal visible={ visible } footer={null} onCancel={()=>onCancel?.()} >
      <ProTable
        type="form"
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value)
        }}
  />
    </Modal>
  );
};
export default CreateModal;
