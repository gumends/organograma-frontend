'use client';

import { Box, Divider, Sheet, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Box sx={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ width: 900, height: "100%", display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <Sheet sx={{ width: 200, height: 70, cursor: "pointer", bgcolor: "rgb(11, 50, 151)", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => console.log("clicked")}>
          <Typography level="h4" sx={{ fontSize: "17px", color: "white" }}>SECRETÁRIO</Typography>
        </Sheet>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ width: '50.1%', textAlign: "end", borderRight: '2px black solid', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
            <Sheet sx={{ display: 'inline-block', pr: 4, bgcolor: 'red' }}>
              <Typography>SECRETARIO ADJ</Typography>
            </Sheet>
            <Box>
              <Divider orientation="horizontal" sx={{ border: '1px solid black', width: 30 }} />
            </Box>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: "end" }}>
            <Box sx={{ width: '50.10%', borderLeft: '2px black solid', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
              <Box>
                <Divider orientation="horizontal" sx={{ border: '1px solid black', width: 30 }} />
              </Box>
              <Sheet sx={{ display: 'inline-block', pl: 4, bgcolor: 'red' }}>
                <Typography>SECRETARIO ADJ</Typography>
              </Sheet>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
