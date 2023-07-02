import React, { useState, useEffect } from 'react';
import gryffindorImage from './Images/gryffindor.jpeg';
import ravenclawImage from './Images/ravenclaw.webp';
import slytherinImage from './Images/slytherin.png';
import hufflepuffImage from './Images/hufflepuff.jpg';

import { Container, GroupImage, GroupName, GroupWrapper } from './randomly.styled.jsx';

const StudentGroups = () => {
  const [students, setStudents] = useState(['სალომე', 'ანი', 'მარი', 'თორნიკე', 'სოფია']);
  const [groups, setGroups] = useState([[], [], [], []]);

  useEffect(() => {
    if (students.length === 0) {
      assignGroupRandomly();
    }
  }, [students.length]);

  const assignGroupRandomly = () => {
    if (students.length === 0) return;

    const shuffledStudents = shuffleArray([...students]);
    const updatedGroups = [[], [], [], []];

    shuffledStudents.forEach((student, index) => {
      const randomGroupIndex = index % updatedGroups.length;
      updatedGroups[randomGroupIndex].push(student);
    });

    setGroups(updatedGroups);
    setStudents([]);
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

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <Container>
      <div>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
        {students.length > 0 && (
          <button onClick={assignGroupRandomly}>გამანაწილებელი ქუდი</button>
        )}
      </div>
      <div>{renderGroups()}</div>
    </Container>
  );
};

export default StudentGroups;
