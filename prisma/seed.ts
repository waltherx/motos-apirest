import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

async function main() {

    const adminClient = {
        ci: 1234,
        fullname: 'admin',
        address: '-',
        phone: '',
    }


    const vianClient = {
        ci: 12345,
        fullname: 'vian1',
        address: '-',
        phone: '',
    }

    const Admin = await prisma.role.upsert({
        where: { nombre: 'Admin' },
        update: {},
        create: {
            nombre: 'Admin',
            descripcion: 'El administrador tiene poderes amplios para supervisar, mantener y asegurar el correcto funcionamiento del sistema, gestionando usuarios, seguridad, actualizaciones y resolviendo problemas técnicos, además de tomar decisiones cruciales para el sistema o la organización.',
            users: {
                create: [{
                    username: 'admin',
                    //realname: 'admin',

                    password: bcrypt.hashSync('11223344', 8),
                    email: 'admin@prisma.io',
                    cliente: {
                        create: adminClient
                    },
                    status: 'ACTIVO',
                    isAdmin: true

                },
                {
                    username: 'vian1',
                    //realname: 'Vian Honda',
                    cliente: {
                        create: vianClient
                    },
                    password: bcrypt.hashSync('11223344', 8),
                    email: 'vian@honda.com',
                    status: 'ACTIVO',
                    isAdmin: true
                },
                ]
            }
        }
    })


    const D1 = await prisma.dispositivo.upsert({
        where: { id: 1 },
        update: {},
        create: {
            serial: "867959034960467",
            chipgsm: "7312254",
            estado: 'ENUSO',
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
    })

    const eduClient = {
        ci: 123456,
        fullname: 'eduardo',
        address: '-',
        phone: '',
    }

    const Mensa = await prisma.role.upsert({
        where: { nombre: 'Mensajero' },
        update: {},
        create: {
            nombre: 'Mensajero',
            descripcion: '',
            users: {
                create: [{
                    username: 'eduardo',
                    //realname: 'eduardo',
                    password: bcrypt.hashSync('11223344', 8),
                    email: 'Edu@prisma.io',
                    cliente: {
                        create: eduClient
                    },
                    status: 'ACTIVO',

                }
                ]
            }
        }
    })

    const sucrusales = [
        {
            nombre: 'SUCURSAL HONDA 3ER ANILLO CRISTO REDENTOR',
            direccion: 'Cristo redentor 3er Anillo',
            latitude: -17.7581273,
            longitude: -63.1790394
        },
        {
            nombre: 'SUCURSAL HONDA 6TO ANILLO CRISTO REDENTOR',
            direccion: 'Cristo redentor 6to anillo',
            latitude: -17.7415412,
            longitude: -63.1711989
        },
        {
            nombre: 'SUCURSAL HONDA 4TO ANILLO VENTURA',
            direccion: '4to anillo zona Ventura Mall',
            latitude: -17.7534277,
            longitude: -63.1962728
        },
        {
            nombre: 'SUCURSAL HONDA 2DO ANILLO AV. BRASIL',
            direccion: '2do anillo Av. Brasil',
            latitude: -17.7903577,
            longitude: -63.1655984
        },
        {
            nombre: 'SUCURSAL HONDA URUBÓ',
            direccion: 'Carretera Santa Cruz camino a Porongo',
            latitude: -17.7630691,
            longitude: -63.2357575
        },
        {
            nombre: 'SUCURSAL HONDA 3ER ANILLO INDANA',
            direccion: 'Av. Roque Aguilera 3er anillo frente comercial Indana',
            latitude: -17.7972818,
            longitude: -63.2091615
        }
    ]
    const sucrus = prisma.sucrusal.createMany(
        {
            data: sucrusales
        }
    );

    sucrus.then((sa) => {
        console.log('sucrusales creadas..', sa);
    }).catch((e) => {
        console.error(e);
    })

    /*
        const Eduardo = await prisma.client.upsert({
            where: { ci: 97388 },
            update: {},
            create: {
                ci: 97388,
                fullname: 'Eduardo',
                address: 'la lujan',
                phone: '7245234',
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
                        dispositivos: {
                            create: {
                                dispositivo_id: D1.id
                            }
                        }
                    }
                },
            }
        })*/
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