import { Box, Sheet, Typography } from "@mui/joy";

interface CardUnicoProps {
    texto: string;
    bgcolor: string;
    color: string
    descricao?: string
}

export default function CardUnico(props: CardUnicoProps) {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", pb: 2 }}>
            <Sheet sx={{ width: 200, minHeight: '60px', bgcolor: props.bgcolor, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                <Typography level="h4" sx={{ fontSize: "14px", color: props.color }}>{props.texto.toLocaleUpperCase()}</Typography>
                <Typography level="body-sm" sx={{ fontSize: "11px", color: props.color }}>{props.descricao}</Typography>
            </Sheet>
        </Box>
    );
}