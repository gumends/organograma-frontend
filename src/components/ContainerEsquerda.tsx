import { Box, Divider, Sheet, Typography } from "@mui/joy";
import CardConjunto from "./CardConjunto";
import CardUnico from "./CardUnico";

interface Unidades {
    id: number;
    cor: string;
    descricao: string;
    fundo: string;
    nome: string;
    ordem: number;
}

interface Subtipos {
    id: number;
    nome: string;
    descricao: string;
    cor: string;
    fundo: string;
    unidades: Unidades[];
}
interface CardConjuntoProps {
    unico: boolean;
    bgcolor: string;
    color: string;
    texto: string;
    subtipos?: Subtipos[]
}

export default function LinhaEsquerda(props: CardConjuntoProps) {
    return (
        <Box>
            <Box sx={{ width: "100%", display: "flex", alignItems: "start", flexDirection: "column" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', height: 20, width: "100%" }}>
                    <Box sx={{ height: "100%", width: "50%" }}></Box>
                    <Box sx={{ height: "100%", width: "50%", borderLeft: "2px solid black", borderTop: "2px solid black" }}> </Box>
                </Box>
                {
                    props.unico ?
                        <CardUnico
                            bgcolor={props.bgcolor}
                            color={props.color}
                            texto={props.texto}
                        /> :
                        <CardConjunto
                            subtipos={props.subtipos}
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