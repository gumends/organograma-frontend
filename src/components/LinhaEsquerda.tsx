import { Box, Divider, Sheet, Typography } from "@mui/joy";

export default function LinhaEsquerda() {
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', height: 50, width: "50.1%", }}>
                <Box sx={{ height: "100%", display: 'flex', justifyContent: 'end', flexDirection: 'column' }}>
                    <Divider orientation="vertical" sx={{ border: '1px solid black', height: "50%" }} />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Divider orientation="horizontal" sx={{ border: '1px solid black', width: "100%" }} />
                </Box>
                <Box sx={{ height: "100%", display: 'flex', justifyContent: 'end', flexDirection: 'column' }}>
                    <Divider orientation="vertical" sx={{ border: '1px solid black', height: "100%" }} />
                </Box>
            </Box>
        </Box>

    )
}