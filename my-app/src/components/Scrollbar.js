import React from "react";
import { Box } from "@mui/material";

const Scrollbar = () => {
  const items = [
    {
      id: 1,
      userName: "Dyna",
      storeName: "@Alyson",
      bgImage:
        "https://media.istockphoto.com/id/1944677029/photo/family-playing-at-water-park-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=OIY7xXMONihubOTTGfAfhrBU5sQLTILnzofB3NT1Ytw=",
      icon: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      userName: "John",
      storeName: "@TechieStore",
      bgImage:
        "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fHww",
      icon: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      userName: "Ella",
      storeName: "@GardenDelight",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1720004021036-44ff682b69b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",
      icon: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      userName: "Mike",
      storeName: "@FitnessHut",
      bgImage:
        "https://images.unsplash.com/photo-1490721742404-99d73e57700b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",
      icon: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      userName: "Sophia",
      storeName: "@TravelersHub",
      bgImage:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      icon: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  return (
<Box sx={{ display: "flex", flexDirection:"column",width: "25%",}}>

  <Box sx={{ display: "flex", justifyContent: "left", gap: "6%", margin: "5%" }}>
    <Box sx={{ fontSize: "1em", fontWeight: "bold" }}>Artists</  Box>
    <Box sx={{ fontSize:"1em"}}>Photographers</Box>
  </Box>
  
  <Box
    sx={{
      flex: 1,
      overflowY: "auto",
      height: "80vh",
      padding: "16px",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >

      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            backgroundImage: `linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.7)), url(${item.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid #ddd",
            marginBottom: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "35%",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              width: "100%",
              padding: "0 8px",
              gap: "10px",
              margin: "1% 1% 1% 11%",
            }}
          >
            <Box>
              <img
                src={item.icon}
                alt="Icon"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10%",
                  border: "2px solid white",
                }} />
            </Box>
            <Box
              sx={{
                textAlign: "left",
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ fontWeight: "bold" }}>{item.userName}</Box>
              <Box>{item.storeName}</Box>
            </Box>
          </Box>
        </Box>
      ))}
  </Box>

  

</Box>
  );
};

export default Scrollbar;
