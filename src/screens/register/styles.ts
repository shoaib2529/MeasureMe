import styled from 'styled-components/native';
import {Button, Text, Layout} from '@ui-kitten/components';

export const Container = styled(Layout)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Label = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;
export const InputContainer = styled(Layout)`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 90%;
`;
export const Error = styled(Text)`
  font-size: 12px;
  font-weight: 400;
`;
export const SubmitButton = styled(Button)`
  width: 50%;
  margin-top: 20px;
`;
export const Info = styled(Layout)`
  margin-top: 20px;
`;
