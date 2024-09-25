import { Box, Sheet, Typography } from "@mui/joy";

interface CardUnicoProps {
    texto: string;
    bgcolor: string;
    color: string
}

export default function CardUnico(props: CardUnicoProps) {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Sheet sx={{ width: 200, height: 70, bgcolor: props.bgcolor, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography level="h4" sx={{ fontSize: "17px", color: props.color }}>{props.texto}</Typography>
            </Sheet>
        </Box>
    );
}