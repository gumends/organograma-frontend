import { Box, Sheet, Typography } from "@mui/joy";
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
                    sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        sx={{ fontWeight: 'lg', mb: 1 }}
                    >
                        {id}
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        Make sure to use <code>aria-labelledby</code> on the modal dialog with an
                        optional <code>aria-describedby</code> attribute.
                    </Typography>
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