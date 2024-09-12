import { Box, Divider, Sheet, Typography } from "@mui/joy";

export default function LinhaDireita() {
    return (
        <Box sx={{ width: "100%", display: "flex", alignItems: "end", flexDirection: "column" }}>
            <Box sx={{ width: "50.1%", display: "flex", alignItems: "start", flexDirection: "column" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: 50, width: "50%" }}>
                    <Box sx={{ height: "100%" }}>
                        <Divider orientation="vertical" sx={{ border: '1px solid black', height: "50%" }} />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Divider orientation="horizontal" sx={{ border: '1px solid black', width: "100%" }} />
                    </Box>
                    <Box sx={{ height: "100%", display: 'flex', justifyContent: 'end', flexDirection: 'column' }}>
                        <Divider orientation="vertical" sx={{ border: '1px solid black', height: "50%" }} />
                    </Box>
                </Box>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Sheet sx={{ width: 200, height: 70, cursor: "pointer", bgcolor: "rgb(11, 50, 151)", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => console.log("clicked")}>
                        <Typography level="h4" sx={{ fontSize: "17px", color: "white" }}>SECRETÁRIO</Typography>
                    </Sheet>
                </Box>
            </Box>
        </Box>
    )
}