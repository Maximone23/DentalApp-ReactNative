import React from 'react';
import {  View } from 'react-native';
import styled from 'styled-components/native';


export const Appointment = ({user, diagnosis, active, time}) => {
    return (
      <GroupItem >
        <Avatar source={{uri: user.avatar}}/>
          <View style={{flex: 1}}>
              <FullName>{user.fullname}</FullName>
              <GreyText>{diagnosis}</GreyText>
          </View>
          <GroupDate active={active}>{time}</GroupDate>
      </GroupItem>
    )
    
};


Appointment.defaultProps = {
    groupTitle: 'Untitled',
    items: []
}

const GroupDate = styled.Text`
  background: ${props => props.active ? '#2A86FF' : '#E9F5FF'};
  color: ${props => props.active ? '#FFF' : '#4294ff'};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
`;

const GreyText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

const GroupItem = styled.TouchableOpacity`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
  padding: 20px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;



const FullName = styled.Text`
font-weight: 600;
font-size: 16px;
`;
