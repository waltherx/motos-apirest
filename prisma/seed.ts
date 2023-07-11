import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    /*const Admin = await prisma.role.upsert({
        where: { name: 'Admin' },
        update: {},
        create: {
            name: 'Admin',
            sequence: '1',
            memo: '2',
            status: 1,
            users: {
                create: {
                    username: 'admin',
                    realname: 'admin',
                    password: '123',
                    email: 'admin@prisma.io',
                    phone: '969',
                    status: 1,
                    created_at: '2023-07-11 01:53:30.152'
                },
            }
        }
    })*/

    const cliente = await prisma.client.upsert({
        where: { ci: 97888 },
        update: {},
        create: {
            ci: 97388,
            fullname: 'Manuel Carrillo',
            address: 'la villa',
            phone: '7455664',
            status: 1,
            motos: {
                create: {
                    modelo: 'xr200',
                    placa: '897DSA',
                    fecha_compra: new Date().toISOString(),
                    precio_compra: 14000,
                    positions: {
                        create: [
                            {
                                
                                latitude: -17.752086,
                                longitude: -63.162889
                            },
                            {
                                
                                latitude: -17.750179,
                                longitude: -63.173257
                            },
                            {
                                
                                latitude: -17.749882,
                                longitude: -63.180113
                            },
                            {
                                
                                latitude: -17.750507,
                                longitude: -63.186344
                            },
                        ]
                    }
                },
            }
        }
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })