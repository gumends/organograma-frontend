'use server'
import prisma from '@/lib/prisma';

export default async function Teste() {
    const data = await prisma.tipo.findMany({
        orderBy: { ordem: 'asc' },
        include: {
            subtipos: {
                orderBy: { ordem: 'asc' },
                include: {
                    unidades: {
                        orderBy: { ordem: 'asc' },
                        include: {
                            subunidades: {
                                orderBy: { ordem: 'asc' },
                            }
                        }
                    }
                }
            }
        }
    });
    console.log(data);
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}