import React, { useState } from 'react';
import ClassMembersTable from './ClassMembersTable';
import ButtonGroup from './ButtonGroup';
// import SearchBar from './SearchBar';
import './App.css';
// import React from 'react';
// import ClassMembersTable from './ClassMembersTable';







const App = () => {
  // Class K16 Members Data
  const classK16Members = [
    { name: "Nguyễn Văn An", age: 18, class: "k16", gender: "Nam", mark: 8.5 },
    { name: "Trần Thị Bình", age: 17, class: "k16", gender: "Nữ", mark: 7.9 },
    { name: "Lê Hồng Cường", age: 19, class: "k16", gender: "Nam", mark: 9.2 },
    { name: "Phạm Thị Dung", age: 18, class: "k16", gender: "Nữ", mark: 9.7 },
    { name: "Hoàng Văn Hiếu", age: 17, class: "k16", gender: "Nam", mark: 8.0 },
    { name: "Nguyễn Thị Lan", age: 18, class: "k16", gender: "Nữ", mark: 7.5 },
    { name: "Vũ Minh Long", age: 17, class: "k16", gender: "Nam", mark: 8.9 },
    { name: "Trần Văn Mạnh", age: 19, class: "k16", gender: "Nam", mark: 9.7 },
    { name: "Phạm Thị Ngọc", age: 18, class: "k16", gender: "Nữ", mark: 9.7 },
    { name: "Lê Minh Quân", age: 17, class: "k16", gender: "Nam", mark: 8.3 }
  ];

  // Class K12 Members Data
  const classK12Members = [
    { name: "Lê Minh Quân", age: 25, class: "k12", gender: "Nam", mark: 8.3 },
    { name: "Nguyễn Thị Hương", age: 30, class: "k12", gender: "Nữ", mark: 9.2 },
    { name: "Trần Văn An", age: 18, class: "k12", gender: "Nam", mark: 7.8 },
    { name: "Phạm Thị Linh", age: 20, class: "k12", gender: "Nữ", mark: 8.6 },
    { name: "Hoàng Văn Nam", age: 19, class: "k12", gender: "Nam", mark: 7.5 },
    { name: "Nguyễn Thị Trang", age: 22, class: "k12", gender: "Nữ", mark: 9.0 },
    { name: "Trần Minh Đức", age: 21, class: "k12", gender: "Nam", mark: 8.2 },
    { name: "Lê Thị Hằng", age: 20, class: "k12", gender: "Nữ", mark: 7.9 },
    { name: "Phạm Văn Tùng", age: 28, class: "k12", gender: "Nam", mark: 9.4 },
    { name: "Trần Thị Mai", age: 26, class: "k12", gender: "Nữ", mark: 8.5 },
    { name: "Nguyễn Văn Đức", age: 23, class: "k12", gender: "Nam", mark: 8.1 },
    { name: "Trần Thị Anh", age: 24, class: "k12", gender: "Nữ", mark: 9.3 },
    { name: "Lê Văn Thắng", age: 25, class: "k12", gender: "Nam", mark: 7.7 },
    { name: "Phạm Thị Nga", age: 27, class: "k12", gender: "Nữ", mark: 8.8 },
    { name: "Hoàng Minh Tú", age: 29, class: "k12", gender: "Nam", mark: 9.4 }
  ];

  // // State to store the search input value and search results
  const [highestMarkK16Result, setHighestMarkK16Result] = useState(null);
  const [highestMarkK12Result, setHighestMarkK12Result] = useState(null);
  const [highestMarkResultAll, setHighestMarkResultAll] = useState(null);





  // Function to find the members with the highest mark in Class K16
  const findHighestMarkK16Members = (classK16Members) => {
    let highestMark = 0;
    let highestMarkK16Members = [];

    classK16Members.forEach((member) => {
      if (member.mark > highestMark) {
        highestMark = member.mark;
        highestMarkK16Members = [member];
      } else if (member.mark === highestMark) {
        highestMarkK16Members.push(member);
      }
    });

    return {
      highestMarkK16Members,
      highestK16Mark: highestMark,
    };
  };

  // Function to handle the click event for the "Highest Mark in Class K16" button
  const handleK16HighestMarkClick = () => {
    const result = findHighestMarkK16Members(classK16Members);
    setHighestMarkK16Result(result);
    setHighestMarkK12Result(null);
    setHighestMarkResultAll(null);
  };


  // Function to find the members with the highest mark in Class K12
  const findHighestMarkK12Members = (classK12Members) => {
    let highestMark = 0;
    let highestMarkK12Members = [];

    classK12Members.forEach((member) => {
      if (member.mark > highestMark) {
        highestMark = member.mark;
        highestMarkK12Members = [member];
      } else if (member.mark === highestMark) {
        highestMarkK12Members.push(member);
      }
    });

    return {
      highestMarkK12Members,
      highestK12Mark: highestMark,
    };
  };

  // Function to handle the click event for the "Highest Mark in Class K12" button
  const handleK12HighestMarkClick = () => {
    const result = findHighestMarkK12Members(classK12Members);
    setHighestMarkK12Result(result);
    setHighestMarkK16Result(null);
    setHighestMarkResultAll(null);
  };

  // Function to find the members with the highest mark in both classes
  const findHighestMarkMembers = (classK12Members, classK16Members) => {
    const allMembers = [...classK12Members, ...classK16Members];

    let highestMark = 0;
    let highestMarkMembers = [];

    allMembers.forEach(member => {
      if (member.mark > highestMark) {
        highestMark = member.mark;
        highestMarkMembers = [member];
      } else if (member.mark === highestMark) {
        highestMarkMembers.push(member);
      }
    });

    return {
      highestMarkMembers,
      highestMark: highestMark
    };
  };

  // Function to handle the click event for the "Highest Mark in Both Classes" button
  const handleBothHighestMarkClick = () => {
    const result = findHighestMarkMembers(classK12Members, classK16Members);
    setHighestMarkResultAll(result);
    setHighestMarkK12Result(null);
    setHighestMarkK16Result(null);

  };




  //Add state variables for the search input value and the selected search option:  
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('all'); // Default value is 'all'
  const [searchK12Results, setSearchK12Results] = useState(null);
  const [searchK16Results, setSearchK16Results] = useState(null);
  const [searchAllResults, setSearchAllResults] = useState(null);


  //Create a function to handle the search button click or press Enter:
  const handleSearch = () => {
    if (selectedOption === 'k12') {
      searchK12Member();
    } else if (selectedOption === 'k16') {
      searchK16Member();
    } else {
      searchAllMember();
    }
  };

  //Create a function to handle the dropdown option change:
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Search in Class K12
  const searchK12Member = () => {
    const searchValueTrimmed = searchValue.trim().toLowerCase();
    const results = [];

    for (let i = 0; i < classK12Members.length; i++) {
      if (classK12Members[i].name.toLowerCase().includes(searchValueTrimmed)) {
        results.push(classK12Members[i]);
      }
    }
    setSearchK12Results(results);
    setSearchK16Results(null);
    setSearchAllResults(null);
  };


  // Search in Class K16
  const searchK16Member = () => {
    const searchValueTrimmed = searchValue.trim().toLowerCase();
    const results = [];

    for (let i = 0; i < classK16Members.length; i++) {
      if (classK16Members[i].name.toLowerCase().includes(searchValueTrimmed)) {
        results.push(classK16Members[i]);
      }
    }

    setSearchK16Results(results);
    setSearchK12Results(null);
    setSearchAllResults(null);
  };
  // Function to search members in both classes by name

  // Search in Class K12
  const searchAllMember = () => {
    const searchValueTrimmed = searchValue.trim().toLowerCase();
    const results = [];

    for (let i = 0; i < classK12Members.length; i++) {
      if (classK12Members[i].name.toLowerCase().includes(searchValueTrimmed)) {
        results.push(classK12Members[i]);
      }
    }


    // Search in Class K16
    for (let i = 0; i < classK16Members.length; i++) {
      if (classK16Members[i].name.toLowerCase().includes(searchValueTrimmed)) {
        results.push(classK16Members[i]);
      }
    }

    setSearchAllResults(results);
    setSearchK16Results(null);
    setSearchK12Results(null);
  };


  return (
    <div>
      <h1>Class K12 Members</h1>
      <ClassMembersTable members={classK12Members} />
      <br />
      <h1>Class K16 Members</h1>
      <ClassMembersTable members={classK16Members} />
      <br />
      <ButtonGroup
        onK16HighestMarkClick={handleK16HighestMarkClick}
        onK12HighestMarkClick={handleK12HighestMarkClick}
        onBothHighestMarkClick={handleBothHighestMarkClick}
      // Add other button handlers if needed
      />

      <br />
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="k12">Search in K12 Class</option>
          <option value="k16">Search in K16 Class</option>
          <option value="all">Search in both classes</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <br />

      <br />
      <div id="resultContainer">
        {highestMarkK16Result && (
          <>
            <h2>Highest Mark in Class K16:</h2>
            <ClassMembersTable members={highestMarkK16Result.highestMarkK16Members} />
            <p>Highest Mark: {highestMarkK16Result.highestK16Mark}</p>
          </>
        )}

        {highestMarkK12Result && (
          <>
            <h2>Highest Mark in Class K12:</h2>
            <ClassMembersTable members={highestMarkK12Result.highestMarkK12Members} />
            <p>Highest Mark: {highestMarkK12Result.highestK12Mark}</p>
          </>
        )}

        {highestMarkResultAll && (
          <>
            <h2>Highest Mark in Both Classes:</h2>
            <ClassMembersTable members={highestMarkResultAll.highestMarkMembers} />
            <p>Highest Mark: {highestMarkResultAll.highestMark}</p>
          </>
        )}
        {searchK12Results && (
          <>
            <h2>Search Results in Class K12:</h2>
            <ClassMembersTable members={searchK12Results} />
          </>
        )}

        {searchK16Results && (
          <>
            <h2>Search Results in Class K16:</h2>
            <ClassMembersTable members={searchK16Results} />
          </>
        )}

        {searchAllResults && (
          <>
            <h2>Search Results in Both Classes:</h2>
            <ClassMembersTable members={searchAllResults} />
          </>
        )}
      </div>
    </div>
  );


};

export default App;
