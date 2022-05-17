import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {Animated} from 'react-native';
import {Input, Icon, Layout, Button, Text} from '@ui-kitten/components';
import {Calendar} from 'react-native-calendars';
import {TouchableOpacity, FlatList} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled(Layout)`
  flex: 1;
`;
export const Header = styled(Layout)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  padding-horizontal: 25px;
  height: 10%;
  width: ${width}px;
  height: ${height * 0.1}px;
  elevation: 5;
  background-color: ${({theme}: {theme: string}) => theme};
`;
export const MonthView = styled(TouchableOpacity)`
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 4px;
  margin: 5px;
  height: 90%;
  border-radius: 10px;
`;
export const Month = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-right: 10px;
`;
export const CalendarView = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${width}px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
`;
export const StyledIcon = styled(Icon)`
  height: 25px;
  width: 25px;
`;
export const InputField = styled(Input)`
  width: ${width * 0.8}px;
  height: ${height * 0.05}px;
  border-radius: 5px;
  padding-horizontal: 10px;
`;

export const TaskCalendar = styled(Calendar)`
  width: ${width}px;
  z-index: 1;
`;
export const ItemSeparator = styled(Layout)`
  height: 10px;
  width: ${width}px;
`;
export const TaskList = styled(FlatList)`
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const FloatingButton = styled(Button)`
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  elevation: 5;
`;
