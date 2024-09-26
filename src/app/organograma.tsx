'use client';

import LinhaDireita from "@/components/ContainerDireita";
import LinhaEsquerda from "@/components/ContainerEsquerda";
import { Box, Divider, Sheet, Table, Typography } from "@mui/joy";
import { use, useEffect, useState } from "react";

const teste = [
  {
    unico: true,
    bgcolor: "rgb(11, 50, 151)",
    color: "white",
    texto: "teste",
    unidades: [],
    lado: true
  },
  {
    unico: false,
    bgcolor: "rgb(11, 50, 151)",
    color: "white",
    texto: "teste",
    unidades: [
      {
        id: 1,
        subTitulo: "teste",
        descricao: "teste"
      },
      {
        id: 4,
        subTitulo: "HHHH",
        descricao: "HHHH"
      }
    ],
    lado: false
  },
  {
    unico: false,
    bgcolor: "rgb(11, 50, 151)",
    color: "#fff",
    texto: "tewadste",
    unidades: [
      {
        id: 1,
        subTitulo: "teste",
        descricao: "teste"
      },
      {
        id: 4,
        subTitulo: "HHHH",
        descricao: "HHHH"
      }
    ],
    lado: true
  },
  {
    unico: true,
    bgcolor: "rgb(18, 50, 151)",
    color: "#fff",
    texto: "ATIC",
    unidades: [
    ],
    lado: false
  }
]
export default function Home(props: any) {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    console.log(props.data)
    setDados(props.data)
  }, [])

  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex" }}>
      <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
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
                    bgcolor: "rgb(11, 50, 151)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                  onClick={() => console.log("clicked")}
                >
                  <Typography level="h4" sx={{ fontSize: "17px", color: "white" }}>SECRETÁRIO</Typography>
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
                      <LinhaDireita
                        unico={item.subtipos && item.subtipos.length > 0 ? false : true}
                        bgcolor={item.fundo}
                        color={item.cor}
                        texto={item.nome}
                        unidades={item.subtipos}
                      />
                    ) : (
                      <LinhaEsquerda
                        unico={item.subtipos && item.subtipos.length > 0 ? false : true}
                        bgcolor={item.fundo}
                        color={item.cor}
                        texto={item.nome}
                        unidades={item.subtipos}
                      />
                    )}
                  </td>
                ))}
              </tr>
            )) : null}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
}
