import { Box, Sheet, Table, Typography } from "@mui/joy";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { useState } from "react";

interface Unidades {
    id: number;
    subTitulo: string;
    descricao: string;
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
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="plain"
                    sx={{ width: 900, height: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Table>
                            <thead style={{ border: "0px solid black",  }}>
                                <th
                                    colSpan={4}
                                    style={{
                                        textAlign: "center",
                                        padding: 0,
                                        width: "400%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 70,
                                        border: "0px solid black",
                                        marginBottom: 30
                                    }}>
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
                                </th>
                            </thead>
                            <tbody>
                                <tr style={{ height: 80, borderBottom: "1px solid black" }}>
                                    <td>
                                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                <Sheet sx={{ width: 300, height: 30, cursor: "pointer", bgcolor: props.bgcolor, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography level="h4" sx={{ fontSize: "17px", color: props.color }}>{props.texto}</Typography>
                </Sheet>
                {
                    props.unidades?.map((unidade) => (
                        <Sheet key={unidade.id} onClick={() => { setOpen(true); setId(unidade.id) }} sx={{ cursor: "pointer", width: 300, height: 60, textAlign: "center" }}>
                            <Typography level="h4">{unidade.subTitulo}</Typography>
                            <Typography level="body-sm">{unidade.descricao}</Typography>
                        </Sheet>
                    ))
                }
            </Box>
        </>

    );
}