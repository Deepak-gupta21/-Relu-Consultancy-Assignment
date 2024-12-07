import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { MoreVert, ThumbUp, Comment, Share } from "@mui/icons-material";

const MainComponent = () => {
  const posts = [
    {
      id: 1,
      userName: "Lara leones",
      userArt: "@thewallart",
      description: "This is the description of post 1",
      imageUrl: "https://plus.unsplash.com/premium_photo-1720004021036-44ff682b69b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 2,
      userName: "User 2",
      userArt: "@thecustomcreater",
      description: "This is the description of post 2",
      imageUrl: "https://images.unsplash.com/photo-1490721742404-99d73e57700b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",
      avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    },
   
  ];

  return (
    <div
      style={{
        width: "55%",
        overflowY: "auto",
        height: "80vh",
        padding: "1%",
        scrollbarWidth: 'none',  
        msOverflowStyle: 'none',  
      }}
    >
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{ width: "90%", margin: "5% auto", padding: "2%" }}
        >
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" justifyContent="space-between">
                <Avatar
                  alt={post.userName}
                  src={post.avatarUrl}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10%",
                    marginRight: 2,
                  }}
                />
                <Box>
                  <Typography variant="body1" color="text.primary">
                    {post.userName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.userArt}
                  </Typography>
                </Box>
              </Box>

              <IconButton>
                <MoreVert />
              </IconButton>
            </Box>

            <Typography variant="body2" color="text.secondary" margin="2% auto">
              {post.description}
            </Typography>

            <CardMedia
              component="img"
              height="400rem"
              image={post.imageUrl}
              alt="User Post"
            />
            <Box display="flex" justifyContent="left" marginTop="3%">
              <IconButton>
                <ThumbUp />
              </IconButton>
              <IconButton>
                <Comment />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MainComponent;
