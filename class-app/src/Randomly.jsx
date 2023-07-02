import React, { useState } from 'react';
import gryffindorImage from './Images/gryffindor.jpeg';
import ravenclawImage from './Images/ravenclaw.webp';
import slytherinImage from './Images/slytherin.png';
import hufflepuffImage from './Images/hufflepuff.webp';

import {Container, GroupImage, GroupName, GroupWrapper} from './randomly.styled.jsx'


const StudentGroups = () => {
    const [students, setStudents] = useState(['სალომე', 'ანი', 'მარი', 'თორნიკე', 'სოფია']);
    const [groups, setGroups] = useState([[], [], []]);
  
    const assignGroupRandomly = () => {
      if (students.length === 0) return;
  
      const randomStudentIndex = Math.floor(Math.random() * students.length);
      const randomStudent = students[randomStudentIndex];
      const randomGroupIndex = Math.floor(Math.random() * groups.length);
  
      const updatedGroups = [...groups];
      updatedGroups[randomGroupIndex].push(randomStudent);
  
      const updatedStudents = students.filter((_, index) => index !== randomStudentIndex);
  
      setGroups(updatedGroups);
      setStudents(updatedStudents);
    };
  
    const renderGroups = () => {
      const groupNames = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
      const groupImages = [gryffindorImage, ravenclawImage, slytherinImage, hufflepuffImage];
  
      return groupNames.map((groupName, index) => (
        <GroupWrapper key={index}>
        
          <GroupImage src={groupImages[index]} alt={groupName} />
          <GroupName>{groupName}</GroupName>
          <ul>
            {groups[index] &&
              groups[index].map((student, studentIndex) => (
                <li key={studentIndex}>{student}</li>
              ))}
          </ul>
        </GroupWrapper>
      ));
    };
  
    return (
      <Container>
        <div>
          <ul>
            {students.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
          <button onClick={assignGroupRandomly} >
            გამანაწილებელი ქუდი
          </button>
        </div>
        <div>{renderGroups()}</div>
      </Container>
    );
  };
  
  export default StudentGroups;