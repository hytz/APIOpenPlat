import '@umijs/max';
import { Modal } from 'antd';
import React, {useEffect, useRef} from 'react';
import {ProTable} from "@ant-design/pro-table/lib";
import {ProColumns, ProFormInstance} from "@ant-design/pro-components";
export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;
export type Props = {
  values: API.InterfaceInfo;
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.InterfaceInfo>[];
};
const UpdateModal: React.FC<Props> = (props) => {
  const {values, visible, columns, onCancel,onSubmit} = props;

  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  }, [values])

  return (
    <Modal visible={ visible } footer={null} onCancel={()=>onCancel?.()} >
      <ProTable
        type="form"
        columns={columns}
        formRef={formRef}
        onSubmit={async (value) => {
          onSubmit?.(value)
        }}
  />
    </Modal>
  );
};
export default UpdateModal;
