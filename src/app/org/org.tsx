'use client'
import { Tipo } from "@prisma/client";
import { Tree, TreeNode } from "react-organizational-chart";

export default function Org({ data }: { data: Tipo[] }) {
    return (<>
        <Tree label={<div>Root</div>}>
            {data && data.length > 0 && data.map((item, index) => (
                <TreeNode
                    key={index}
                    label={<div>{item.nome}</div>}
                />
            ))}
        </Tree>
    </>);
}