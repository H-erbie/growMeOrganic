import React, { useState } from "react";
import { Typography, IconButton, Collapse } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import departments, {Department} from "../lib/departments";


interface ExpandedState {
  [department: string]: boolean; 
}
const DepartmentTree: React.FC = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  
  const handleExpandClick = (department: string) => {
    setExpanded({ ...expanded, [department]: !expanded[department] });
  };

  const renderDepartment = (department: Department) => (
    <div key={department.department}>
      {" "}
      <Typography variant="body1">
        {department.department}
        <IconButton
  onClick={() => handleExpandClick(department.department)}
  aria-expanded={expanded[department.department]}
  aria-label="expand department"
>
  {expanded[department.department] ? <ExpandLess /> : <ExpandMore />}
</IconButton>
      </Typography>
      <Collapse in={expanded[department.department]}>
        {" "}
        {department.sub_departments &&
          department.sub_departments.map((subDepartment) => (
            <Typography variant="body2" key={subDepartment}>
              - {subDepartment} 
            </Typography>
          ))}
      </Collapse>
    </div>
  );

  return (
    <div style={{marginTop: '3rem'}}>
      <Typography variant="h6">Department Tree</Typography>
      {departments.map(renderDepartment)}
    </div>
  );
};

export default DepartmentTree;
