// ClassMembersTable.js
import React from 'react';
import './ClassMembersTable.css';

const ClassMembersTable = ({ members }) => {
    return (
        <div className="table-container">
            <table className="members-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th>Gender</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.age}</td>
                            <td>{member.class}</td>
                            <td>{member.gender}</td>
                            <td>{member.mark}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassMembersTable;

