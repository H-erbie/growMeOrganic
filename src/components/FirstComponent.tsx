import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Post } from "../models/Post";
import { Typography } from "@mui/material";

const FirstComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json() as Post[]; 
      setPosts(data);
    };
  
    fetchPosts();
  }, []);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body" },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Typography variant="h6">Fetched Data</Typography>
      <DataGrid rows={posts} columns={columns} />
    </div>
  );
};

export default FirstComponent;
