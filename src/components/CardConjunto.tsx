import { Box, Sheet, Table, Typography } from "@mui/joy";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { useState } from "react";

interface Unidades {
    id: number;
    nome: string;
    descricao: string;
    cor: string;
    fundo: string;
}

interface CardConjuntoProps {
    texto: string;
    onClick: () => void;
    bgcolor: string;
    color: string;
    unidades?: Unidades[];
}

export default function CardConjunto(props: CardConjuntoProps) {

    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);

    return (
        <>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', m: 2, zIndex: 999999999 }}
                
            >
                <Sheet
                    variant="plain"
                    sx={{ width: "100%", height: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Table>
                            <thead style={{ border: "0px solid black", }}>
                                <th
                                    colSpan={2}
                                    style={{
                                        textAlign: "center",
                                        padding: 0,
                                        width: "200%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 100,
                                        border: "0px solid black",
                                        flexDirection: "column",
                                    }}>
                                    <Sheet
                                        sx={{
                                            width: 200,
                                            height: 70,
                                            bgcolor: "rgb(11, 50, 151)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column"
                                        }}
                                    >
                                        <Typography level="h4" sx={{ fontSize: "17px", color: "white" }}>{id}</Typography>
                                    </Sheet>
                                    <Box width={"80%"} sx={{ height: 40, display: "flex", borderBottom: "2px solid black", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                        <Box style={{ border: "0px solid black", height: "100%", borderRight: "2px solid black", padding: 0 }}></Box>
                                        <Box style={{ border: "0px solid black", height: "100%", borderLeft: "2px solid black", padding: 0 }}></Box>
                                    </Box>
                                </th>
                            </thead>
                            <tbody>
                                <tr style={{ height: 110, borderBottom: "1px solid black" }}>
                                    <td style={{ padding: '0px' }}>
                                        <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                                            <Box sx={{ height: 40 }}>
                                                <Box sx={{ width: "50%", height: "100%", borderRight: "2px solid black", display: "flex", justifyContent: "center", alignItems: "center" }}></Box>
                                                <Box sx={{ width: "50%", borderLeft: "2px solid black", display: "flex", justifyContent: "center", alignItems: "center" }}></Box>
                                            </Box>
                                            <Sheet
                                                sx={{
                                                    width: 200,
                                                    height: 70,
                                                    cursor: "pointer",
                                                    bgcolor: "rgb(11, 50, 151)",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    flexDirection: "column"
                                                }}
                                                onClick={() => console.log("clicked")}
                                            >
                                                <Typography level="h4" sx={{ fontSize: "17px", color: "white" }}>Teste</Typography>
                                            </Sheet>

                                        </Box>
                                    </td>
                                    <td>
                                        <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                                            <Box sx={{ height: 40 }}>
                                                <Box sx={{ width: "50%", height: "100%", borderRight: "2px solid black", display: "flex", justifyContent: "center", alignItems: "center" }}></Box>
                                                <Box sx={{ width: "50%", borderLeft: "2px solid black", display: "flex", justifyContent: "center", alignItems: "center" }}></Box>
                                            </Box>
                                            <Sheet
                                                sx={{
                                                    width: 200,
                                                    height: 70,
                                                    cursor: "pointer",
                                                    bgcolor: "rgb(11, 50, 151)",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    flexDirection: "column"
                                                }}
                                                onClick={() => console.log("clicked")}
                                            >
                                                <Typography level="h4" sx={{ fontSize: "17px", color: "white" }}>Teste</Typography>
                                            </Sheet>
                                        </Box>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Box>
                </Sheet>
            </Modal>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
                <Sheet sx={{ borderBottom: "2px solid #fff", width: 300, height: 30, bgcolor: props.bgcolor, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography level="h4" sx={{ color: props.color, fontWeight: "bold" }}>{props.texto}</Typography>
                </Sheet>
                {
                    props.unidades?.map((unidade) => (
                        <Sheet key={unidade.id} onClick={() => { setOpen(true); setId(unidade.id) }} 
                        sx={{ 
                            cursor: "pointer", 
                            width: 300, 
                            height: '100%', 
                            textAlign: "center", 
                            color: unidade.cor, 
                            bgcolor: unidade.fundo,
                            borderBottom: "2px solid #fff",
                            p: 0.5
                             }}>
                            <Typography level="h4">{unidade.nome.toUpperCase()}</Typography>
                            <Typography level="body-sm">{unidade.descricao}</Typography>
                        </Sheet>
                    ))
                }
            </Box>
        </>

    );
}