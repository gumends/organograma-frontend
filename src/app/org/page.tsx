'use server'
import prisma from '@/lib/prisma';
import Org from './org';

export default async function Page() {
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
    return (
        <Org data={data} />
    );
}