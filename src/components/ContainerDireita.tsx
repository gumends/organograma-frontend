import { Box, Divider, Sheet, Typography } from "@mui/joy";
import CardUnico from "./CardUnico";
import CardConjunto from "./CardConjunto";
interface Unidades {
    id: number;
    subTitulo: string;
    descricao: string;
}
interface CardConjuntoProps {
    unico: boolean;
    bgcolor: string;
    color: string;
    texto: string;
    unidades?: Unidades[];
}
export default function LinhaDireita( props: CardConjuntoProps ) {
    return (
        <Box sx={{ width: "100%", display: "flex", alignItems: "end", flexDirection: "column" }}>
            <Box sx={{ width: "100%", display: "flex", alignItems: "start", flexDirection: "column" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', height: 20, width: "100%" }}>
                    <Box sx={{ height: "100%", width: "50%", borderRight: "2px solid black", borderTop: "2px solid black" }}></Box>
                    <Box sx={{ height: "100%", width: "50%" }}> </Box>
                </Box>
                {
                    props.unico ?
                        <CardUnico
                            bgcolor={props.bgcolor}
                            color={props.color}
                            texto={props.texto}
                        /> :
                        <CardConjunto
                            unidades={props.unidades}
                            bgcolor={props.bgcolor}
                            color={props.color}
                            texto={props.texto}
                            onClick={() => console.log("clicked")}
                        />
                }
            </Box>
        </Box>
    )
}