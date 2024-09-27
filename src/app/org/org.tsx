'use client'
import { Tipos } from "@/components/CardConjunto";
import { Tree, TreeNode } from "react-organizational-chart";

export default function Org({ data }: { data: Tipos[] }) {
    return (<>
        <Tree label={<div>Root</div>}>
            {data && data.length > 0 && data.map((item, index) => (
                <TreeNode
                    key={index}
                    label={<div>{item.nome}</div>}
                >
                    {item.subtipos && item.subtipos.length > 0 ? item.subtipos.map((subitem, index) => (
                        <TreeNode
                            key={index}
                            label={<div>{subitem.nome.toLocaleUpperCase()}</div>}
                        >
                            {subitem.unidades && subitem.unidades.length > 0 ? subitem.unidades.map((unidade, index) => (
                                <TreeNode
                                    key={index}
                                    label={<div>{unidade.nome.toLocaleUpperCase()}</div>}
                                />
                            )) : null}
                        </TreeNode>
                    )) : null}
                </TreeNode>
            ))}
        </Tree>
    </>);
}