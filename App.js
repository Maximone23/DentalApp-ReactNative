import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import {Appointment} from './components/Appointment';
import SectionTitle from './components/SectionTitle';



const DATA = [
  {
    title: "8 апреля",
    data: [
      {
        active: true,
        time: '15:25',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Вася Пупкин',
          avatar: 'https://www.ipg-potsdam.de/wp-content/uploads/2017/07/defaultUser.jpg'
        }
      },
      {
        active: false,
        time: '17:30',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Елена Иванова',
          avatar: 'https://im0-tub-ru.yandex.net/i?id=31a691be1df0c918369ba39c62dd775c&n=13'
        }
      },
    ]
  },
  {
    title: "9 апреля",
    data: [
      {
        active: false,
        time: '12:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Егор Осипенко',
          avatar: 'https://www.ipg-potsdam.de/wp-content/uploads/2017/07/defaultUser.jpg'
        }
      },
      {
        active: false,
        time: '13:45',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Ирина Иванова',
          avatar: 'https://im0-tub-ru.yandex.net/i?id=31a691be1df0c918369ba39c62dd775c&n=13'
        }
      },
      {
        active: false,
        time: '15:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Олег Смирнов',
          avatar: 'https://www.ipg-potsdam.de/wp-content/uploads/2017/07/defaultUser.jpg'
        }
      },
      {
        active: false,
        time: '16:15',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Богдан Степанов',
          avatar: 'https://im0-tub-ru.yandex.net/i?id=31a691be1df0c918369ba39c62dd775c&n=13'
        }
      },
    ]
  },
  {
    title: "10 апреля",
    data: [
      {
        active: false,
        time: '12:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Егор Осипенко',
          avatar: 'https://www.ipg-potsdam.de/wp-content/uploads/2017/07/defaultUser.jpg'
        }
      },
      {
        active: false,
        time: '13:45',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Ирина Иванова',
          avatar: 'https://im0-tub-ru.yandex.net/i?id=31a691be1df0c918369ba39c62dd775c&n=13'
        }
      },
    ]
  },
  {
    title: "11 апреля",
    data: [
      {
        active: false,
        time: '12:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Егор Осипенко',
          avatar: 'https://www.ipg-potsdam.de/wp-content/uploads/2017/07/defaultUser.jpg'
        }
      },
      {
        active: false,
        time: '13:45',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Ирина Иванова',
          avatar: 'https://im0-tub-ru.yandex.net/i?id=31a691be1df0c918369ba39c62dd775c&n=13'
        }
      },
    ]
  }
];


export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment  {...item}/>}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={32} color="white" />
      </PlusButton>
    </Container>
  );
}




const PlusButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 64px;
  height: 64px;
  right: 25px;
  bottom: 25px
  border-radius: 50px;
  background: #2a86ff;
  shadow-color: #2a86ff;
  shadow-opacity: 0.9;
  shadow-radius: 3;
  elevation: 5;  
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;