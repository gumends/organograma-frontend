import { Box, Sheet, Table, Typography } from "@mui/joy";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { useEffect, useState } from "react";
import prisma from '@/lib/prisma';
import LinhaDireita from "./ContainerDireita";
import LinhaEsquerda from "./ContainerEsquerda";

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
    unidades?: Unidades[];
}

interface CardConjuntoProps {
    texto: string;
    onClick: () => void;
    bgcolor: string;
    color: string;
    subtipos?: Subtipos[];
}

export default function CardConjunto(props: CardConjuntoProps) {

    const [dados, setDados] = useState<Unidades[]>([]);
    const [tituloSubtipo, setTituloSubtipo] = useState<string>("");
    const [fundoSubtipo, setFundoSubtipo] = useState<string>("");
    const [cor, setCor] = useState<string>("");
    const [corSubtipo, setCorSubtipo] = useState<string>("");

    useEffect(() => {
    }, [])

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
                    sx={{ width: "100%", height: "50%", borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Table>
                            <thead style={{ border: "0px solid black" }}>
                                <tr>
                                    <th
                                        colSpan={2}
                                        style={{
                                            backgroundColor: "transparent",
                                            textAlign: "center",
                                            padding: 0,
                                            width: "200%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: 70,
                                            border: "0px solid black",
                                        }}
                                    >
                                        <Sheet
                                            sx={{
                                                width: 200,
                                                height: 70,
                                                bgcolor: fundoSubtipo,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                flexDirection: "column"
                                            }}
                                            onClick={() => console.log("clicked")}
                                        >
                                            <Typography level="h4" sx={{ fontSize: "17px", color: corSubtipo }}>{tituloSubtipo}</Typography>
                                        </Sheet>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "0px solid black", borderRight: "1px solid black", padding: 0 }}></td>
                                    <td style={{ border: "0px solid black", borderLeft: "1px solid black", padding: 0 }}></td>
                                </tr>
                                {dados && dados.length > 0 ? dados.reduce((acc: any[], item: any, index: any) => {
                                    if (index % 2 === 0) {
                                        acc.push([item]);
                                    } else {
                                        acc[acc.length - 1].push(item);
                                    }
                                    return acc;
                                }, []).map((pair, index) => (
                                    <tr key={index}>
                                        {pair.map((item: any, colIndex: any) => (
                                            <td
                                                key={colIndex}
                                                style={{
                                                    border: "0px solid black",
                                                    borderRight: (colIndex === 0 && pair.length > 1) ? "1px solid black" : "0px solid black",
                                                    borderLeft: (colIndex === 1) ? "1px solid black" : "0px solid black",
                                                    padding: "10px 0px"
                                                }}
                                            >
                                                {item.ordem % 2 ? (
                                                    <LinhaEsquerda
                                                    unico={item.subtipos && item.subtipos.length > 0 ? false : true}
                                                    bgcolor={item.fundo}
                                                    color={item.cor}
                                                    texto={item.nome}
                                                    subtipos={item.subtipos}
                                                />
                                                ) : (
                                                    <LinhaDireita
                                                    unico={item.subtipos && item.subtipos.length > 0 ? false : true}
                                                    bgcolor={item.fundo}
                                                    color={item.cor}
                                                    texto={item.nome}
                                                    subtipos={item.subtipos}
                                                />
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                )) : null}
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
                    props.subtipos?.map((subtipo) => (
                        <Sheet key={subtipo.id} 
                        onClick={() => { 
                            setOpen(true); 
                            setTituloSubtipo(subtipo.nome); 
                            setFundoSubtipo(props.bgcolor); 
                            setCor(subtipo.cor);
                            setDados(subtipo.unidades ? subtipo.unidades : []);
                            setCorSubtipo(props.color);
                        }}
                            sx={{
                                cursor: "pointer",
                                width: 300,
                                height: '100%',
                                textAlign: "center",
                                color: subtipo.cor,
                                bgcolor: subtipo.fundo,
                                borderBottom: "2px solid #fff",
                                p: 0.5
                            }}>
                            <Typography level="h4">{subtipo.nome.toUpperCase()}</Typography>
                            <Typography level="body-sm">{subtipo.descricao}</Typography>
                        </Sheet>
                    ))
                }
            </Box>
        </>

    );
}