'use server'

import prisma from '@/lib/prisma';
import Organograma from '@/app/organograma';

export default async function page() {
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
        <Organograma data={data}/>
    );
}