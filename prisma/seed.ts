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

    /* const Manuel = await prisma.client.upsert({
         where: { ci: 77888 },
         update: {},
         create: {
             ci: 97388,
             fullname: 'Manuel Carrillo',
             address: 'la villa',
             phone: '7455664',
             status: 1,
             motos: {
                 create: {
                     marca:'Honda',
                     modelo: 'CB20',
                     placa: '497DSA',
                     anio:2020,
                     color:'Rpja',
                     motor:'200',
                     peso:244,
                     kilometraje:1150,
                     estado:'1',
                     fecha_compra: new Date().toISOString(),
                     precio_compra: 17000,
                     sucrusal_id: 1,
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
     });*/

    const Jusalian = await prisma.client.upsert({
        where: { ci: 97388 },
        update: {},
        create: {
            ci: 97388,
            fullname: 'Julian Albarez',
            address: 'la lujan',
            phone: '7245234',
            status: 1,
            motos: {
                create: {
                    marca: 'Honda',
                    modelo: 'XR200',
                    placa: '197DSA',
                    anio: 2019,
                    color: 'Negro',
                    motor: '160',
                    peso: 254,
                    kilometraje: 5150,
                    estado: '1',
                    fecha_compra: new Date().toISOString(),
                    precio_compra: 14000,
                    dispositivo: {
                        create: {
                            serial: "7889999",
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
                        }
                    }

                },
            }
        }
    })


    const Aldo = await prisma.client.upsert({
        where: { ci: 66388 },
        update: {},
        create: {
            ci: 66388,
            fullname: 'Aldo Peña',
            address: 'av beni',
            phone: '7310234',
            status: 1,
            motos: {
                create: {
                    marca: 'Hero',
                    modelo: 'Pulsar200',
                    placa: '427DSA',
                    anio: 2019,
                    color: 'Blanca',
                    motor: '150',
                    peso: 304,
                    kilometraje: 2150,
                    estado: '1',
                    fecha_compra: new Date().toISOString(),
                    precio_compra: 21000,
                    dispositivo: {
                        create: {
                            serial: "5144545",
                            positions: {
                                create: [
                                    {

                                        latitude: -17.752086,
                                        longitude: -63.162889
                                    },

                                    {

                                        latitude: -17.749882,
                                        longitude: -63.180113
                                    },

                                ]
                            },
                        },

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