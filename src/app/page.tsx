'use client';

import LinhaDireita from "@/components/LinhaDireita";
import LinhaEsquerda from "@/components/LinhaEsquerda";
import { Box, Divider, Sheet, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex" }}>
      <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
          <Sheet sx={{ width: 200, height: 70, cursor: "pointer", bgcolor: "rgb(11, 50, 151)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} onClick={() => console.log("clicked")}>
            <Typography level="h4" sx={{ fontSize: "17px", color: "white" }}>SECRETÁRIO</Typography>
          </Sheet>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', width: "100%", justifyContent: "center" }}>
          <Divider orientation="vertical" sx={{ border: '1px solid black', height: 10 }} />
        </Box>
        <Box>
          <LinhaEsquerda />
          <LinhaDireita />
        </Box>
      </Box>
    </Box>
  );
}
